/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
var showControllersOnly = false;
var seriesFilter = "";
var filtersOnlySampleSeries = true;

/*
 * Add header in statistics table to group metrics by category
 * format
 *
 */
function summaryTableHeader(header) {
    var newRow = header.insertRow(-1);
    newRow.className = "tablesorter-no-sort";
    var cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 1;
    cell.innerHTML = "Requests";
    newRow.appendChild(cell);

    cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 3;
    cell.innerHTML = "Executions";
    newRow.appendChild(cell);

    cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 7;
    cell.innerHTML = "Response Times (ms)";
    newRow.appendChild(cell);

    cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 1;
    cell.innerHTML = "Throughput";
    newRow.appendChild(cell);

    cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 2;
    cell.innerHTML = "Network (KB/sec)";
    newRow.appendChild(cell);
}

/*
 * Populates the table identified by id parameter with the specified data and
 * format
 *
 */
function createTable(table, info, formatter, defaultSorts, seriesIndex, headerCreator) {
    var tableRef = table[0];

    // Create header and populate it with data.titles array
    var header = tableRef.createTHead();

    // Call callback is available
    if(headerCreator) {
        headerCreator(header);
    }

    var newRow = header.insertRow(-1);
    for (var index = 0; index < info.titles.length; index++) {
        var cell = document.createElement('th');
        cell.innerHTML = info.titles[index];
        newRow.appendChild(cell);
    }

    var tBody;

    // Create overall body if defined
    if(info.overall){
        tBody = document.createElement('tbody');
        tBody.className = "tablesorter-no-sort";
        tableRef.appendChild(tBody);
        var newRow = tBody.insertRow(-1);
        var data = info.overall.data;
        for(var index=0;index < data.length; index++){
            var cell = newRow.insertCell(-1);
            cell.innerHTML = formatter ? formatter(index, data[index]): data[index];
        }
    }

    // Create regular body
    tBody = document.createElement('tbody');
    tableRef.appendChild(tBody);

    var regexp;
    if(seriesFilter) {
        regexp = new RegExp(seriesFilter, 'i');
    }
    // Populate body with data.items array
    for(var index=0; index < info.items.length; index++){
        var item = info.items[index];
        if((!regexp || filtersOnlySampleSeries && !info.supportsControllersDiscrimination || regexp.test(item.data[seriesIndex]))
                &&
                (!showControllersOnly || !info.supportsControllersDiscrimination || item.isController)){
            if(item.data.length > 0) {
                var newRow = tBody.insertRow(-1);
                for(var col=0; col < item.data.length; col++){
                    var cell = newRow.insertCell(-1);
                    cell.innerHTML = formatter ? formatter(col, item.data[col]) : item.data[col];
                }
            }
        }
    }

    // Add support of columns sort
    table.tablesorter({sortList : defaultSorts});
}

