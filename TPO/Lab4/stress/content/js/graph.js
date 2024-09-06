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
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 511.0, "minX": 0.0, "maxY": 13860.0, "series": [{"data": [[0.0, 511.0], [0.1, 511.0], [0.2, 533.0], [0.3, 533.0], [0.4, 550.0], [0.5, 550.0], [0.6, 550.0], [0.7, 578.0], [0.8, 586.0], [0.9, 586.0], [1.0, 1087.0], [1.1, 1087.0], [1.2, 1091.0], [1.3, 1091.0], [1.4, 1095.0], [1.5, 1095.0], [1.6, 1100.0], [1.7, 1100.0], [1.8, 1108.0], [1.9, 1108.0], [2.0, 1112.0], [2.1, 1112.0], [2.2, 1116.0], [2.3, 1116.0], [2.4, 1120.0], [2.5, 1120.0], [2.6, 1123.0], [2.7, 1123.0], [2.8, 1123.0], [2.9, 1127.0], [3.0, 1127.0], [3.1, 1131.0], [3.2, 1131.0], [3.3, 1136.0], [3.4, 1136.0], [3.5, 1139.0], [3.6, 1139.0], [3.7, 1143.0], [3.8, 1143.0], [3.9, 1148.0], [4.0, 1148.0], [4.1, 1151.0], [4.2, 1151.0], [4.3, 1155.0], [4.4, 1155.0], [4.5, 1159.0], [4.6, 1159.0], [4.7, 1162.0], [4.8, 1162.0], [4.9, 1166.0], [5.0, 1166.0], [5.1, 1166.0], [5.2, 1166.0], [5.3, 1170.0], [5.4, 1170.0], [5.5, 1170.0], [5.6, 1170.0], [5.7, 1174.0], [5.8, 1174.0], [5.9, 1178.0], [6.0, 1178.0], [6.1, 1182.0], [6.2, 1182.0], [6.3, 1186.0], [6.4, 1186.0], [6.5, 1190.0], [6.6, 1190.0], [6.7, 1193.0], [6.8, 1193.0], [6.9, 1197.0], [7.0, 1197.0], [7.1, 1201.0], [7.2, 1201.0], [7.3, 1205.0], [7.4, 1205.0], [7.5, 1209.0], [7.6, 1209.0], [7.7, 1214.0], [7.8, 1214.0], [7.9, 1218.0], [8.0, 1218.0], [8.1, 1222.0], [8.2, 1222.0], [8.3, 1226.0], [8.4, 1226.0], [8.5, 1230.0], [8.6, 1230.0], [8.7, 1234.0], [8.8, 1238.0], [8.9, 1238.0], [9.0, 1240.0], [9.1, 1240.0], [9.2, 1245.0], [9.3, 1245.0], [9.4, 1248.0], [9.5, 1248.0], [9.6, 1252.0], [9.7, 1252.0], [9.8, 1256.0], [9.9, 1256.0], [10.0, 1261.0], [10.1, 1261.0], [10.2, 1265.0], [10.3, 1265.0], [10.4, 1269.0], [10.5, 1269.0], [10.6, 1273.0], [10.7, 1273.0], [10.8, 1273.0], [10.9, 1273.0], [11.0, 1276.0], [11.1, 1276.0], [11.2, 1277.0], [11.3, 1277.0], [11.4, 1280.0], [11.5, 1280.0], [11.6, 1281.0], [11.7, 1281.0], [11.8, 1284.0], [11.9, 1284.0], [12.0, 1288.0], [12.1, 1288.0], [12.2, 1295.0], [12.3, 1295.0], [12.4, 1300.0], [12.5, 1300.0], [12.6, 1303.0], [12.7, 1303.0], [12.8, 1312.0], [12.9, 1312.0], [13.0, 1317.0], [13.1, 1317.0], [13.2, 1321.0], [13.3, 1321.0], [13.4, 1323.0], [13.5, 1323.0], [13.6, 1327.0], [13.7, 1327.0], [13.8, 1331.0], [13.9, 1331.0], [14.0, 1339.0], [14.1, 1339.0], [14.2, 1347.0], [14.3, 1347.0], [14.4, 1499.0], [14.5, 1499.0], [14.6, 1880.0], [14.7, 1880.0], [14.8, 1884.0], [14.9, 1884.0], [15.0, 1887.0], [15.1, 1887.0], [15.2, 1891.0], [15.3, 1891.0], [15.4, 1896.0], [15.5, 1896.0], [15.6, 1899.0], [15.7, 1899.0], [15.8, 1903.0], [15.9, 1903.0], [16.0, 1907.0], [16.1, 1907.0], [16.2, 1911.0], [16.3, 1911.0], [16.4, 1937.0], [16.5, 1937.0], [16.6, 1973.0], [16.7, 1973.0], [16.8, 2435.0], [16.9, 2435.0], [17.0, 2906.0], [17.1, 2906.0], [17.2, 2952.0], [17.3, 2952.0], [17.4, 2987.0], [17.5, 2987.0], [17.6, 2991.0], [17.7, 2991.0], [17.8, 2998.0], [17.9, 2998.0], [18.0, 3002.0], [18.1, 3002.0], [18.2, 3006.0], [18.3, 3006.0], [18.4, 3011.0], [18.5, 3011.0], [18.6, 3015.0], [18.7, 3015.0], [18.8, 3020.0], [18.9, 3020.0], [19.0, 3024.0], [19.1, 3024.0], [19.2, 3028.0], [19.3, 3028.0], [19.4, 3031.0], [19.5, 3031.0], [19.6, 3034.0], [19.7, 3034.0], [19.8, 3038.0], [19.9, 3038.0], [20.0, 3043.0], [20.1, 3043.0], [20.2, 3047.0], [20.3, 3047.0], [20.4, 3051.0], [20.5, 3051.0], [20.6, 3056.0], [20.7, 3056.0], [20.8, 3059.0], [20.9, 3059.0], [21.0, 3062.0], [21.1, 3062.0], [21.2, 3066.0], [21.3, 3066.0], [21.4, 3069.0], [21.5, 3069.0], [21.6, 3073.0], [21.7, 3073.0], [21.8, 3074.0], [21.9, 3074.0], [22.0, 3081.0], [22.1, 3081.0], [22.2, 3086.0], [22.3, 3086.0], [22.4, 3087.0], [22.5, 3087.0], [22.6, 3091.0], [22.7, 3091.0], [22.8, 3095.0], [22.9, 3095.0], [23.0, 3099.0], [23.1, 3099.0], [23.2, 3106.0], [23.3, 3106.0], [23.4, 3109.0], [23.5, 3109.0], [23.6, 3110.0], [23.7, 3110.0], [23.8, 3114.0], [23.9, 3114.0], [24.0, 3119.0], [24.1, 3119.0], [24.2, 3125.0], [24.3, 3125.0], [24.4, 3127.0], [24.5, 3127.0], [24.6, 3131.0], [24.7, 3131.0], [24.8, 3138.0], [24.9, 3138.0], [25.0, 3142.0], [25.1, 3142.0], [25.2, 3142.0], [25.3, 3142.0], [25.4, 3146.0], [25.5, 3146.0], [25.6, 3149.0], [25.7, 3149.0], [25.8, 3153.0], [25.9, 3153.0], [26.0, 3158.0], [26.1, 3158.0], [26.2, 3160.0], [26.3, 3160.0], [26.4, 3162.0], [26.5, 3162.0], [26.6, 3169.0], [26.7, 3169.0], [26.8, 3172.0], [26.9, 3172.0], [27.0, 3177.0], [27.1, 3177.0], [27.2, 3182.0], [27.3, 3182.0], [27.4, 3184.0], [27.5, 3184.0], [27.6, 3186.0], [27.7, 3186.0], [27.8, 3193.0], [27.9, 3193.0], [28.0, 3197.0], [28.1, 3197.0], [28.2, 3199.0], [28.3, 3199.0], [28.4, 3202.0], [28.5, 3202.0], [28.6, 3202.0], [28.7, 3202.0], [28.8, 3213.0], [28.9, 3213.0], [29.0, 3217.0], [29.1, 3217.0], [29.2, 3221.0], [29.3, 3221.0], [29.4, 3223.0], [29.5, 3223.0], [29.6, 3225.0], [29.7, 3225.0], [29.8, 3233.0], [29.9, 3233.0], [30.0, 3237.0], [30.1, 3237.0], [30.2, 3241.0], [30.3, 3241.0], [30.4, 3244.0], [30.5, 3244.0], [30.6, 3245.0], [30.7, 3245.0], [30.8, 3248.0], [30.9, 3248.0], [31.0, 3251.0], [31.1, 3251.0], [31.2, 3255.0], [31.3, 3255.0], [31.4, 3259.0], [31.5, 3259.0], [31.6, 3263.0], [31.7, 3263.0], [31.8, 3267.0], [31.9, 3267.0], [32.0, 3270.0], [32.1, 3270.0], [32.2, 3273.0], [32.3, 3273.0], [32.4, 3278.0], [32.5, 3278.0], [32.6, 3278.0], [32.7, 3278.0], [32.8, 3285.0], [32.9, 3285.0], [33.0, 3287.0], [33.1, 3287.0], [33.2, 3291.0], [33.3, 3291.0], [33.4, 3295.0], [33.5, 3295.0], [33.6, 3299.0], [33.7, 3299.0], [33.8, 3303.0], [33.9, 3303.0], [34.0, 3310.0], [34.1, 3310.0], [34.2, 3310.0], [34.3, 3310.0], [34.4, 3312.0], [34.5, 3312.0], [34.6, 3321.0], [34.7, 3321.0], [34.8, 3321.0], [34.9, 3321.0], [35.0, 3325.0], [35.1, 3325.0], [35.2, 3329.0], [35.3, 3329.0], [35.4, 3334.0], [35.5, 3334.0], [35.6, 3337.0], [35.7, 3337.0], [35.8, 3342.0], [35.9, 3342.0], [36.0, 3345.0], [36.1, 3345.0], [36.2, 3349.0], [36.3, 3349.0], [36.4, 3352.0], [36.5, 3352.0], [36.6, 3356.0], [36.7, 3356.0], [36.8, 3358.0], [36.9, 3358.0], [37.0, 3362.0], [37.1, 3362.0], [37.2, 3366.0], [37.3, 3366.0], [37.4, 3367.0], [37.5, 3367.0], [37.6, 3374.0], [37.7, 3374.0], [37.8, 3374.0], [37.9, 3374.0], [38.0, 3378.0], [38.1, 3378.0], [38.2, 3383.0], [38.3, 3383.0], [38.4, 3386.0], [38.5, 3386.0], [38.6, 3394.0], [38.7, 3394.0], [38.8, 3397.0], [38.9, 3397.0], [39.0, 3401.0], [39.1, 3401.0], [39.2, 3402.0], [39.3, 3402.0], [39.4, 3411.0], [39.5, 3411.0], [39.6, 3414.0], [39.7, 3414.0], [39.8, 3414.0], [39.9, 3418.0], [40.0, 3418.0], [40.1, 3418.0], [40.2, 3426.0], [40.3, 3426.0], [40.4, 3426.0], [40.5, 3429.0], [40.6, 3429.0], [40.7, 3430.0], [40.8, 3430.0], [40.9, 3437.0], [41.0, 3437.0], [41.1, 3441.0], [41.2, 3441.0], [41.3, 3443.0], [41.4, 3443.0], [41.5, 3450.0], [41.6, 3450.0], [41.7, 3454.0], [41.8, 3454.0], [41.9, 3454.0], [42.0, 3454.0], [42.1, 3457.0], [42.2, 3457.0], [42.3, 3458.0], [42.4, 3458.0], [42.5, 3464.0], [42.6, 3464.0], [42.7, 3469.0], [42.8, 3469.0], [42.9, 3469.0], [43.0, 3469.0], [43.1, 3474.0], [43.2, 3474.0], [43.3, 3477.0], [43.4, 3477.0], [43.5, 3482.0], [43.6, 3482.0], [43.7, 3489.0], [43.8, 3489.0], [43.9, 3489.0], [44.0, 3489.0], [44.1, 3492.0], [44.2, 3492.0], [44.3, 3496.0], [44.4, 3496.0], [44.5, 3504.0], [44.6, 3504.0], [44.7, 3509.0], [44.8, 3509.0], [44.9, 3510.0], [45.0, 3510.0], [45.1, 3514.0], [45.2, 3514.0], [45.3, 3517.0], [45.4, 3517.0], [45.5, 3521.0], [45.6, 3521.0], [45.7, 3525.0], [45.8, 3525.0], [45.9, 3527.0], [46.0, 3527.0], [46.1, 3528.0], [46.2, 3528.0], [46.3, 3531.0], [46.4, 3531.0], [46.5, 3544.0], [46.6, 3544.0], [46.7, 3544.0], [46.8, 3544.0], [46.9, 3548.0], [47.0, 3548.0], [47.1, 3552.0], [47.2, 3552.0], [47.3, 3555.0], [47.4, 3555.0], [47.5, 3559.0], [47.6, 3559.0], [47.7, 12792.0], [47.8, 12792.0], [47.9, 12795.0], [48.0, 12795.0], [48.1, 12799.0], [48.2, 12799.0], [48.3, 12801.0], [48.4, 12801.0], [48.5, 12806.0], [48.6, 12806.0], [48.7, 12812.0], [48.8, 12812.0], [48.9, 12813.0], [49.0, 12813.0], [49.1, 12823.0], [49.2, 12823.0], [49.3, 12826.0], [49.4, 12826.0], [49.5, 12829.0], [49.6, 12829.0], [49.7, 12834.0], [49.8, 12834.0], [49.9, 12840.0], [50.0, 12840.0], [50.1, 12844.0], [50.2, 12844.0], [50.3, 12848.0], [50.4, 12848.0], [50.5, 12849.0], [50.6, 12849.0], [50.7, 12857.0], [50.8, 12857.0], [50.9, 12863.0], [51.0, 12863.0], [51.1, 12866.0], [51.2, 12866.0], [51.3, 12870.0], [51.4, 12870.0], [51.5, 12876.0], [51.6, 12876.0], [51.7, 12877.0], [51.8, 12877.0], [51.9, 12881.0], [52.0, 12881.0], [52.1, 12896.0], [52.2, 12896.0], [52.3, 12901.0], [52.4, 12901.0], [52.5, 12903.0], [52.6, 12903.0], [52.7, 12908.0], [52.8, 12908.0], [52.9, 12909.0], [53.0, 12909.0], [53.1, 12913.0], [53.2, 12913.0], [53.3, 12914.0], [53.4, 12914.0], [53.5, 12918.0], [53.6, 12918.0], [53.7, 12926.0], [53.8, 12926.0], [53.9, 12930.0], [54.0, 12930.0], [54.1, 12934.0], [54.2, 12934.0], [54.3, 12938.0], [54.4, 12938.0], [54.5, 12942.0], [54.6, 12942.0], [54.7, 12942.0], [54.8, 12942.0], [54.9, 12945.0], [55.0, 12945.0], [55.1, 12953.0], [55.2, 12953.0], [55.3, 12954.0], [55.4, 12954.0], [55.5, 12958.0], [55.6, 12958.0], [55.7, 12966.0], [55.8, 12966.0], [55.9, 12970.0], [56.0, 12970.0], [56.1, 12970.0], [56.2, 12970.0], [56.3, 12973.0], [56.4, 12973.0], [56.5, 12980.0], [56.6, 12980.0], [56.7, 12984.0], [56.8, 12984.0], [56.9, 12988.0], [57.0, 12988.0], [57.1, 12992.0], [57.2, 12992.0], [57.3, 12996.0], [57.4, 12996.0], [57.5, 13000.0], [57.6, 13000.0], [57.7, 13001.0], [57.8, 13001.0], [57.9, 13008.0], [58.0, 13008.0], [58.1, 13011.0], [58.2, 13011.0], [58.3, 13021.0], [58.4, 13021.0], [58.5, 13024.0], [58.6, 13024.0], [58.7, 13028.0], [58.8, 13028.0], [58.9, 13033.0], [59.0, 13033.0], [59.1, 13037.0], [59.2, 13037.0], [59.3, 13039.0], [59.4, 13039.0], [59.5, 13041.0], [59.6, 13041.0], [59.7, 13047.0], [59.8, 13047.0], [59.9, 13050.0], [60.0, 13050.0], [60.1, 13054.0], [60.2, 13054.0], [60.3, 13058.0], [60.4, 13058.0], [60.5, 13062.0], [60.6, 13062.0], [60.7, 13067.0], [60.8, 13067.0], [60.9, 13068.0], [61.0, 13068.0], [61.1, 13071.0], [61.2, 13071.0], [61.3, 13076.0], [61.4, 13076.0], [61.5, 13081.0], [61.6, 13081.0], [61.7, 13086.0], [61.8, 13086.0], [61.9, 13088.0], [62.0, 13088.0], [62.1, 13093.0], [62.2, 13093.0], [62.3, 13097.0], [62.4, 13097.0], [62.5, 13101.0], [62.6, 13101.0], [62.7, 13103.0], [62.8, 13103.0], [62.9, 13110.0], [63.0, 13110.0], [63.1, 13114.0], [63.2, 13114.0], [63.3, 13118.0], [63.4, 13118.0], [63.5, 13119.0], [63.6, 13119.0], [63.7, 13125.0], [63.8, 13125.0], [63.9, 13129.0], [64.0, 13129.0], [64.1, 13134.0], [64.2, 13134.0], [64.3, 13139.0], [64.4, 13139.0], [64.5, 13142.0], [64.6, 13142.0], [64.7, 13144.0], [64.8, 13144.0], [64.9, 13147.0], [65.0, 13147.0], [65.1, 13153.0], [65.2, 13153.0], [65.3, 13155.0], [65.4, 13155.0], [65.5, 13161.0], [65.6, 13161.0], [65.7, 13163.0], [65.8, 13163.0], [65.9, 13167.0], [66.0, 13167.0], [66.1, 13172.0], [66.2, 13172.0], [66.3, 13175.0], [66.4, 13175.0], [66.5, 13179.0], [66.6, 13179.0], [66.7, 13182.0], [66.8, 13182.0], [66.9, 13186.0], [67.0, 13186.0], [67.1, 13191.0], [67.2, 13191.0], [67.3, 13194.0], [67.4, 13194.0], [67.5, 13197.0], [67.6, 13197.0], [67.7, 13202.0], [67.8, 13202.0], [67.9, 13207.0], [68.0, 13207.0], [68.1, 13211.0], [68.2, 13211.0], [68.3, 13214.0], [68.4, 13214.0], [68.5, 13218.0], [68.6, 13218.0], [68.7, 13221.0], [68.8, 13221.0], [68.9, 13226.0], [69.0, 13226.0], [69.1, 13228.0], [69.2, 13228.0], [69.3, 13232.0], [69.4, 13232.0], [69.5, 13238.0], [69.6, 13238.0], [69.7, 13242.0], [69.8, 13242.0], [69.9, 13247.0], [70.0, 13247.0], [70.1, 13250.0], [70.2, 13250.0], [70.3, 13253.0], [70.4, 13253.0], [70.5, 13257.0], [70.6, 13257.0], [70.7, 13260.0], [70.8, 13260.0], [70.9, 13265.0], [71.0, 13265.0], [71.1, 13270.0], [71.2, 13270.0], [71.3, 13274.0], [71.4, 13274.0], [71.5, 13279.0], [71.6, 13279.0], [71.7, 13282.0], [71.8, 13282.0], [71.9, 13285.0], [72.0, 13285.0], [72.1, 13288.0], [72.2, 13288.0], [72.3, 13291.0], [72.4, 13291.0], [72.5, 13298.0], [72.6, 13298.0], [72.7, 13302.0], [72.8, 13302.0], [72.9, 13306.0], [73.0, 13306.0], [73.1, 13310.0], [73.2, 13310.0], [73.3, 13315.0], [73.4, 13315.0], [73.5, 13315.0], [73.6, 13315.0], [73.7, 13320.0], [73.8, 13320.0], [73.9, 13326.0], [74.0, 13326.0], [74.1, 13331.0], [74.2, 13331.0], [74.3, 13332.0], [74.4, 13332.0], [74.5, 13337.0], [74.6, 13337.0], [74.7, 13343.0], [74.8, 13343.0], [74.9, 13345.0], [75.0, 13345.0], [75.1, 13351.0], [75.2, 13351.0], [75.3, 13354.0], [75.4, 13354.0], [75.5, 13358.0], [75.6, 13358.0], [75.7, 13361.0], [75.8, 13361.0], [75.9, 13365.0], [76.0, 13365.0], [76.1, 13369.0], [76.2, 13369.0], [76.3, 13375.0], [76.4, 13375.0], [76.5, 13376.0], [76.6, 13376.0], [76.7, 13382.0], [76.8, 13382.0], [76.9, 13384.0], [77.0, 13384.0], [77.1, 13388.0], [77.2, 13388.0], [77.3, 13392.0], [77.4, 13392.0], [77.5, 13393.0], [77.6, 13393.0], [77.7, 13397.0], [77.8, 13397.0], [77.9, 13404.0], [78.0, 13404.0], [78.1, 13407.0], [78.2, 13407.0], [78.3, 13412.0], [78.4, 13412.0], [78.5, 13412.0], [78.6, 13412.0], [78.7, 13420.0], [78.8, 13420.0], [78.9, 13421.0], [79.0, 13421.0], [79.1, 13427.0], [79.2, 13427.0], [79.3, 13429.0], [79.4, 13429.0], [79.5, 13436.0], [79.6, 13436.0], [79.7, 13439.0], [79.8, 13439.0], [79.9, 13440.0], [80.0, 13440.0], [80.1, 13444.0], [80.2, 13444.0], [80.3, 13448.0], [80.4, 13448.0], [80.5, 13452.0], [80.6, 13452.0], [80.7, 13454.0], [80.8, 13454.0], [80.9, 13460.0], [81.0, 13460.0], [81.1, 13463.0], [81.2, 13463.0], [81.3, 13467.0], [81.4, 13467.0], [81.5, 13472.0], [81.6, 13472.0], [81.7, 13475.0], [81.8, 13475.0], [81.9, 13479.0], [82.0, 13479.0], [82.1, 13483.0], [82.2, 13483.0], [82.3, 13487.0], [82.4, 13487.0], [82.5, 13490.0], [82.6, 13490.0], [82.7, 13496.0], [82.8, 13496.0], [82.9, 13499.0], [83.0, 13499.0], [83.1, 13503.0], [83.2, 13503.0], [83.3, 13507.0], [83.4, 13507.0], [83.5, 13511.0], [83.6, 13511.0], [83.7, 13515.0], [83.8, 13515.0], [83.9, 13520.0], [84.0, 13520.0], [84.1, 13522.0], [84.2, 13522.0], [84.3, 13527.0], [84.4, 13527.0], [84.5, 13530.0], [84.6, 13530.0], [84.7, 13535.0], [84.8, 13535.0], [84.9, 13539.0], [85.0, 13539.0], [85.1, 13543.0], [85.2, 13543.0], [85.3, 13547.0], [85.4, 13547.0], [85.5, 13550.0], [85.6, 13550.0], [85.7, 13554.0], [85.8, 13554.0], [85.9, 13558.0], [86.0, 13558.0], [86.1, 13562.0], [86.2, 13562.0], [86.3, 13566.0], [86.4, 13566.0], [86.5, 13570.0], [86.6, 13570.0], [86.7, 13575.0], [86.8, 13575.0], [86.9, 13579.0], [87.0, 13579.0], [87.1, 13582.0], [87.2, 13582.0], [87.3, 13586.0], [87.4, 13586.0], [87.5, 13589.0], [87.6, 13589.0], [87.7, 13593.0], [87.8, 13593.0], [87.9, 13598.0], [88.0, 13598.0], [88.1, 13601.0], [88.2, 13601.0], [88.3, 13603.0], [88.4, 13603.0], [88.5, 13610.0], [88.6, 13610.0], [88.7, 13611.0], [88.8, 13611.0], [88.9, 13615.0], [89.0, 13615.0], [89.1, 13619.0], [89.2, 13619.0], [89.3, 13623.0], [89.4, 13623.0], [89.5, 13629.0], [89.6, 13629.0], [89.7, 13631.0], [89.8, 13631.0], [89.9, 13637.0], [90.0, 13637.0], [90.1, 13638.0], [90.2, 13638.0], [90.3, 13646.0], [90.4, 13646.0], [90.5, 13650.0], [90.6, 13650.0], [90.7, 13654.0], [90.8, 13654.0], [90.9, 13655.0], [91.0, 13655.0], [91.1, 13659.0], [91.2, 13659.0], [91.3, 13662.0], [91.4, 13662.0], [91.5, 13670.0], [91.6, 13670.0], [91.7, 13670.0], [91.8, 13670.0], [91.9, 13678.0], [92.0, 13678.0], [92.1, 13679.0], [92.2, 13679.0], [92.3, 13683.0], [92.4, 13683.0], [92.5, 13688.0], [92.6, 13688.0], [92.7, 13690.0], [92.8, 13690.0], [92.9, 13697.0], [93.0, 13697.0], [93.1, 13698.0], [93.2, 13698.0], [93.3, 13703.0], [93.4, 13703.0], [93.5, 13707.0], [93.6, 13707.0], [93.7, 13714.0], [93.8, 13714.0], [93.9, 13715.0], [94.0, 13715.0], [94.1, 13718.0], [94.2, 13718.0], [94.3, 13722.0], [94.4, 13722.0], [94.5, 13726.0], [94.6, 13726.0], [94.7, 13731.0], [94.8, 13731.0], [94.9, 13735.0], [95.0, 13735.0], [95.1, 13739.0], [95.2, 13739.0], [95.3, 13743.0], [95.4, 13743.0], [95.5, 13747.0], [95.6, 13747.0], [95.7, 13754.0], [95.8, 13754.0], [95.9, 13760.0], [96.0, 13760.0], [96.1, 13762.0], [96.2, 13762.0], [96.3, 13767.0], [96.4, 13767.0], [96.5, 13770.0], [96.6, 13770.0], [96.7, 13775.0], [96.8, 13775.0], [96.9, 13779.0], [97.0, 13779.0], [97.1, 13782.0], [97.2, 13782.0], [97.3, 13787.0], [97.4, 13787.0], [97.5, 13789.0], [97.6, 13789.0], [97.7, 13793.0], [97.8, 13793.0], [97.9, 13797.0], [98.0, 13797.0], [98.1, 13802.0], [98.2, 13802.0], [98.3, 13810.0], [98.4, 13810.0], [98.5, 13814.0], [98.6, 13814.0], [98.7, 13817.0], [98.8, 13817.0], [98.9, 13821.0], [99.0, 13821.0], [99.1, 13825.0], [99.2, 13825.0], [99.3, 13829.0], [99.4, 13829.0], [99.5, 13834.0], [99.6, 13834.0], [99.7, 13838.0], [99.8, 13838.0], [99.9, 13860.0], [100.0, 13860.0]], "isOverall": false, "label": "config 3 req", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 500.0, "maxY": 27.0, "series": [{"data": [[12700.0, 3.0], [12900.0, 26.0], [12800.0, 20.0], [13300.0, 26.0], [13000.0, 25.0], [13200.0, 25.0], [13100.0, 26.0], [13700.0, 24.0], [13800.0, 10.0], [13600.0, 26.0], [13500.0, 25.0], [13400.0, 26.0], [1000.0, 3.0], [1100.0, 27.0], [1200.0, 27.0], [1300.0, 10.0], [1400.0, 1.0], [1800.0, 6.0], [1900.0, 5.0], [2400.0, 1.0], [2900.0, 5.0], [3000.0, 26.0], [3100.0, 26.0], [3300.0, 26.0], [3200.0, 27.0], [3400.0, 27.0], [3500.0, 16.0], [500.0, 5.0]], "isOverall": false, "label": "config 3 req", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 13800.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 38.0, "minX": 1.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 389.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 73.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 389.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 38.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 233.02600000000012, "minX": 1.7180556E12, "maxY": 233.02600000000012, "series": [{"data": [[1.7180556E12, 233.02600000000012]], "isOverall": false, "label": "config 3", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7180556E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 551.6, "minX": 10.0, "maxY": 13781.037037037035, "series": [{"data": [[10.0, 12979.2], [29.0, 13087.4], [30.0, 13054.0], [31.0, 13058.0], [32.0, 13062.0], [33.0, 13086.666666666666], [35.0, 13097.0], [36.0, 13105.5], [37.0, 13114.0], [39.0, 13142.0], [38.0, 13013.5], [41.0, 12915.5], [40.0, 13157.0], [42.0, 12946.2], [47.0, 12992.0], [48.0, 12984.2], [52.0, 13127.0], [55.0, 13001.0], [56.0, 13009.5], [67.0, 13068.0], [66.0, 13055.0], [71.0, 13119.0], [70.0, 13103.0], [68.0, 13082.0], [74.0, 13164.25], [73.0, 13145.5], [79.0, 13182.333333333334], [77.0, 13175.0], [82.0, 13214.75], [80.0, 13191.0], [85.0, 13342.714285714286], [84.0, 13282.333333333334], [95.0, 13202.0], [94.0, 13197.0], [98.0, 13214.0], [99.0, 13219.5], [102.0, 13340.0], [101.0, 13269.0], [100.0, 13239.0], [104.0, 13382.0], [110.0, 13255.333333333334], [112.0, 13331.714285714286], [123.0, 13232.0], [122.0, 13228.0], [125.0, 13337.0], [124.0, 13274.0], [134.0, 13303.0], [142.0, 12929.333333333334], [140.0, 13760.0], [139.0, 13434.333333333334], [137.0, 13410.333333333334], [136.0, 13394.0], [148.0, 551.6], [162.0, 12976.449999999999], [179.0, 13450.0], [178.0, 13441.5], [177.0, 13412.0], [190.0, 13506.6], [184.0, 13503.444444444445], [187.0, 13469.333333333334], [189.0, 13485.0], [198.0, 13537.0], [195.0, 13530.0], [193.0, 13527.0], [192.0, 13515.0], [207.0, 13582.0], [206.0, 13586.0], [205.0, 13568.0], [203.0, 13560.0], [202.0, 13554.0], [201.0, 13550.0], [200.0, 13545.0], [215.0, 13664.6], [210.0, 13652.4], [209.0, 13601.0], [208.0, 13593.333333333334], [255.0, 13627.75], [254.0, 13609.666666666666], [251.0, 13688.0], [258.0, 13679.666666666666], [271.0, 3028.1428571428573], [270.0, 2952.0], [263.0, 2906.0], [262.0, 13781.037037037035], [260.0, 13716.5], [259.0, 13702.666666666666], [257.0, 13660.5], [256.0, 13669.0], [287.0, 1408.2857142857144], [286.0, 2386.6666666666665], [285.0, 1869.6], [284.0, 1573.5], [282.0, 1089.0], [283.0, 2987.0], [294.0, 1170.0], [293.0, 2046.8181818181818], [303.0, 3091.0], [302.0, 3087.0], [301.0, 3074.0], [288.0, 3070.0], [317.0, 2402.0], [316.0, 1209.3333333333333], [304.0, 3117.625], [314.0, 2172.25], [313.0, 1189.6666666666667], [310.0, 1182.0], [308.0, 1178.0], [319.0, 3223.0], [318.0, 3215.0], [315.0, 3162.5], [333.0, 1333.4], [328.0, 1308.0], [327.0, 1280.2], [321.0, 1253.0], [335.0, 2855.75], [326.0, 3202.0], [320.0, 3240.6666666666665], [347.0, 2580.25], [346.0, 3259.0], [345.0, 3223.0], [344.0, 3202.0], [336.0, 1896.6666666666667], [367.0, 3339.25], [363.0, 3323.0], [362.0, 3294.714285714286], [352.0, 3291.8], [371.0, 1499.0], [377.0, 3393.6], [372.0, 2792.6], [399.0, 3429.75], [398.0, 3374.0], [394.0, 3401.5], [388.0, 3425.1111111111113], [386.0, 3370.0], [409.0, 3487.6], [404.0, 3484.6], [427.0, 2435.0], [426.0, 3545.1428571428573], [419.0, 3505.8000000000006]], "isOverall": false, "label": "config 3 req", "isController": false}, {"data": [[233.02600000000012, 8199.427999999996]], "isOverall": false, "label": "config 3 req-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 427.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 1316.6666666666667, "minX": 1.7180556E12, "maxY": 1927.0, "series": [{"data": [[1.7180556E12, 1927.0]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.7180556E12, 1316.6666666666667]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7180556E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 8199.427999999996, "minX": 1.7180556E12, "maxY": 8199.427999999996, "series": [{"data": [[1.7180556E12, 8199.427999999996]], "isOverall": false, "label": "config 3 req", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7180556E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 8199.407999999998, "minX": 1.7180556E12, "maxY": 8199.407999999998, "series": [{"data": [[1.7180556E12, 8199.407999999998]], "isOverall": false, "label": "config 3 req", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7180556E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 0.27399999999999997, "minX": 1.7180556E12, "maxY": 0.27399999999999997, "series": [{"data": [[1.7180556E12, 0.27399999999999997]], "isOverall": false, "label": "config 3 req", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7180556E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 511.0, "minX": 1.7180556E12, "maxY": 13860.0, "series": [{"data": [[1.7180556E12, 13860.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.7180556E12, 13654.7]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.7180556E12, 13826.48]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.7180556E12, 13746.4]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.7180556E12, 511.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.7180556E12, 12908.5]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7180556E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 550.0, "minX": 1.0, "maxY": 13376.0, "series": [{"data": [[1.0, 2435.0], [262.0, 13376.0], [68.0, 1423.0], [5.0, 550.0], [96.0, 3149.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[262.0, 12848.0], [68.0, 1955.0], [96.0, 1896.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 262.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 550.0, "minX": 1.0, "maxY": 13376.0, "series": [{"data": [[1.0, 2434.0], [262.0, 13376.0], [68.0, 1423.0], [5.0, 550.0], [96.0, 3149.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[262.0, 12848.0], [68.0, 1955.0], [96.0, 1896.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 262.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 8.333333333333334, "minX": 1.7180556E12, "maxY": 8.333333333333334, "series": [{"data": [[1.7180556E12, 8.333333333333334]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7180556E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 0.18333333333333332, "minX": 1.7180556E12, "maxY": 7.7, "series": [{"data": [[1.7180556E12, 7.7]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.7180556E12, 0.45]], "isOverall": false, "label": "500", "isController": false}, {"data": [[1.7180556E12, 0.18333333333333332]], "isOverall": false, "label": "503", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7180556E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 0.6333333333333333, "minX": 1.7180556E12, "maxY": 7.7, "series": [{"data": [[1.7180556E12, 7.7]], "isOverall": false, "label": "config 3 req-success", "isController": false}, {"data": [[1.7180556E12, 0.6333333333333333]], "isOverall": false, "label": "config 3 req-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7180556E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 0.6333333333333333, "minX": 1.7180556E12, "maxY": 7.7, "series": [{"data": [[1.7180556E12, 7.7]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.7180556E12, 0.6333333333333333]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7180556E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

