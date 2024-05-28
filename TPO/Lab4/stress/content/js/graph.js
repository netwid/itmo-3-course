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
        data: {"result": {"minY": 1577.0, "minX": 0.0, "maxY": 17831.0, "series": [{"data": [[0.0, 1577.0], [0.1, 1577.0], [0.2, 1581.0], [0.3, 1581.0], [0.4, 1586.0], [0.5, 1586.0], [0.6, 1586.0], [0.7, 2555.0], [0.8, 2559.0], [0.9, 2559.0], [1.0, 2568.0], [1.1, 2568.0], [1.2, 2572.0], [1.3, 2572.0], [1.4, 2576.0], [1.5, 2576.0], [1.6, 2579.0], [1.7, 2579.0], [1.8, 2583.0], [1.9, 2583.0], [2.0, 2586.0], [2.1, 2586.0], [2.2, 2590.0], [2.3, 2590.0], [2.4, 2594.0], [2.5, 2594.0], [2.6, 2598.0], [2.7, 2598.0], [2.8, 2598.0], [2.9, 2602.0], [3.0, 2602.0], [3.1, 2607.0], [3.2, 2607.0], [3.3, 2611.0], [3.4, 2611.0], [3.5, 2612.0], [3.6, 2612.0], [3.7, 2615.0], [3.8, 2615.0], [3.9, 2617.0], [4.0, 2617.0], [4.1, 2619.0], [4.2, 2619.0], [4.3, 2623.0], [4.4, 2623.0], [4.5, 2624.0], [4.6, 2624.0], [4.7, 2625.0], [4.8, 2625.0], [4.9, 2626.0], [5.0, 2626.0], [5.1, 2629.0], [5.2, 2629.0], [5.3, 2629.0], [5.4, 2629.0], [5.5, 2633.0], [5.6, 2633.0], [5.7, 2635.0], [5.8, 2635.0], [5.9, 2637.0], [6.0, 2637.0], [6.1, 2639.0], [6.2, 2639.0], [6.3, 2641.0], [6.4, 2641.0], [6.5, 2642.0], [6.6, 2642.0], [6.7, 2643.0], [6.8, 2643.0], [6.9, 2645.0], [7.0, 2645.0], [7.1, 2647.0], [7.2, 2647.0], [7.3, 2648.0], [7.4, 2648.0], [7.5, 2651.0], [7.6, 2651.0], [7.7, 2653.0], [7.8, 2653.0], [7.9, 2655.0], [8.0, 2655.0], [8.1, 2657.0], [8.2, 2657.0], [8.3, 2660.0], [8.4, 2660.0], [8.5, 2661.0], [8.6, 2661.0], [8.7, 2664.0], [8.8, 2665.0], [8.9, 2665.0], [9.0, 2668.0], [9.1, 2668.0], [9.2, 2669.0], [9.3, 2669.0], [9.4, 2672.0], [9.5, 2672.0], [9.6, 2673.0], [9.7, 2673.0], [9.8, 2676.0], [9.9, 2676.0], [10.0, 2677.0], [10.1, 2677.0], [10.2, 2679.0], [10.3, 2679.0], [10.4, 2681.0], [10.5, 2681.0], [10.6, 2683.0], [10.7, 2683.0], [10.8, 2684.0], [10.9, 2684.0], [11.0, 2688.0], [11.1, 2688.0], [11.2, 2691.0], [11.3, 2691.0], [11.4, 2692.0], [11.5, 2692.0], [11.6, 2696.0], [11.7, 2696.0], [11.8, 2700.0], [11.9, 2700.0], [12.0, 2704.0], [12.1, 2704.0], [12.2, 2709.0], [12.3, 2709.0], [12.4, 2713.0], [12.5, 2713.0], [12.6, 2717.0], [12.7, 2717.0], [12.8, 2720.0], [12.9, 2720.0], [13.0, 2724.0], [13.1, 2724.0], [13.2, 2728.0], [13.3, 2728.0], [13.4, 2731.0], [13.5, 2731.0], [13.6, 2735.0], [13.7, 2735.0], [13.8, 2739.0], [13.9, 2739.0], [14.0, 2743.0], [14.1, 2743.0], [14.2, 2747.0], [14.3, 2747.0], [14.4, 2751.0], [14.5, 2751.0], [14.6, 2756.0], [14.7, 2756.0], [14.8, 2760.0], [14.9, 2760.0], [15.0, 2764.0], [15.1, 2764.0], [15.2, 2768.0], [15.3, 2768.0], [15.4, 2772.0], [15.5, 2772.0], [15.6, 2776.0], [15.7, 2776.0], [15.8, 2780.0], [15.9, 2780.0], [16.0, 2783.0], [16.1, 2783.0], [16.2, 2787.0], [16.3, 2787.0], [16.4, 2791.0], [16.5, 2791.0], [16.6, 2795.0], [16.7, 2795.0], [16.8, 2799.0], [16.9, 2799.0], [17.0, 4314.0], [17.1, 4314.0], [17.2, 5464.0], [17.3, 5464.0], [17.4, 5467.0], [17.5, 5467.0], [17.6, 5468.0], [17.7, 5468.0], [17.8, 5472.0], [17.9, 5472.0], [18.0, 5475.0], [18.1, 5475.0], [18.2, 5483.0], [18.3, 5483.0], [18.4, 5483.0], [18.5, 5483.0], [18.6, 5487.0], [18.7, 5487.0], [18.8, 5487.0], [18.9, 5487.0], [19.0, 5491.0], [19.1, 5491.0], [19.2, 5492.0], [19.3, 5492.0], [19.4, 5496.0], [19.5, 5496.0], [19.6, 5500.0], [19.7, 5500.0], [19.8, 5504.0], [19.9, 5504.0], [20.0, 5508.0], [20.1, 5508.0], [20.2, 5512.0], [20.3, 5512.0], [20.4, 5516.0], [20.5, 5516.0], [20.6, 5521.0], [20.7, 5521.0], [20.8, 5524.0], [20.9, 5524.0], [21.0, 5531.0], [21.1, 5531.0], [21.2, 5532.0], [21.3, 5532.0], [21.4, 6538.0], [21.5, 6538.0], [21.6, 6550.0], [21.7, 6550.0], [21.8, 6589.0], [21.9, 6589.0], [22.0, 6616.0], [22.1, 6616.0], [22.2, 6625.0], [22.3, 6625.0], [22.4, 6629.0], [22.5, 6629.0], [22.6, 6633.0], [22.7, 6633.0], [22.8, 6638.0], [22.9, 6638.0], [23.0, 6642.0], [23.1, 6642.0], [23.2, 6654.0], [23.3, 6654.0], [23.4, 6657.0], [23.5, 6657.0], [23.6, 6661.0], [23.7, 6661.0], [23.8, 6664.0], [23.9, 6664.0], [24.0, 6681.0], [24.1, 6681.0], [24.2, 6690.0], [24.3, 6690.0], [24.4, 6702.0], [24.5, 6702.0], [24.6, 6717.0], [24.7, 6717.0], [24.8, 6733.0], [24.9, 6733.0], [25.0, 6737.0], [25.1, 6737.0], [25.2, 6741.0], [25.3, 6741.0], [25.4, 6749.0], [25.5, 6749.0], [25.6, 6750.0], [25.7, 6750.0], [25.8, 6761.0], [25.9, 6761.0], [26.0, 6761.0], [26.1, 6761.0], [26.2, 6765.0], [26.3, 6765.0], [26.4, 6793.0], [26.5, 6793.0], [26.6, 6800.0], [26.7, 6800.0], [26.8, 6812.0], [26.9, 6812.0], [27.0, 6816.0], [27.1, 6816.0], [27.2, 6820.0], [27.3, 6820.0], [27.4, 6828.0], [27.5, 6828.0], [27.6, 6829.0], [27.7, 6829.0], [27.8, 6832.0], [27.9, 6832.0], [28.0, 6840.0], [28.1, 6840.0], [28.2, 6845.0], [28.3, 6845.0], [28.4, 6849.0], [28.5, 6849.0], [28.6, 6856.0], [28.7, 6856.0], [28.8, 6857.0], [28.9, 6857.0], [29.0, 6858.0], [29.1, 6858.0], [29.2, 6860.0], [29.3, 6860.0], [29.4, 6869.0], [29.5, 6869.0], [29.6, 6873.0], [29.7, 6873.0], [29.8, 6876.0], [29.9, 6876.0], [30.0, 6880.0], [30.1, 6880.0], [30.2, 6884.0], [30.3, 6884.0], [30.4, 6889.0], [30.5, 6889.0], [30.6, 6889.0], [30.7, 6889.0], [30.8, 6893.0], [30.9, 6893.0], [31.0, 6897.0], [31.1, 6897.0], [31.2, 6902.0], [31.3, 6902.0], [31.4, 6905.0], [31.5, 6905.0], [31.6, 6908.0], [31.7, 6908.0], [31.8, 6912.0], [31.9, 6912.0], [32.0, 6916.0], [32.1, 6916.0], [32.2, 6920.0], [32.3, 6920.0], [32.4, 6924.0], [32.5, 6924.0], [32.6, 6928.0], [32.7, 6928.0], [32.8, 6932.0], [32.9, 6932.0], [33.0, 6936.0], [33.1, 6936.0], [33.2, 6941.0], [33.3, 6941.0], [33.4, 6941.0], [33.5, 6941.0], [33.6, 6945.0], [33.7, 6945.0], [33.8, 6946.0], [33.9, 6946.0], [34.0, 6949.0], [34.1, 6949.0], [34.2, 6950.0], [34.3, 6950.0], [34.4, 6953.0], [34.5, 6953.0], [34.6, 6954.0], [34.7, 6954.0], [34.8, 6957.0], [34.9, 6957.0], [35.0, 6957.0], [35.1, 6957.0], [35.2, 6958.0], [35.3, 6958.0], [35.4, 6960.0], [35.5, 6960.0], [35.6, 6961.0], [35.7, 6961.0], [35.8, 6962.0], [35.9, 6962.0], [36.0, 6964.0], [36.1, 6964.0], [36.2, 6968.0], [36.3, 6968.0], [36.4, 6969.0], [36.5, 6969.0], [36.6, 6972.0], [36.7, 6972.0], [36.8, 6973.0], [36.9, 6973.0], [37.0, 6973.0], [37.1, 6973.0], [37.2, 6976.0], [37.3, 6976.0], [37.4, 6977.0], [37.5, 6977.0], [37.6, 6977.0], [37.7, 6977.0], [37.8, 6980.0], [37.9, 6980.0], [38.0, 6981.0], [38.1, 6981.0], [38.2, 6985.0], [38.3, 6985.0], [38.4, 6987.0], [38.5, 6987.0], [38.6, 6990.0], [38.7, 6990.0], [38.8, 6992.0], [38.9, 6992.0], [39.0, 6993.0], [39.1, 6993.0], [39.2, 6997.0], [39.3, 6997.0], [39.4, 7000.0], [39.5, 7000.0], [39.6, 7002.0], [39.7, 7002.0], [39.8, 7004.0], [39.9, 7004.0], [40.0, 7005.0], [40.1, 7005.0], [40.2, 7009.0], [40.3, 7009.0], [40.4, 7009.0], [40.5, 7010.0], [40.6, 7010.0], [40.7, 7014.0], [40.8, 7014.0], [40.9, 7015.0], [41.0, 7015.0], [41.1, 7017.0], [41.2, 7017.0], [41.3, 7025.0], [41.4, 7025.0], [41.5, 7026.0], [41.6, 7026.0], [41.7, 7026.0], [41.8, 7026.0], [41.9, 7029.0], [42.0, 7029.0], [42.1, 7029.0], [42.2, 7029.0], [42.3, 7033.0], [42.4, 7033.0], [42.5, 7036.0], [42.6, 7036.0], [42.7, 7038.0], [42.8, 7038.0], [42.9, 7038.0], [43.0, 7038.0], [43.1, 7040.0], [43.2, 7040.0], [43.3, 7040.0], [43.4, 7040.0], [43.5, 7042.0], [43.6, 7042.0], [43.7, 7043.0], [43.8, 7043.0], [43.9, 7044.0], [44.0, 7044.0], [44.1, 7046.0], [44.2, 7046.0], [44.3, 7046.0], [44.4, 7046.0], [44.5, 7047.0], [44.6, 7047.0], [44.7, 7048.0], [44.8, 7048.0], [44.9, 7050.0], [45.0, 7050.0], [45.1, 7050.0], [45.2, 7050.0], [45.3, 7051.0], [45.4, 7051.0], [45.5, 7054.0], [45.6, 7054.0], [45.7, 7054.0], [45.8, 7054.0], [45.9, 7054.0], [46.0, 7054.0], [46.1, 7055.0], [46.2, 7055.0], [46.3, 7056.0], [46.4, 7056.0], [46.5, 7058.0], [46.6, 7058.0], [46.7, 7058.0], [46.8, 7058.0], [46.9, 7059.0], [47.0, 7059.0], [47.1, 7060.0], [47.2, 7060.0], [47.3, 7060.0], [47.4, 7060.0], [47.5, 7061.0], [47.6, 7061.0], [47.7, 7061.0], [47.8, 7061.0], [47.9, 7063.0], [48.0, 7063.0], [48.1, 7063.0], [48.2, 7063.0], [48.3, 7063.0], [48.4, 7063.0], [48.5, 7064.0], [48.6, 7064.0], [48.7, 7067.0], [48.8, 7067.0], [48.9, 7067.0], [49.0, 7067.0], [49.1, 7067.0], [49.2, 7067.0], [49.3, 7069.0], [49.4, 7069.0], [49.5, 7071.0], [49.6, 7071.0], [49.7, 7071.0], [49.8, 7071.0], [49.9, 7075.0], [50.0, 7075.0], [50.1, 7076.0], [50.2, 7076.0], [50.3, 7079.0], [50.4, 7079.0], [50.5, 7082.0], [50.6, 7082.0], [50.7, 7084.0], [50.8, 7084.0], [50.9, 7086.0], [51.0, 7086.0], [51.1, 7086.0], [51.2, 7086.0], [51.3, 7089.0], [51.4, 7089.0], [51.5, 7090.0], [51.6, 7090.0], [51.7, 7094.0], [51.8, 7094.0], [51.9, 7094.0], [52.0, 7094.0], [52.1, 7097.0], [52.2, 7097.0], [52.3, 7101.0], [52.4, 7101.0], [52.5, 7105.0], [52.6, 7105.0], [52.7, 7110.0], [52.8, 7110.0], [52.9, 7114.0], [53.0, 7114.0], [53.1, 7118.0], [53.2, 7118.0], [53.3, 7130.0], [53.4, 7130.0], [53.5, 16528.0], [53.6, 16528.0], [53.7, 16536.0], [53.8, 16536.0], [53.9, 16545.0], [54.0, 16545.0], [54.1, 16564.0], [54.2, 16564.0], [54.3, 16572.0], [54.4, 16572.0], [54.5, 16576.0], [54.6, 16576.0], [54.7, 16585.0], [54.8, 16585.0], [54.9, 16613.0], [55.0, 16613.0], [55.1, 16616.0], [55.2, 16616.0], [55.3, 16620.0], [55.4, 16620.0], [55.5, 16628.0], [55.6, 16628.0], [55.7, 16636.0], [55.8, 16636.0], [55.9, 16645.0], [56.0, 16645.0], [56.1, 16649.0], [56.2, 16649.0], [56.3, 16651.0], [56.4, 16651.0], [56.5, 16655.0], [56.6, 16655.0], [56.7, 16879.0], [56.8, 16879.0], [56.9, 16899.0], [57.0, 16899.0], [57.1, 16904.0], [57.2, 16904.0], [57.3, 16908.0], [57.4, 16908.0], [57.5, 16912.0], [57.6, 16912.0], [57.7, 16915.0], [57.8, 16915.0], [57.9, 16920.0], [58.0, 16920.0], [58.1, 16923.0], [58.2, 16923.0], [58.3, 16926.0], [58.4, 16926.0], [58.5, 17008.0], [58.6, 17008.0], [58.7, 17016.0], [58.8, 17016.0], [58.9, 17021.0], [59.0, 17021.0], [59.1, 17021.0], [59.2, 17021.0], [59.3, 17025.0], [59.4, 17025.0], [59.5, 17028.0], [59.6, 17028.0], [59.7, 17029.0], [59.8, 17029.0], [59.9, 17031.0], [60.0, 17031.0], [60.1, 17033.0], [60.2, 17033.0], [60.3, 17035.0], [60.4, 17035.0], [60.5, 17040.0], [60.6, 17040.0], [60.7, 17040.0], [60.8, 17040.0], [60.9, 17044.0], [61.0, 17044.0], [61.1, 17047.0], [61.2, 17047.0], [61.3, 17048.0], [61.4, 17048.0], [61.5, 17048.0], [61.6, 17048.0], [61.7, 17051.0], [61.8, 17051.0], [61.9, 17052.0], [62.0, 17052.0], [62.1, 17053.0], [62.2, 17053.0], [62.3, 17056.0], [62.4, 17056.0], [62.5, 17057.0], [62.6, 17057.0], [62.7, 17060.0], [62.8, 17060.0], [62.9, 17060.0], [63.0, 17060.0], [63.1, 17064.0], [63.2, 17064.0], [63.3, 17068.0], [63.4, 17068.0], [63.5, 17068.0], [63.6, 17068.0], [63.7, 17071.0], [63.8, 17071.0], [63.9, 17072.0], [64.0, 17072.0], [64.1, 17075.0], [64.2, 17075.0], [64.3, 17076.0], [64.4, 17076.0], [64.5, 17080.0], [64.6, 17080.0], [64.7, 17083.0], [64.8, 17083.0], [64.9, 17083.0], [65.0, 17083.0], [65.1, 17087.0], [65.2, 17087.0], [65.3, 17091.0], [65.4, 17091.0], [65.5, 17091.0], [65.6, 17091.0], [65.7, 17095.0], [65.8, 17095.0], [65.9, 17099.0], [66.0, 17099.0], [66.1, 17103.0], [66.2, 17103.0], [66.3, 17104.0], [66.4, 17104.0], [66.5, 17107.0], [66.6, 17107.0], [66.7, 17108.0], [66.8, 17108.0], [66.9, 17112.0], [67.0, 17112.0], [67.1, 17116.0], [67.2, 17116.0], [67.3, 17116.0], [67.4, 17116.0], [67.5, 17120.0], [67.6, 17120.0], [67.7, 17124.0], [67.8, 17124.0], [67.9, 17127.0], [68.0, 17127.0], [68.1, 17128.0], [68.2, 17128.0], [68.3, 17131.0], [68.4, 17131.0], [68.5, 17132.0], [68.6, 17132.0], [68.7, 17135.0], [68.8, 17135.0], [68.9, 17135.0], [69.0, 17135.0], [69.1, 17139.0], [69.2, 17139.0], [69.3, 17139.0], [69.4, 17139.0], [69.5, 17143.0], [69.6, 17143.0], [69.7, 17143.0], [69.8, 17143.0], [69.9, 17147.0], [70.0, 17147.0], [70.1, 17148.0], [70.2, 17148.0], [70.3, 17151.0], [70.4, 17151.0], [70.5, 17151.0], [70.6, 17151.0], [70.7, 17155.0], [70.8, 17155.0], [70.9, 17160.0], [71.0, 17160.0], [71.1, 17160.0], [71.2, 17160.0], [71.3, 17164.0], [71.4, 17164.0], [71.5, 17168.0], [71.6, 17168.0], [71.7, 17168.0], [71.8, 17168.0], [71.9, 17172.0], [72.0, 17172.0], [72.1, 17175.0], [72.2, 17175.0], [72.3, 17176.0], [72.4, 17176.0], [72.5, 17179.0], [72.6, 17179.0], [72.7, 17179.0], [72.8, 17179.0], [72.9, 17183.0], [73.0, 17183.0], [73.1, 17184.0], [73.2, 17184.0], [73.3, 17187.0], [73.4, 17187.0], [73.5, 17187.0], [73.6, 17187.0], [73.7, 17191.0], [73.8, 17191.0], [73.9, 17191.0], [74.0, 17191.0], [74.1, 17195.0], [74.2, 17195.0], [74.3, 17195.0], [74.4, 17195.0], [74.5, 17198.0], [74.6, 17198.0], [74.7, 17199.0], [74.8, 17199.0], [74.9, 17203.0], [75.0, 17203.0], [75.1, 17207.0], [75.2, 17207.0], [75.3, 17211.0], [75.4, 17211.0], [75.5, 17218.0], [75.6, 17218.0], [75.7, 17219.0], [75.8, 17219.0], [75.9, 17226.0], [76.0, 17226.0], [76.1, 17231.0], [76.2, 17231.0], [76.3, 17235.0], [76.4, 17235.0], [76.5, 17238.0], [76.6, 17238.0], [76.7, 17239.0], [76.8, 17239.0], [76.9, 17242.0], [77.0, 17242.0], [77.1, 17243.0], [77.2, 17243.0], [77.3, 17246.0], [77.4, 17246.0], [77.5, 17247.0], [77.6, 17247.0], [77.7, 17250.0], [77.8, 17250.0], [77.9, 17255.0], [78.0, 17255.0], [78.1, 17255.0], [78.2, 17255.0], [78.3, 17258.0], [78.4, 17258.0], [78.5, 17259.0], [78.6, 17259.0], [78.7, 17262.0], [78.8, 17262.0], [78.9, 17266.0], [79.0, 17266.0], [79.1, 17267.0], [79.2, 17267.0], [79.3, 17270.0], [79.4, 17270.0], [79.5, 17271.0], [79.6, 17271.0], [79.7, 17274.0], [79.8, 17274.0], [79.9, 17275.0], [80.0, 17275.0], [80.1, 17279.0], [80.2, 17279.0], [80.3, 17282.0], [80.4, 17282.0], [80.5, 17283.0], [80.6, 17283.0], [80.7, 17287.0], [80.8, 17287.0], [80.9, 17291.0], [81.0, 17291.0], [81.1, 17295.0], [81.2, 17295.0], [81.3, 17299.0], [81.4, 17299.0], [81.5, 17302.0], [81.6, 17302.0], [81.7, 17306.0], [81.8, 17306.0], [81.9, 17307.0], [82.0, 17307.0], [82.1, 17310.0], [82.2, 17310.0], [82.3, 17313.0], [82.4, 17313.0], [82.5, 17317.0], [82.6, 17317.0], [82.7, 17321.0], [82.8, 17321.0], [82.9, 17325.0], [83.0, 17325.0], [83.1, 17329.0], [83.2, 17329.0], [83.3, 17334.0], [83.4, 17334.0], [83.5, 17338.0], [83.6, 17338.0], [83.7, 17338.0], [83.8, 17338.0], [83.9, 17342.0], [84.0, 17342.0], [84.1, 17346.0], [84.2, 17346.0], [84.3, 17349.0], [84.4, 17349.0], [84.5, 17353.0], [84.6, 17353.0], [84.7, 17357.0], [84.8, 17357.0], [84.9, 17361.0], [85.0, 17361.0], [85.1, 17365.0], [85.2, 17365.0], [85.3, 17369.0], [85.4, 17369.0], [85.5, 17371.0], [85.6, 17371.0], [85.7, 17374.0], [85.8, 17374.0], [85.9, 17377.0], [86.0, 17377.0], [86.1, 17381.0], [86.2, 17381.0], [86.3, 17386.0], [86.4, 17386.0], [86.5, 17390.0], [86.6, 17390.0], [86.7, 17394.0], [86.8, 17394.0], [86.9, 17398.0], [87.0, 17398.0], [87.1, 17401.0], [87.2, 17401.0], [87.3, 17405.0], [87.4, 17405.0], [87.5, 17410.0], [87.6, 17410.0], [87.7, 17413.0], [87.8, 17413.0], [87.9, 17417.0], [88.0, 17417.0], [88.1, 17421.0], [88.2, 17421.0], [88.3, 17425.0], [88.4, 17425.0], [88.5, 17442.0], [88.6, 17442.0], [88.7, 17593.0], [88.8, 17593.0], [88.9, 17606.0], [89.0, 17606.0], [89.1, 17614.0], [89.2, 17614.0], [89.3, 17618.0], [89.4, 17618.0], [89.5, 17621.0], [89.6, 17621.0], [89.7, 17624.0], [89.8, 17624.0], [89.9, 17629.0], [90.0, 17629.0], [90.1, 17632.0], [90.2, 17632.0], [90.3, 17636.0], [90.4, 17636.0], [90.5, 17640.0], [90.6, 17640.0], [90.7, 17644.0], [90.8, 17644.0], [90.9, 17648.0], [91.0, 17648.0], [91.1, 17652.0], [91.2, 17652.0], [91.3, 17657.0], [91.4, 17657.0], [91.5, 17661.0], [91.6, 17661.0], [91.7, 17665.0], [91.8, 17665.0], [91.9, 17669.0], [92.0, 17669.0], [92.1, 17672.0], [92.2, 17672.0], [92.3, 17676.0], [92.4, 17676.0], [92.5, 17680.0], [92.6, 17680.0], [92.7, 17684.0], [92.8, 17684.0], [92.9, 17688.0], [93.0, 17688.0], [93.1, 17692.0], [93.2, 17692.0], [93.3, 17696.0], [93.4, 17696.0], [93.5, 17701.0], [93.6, 17701.0], [93.7, 17705.0], [93.8, 17705.0], [93.9, 17709.0], [94.0, 17709.0], [94.1, 17713.0], [94.2, 17713.0], [94.3, 17716.0], [94.4, 17716.0], [94.5, 17721.0], [94.6, 17721.0], [94.7, 17724.0], [94.8, 17724.0], [94.9, 17728.0], [95.0, 17728.0], [95.1, 17732.0], [95.2, 17732.0], [95.3, 17736.0], [95.4, 17736.0], [95.5, 17741.0], [95.6, 17741.0], [95.7, 17745.0], [95.8, 17745.0], [95.9, 17749.0], [96.0, 17749.0], [96.1, 17753.0], [96.2, 17753.0], [96.3, 17757.0], [96.4, 17757.0], [96.5, 17759.0], [96.6, 17759.0], [96.7, 17764.0], [96.8, 17764.0], [96.9, 17767.0], [97.0, 17767.0], [97.1, 17771.0], [97.2, 17771.0], [97.3, 17775.0], [97.4, 17775.0], [97.5, 17779.0], [97.6, 17779.0], [97.7, 17784.0], [97.8, 17784.0], [97.9, 17788.0], [98.0, 17788.0], [98.1, 17792.0], [98.2, 17792.0], [98.3, 17796.0], [98.4, 17796.0], [98.5, 17800.0], [98.6, 17800.0], [98.7, 17804.0], [98.8, 17804.0], [98.9, 17807.0], [99.0, 17807.0], [99.1, 17812.0], [99.2, 17812.0], [99.3, 17815.0], [99.4, 17815.0], [99.5, 17819.0], [99.6, 17819.0], [99.7, 17823.0], [99.8, 17823.0], [99.9, 17831.0], [100.0, 17831.0]], "isOverall": false, "label": "config 2 req", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 1500.0, "maxY": 64.0, "series": [{"data": [[17300.0, 28.0], [17200.0, 33.0], [17100.0, 44.0], [17000.0, 38.0], [16500.0, 7.0], [16600.0, 9.0], [17400.0, 8.0], [16800.0, 2.0], [16900.0, 7.0], [17700.0, 25.0], [17800.0, 8.0], [17600.0, 23.0], [17500.0, 1.0], [1500.0, 3.0], [2500.0, 11.0], [2600.0, 45.0], [2700.0, 26.0], [4300.0, 1.0], [5500.0, 9.0], [5400.0, 12.0], [6500.0, 3.0], [6600.0, 12.0], [6900.0, 41.0], [6800.0, 23.0], [6700.0, 11.0], [7000.0, 64.0], [7100.0, 6.0]], "isOverall": false, "label": "config 2 req", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 17800.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 76.0, "minX": 2.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 424.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 424.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 76.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 261.2999999999997, "minX": 1.71653766E12, "maxY": 261.2999999999997, "series": [{"data": [[1.71653766E12, 261.2999999999997]], "isOverall": false, "label": "config 2", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71653766E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 1581.3333333333333, "minX": 37.0, "maxY": 17789.8, "series": [{"data": [[37.0, 17593.0], [39.0, 17606.0], [41.0, 17622.5], [40.0, 17616.0], [43.0, 17642.0], [42.0, 17632.333333333332], [45.0, 17667.0], [44.0, 17654.5], [46.0, 17672.0], [47.0, 17682.0], [48.0, 17692.0], [49.0, 17698.5], [50.0, 17707.0], [51.0, 17716.666666666668], [53.0, 17738.5], [52.0, 17726.0], [54.0, 17749.0], [57.0, 17789.8], [66.0, 16909.555555555555], [86.0, 17231.0], [85.0, 17226.0], [84.0, 17218.0], [91.0, 17239.0], [88.0, 17235.0], [95.0, 17266.0], [94.0, 17258.333333333332], [93.0, 17248.5], [92.0, 17243.0], [99.0, 17291.0], [98.0, 17281.0], [97.0, 17272.0], [103.0, 17300.5], [107.0, 17333.666666666668], [106.0, 17321.0], [105.0, 17313.0], [104.0, 17308.5], [108.0, 17342.0], [115.0, 17359.0], [114.0, 17349.333333333332], [119.0, 17406.384615384613], [118.0, 17377.0], [117.0, 17371.5], [116.0, 17365.0], [128.0, 16634.777777777777], [142.0, 16795.78571428571], [175.0, 17070.0], [174.0, 17060.333333333332], [173.0, 17048.333333333332], [171.0, 17030.0], [183.0, 17131.333333333332], [181.0, 17122.0], [180.0, 17111.666666666668], [178.0, 17103.0], [177.0, 17095.0], [176.0, 17081.25], [185.0, 17173.428571428572], [184.0, 17141.0], [207.0, 17047.0], [206.0, 17035.0], [205.0, 17029.5], [204.0, 17008.0], [214.0, 17116.0], [213.0, 17101.0], [212.0, 17083.0], [211.0, 17071.666666666668], [210.0, 17060.0], [209.0, 17056.0], [208.0, 17051.0], [223.0, 17200.5], [221.0, 17195.0], [220.0, 17168.5], [219.0, 17137.0], [218.0, 17131.0], [216.0, 17128.0], [231.0, 17219.0], [228.0, 17211.0], [226.0, 17207.0], [233.0, 17338.0], [232.0, 17273.81818181818], [247.0, 6639.25], [249.0, 6753.222222222222], [248.0, 6673.666666666667], [267.0, 6806.428571428572], [265.0, 6654.0], [264.0, 6550.0], [258.0, 6735.555555555556], [303.0, 6891.0], [302.0, 6882.0], [301.0, 6864.333333333333], [300.0, 6849.0], [299.0, 6842.5], [298.0, 6832.0], [297.0, 6824.0], [296.0, 6816.0], [309.0, 6984.615384615386], [308.0, 6953.0], [307.0, 6938.5], [306.0, 6926.0], [305.0, 6916.0], [304.0, 6903.333333333333], [320.0, 7001.999999999999], [349.0, 7069.0], [344.0, 7029.357142857144], [343.0, 6985.5], [341.0, 6975.0], [340.0, 6958.0], [339.0, 6950.0], [338.0, 6943.5], [366.0, 7108.0], [365.0, 7082.0], [364.0, 7075.714285714286], [362.0, 7054.0], [380.0, 7072.833333333333], [374.0, 7055.5], [373.0, 7038.0], [372.0, 7029.0], [371.0, 7026.0], [397.0, 1581.3333333333333], [399.0, 5492.0], [398.0, 5485.5], [391.0, 7061.5], [387.0, 5477.142857142858], [412.0, 7056.666666666666], [415.0, 4314.0], [414.0, 6538.0], [413.0, 7040.0], [411.0, 7055.0], [405.0, 5525.666666666667], [402.0, 5519.666666666667], [401.0, 5504.0], [400.0, 5488.666666666667], [431.0, 2656.1875], [443.0, 2559.0], [442.0, 2555.0], [435.0, 2628.25], [453.0, 2616.8333333333335], [448.0, 2577.333333333333], [450.0, 2592.0], [451.0, 2598.0], [452.0, 2602.0], [495.0, 2702.0], [494.0, 2692.0], [493.0, 2682.5], [492.0, 2675.0], [491.0, 2665.0], [490.0, 2652.6666666666665], [489.0, 2645.0], [488.0, 2635.6666666666665], [487.0, 2633.0], [497.0, 2755.6086956521744], [496.0, 2709.0]], "isOverall": false, "label": "config 2 req", "isController": false}, {"data": [[261.2999999999997, 10957.906000000003]], "isOverall": false, "label": "config 2 req-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 497.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 1316.6666666666667, "minX": 1.71653766E12, "maxY": 1928.9333333333334, "series": [{"data": [[1.71653766E12, 1928.9333333333334]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.71653766E12, 1316.6666666666667]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71653766E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 10957.906000000003, "minX": 1.71653766E12, "maxY": 10957.906000000003, "series": [{"data": [[1.71653766E12, 10957.906000000003]], "isOverall": false, "label": "config 2 req", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71653766E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 10957.893999999995, "minX": 1.71653766E12, "maxY": 10957.893999999995, "series": [{"data": [[1.71653766E12, 10957.893999999995]], "isOverall": false, "label": "config 2 req", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71653766E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.19600000000000015, "minX": 1.71653766E12, "maxY": 0.19600000000000015, "series": [{"data": [[1.71653766E12, 0.19600000000000015]], "isOverall": false, "label": "config 2 req", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71653766E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 1577.0, "minX": 1.71653766E12, "maxY": 17831.0, "series": [{"data": [[1.71653766E12, 17831.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.71653766E12, 17663.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.71653766E12, 17814.25]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.71653766E12, 17748.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.71653766E12, 1577.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.71653766E12, 7107.5]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71653766E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 1581.0, "minX": 1.0, "maxY": 17610.0, "series": [{"data": [[1.0, 4314.0], [128.0, 17610.0], [9.0, 7051.0], [82.0, 2664.5], [172.0, 7002.0], [3.0, 1581.0], [105.0, 17129.5]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[128.0, 16767.0], [172.0, 6629.0], [105.0, 16564.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 172.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 1581.0, "minX": 1.0, "maxY": 17610.0, "series": [{"data": [[1.0, 4314.0], [128.0, 17610.0], [9.0, 7051.0], [82.0, 2664.5], [172.0, 7002.0], [3.0, 1581.0], [105.0, 17129.5]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[128.0, 16767.0], [172.0, 6629.0], [105.0, 16564.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 172.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 8.333333333333334, "minX": 1.71653766E12, "maxY": 8.333333333333334, "series": [{"data": [[1.71653766E12, 8.333333333333334]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71653766E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.35, "minX": 1.71653766E12, "maxY": 7.066666666666666, "series": [{"data": [[1.71653766E12, 7.066666666666666]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.71653766E12, 0.9166666666666666]], "isOverall": false, "label": "500", "isController": false}, {"data": [[1.71653766E12, 0.35]], "isOverall": false, "label": "503", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71653766E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 1.2666666666666666, "minX": 1.71653766E12, "maxY": 7.066666666666666, "series": [{"data": [[1.71653766E12, 1.2666666666666666]], "isOverall": false, "label": "config 2 req-failure", "isController": false}, {"data": [[1.71653766E12, 7.066666666666666]], "isOverall": false, "label": "config 2 req-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71653766E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 1.2666666666666666, "minX": 1.71653766E12, "maxY": 7.066666666666666, "series": [{"data": [[1.71653766E12, 7.066666666666666]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.71653766E12, 1.2666666666666666]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71653766E12, "title": "Total Transactions Per Second"}},
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