$(document).ready(function() {

    // Customize table sorter default options
    $.extend( $.tablesorter.defaults, {
        theme: 'blue',
        cssInfoBlock: "tablesorter-no-sort",
        widthFixed: true,
        widgets: ['zebra']
    });

    var data = {"OkPercent": 63.5, "KoPercent": 36.5};
    var dataset = [
        {
            "label" : "FAIL",
            "data" : data.KoPercent,
            "color" : "#FF6347"
        },
        {
            "label" : "PASS",
            "data" : data.OkPercent,
            "color" : "#9ACD32"
        }];
    $.plot($("#flot-requests-summary"), dataset, {
        series : {
            pie : {
                show : true,
                radius : 1,
                label : {
                    show : true,
                    radius : 3 / 4,
                    formatter : function(label, series) {
                        return '<div style="font-size:8pt;text-align:center;padding:2px;color:white;">'
                            + label
                            + '<br/>'
                            + Math.round10(series.percent, -2)
                            + '%</div>';
                    },
                    background : {
                        opacity : 0.5,
                        color : '#000'
                    }
                }
            }
        },
        legend : {
            show : true
        }
    });

    // Creates APDEX table
    createTable($("#apdexTable"), {"supportsControllersDiscrimination": true, "overall": {"data": [0.46416666666666667, 500, 1500, "Total"], "isController": false}, "titles": ["Apdex", "T (Toleration threshold)", "F (Frustration threshold)", "Label"], "items": [{"data": [0.94, 500, 1500, "config 3 req"], "isController": false}, {"data": [0.4525, 500, 1500, "config 2 req"], "isController": false}, {"data": [0.0, 500, 1500, "config 1 req"], "isController": false}]}, function(index, item){
        switch(index){
            case 0:
                item = item.toFixed(3);
                break;
            case 1:
            case 2:
                item = formatDuration(item);
                break;
        }
        return item;
    }, [[0, 0]], 3);

    // Create statistics table
    createTable($("#statisticsTable"), {"supportsControllersDiscrimination": true, "overall": {"data": ["Total", 600, 219, 36.5, 740.8616666666675, 315, 1487, 661.5, 1087.9, 1106.0, 1479.0300000000009, 5.34249868663574, 1.205192574817242, 0.8243308520394989], "isController": false}, "titles": ["Label", "#Samples", "FAIL", "Error %", "Average", "Min", "Max", "Median", "90th pct", "95th pct", "99th pct", "Transactions/s", "Received", "Sent"], "items": [{"data": ["config 3 req", 200, 0, 0.0, 467.5100000000002, 315, 673, 456.0, 539.0, 613.95, 673.0, 1.795557790027472, 0.4050525873987754, 0.2770489558831451], "isController": false}, {"data": ["config 2 req", 200, 19, 9.5, 680.6000000000001, 528, 1061, 657.0, 755.9000000000003, 1011.0, 1058.7900000000002, 1.793866769515028, 0.40467111695114405, 0.2767880367025141], "isController": false}, {"data": ["config 1 req", 200, 200, 100.0, 1074.4749999999995, 928, 1487, 1061.0, 1118.8, 1347.099999999998, 1481.99, 1.7808328955452464, 0.401730858272414, 0.27477695067983293], "isController": false}]}, function(index, item){
        switch(index){
            // Errors pct
            case 3:
                item = item.toFixed(2) + '%';
                break;
            // Mean
            case 4:
            // Mean
            case 7:
            // Median
            case 8:
            // Percentile 1
            case 9:
            // Percentile 2
            case 10:
            // Percentile 3
            case 11:
            // Throughput
            case 12:
            // Kbytes/s
            case 13:
            // Sent Kbytes/s
                item = item.toFixed(2);
                break;
        }
        return item;
    }, [[0, 0]], 0, summaryTableHeader);

    // Create error table
    createTable($("#errorsTable"), {"supportsControllersDiscrimination": false, "titles": ["Type of error", "Number of errors", "% in errors", "% in all samples"], "items": [{"data": ["The operation lasted too long: It took 1,022 milliseconds, but should not have lasted longer than 780 milliseconds.", 4, 1.82648401826484, 0.6666666666666666], "isController": false}, {"data": ["The operation lasted too long: It took 1,039 milliseconds, but should not have lasted longer than 780 milliseconds.", 4, 1.82648401826484, 0.6666666666666666], "isController": false}, {"data": ["The operation lasted too long: It took 1,096 milliseconds, but should not have lasted longer than 780 milliseconds.", 1, 0.45662100456621, 0.16666666666666666], "isController": false}, {"data": ["The operation lasted too long: It took 1,049 milliseconds, but should not have lasted longer than 780 milliseconds.", 5, 2.2831050228310503, 0.8333333333333334], "isController": false}, {"data": ["The operation lasted too long: It took 1,054 milliseconds, but should not have lasted longer than 780 milliseconds.", 3, 1.36986301369863, 0.5], "isController": false}, {"data": ["The operation lasted too long: It took 1,359 milliseconds, but should not have lasted longer than 780 milliseconds.", 1, 0.45662100456621, 0.16666666666666666], "isController": false}, {"data": ["The operation lasted too long: It took 958 milliseconds, but should not have lasted longer than 780 milliseconds.", 1, 0.45662100456621, 0.16666666666666666], "isController": false}, {"data": ["The operation lasted too long: It took 1,017 milliseconds, but should not have lasted longer than 780 milliseconds.", 3, 1.36986301369863, 0.5], "isController": false}, {"data": ["The operation lasted too long: It took 1,000 milliseconds, but should not have lasted longer than 780 milliseconds.", 2, 0.91324200913242, 0.3333333333333333], "isController": false}, {"data": ["The operation lasted too long: It took 1,027 milliseconds, but should not have lasted longer than 780 milliseconds.", 2, 0.91324200913242, 0.3333333333333333], "isController": false}, {"data": ["The operation lasted too long: It took 941 milliseconds, but should not have lasted longer than 780 milliseconds.", 1, 0.45662100456621, 0.16666666666666666], "isController": false}, {"data": ["The operation lasted too long: It took 1,178 milliseconds, but should not have lasted longer than 780 milliseconds.", 1, 0.45662100456621, 0.16666666666666666], "isController": false}, {"data": ["The operation lasted too long: It took 1,059 milliseconds, but should not have lasted longer than 780 milliseconds.", 1, 0.45662100456621, 0.16666666666666666], "isController": false}, {"data": ["The operation lasted too long: It took 1,114 milliseconds, but should not have lasted longer than 780 milliseconds.", 2, 0.91324200913242, 0.3333333333333333], "isController": false}, {"data": ["The operation lasted too long: It took 1,481 milliseconds, but should not have lasted longer than 780 milliseconds.", 1, 0.45662100456621, 0.16666666666666666], "isController": false}, {"data": ["The operation lasted too long: It took 928 milliseconds, but should not have lasted longer than 780 milliseconds.", 1, 0.45662100456621, 0.16666666666666666], "isController": false}, {"data": ["The operation lasted too long: It took 1,069 milliseconds, but should not have lasted longer than 780 milliseconds.", 3, 1.36986301369863, 0.5], "isController": false}, {"data": ["The operation lasted too long: It took 1,037 milliseconds, but should not have lasted longer than 780 milliseconds.", 3, 1.36986301369863, 0.5], "isController": false}, {"data": ["The operation lasted too long: It took 1,066 milliseconds, but should not have lasted longer than 780 milliseconds.", 1, 0.45662100456621, 0.16666666666666666], "isController": false}, {"data": ["The operation lasted too long: It took 1,086 milliseconds, but should not have lasted longer than 780 milliseconds.", 1, 0.45662100456621, 0.16666666666666666], "isController": false}, {"data": ["The operation lasted too long: It took 1,089 milliseconds, but should not have lasted longer than 780 milliseconds.", 1, 0.45662100456621, 0.16666666666666666], "isController": false}, {"data": ["The operation lasted too long: It took 1,012 milliseconds, but should not have lasted longer than 780 milliseconds.", 2, 0.91324200913242, 0.3333333333333333], "isController": false}, {"data": ["The operation lasted too long: It took 1,015 milliseconds, but should not have lasted longer than 780 milliseconds.", 1, 0.45662100456621, 0.16666666666666666], "isController": false}, {"data": ["The operation lasted too long: It took 1,079 milliseconds, but should not have lasted longer than 780 milliseconds.", 6, 2.73972602739726, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 1,121 milliseconds, but should not have lasted longer than 780 milliseconds.", 2, 0.91324200913242, 0.3333333333333333], "isController": false}, {"data": ["The operation lasted too long: It took 1,076 milliseconds, but should not have lasted longer than 780 milliseconds.", 3, 1.36986301369863, 0.5], "isController": false}, {"data": ["The operation lasted too long: It took 1,044 milliseconds, but should not have lasted longer than 780 milliseconds.", 2, 0.91324200913242, 0.3333333333333333], "isController": false}, {"data": ["The operation lasted too long: It took 1,025 milliseconds, but should not have lasted longer than 780 milliseconds.", 2, 0.91324200913242, 0.3333333333333333], "isController": false}, {"data": ["The operation lasted too long: It took 1,099 milliseconds, but should not have lasted longer than 780 milliseconds.", 1, 0.45662100456621, 0.16666666666666666], "isController": false}, {"data": ["The operation lasted too long: It took 1,040 milliseconds, but should not have lasted longer than 780 milliseconds.", 2, 0.91324200913242, 0.3333333333333333], "isController": false}, {"data": ["The operation lasted too long: It took 1,046 milliseconds, but should not have lasted longer than 780 milliseconds.", 1, 0.45662100456621, 0.16666666666666666], "isController": false}, {"data": ["The operation lasted too long: It took 1,112 milliseconds, but should not have lasted longer than 780 milliseconds.", 3, 1.36986301369863, 0.5], "isController": false}, {"data": ["The operation lasted too long: It took 1,050 milliseconds, but should not have lasted longer than 780 milliseconds.", 1, 0.45662100456621, 0.16666666666666666], "isController": false}, {"data": ["The operation lasted too long: It took 1,356 milliseconds, but should not have lasted longer than 780 milliseconds.", 1, 0.45662100456621, 0.16666666666666666], "isController": false}, {"data": ["The operation lasted too long: It took 1,030 milliseconds, but should not have lasted longer than 780 milliseconds.", 4, 1.82648401826484, 0.6666666666666666], "isController": false}, {"data": ["The operation lasted too long: It took 934 milliseconds, but should not have lasted longer than 780 milliseconds.", 1, 0.45662100456621, 0.16666666666666666], "isController": false}, {"data": ["The operation lasted too long: It took 1,122 milliseconds, but should not have lasted longer than 780 milliseconds.", 1, 0.45662100456621, 0.16666666666666666], "isController": false}, {"data": ["The operation lasted too long: It took 1,056 milliseconds, but should not have lasted longer than 780 milliseconds.", 3, 1.36986301369863, 0.5], "isController": false}, {"data": ["The operation lasted too long: It took 944 milliseconds, but should not have lasted longer than 780 milliseconds.", 1, 0.45662100456621, 0.16666666666666666], "isController": false}, {"data": ["The operation lasted too long: It took 1,093 milliseconds, but should not have lasted longer than 780 milliseconds.", 1, 0.45662100456621, 0.16666666666666666], "isController": false}, {"data": ["The operation lasted too long: It took 1,360 milliseconds, but should not have lasted longer than 780 milliseconds.", 1, 0.45662100456621, 0.16666666666666666], "isController": false}, {"data": ["The operation lasted too long: It took 933 milliseconds, but should not have lasted longer than 780 milliseconds.", 1, 0.45662100456621, 0.16666666666666666], "isController": false}, {"data": ["The operation lasted too long: It took 1,035 milliseconds, but should not have lasted longer than 780 milliseconds.", 1, 0.45662100456621, 0.16666666666666666], "isController": false}, {"data": ["The operation lasted too long: It took 939 milliseconds, but should not have lasted longer than 780 milliseconds.", 1, 0.45662100456621, 0.16666666666666666], "isController": false}, {"data": ["The operation lasted too long: It took 1,094 milliseconds, but should not have lasted longer than 780 milliseconds.", 4, 1.82648401826484, 0.6666666666666666], "isController": false}, {"data": ["The operation lasted too long: It took 982 milliseconds, but should not have lasted longer than 780 milliseconds.", 1, 0.45662100456621, 0.16666666666666666], "isController": false}, {"data": ["The operation lasted too long: It took 978 milliseconds, but should not have lasted longer than 780 milliseconds.", 1, 0.45662100456621, 0.16666666666666666], "isController": false}, {"data": ["The operation lasted too long: It took 1,084 milliseconds, but should not have lasted longer than 780 milliseconds.", 2, 0.91324200913242, 0.3333333333333333], "isController": false}, {"data": ["The operation lasted too long: It took 1,103 milliseconds, but should not have lasted longer than 780 milliseconds.", 1, 0.45662100456621, 0.16666666666666666], "isController": false}, {"data": ["The operation lasted too long: It took 1,045 milliseconds, but should not have lasted longer than 780 milliseconds.", 2, 0.91324200913242, 0.3333333333333333], "isController": false}, {"data": ["The operation lasted too long: It took 1,016 milliseconds, but should not have lasted longer than 780 milliseconds.", 3, 1.36986301369863, 0.5], "isController": false}, {"data": ["The operation lasted too long: It took 1,113 milliseconds, but should not have lasted longer than 780 milliseconds.", 1, 0.45662100456621, 0.16666666666666666], "isController": false}, {"data": ["The operation lasted too long: It took 998 milliseconds, but should not have lasted longer than 780 milliseconds.", 3, 1.36986301369863, 0.5], "isController": false}, {"data": ["The operation lasted too long: It took 1,026 milliseconds, but should not have lasted longer than 780 milliseconds.", 3, 1.36986301369863, 0.5], "isController": false}, {"data": ["The operation lasted too long: It took 1,065 milliseconds, but should not have lasted longer than 780 milliseconds.", 1, 0.45662100456621, 0.16666666666666666], "isController": false}, {"data": ["The operation lasted too long: It took 959 milliseconds, but should not have lasted longer than 780 milliseconds.", 1, 0.45662100456621, 0.16666666666666666], "isController": false}, {"data": ["The operation lasted too long: It took 1,119 milliseconds, but should not have lasted longer than 780 milliseconds.", 3, 1.36986301369863, 0.5], "isController": false}, {"data": ["The operation lasted too long: It took 953 milliseconds, but should not have lasted longer than 780 milliseconds.", 3, 1.36986301369863, 0.5], "isController": false}, {"data": ["The operation lasted too long: It took 1,105 milliseconds, but should not have lasted longer than 780 milliseconds.", 1, 0.45662100456621, 0.16666666666666666], "isController": false}, {"data": ["The operation lasted too long: It took 1,075 milliseconds, but should not have lasted longer than 780 milliseconds.", 1, 0.45662100456621, 0.16666666666666666], "isController": false}, {"data": ["The operation lasted too long: It took 1,120 milliseconds, but should not have lasted longer than 780 milliseconds.", 3, 1.36986301369863, 0.5], "isController": false}, {"data": ["The operation lasted too long: It took 1,001 milliseconds, but should not have lasted longer than 780 milliseconds.", 1, 0.45662100456621, 0.16666666666666666], "isController": false}, {"data": ["The operation lasted too long: It took 1,028 milliseconds, but should not have lasted longer than 780 milliseconds.", 3, 1.36986301369863, 0.5], "isController": false}, {"data": ["The operation lasted too long: It took 1,095 milliseconds, but should not have lasted longer than 780 milliseconds.", 1, 0.45662100456621, 0.16666666666666666], "isController": false}, {"data": ["The operation lasted too long: It took 1,038 milliseconds, but should not have lasted longer than 780 milliseconds.", 4, 1.82648401826484, 0.6666666666666666], "isController": false}, {"data": ["The operation lasted too long: It took 1,021 milliseconds, but should not have lasted longer than 780 milliseconds.", 4, 1.82648401826484, 0.6666666666666666], "isController": false}, {"data": ["The operation lasted too long: It took 1,090 milliseconds, but should not have lasted longer than 780 milliseconds.", 5, 2.2831050228310503, 0.8333333333333334], "isController": false}, {"data": ["The operation lasted too long: It took 1,011 milliseconds, but should not have lasted longer than 780 milliseconds.", 3, 1.36986301369863, 0.5], "isController": false}, {"data": ["The operation lasted too long: It took 1,482 milliseconds, but should not have lasted longer than 780 milliseconds.", 1, 0.45662100456621, 0.16666666666666666], "isController": false}, {"data": ["The operation lasted too long: It took 1,117 milliseconds, but should not have lasted longer than 780 milliseconds.", 2, 0.91324200913242, 0.3333333333333333], "isController": false}, {"data": ["The operation lasted too long: It took 999 milliseconds, but should not have lasted longer than 780 milliseconds.", 1, 0.45662100456621, 0.16666666666666666], "isController": false}, {"data": ["The operation lasted too long: It took 1,487 milliseconds, but should not have lasted longer than 780 milliseconds.", 1, 0.45662100456621, 0.16666666666666666], "isController": false}, {"data": ["The operation lasted too long: It took 954 milliseconds, but should not have lasted longer than 780 milliseconds.", 1, 0.45662100456621, 0.16666666666666666], "isController": false}, {"data": ["The operation lasted too long: It took 1,063 milliseconds, but should not have lasted longer than 780 milliseconds.", 4, 1.82648401826484, 0.6666666666666666], "isController": false}, {"data": ["The operation lasted too long: It took 1,083 milliseconds, but should not have lasted longer than 780 milliseconds.", 1, 0.45662100456621, 0.16666666666666666], "isController": false}, {"data": ["The operation lasted too long: It took 1,060 milliseconds, but should not have lasted longer than 780 milliseconds.", 4, 1.82648401826484, 0.6666666666666666], "isController": false}, {"data": ["The operation lasted too long: It took 974 milliseconds, but should not have lasted longer than 780 milliseconds.", 1, 0.45662100456621, 0.16666666666666666], "isController": false}, {"data": ["The operation lasted too long: It took 1,041 milliseconds, but should not have lasted longer than 780 milliseconds.", 2, 0.91324200913242, 0.3333333333333333], "isController": false}, {"data": ["The operation lasted too long: It took 945 milliseconds, but should not have lasted longer than 780 milliseconds.", 1, 0.45662100456621, 0.16666666666666666], "isController": false}, {"data": ["The operation lasted too long: It took 1,073 milliseconds, but should not have lasted longer than 780 milliseconds.", 1, 0.45662100456621, 0.16666666666666666], "isController": false}, {"data": ["The operation lasted too long: It took 1,082 milliseconds, but should not have lasted longer than 780 milliseconds.", 2, 0.91324200913242, 0.3333333333333333], "isController": false}, {"data": ["The operation lasted too long: It took 1,004 milliseconds, but should not have lasted longer than 780 milliseconds.", 1, 0.45662100456621, 0.16666666666666666], "isController": false}, {"data": ["The operation lasted too long: It took 1,067 milliseconds, but should not have lasted longer than 780 milliseconds.", 2, 0.91324200913242, 0.3333333333333333], "isController": false}, {"data": ["The operation lasted too long: It took 1,057 milliseconds, but should not have lasted longer than 780 milliseconds.", 2, 0.91324200913242, 0.3333333333333333], "isController": false}, {"data": ["The operation lasted too long: It took 955 milliseconds, but should not have lasted longer than 780 milliseconds.", 1, 0.45662100456621, 0.16666666666666666], "isController": false}, {"data": ["The operation lasted too long: It took 1,051 milliseconds, but should not have lasted longer than 780 milliseconds.", 3, 1.36986301369863, 0.5], "isController": false}, {"data": ["The operation lasted too long: It took 1,092 milliseconds, but should not have lasted longer than 780 milliseconds.", 2, 0.91324200913242, 0.3333333333333333], "isController": false}, {"data": ["The operation lasted too long: It took 1,098 milliseconds, but should not have lasted longer than 780 milliseconds.", 5, 2.2831050228310503, 0.8333333333333334], "isController": false}, {"data": ["The operation lasted too long: It took 1,077 milliseconds, but should not have lasted longer than 780 milliseconds.", 3, 1.36986301369863, 0.5], "isController": false}, {"data": ["The operation lasted too long: It took 1,088 milliseconds, but should not have lasted longer than 780 milliseconds.", 2, 0.91324200913242, 0.3333333333333333], "isController": false}, {"data": ["The operation lasted too long: It took 1,061 milliseconds, but should not have lasted longer than 780 milliseconds.", 5, 2.2831050228310503, 0.8333333333333334], "isController": false}, {"data": ["The operation lasted too long: It took 1,091 milliseconds, but should not have lasted longer than 780 milliseconds.", 1, 0.45662100456621, 0.16666666666666666], "isController": false}, {"data": ["The operation lasted too long: It took 1,013 milliseconds, but should not have lasted longer than 780 milliseconds.", 1, 0.45662100456621, 0.16666666666666666], "isController": false}, {"data": ["The operation lasted too long: It took 940 milliseconds, but should not have lasted longer than 780 milliseconds.", 2, 0.91324200913242, 0.3333333333333333], "isController": false}, {"data": ["The operation lasted too long: It took 1,052 milliseconds, but should not have lasted longer than 780 milliseconds.", 2, 0.91324200913242, 0.3333333333333333], "isController": false}, {"data": ["The operation lasted too long: It took 1,383 milliseconds, but should not have lasted longer than 780 milliseconds.", 1, 0.45662100456621, 0.16666666666666666], "isController": false}, {"data": ["The operation lasted too long: It took 1,058 milliseconds, but should not have lasted longer than 780 milliseconds.", 2, 0.91324200913242, 0.3333333333333333], "isController": false}, {"data": ["The operation lasted too long: It took 1,106 milliseconds, but should not have lasted longer than 780 milliseconds.", 3, 1.36986301369863, 0.5], "isController": false}, {"data": ["The operation lasted too long: It took 1,087 milliseconds, but should not have lasted longer than 780 milliseconds.", 3, 1.36986301369863, 0.5], "isController": false}, {"data": ["The operation lasted too long: It took 1,019 milliseconds, but should not have lasted longer than 780 milliseconds.", 1, 0.45662100456621, 0.16666666666666666], "isController": false}, {"data": ["The operation lasted too long: It took 1,042 milliseconds, but should not have lasted longer than 780 milliseconds.", 2, 0.91324200913242, 0.3333333333333333], "isController": false}, {"data": ["The operation lasted too long: It took 1,068 milliseconds, but should not have lasted longer than 780 milliseconds.", 3, 1.36986301369863, 0.5], "isController": false}, {"data": ["The operation lasted too long: It took 1,480 milliseconds, but should not have lasted longer than 780 milliseconds.", 3, 1.36986301369863, 0.5], "isController": false}, {"data": ["The operation lasted too long: It took 950 milliseconds, but should not have lasted longer than 780 milliseconds.", 1, 0.45662100456621, 0.16666666666666666], "isController": false}, {"data": ["The operation lasted too long: It took 1,023 milliseconds, but should not have lasted longer than 780 milliseconds.", 4, 1.82648401826484, 0.6666666666666666], "isController": false}, {"data": ["The operation lasted too long: It took 1,097 milliseconds, but should not have lasted longer than 780 milliseconds.", 3, 1.36986301369863, 0.5], "isController": false}]}, function(index, item){
        switch(index){
            case 2:
            case 3:
                item = item.toFixed(2) + '%';
                break;
        }
        return item;
    }, [[1, 1]]);

        // Create top5 errors by sampler
    createTable($("#top5ErrorsBySamplerTable"), {"supportsControllersDiscrimination": false, "overall": {"data": ["Total", 600, 219, "The operation lasted too long: It took 1,079 milliseconds, but should not have lasted longer than 780 milliseconds.", 6, "The operation lasted too long: It took 1,049 milliseconds, but should not have lasted longer than 780 milliseconds.", 5, "The operation lasted too long: It took 1,090 milliseconds, but should not have lasted longer than 780 milliseconds.", 5, "The operation lasted too long: It took 1,098 milliseconds, but should not have lasted longer than 780 milliseconds.", 5, "The operation lasted too long: It took 1,061 milliseconds, but should not have lasted longer than 780 milliseconds.", 5], "isController": false}, "titles": ["Sample", "#Samples", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors"], "items": [{"data": [], "isController": false}, {"data": ["config 2 req", 200, 19, "The operation lasted too long: It took 1,011 milliseconds, but should not have lasted longer than 780 milliseconds.", 3, "The operation lasted too long: It took 953 milliseconds, but should not have lasted longer than 780 milliseconds.", 3, "The operation lasted too long: It took 1,017 milliseconds, but should not have lasted longer than 780 milliseconds.", 2, "The operation lasted too long: It took 1,012 milliseconds, but should not have lasted longer than 780 milliseconds.", 2, "The operation lasted too long: It took 954 milliseconds, but should not have lasted longer than 780 milliseconds.", 1], "isController": false}, {"data": ["config 1 req", 200, 200, "The operation lasted too long: It took 1,079 milliseconds, but should not have lasted longer than 780 milliseconds.", 6, "The operation lasted too long: It took 1,049 milliseconds, but should not have lasted longer than 780 milliseconds.", 5, "The operation lasted too long: It took 1,090 milliseconds, but should not have lasted longer than 780 milliseconds.", 5, "The operation lasted too long: It took 1,098 milliseconds, but should not have lasted longer than 780 milliseconds.", 5, "The operation lasted too long: It took 1,022 milliseconds, but should not have lasted longer than 780 milliseconds.", 4], "isController": false}]}, function(index, item){
        return item;
    }, [[0, 0]], 0);

});
