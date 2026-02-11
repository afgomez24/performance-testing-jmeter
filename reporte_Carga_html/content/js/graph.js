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
        data: {"result": {"minY": 57.0, "minX": 0.0, "maxY": 2322.0, "series": [{"data": [[0.0, 57.0], [0.1, 59.0], [0.2, 59.0], [0.3, 60.0], [0.4, 60.0], [0.5, 60.0], [0.6, 60.0], [0.7, 61.0], [0.8, 61.0], [0.9, 61.0], [1.0, 61.0], [1.1, 62.0], [1.2, 62.0], [1.3, 62.0], [1.4, 62.0], [1.5, 63.0], [1.6, 63.0], [1.7, 63.0], [1.8, 63.0], [1.9, 63.0], [2.0, 63.0], [2.1, 64.0], [2.2, 64.0], [2.3, 64.0], [2.4, 64.0], [2.5, 64.0], [2.6, 64.0], [2.7, 65.0], [2.8, 65.0], [2.9, 65.0], [3.0, 65.0], [3.1, 65.0], [3.2, 65.0], [3.3, 65.0], [3.4, 65.0], [3.5, 65.0], [3.6, 65.0], [3.7, 65.0], [3.8, 66.0], [3.9, 66.0], [4.0, 66.0], [4.1, 66.0], [4.2, 66.0], [4.3, 66.0], [4.4, 66.0], [4.5, 66.0], [4.6, 66.0], [4.7, 66.0], [4.8, 66.0], [4.9, 66.0], [5.0, 66.0], [5.1, 66.0], [5.2, 66.0], [5.3, 66.0], [5.4, 67.0], [5.5, 67.0], [5.6, 67.0], [5.7, 67.0], [5.8, 67.0], [5.9, 67.0], [6.0, 67.0], [6.1, 67.0], [6.2, 67.0], [6.3, 67.0], [6.4, 67.0], [6.5, 67.0], [6.6, 67.0], [6.7, 67.0], [6.8, 67.0], [6.9, 67.0], [7.0, 67.0], [7.1, 67.0], [7.2, 67.0], [7.3, 67.0], [7.4, 67.0], [7.5, 68.0], [7.6, 68.0], [7.7, 68.0], [7.8, 68.0], [7.9, 68.0], [8.0, 68.0], [8.1, 68.0], [8.2, 68.0], [8.3, 68.0], [8.4, 68.0], [8.5, 68.0], [8.6, 68.0], [8.7, 68.0], [8.8, 68.0], [8.9, 68.0], [9.0, 68.0], [9.1, 68.0], [9.2, 68.0], [9.3, 68.0], [9.4, 68.0], [9.5, 68.0], [9.6, 68.0], [9.7, 68.0], [9.8, 68.0], [9.9, 68.0], [10.0, 68.0], [10.1, 69.0], [10.2, 69.0], [10.3, 69.0], [10.4, 69.0], [10.5, 69.0], [10.6, 69.0], [10.7, 69.0], [10.8, 69.0], [10.9, 69.0], [11.0, 69.0], [11.1, 69.0], [11.2, 69.0], [11.3, 69.0], [11.4, 69.0], [11.5, 69.0], [11.6, 69.0], [11.7, 69.0], [11.8, 69.0], [11.9, 69.0], [12.0, 69.0], [12.1, 69.0], [12.2, 69.0], [12.3, 69.0], [12.4, 69.0], [12.5, 69.0], [12.6, 69.0], [12.7, 69.0], [12.8, 69.0], [12.9, 69.0], [13.0, 69.0], [13.1, 69.0], [13.2, 69.0], [13.3, 69.0], [13.4, 69.0], [13.5, 69.0], [13.6, 69.0], [13.7, 69.0], [13.8, 69.0], [13.9, 70.0], [14.0, 70.0], [14.1, 70.0], [14.2, 70.0], [14.3, 70.0], [14.4, 70.0], [14.5, 70.0], [14.6, 70.0], [14.7, 70.0], [14.8, 70.0], [14.9, 70.0], [15.0, 70.0], [15.1, 70.0], [15.2, 70.0], [15.3, 70.0], [15.4, 70.0], [15.5, 70.0], [15.6, 70.0], [15.7, 70.0], [15.8, 70.0], [15.9, 70.0], [16.0, 70.0], [16.1, 70.0], [16.2, 70.0], [16.3, 70.0], [16.4, 70.0], [16.5, 70.0], [16.6, 70.0], [16.7, 70.0], [16.8, 70.0], [16.9, 70.0], [17.0, 70.0], [17.1, 70.0], [17.2, 70.0], [17.3, 70.0], [17.4, 70.0], [17.5, 70.0], [17.6, 70.0], [17.7, 70.0], [17.8, 70.0], [17.9, 70.0], [18.0, 70.0], [18.1, 70.0], [18.2, 70.0], [18.3, 70.0], [18.4, 70.0], [18.5, 70.0], [18.6, 70.0], [18.7, 70.0], [18.8, 70.0], [18.9, 70.0], [19.0, 71.0], [19.1, 71.0], [19.2, 71.0], [19.3, 71.0], [19.4, 71.0], [19.5, 71.0], [19.6, 71.0], [19.7, 71.0], [19.8, 71.0], [19.9, 71.0], [20.0, 71.0], [20.1, 71.0], [20.2, 71.0], [20.3, 71.0], [20.4, 71.0], [20.5, 71.0], [20.6, 71.0], [20.7, 71.0], [20.8, 71.0], [20.9, 71.0], [21.0, 71.0], [21.1, 71.0], [21.2, 71.0], [21.3, 71.0], [21.4, 71.0], [21.5, 71.0], [21.6, 71.0], [21.7, 71.0], [21.8, 71.0], [21.9, 71.0], [22.0, 71.0], [22.1, 71.0], [22.2, 71.0], [22.3, 71.0], [22.4, 71.0], [22.5, 71.0], [22.6, 71.0], [22.7, 71.0], [22.8, 71.0], [22.9, 71.0], [23.0, 71.0], [23.1, 71.0], [23.2, 71.0], [23.3, 71.0], [23.4, 71.0], [23.5, 71.0], [23.6, 71.0], [23.7, 71.0], [23.8, 71.0], [23.9, 71.0], [24.0, 71.0], [24.1, 71.0], [24.2, 71.0], [24.3, 71.0], [24.4, 71.0], [24.5, 71.0], [24.6, 71.0], [24.7, 71.0], [24.8, 71.0], [24.9, 71.0], [25.0, 71.0], [25.1, 71.0], [25.2, 71.0], [25.3, 71.0], [25.4, 71.0], [25.5, 72.0], [25.6, 72.0], [25.7, 72.0], [25.8, 72.0], [25.9, 72.0], [26.0, 72.0], [26.1, 72.0], [26.2, 72.0], [26.3, 72.0], [26.4, 72.0], [26.5, 72.0], [26.6, 72.0], [26.7, 72.0], [26.8, 72.0], [26.9, 72.0], [27.0, 72.0], [27.1, 72.0], [27.2, 72.0], [27.3, 72.0], [27.4, 72.0], [27.5, 72.0], [27.6, 72.0], [27.7, 72.0], [27.8, 72.0], [27.9, 72.0], [28.0, 72.0], [28.1, 72.0], [28.2, 72.0], [28.3, 72.0], [28.4, 72.0], [28.5, 72.0], [28.6, 72.0], [28.7, 72.0], [28.8, 72.0], [28.9, 72.0], [29.0, 72.0], [29.1, 72.0], [29.2, 72.0], [29.3, 72.0], [29.4, 72.0], [29.5, 72.0], [29.6, 72.0], [29.7, 72.0], [29.8, 72.0], [29.9, 72.0], [30.0, 72.0], [30.1, 72.0], [30.2, 72.0], [30.3, 72.0], [30.4, 72.0], [30.5, 72.0], [30.6, 72.0], [30.7, 72.0], [30.8, 72.0], [30.9, 72.0], [31.0, 72.0], [31.1, 72.0], [31.2, 72.0], [31.3, 72.0], [31.4, 72.0], [31.5, 72.0], [31.6, 72.0], [31.7, 72.0], [31.8, 72.0], [31.9, 72.0], [32.0, 72.0], [32.1, 72.0], [32.2, 72.0], [32.3, 72.0], [32.4, 72.0], [32.5, 72.0], [32.6, 72.0], [32.7, 72.0], [32.8, 72.0], [32.9, 72.0], [33.0, 72.0], [33.1, 72.0], [33.2, 72.0], [33.3, 72.0], [33.4, 72.0], [33.5, 72.0], [33.6, 72.0], [33.7, 72.0], [33.8, 72.0], [33.9, 72.0], [34.0, 72.0], [34.1, 72.0], [34.2, 73.0], [34.3, 73.0], [34.4, 73.0], [34.5, 73.0], [34.6, 73.0], [34.7, 73.0], [34.8, 73.0], [34.9, 73.0], [35.0, 73.0], [35.1, 73.0], [35.2, 73.0], [35.3, 73.0], [35.4, 73.0], [35.5, 73.0], [35.6, 73.0], [35.7, 73.0], [35.8, 73.0], [35.9, 73.0], [36.0, 73.0], [36.1, 73.0], [36.2, 73.0], [36.3, 73.0], [36.4, 73.0], [36.5, 73.0], [36.6, 73.0], [36.7, 73.0], [36.8, 73.0], [36.9, 73.0], [37.0, 73.0], [37.1, 73.0], [37.2, 73.0], [37.3, 73.0], [37.4, 73.0], [37.5, 73.0], [37.6, 73.0], [37.7, 73.0], [37.8, 73.0], [37.9, 73.0], [38.0, 73.0], [38.1, 73.0], [38.2, 73.0], [38.3, 73.0], [38.4, 73.0], [38.5, 73.0], [38.6, 73.0], [38.7, 73.0], [38.8, 73.0], [38.9, 73.0], [39.0, 73.0], [39.1, 73.0], [39.2, 73.0], [39.3, 73.0], [39.4, 73.0], [39.5, 73.0], [39.6, 73.0], [39.7, 73.0], [39.8, 73.0], [39.9, 73.0], [40.0, 73.0], [40.1, 73.0], [40.2, 73.0], [40.3, 73.0], [40.4, 73.0], [40.5, 73.0], [40.6, 73.0], [40.7, 73.0], [40.8, 73.0], [40.9, 73.0], [41.0, 73.0], [41.1, 73.0], [41.2, 73.0], [41.3, 73.0], [41.4, 73.0], [41.5, 73.0], [41.6, 73.0], [41.7, 73.0], [41.8, 73.0], [41.9, 73.0], [42.0, 73.0], [42.1, 73.0], [42.2, 73.0], [42.3, 73.0], [42.4, 73.0], [42.5, 73.0], [42.6, 73.0], [42.7, 73.0], [42.8, 73.0], [42.9, 73.0], [43.0, 73.0], [43.1, 73.0], [43.2, 73.0], [43.3, 73.0], [43.4, 73.0], [43.5, 73.0], [43.6, 73.0], [43.7, 73.0], [43.8, 73.0], [43.9, 73.0], [44.0, 73.0], [44.1, 73.0], [44.2, 73.0], [44.3, 73.0], [44.4, 73.0], [44.5, 73.0], [44.6, 73.0], [44.7, 73.0], [44.8, 73.0], [44.9, 73.0], [45.0, 73.0], [45.1, 73.0], [45.2, 73.0], [45.3, 73.0], [45.4, 73.0], [45.5, 74.0], [45.6, 74.0], [45.7, 74.0], [45.8, 74.0], [45.9, 74.0], [46.0, 74.0], [46.1, 74.0], [46.2, 74.0], [46.3, 74.0], [46.4, 74.0], [46.5, 74.0], [46.6, 74.0], [46.7, 74.0], [46.8, 74.0], [46.9, 74.0], [47.0, 74.0], [47.1, 74.0], [47.2, 74.0], [47.3, 74.0], [47.4, 74.0], [47.5, 74.0], [47.6, 74.0], [47.7, 74.0], [47.8, 74.0], [47.9, 74.0], [48.0, 74.0], [48.1, 74.0], [48.2, 74.0], [48.3, 74.0], [48.4, 74.0], [48.5, 74.0], [48.6, 74.0], [48.7, 74.0], [48.8, 74.0], [48.9, 74.0], [49.0, 74.0], [49.1, 74.0], [49.2, 74.0], [49.3, 74.0], [49.4, 74.0], [49.5, 74.0], [49.6, 74.0], [49.7, 74.0], [49.8, 74.0], [49.9, 74.0], [50.0, 74.0], [50.1, 74.0], [50.2, 74.0], [50.3, 74.0], [50.4, 74.0], [50.5, 74.0], [50.6, 74.0], [50.7, 74.0], [50.8, 74.0], [50.9, 74.0], [51.0, 74.0], [51.1, 74.0], [51.2, 74.0], [51.3, 74.0], [51.4, 74.0], [51.5, 74.0], [51.6, 74.0], [51.7, 74.0], [51.8, 74.0], [51.9, 74.0], [52.0, 74.0], [52.1, 74.0], [52.2, 74.0], [52.3, 74.0], [52.4, 74.0], [52.5, 74.0], [52.6, 74.0], [52.7, 74.0], [52.8, 74.0], [52.9, 74.0], [53.0, 74.0], [53.1, 74.0], [53.2, 74.0], [53.3, 74.0], [53.4, 74.0], [53.5, 74.0], [53.6, 74.0], [53.7, 74.0], [53.8, 74.0], [53.9, 74.0], [54.0, 74.0], [54.1, 74.0], [54.2, 74.0], [54.3, 74.0], [54.4, 74.0], [54.5, 74.0], [54.6, 74.0], [54.7, 74.0], [54.8, 74.0], [54.9, 74.0], [55.0, 74.0], [55.1, 74.0], [55.2, 74.0], [55.3, 74.0], [55.4, 74.0], [55.5, 74.0], [55.6, 74.0], [55.7, 74.0], [55.8, 74.0], [55.9, 74.0], [56.0, 74.0], [56.1, 74.0], [56.2, 74.0], [56.3, 74.0], [56.4, 74.0], [56.5, 74.0], [56.6, 74.0], [56.7, 74.0], [56.8, 74.0], [56.9, 74.0], [57.0, 74.0], [57.1, 74.0], [57.2, 74.0], [57.3, 74.0], [57.4, 75.0], [57.5, 75.0], [57.6, 75.0], [57.7, 75.0], [57.8, 75.0], [57.9, 75.0], [58.0, 75.0], [58.1, 75.0], [58.2, 75.0], [58.3, 75.0], [58.4, 75.0], [58.5, 75.0], [58.6, 75.0], [58.7, 75.0], [58.8, 75.0], [58.9, 75.0], [59.0, 75.0], [59.1, 75.0], [59.2, 75.0], [59.3, 75.0], [59.4, 75.0], [59.5, 75.0], [59.6, 75.0], [59.7, 75.0], [59.8, 75.0], [59.9, 75.0], [60.0, 75.0], [60.1, 75.0], [60.2, 75.0], [60.3, 75.0], [60.4, 75.0], [60.5, 75.0], [60.6, 75.0], [60.7, 75.0], [60.8, 75.0], [60.9, 75.0], [61.0, 75.0], [61.1, 75.0], [61.2, 75.0], [61.3, 75.0], [61.4, 75.0], [61.5, 75.0], [61.6, 75.0], [61.7, 75.0], [61.8, 75.0], [61.9, 75.0], [62.0, 75.0], [62.1, 75.0], [62.2, 75.0], [62.3, 75.0], [62.4, 75.0], [62.5, 75.0], [62.6, 75.0], [62.7, 75.0], [62.8, 75.0], [62.9, 75.0], [63.0, 75.0], [63.1, 75.0], [63.2, 75.0], [63.3, 75.0], [63.4, 75.0], [63.5, 75.0], [63.6, 75.0], [63.7, 75.0], [63.8, 75.0], [63.9, 75.0], [64.0, 75.0], [64.1, 75.0], [64.2, 75.0], [64.3, 75.0], [64.4, 75.0], [64.5, 75.0], [64.6, 75.0], [64.7, 75.0], [64.8, 75.0], [64.9, 75.0], [65.0, 75.0], [65.1, 75.0], [65.2, 75.0], [65.3, 75.0], [65.4, 75.0], [65.5, 75.0], [65.6, 75.0], [65.7, 75.0], [65.8, 75.0], [65.9, 75.0], [66.0, 75.0], [66.1, 75.0], [66.2, 75.0], [66.3, 75.0], [66.4, 75.0], [66.5, 75.0], [66.6, 75.0], [66.7, 75.0], [66.8, 75.0], [66.9, 75.0], [67.0, 75.0], [67.1, 75.0], [67.2, 75.0], [67.3, 75.0], [67.4, 75.0], [67.5, 75.0], [67.6, 75.0], [67.7, 75.0], [67.8, 75.0], [67.9, 75.0], [68.0, 75.0], [68.1, 75.0], [68.2, 75.0], [68.3, 75.0], [68.4, 76.0], [68.5, 76.0], [68.6, 76.0], [68.7, 76.0], [68.8, 76.0], [68.9, 76.0], [69.0, 76.0], [69.1, 76.0], [69.2, 76.0], [69.3, 76.0], [69.4, 76.0], [69.5, 76.0], [69.6, 76.0], [69.7, 76.0], [69.8, 76.0], [69.9, 76.0], [70.0, 76.0], [70.1, 76.0], [70.2, 76.0], [70.3, 76.0], [70.4, 76.0], [70.5, 76.0], [70.6, 76.0], [70.7, 76.0], [70.8, 76.0], [70.9, 76.0], [71.0, 76.0], [71.1, 76.0], [71.2, 76.0], [71.3, 76.0], [71.4, 76.0], [71.5, 76.0], [71.6, 76.0], [71.7, 76.0], [71.8, 76.0], [71.9, 76.0], [72.0, 76.0], [72.1, 76.0], [72.2, 76.0], [72.3, 76.0], [72.4, 76.0], [72.5, 76.0], [72.6, 76.0], [72.7, 76.0], [72.8, 76.0], [72.9, 76.0], [73.0, 76.0], [73.1, 76.0], [73.2, 76.0], [73.3, 76.0], [73.4, 76.0], [73.5, 76.0], [73.6, 76.0], [73.7, 76.0], [73.8, 76.0], [73.9, 76.0], [74.0, 76.0], [74.1, 76.0], [74.2, 76.0], [74.3, 76.0], [74.4, 76.0], [74.5, 76.0], [74.6, 76.0], [74.7, 76.0], [74.8, 76.0], [74.9, 76.0], [75.0, 76.0], [75.1, 76.0], [75.2, 76.0], [75.3, 76.0], [75.4, 76.0], [75.5, 76.0], [75.6, 76.0], [75.7, 76.0], [75.8, 76.0], [75.9, 76.0], [76.0, 76.0], [76.1, 76.0], [76.2, 76.0], [76.3, 76.0], [76.4, 76.0], [76.5, 76.0], [76.6, 76.0], [76.7, 76.0], [76.8, 76.0], [76.9, 76.0], [77.0, 76.0], [77.1, 76.0], [77.2, 77.0], [77.3, 77.0], [77.4, 77.0], [77.5, 77.0], [77.6, 77.0], [77.7, 77.0], [77.8, 77.0], [77.9, 77.0], [78.0, 77.0], [78.1, 77.0], [78.2, 77.0], [78.3, 77.0], [78.4, 77.0], [78.5, 77.0], [78.6, 77.0], [78.7, 77.0], [78.8, 77.0], [78.9, 77.0], [79.0, 77.0], [79.1, 77.0], [79.2, 77.0], [79.3, 77.0], [79.4, 77.0], [79.5, 77.0], [79.6, 77.0], [79.7, 77.0], [79.8, 77.0], [79.9, 77.0], [80.0, 77.0], [80.1, 77.0], [80.2, 77.0], [80.3, 77.0], [80.4, 77.0], [80.5, 77.0], [80.6, 77.0], [80.7, 77.0], [80.8, 77.0], [80.9, 77.0], [81.0, 77.0], [81.1, 77.0], [81.2, 77.0], [81.3, 77.0], [81.4, 77.0], [81.5, 77.0], [81.6, 77.0], [81.7, 77.0], [81.8, 77.0], [81.9, 77.0], [82.0, 77.0], [82.1, 77.0], [82.2, 77.0], [82.3, 77.0], [82.4, 77.0], [82.5, 77.0], [82.6, 77.0], [82.7, 77.0], [82.8, 77.0], [82.9, 77.0], [83.0, 77.0], [83.1, 77.0], [83.2, 77.0], [83.3, 77.0], [83.4, 77.0], [83.5, 77.0], [83.6, 78.0], [83.7, 78.0], [83.8, 78.0], [83.9, 78.0], [84.0, 78.0], [84.1, 78.0], [84.2, 78.0], [84.3, 78.0], [84.4, 78.0], [84.5, 78.0], [84.6, 78.0], [84.7, 78.0], [84.8, 78.0], [84.9, 78.0], [85.0, 78.0], [85.1, 78.0], [85.2, 78.0], [85.3, 78.0], [85.4, 78.0], [85.5, 78.0], [85.6, 78.0], [85.7, 78.0], [85.8, 78.0], [85.9, 78.0], [86.0, 78.0], [86.1, 78.0], [86.2, 78.0], [86.3, 78.0], [86.4, 78.0], [86.5, 78.0], [86.6, 78.0], [86.7, 78.0], [86.8, 78.0], [86.9, 78.0], [87.0, 78.0], [87.1, 78.0], [87.2, 78.0], [87.3, 78.0], [87.4, 78.0], [87.5, 78.0], [87.6, 79.0], [87.7, 79.0], [87.8, 79.0], [87.9, 79.0], [88.0, 79.0], [88.1, 79.0], [88.2, 79.0], [88.3, 79.0], [88.4, 79.0], [88.5, 79.0], [88.6, 79.0], [88.7, 79.0], [88.8, 79.0], [88.9, 79.0], [89.0, 79.0], [89.1, 79.0], [89.2, 79.0], [89.3, 79.0], [89.4, 79.0], [89.5, 79.0], [89.6, 79.0], [89.7, 79.0], [89.8, 79.0], [89.9, 79.0], [90.0, 79.0], [90.1, 80.0], [90.2, 80.0], [90.3, 80.0], [90.4, 80.0], [90.5, 80.0], [90.6, 80.0], [90.7, 80.0], [90.8, 80.0], [90.9, 80.0], [91.0, 80.0], [91.1, 80.0], [91.2, 80.0], [91.3, 80.0], [91.4, 81.0], [91.5, 81.0], [91.6, 81.0], [91.7, 81.0], [91.8, 81.0], [91.9, 81.0], [92.0, 81.0], [92.1, 82.0], [92.2, 82.0], [92.3, 82.0], [92.4, 83.0], [92.5, 83.0], [92.6, 84.0], [92.7, 85.0], [92.8, 85.0], [92.9, 86.0], [93.0, 86.0], [93.1, 87.0], [93.2, 87.0], [93.3, 88.0], [93.4, 88.0], [93.5, 89.0], [93.6, 90.0], [93.7, 91.0], [93.8, 92.0], [93.9, 96.0], [94.0, 101.0], [94.1, 104.0], [94.2, 108.0], [94.3, 119.0], [94.4, 123.0], [94.5, 126.0], [94.6, 126.0], [94.7, 127.0], [94.8, 127.0], [94.9, 128.0], [95.0, 129.0], [95.1, 130.0], [95.2, 131.0], [95.3, 132.0], [95.4, 133.0], [95.5, 135.0], [95.6, 136.0], [95.7, 138.0], [95.8, 139.0], [95.9, 140.0], [96.0, 140.0], [96.1, 141.0], [96.2, 142.0], [96.3, 143.0], [96.4, 144.0], [96.5, 144.0], [96.6, 145.0], [96.7, 146.0], [96.8, 146.0], [96.9, 147.0], [97.0, 148.0], [97.1, 149.0], [97.2, 150.0], [97.3, 151.0], [97.4, 151.0], [97.5, 152.0], [97.6, 153.0], [97.7, 153.0], [97.8, 154.0], [97.9, 155.0], [98.0, 155.0], [98.1, 155.0], [98.2, 156.0], [98.3, 157.0], [98.4, 157.0], [98.5, 158.0], [98.6, 160.0], [98.7, 162.0], [98.8, 165.0], [98.9, 169.0], [99.0, 171.0], [99.1, 174.0], [99.2, 177.0], [99.3, 184.0], [99.4, 189.0], [99.5, 198.0], [99.6, 218.0], [99.7, 279.0], [99.8, 385.0], [99.9, 473.0]], "isOverall": false, "label": "Petición HTTP", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 80507.0, "series": [{"data": [[0.0, 80507.0], [2300.0, 1.0], [600.0, 13.0], [700.0, 6.0], [200.0, 188.0], [800.0, 6.0], [900.0, 3.0], [1000.0, 1.0], [1100.0, 1.0], [300.0, 72.0], [1200.0, 2.0], [1300.0, 1.0], [100.0, 4753.0], [400.0, 95.0], [500.0, 28.0]], "isOverall": false, "label": "Petición HTTP", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 2300.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 85615.0, "series": [{"data": [[0.0, 85615.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 61.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 1.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 3.505827505827506, "minX": 1.77084168E12, "maxY": 25.0, "series": [{"data": [[1.77084174E12, 19.503829724554468], [1.77084186E12, 25.0], [1.77084168E12, 3.505827505827506], [1.77084198E12, 24.98019271948608], [1.7708418E12, 25.0], [1.77084192E12, 25.0]], "isOverall": false, "label": "Carga", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77084198E12, "title": "Active Threads Over Time"}},
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
        fixTimeStamps(infos.data.result.series, -18000000);
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
        data: {"result": {"minY": 71.58646616541351, "minX": 1.0, "maxY": 79.38264756145743, "series": [{"data": [[2.0, 71.80882352941174], [3.0, 73.23232323232324], [4.0, 71.58646616541351], [5.0, 71.88622754491016], [6.0, 71.94472361809048], [7.0, 71.83116883116887], [8.0, 71.65168539325846], [9.0, 71.76744186046515], [10.0, 73.12765957446808], [11.0, 73.10955056179779], [12.0, 72.47848101265821], [13.0, 72.95560747663546], [14.0, 77.58139534883722], [15.0, 75.73165618448637], [1.0, 75.62068965517238], [16.0, 75.2754491017964], [17.0, 75.2957486136784], [18.0, 75.39298245614034], [19.0, 75.29950083194679], [20.0, 75.39560439560448], [21.0, 75.2353823088455], [22.0, 75.76790830945566], [23.0, 75.20798898071634], [24.0, 75.67371202113604], [25.0, 79.38264756145743]], "isOverall": false, "label": "Petición HTTP", "isController": false}, {"data": [[24.017892783360914, 78.84513930226235]], "isOverall": false, "label": "Petición HTTP-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 25.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 965.25, "minX": 1.77084168E12, "maxY": 9408846.666666666, "series": [{"data": [[1.77084174E12, 6504089.466666667], [1.77084186E12, 9145387.066666666], [1.77084168E12, 205498.15], [1.77084198E12, 7158426.0], [1.7708418E12, 9408846.666666666], [1.77084192E12, 8618468.566666666]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.77084174E12, 30550.5], [1.77084186E12, 42957.0], [1.77084168E12, 965.25], [1.77084198E12, 33624.0], [1.7708418E12, 44194.5], [1.77084192E12, 40482.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77084198E12, "title": "Bytes Throughput Over Time"}},
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
        fixTimeStamps(infos.data.result.series, -18000000);
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
        data: {"result": {"minY": 72.03729603729599, "minX": 1.77084168E12, "maxY": 83.08742774566495, "series": [{"data": [[1.77084174E12, 75.18463691265254], [1.77084186E12, 78.35999371464521], [1.77084168E12, 72.03729603729599], [1.77084198E12, 81.446132226981], [1.7708418E12, 76.13099480704618], [1.77084192E12, 83.08742774566495]], "isOverall": false, "label": "Petición HTTP", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77084198E12, "title": "Response Time Over Time"}},
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
        fixTimeStamps(infos.data.result.series, -18000000);
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
        data: {"result": {"minY": 70.39627039627032, "minX": 1.77084168E12, "maxY": 71.62559820792141, "series": [{"data": [[1.77084174E12, 71.25519222271282], [1.77084186E12, 70.52084642782309], [1.77084168E12, 70.39627039627032], [1.77084198E12, 70.6261375802999], [1.7708418E12, 71.62559820792141], [1.77084192E12, 70.48482658959557]], "isOverall": false, "label": "Petición HTTP", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77084198E12, "title": "Latencies Over Time"}},
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
        fixTimeStamps(infos.data.result.series, -18000000);
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
        data: {"result": {"minY": 0.0850218918643717, "minX": 1.77084168E12, "maxY": 0.8974358974358964, "series": [{"data": [[1.77084174E12, 0.12446604801885358], [1.77084186E12, 0.0861093651791323], [1.77084168E12, 0.8974358974358964], [1.77084198E12, 0.08786134903640258], [1.7708418E12, 0.0850218918643717], [1.77084192E12, 0.09220764784348578]], "isOverall": false, "label": "Petición HTTP", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77084198E12, "title": "Connect Time Over Time"}},
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
        fixTimeStamps(infos.data.result.series, -18000000);
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
        data: {"result": {"minY": 57.0, "minX": 1.77084168E12, "maxY": 2322.0, "series": [{"data": [[1.77084174E12, 494.0], [1.77084186E12, 1212.0], [1.77084168E12, 204.0], [1.77084198E12, 1323.0], [1.7708418E12, 2322.0], [1.77084192E12, 881.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.77084174E12, 62.0], [1.77084186E12, 57.0], [1.77084168E12, 66.0], [1.77084198E12, 58.0], [1.7708418E12, 62.0], [1.77084192E12, 58.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.77084174E12, 78.0], [1.77084186E12, 80.0], [1.77084168E12, 75.0], [1.77084198E12, 83.0], [1.7708418E12, 78.0], [1.77084192E12, 123.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.77084174E12, 129.0], [1.77084186E12, 163.0699999999997], [1.77084168E12, 141.19999999999993], [1.77084198E12, 186.0], [1.7708418E12, 152.0], [1.77084192E12, 193.0699999999997]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.77084174E12, 74.0], [1.77084186E12, 74.0], [1.77084168E12, 72.0], [1.77084198E12, 74.0], [1.7708418E12, 74.0], [1.77084192E12, 73.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.77084174E12, 79.0], [1.77084186E12, 123.0], [1.77084168E12, 76.0], [1.77084198E12, 152.0], [1.7708418E12, 80.0], [1.77084192E12, 148.0]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77084198E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
        fixTimeStamps(infos.data.result.series, -18000000);
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
    data: {"result": {"minY": 68.5, "minX": 10.0, "maxY": 76.0, "series": [{"data": [[10.0, 68.5], [14.0, 69.0], [23.0, 69.0], [28.0, 70.0], [31.0, 72.0], [41.0, 73.0], [43.0, 73.0], [52.0, 72.0], [56.0, 71.5], [62.0, 72.0], [69.0, 72.0], [72.0, 73.0], [82.0, 72.0], [84.0, 72.0], [91.0, 72.0], [95.0, 73.0], [101.0, 72.0], [111.0, 72.0], [124.0, 72.0], [125.0, 72.0], [132.0, 72.0], [133.0, 73.0], [135.0, 74.0], [151.0, 73.0], [158.0, 73.0], [165.0, 73.0], [167.0, 74.0], [170.0, 73.0], [178.0, 73.0], [177.0, 73.0], [189.0, 73.0], [188.0, 74.0], [198.0, 74.0], [212.0, 73.0], [213.0, 74.0], [219.0, 73.0], [226.0, 73.0], [228.0, 74.0], [237.0, 74.0], [239.0, 74.0], [249.0, 74.0], [252.0, 74.0], [255.0, 74.0], [265.0, 74.0], [269.0, 73.0], [260.0, 74.0], [264.0, 73.0], [284.0, 74.0], [278.0, 74.0], [281.0, 74.0], [287.0, 74.0], [285.0, 75.0], [280.0, 74.0], [273.0, 73.0], [274.0, 74.0], [277.0, 73.0], [282.0, 74.0], [283.0, 73.0], [302.0, 74.0], [295.0, 74.0], [289.0, 74.0], [288.0, 73.0], [303.0, 74.0], [291.0, 74.0], [300.0, 74.0], [301.0, 73.0], [296.0, 74.0], [299.0, 74.0], [297.0, 73.0], [298.0, 74.0], [292.0, 74.0], [294.0, 74.0], [316.0, 74.0], [306.0, 74.0], [307.0, 74.0], [314.0, 74.0], [315.0, 73.0], [312.0, 73.0], [313.0, 74.0], [308.0, 74.0], [310.0, 74.0], [309.0, 73.0], [317.0, 74.0], [318.0, 73.0], [319.0, 74.0], [311.0, 74.0], [304.0, 74.0], [305.0, 74.0], [321.0, 76.0], [328.0, 75.0], [327.0, 75.0], [331.0, 74.0], [326.0, 74.5], [325.0, 75.0], [324.0, 74.0], [332.0, 74.0], [322.0, 74.0], [333.0, 74.0], [334.0, 74.0], [335.0, 74.0], [329.0, 74.0], [320.0, 74.5], [330.0, 74.0], [339.0, 74.0], [338.0, 74.0], [337.0, 74.0], [340.0, 74.0], [336.0, 74.0], [342.0, 74.0], [341.0, 74.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 342.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 67.0, "minX": 10.0, "maxY": 73.0, "series": [{"data": [[10.0, 67.0], [14.0, 67.0], [23.0, 67.0], [28.0, 68.0], [31.0, 71.0], [41.0, 71.0], [43.0, 71.0], [52.0, 70.5], [56.0, 70.0], [62.0, 71.0], [69.0, 71.0], [72.0, 71.0], [82.0, 70.0], [84.0, 70.0], [91.0, 70.0], [95.0, 70.0], [101.0, 69.0], [111.0, 70.0], [124.0, 70.0], [125.0, 71.0], [132.0, 71.0], [133.0, 71.0], [135.0, 71.0], [151.0, 71.0], [158.0, 71.0], [165.0, 71.0], [167.0, 71.0], [170.0, 71.0], [178.0, 71.0], [177.0, 71.0], [189.0, 71.0], [188.0, 72.0], [198.0, 71.0], [212.0, 71.0], [213.0, 71.0], [219.0, 71.0], [226.0, 71.0], [228.0, 72.0], [237.0, 71.0], [239.0, 71.0], [249.0, 71.0], [252.0, 71.0], [255.0, 72.0], [265.0, 72.0], [269.0, 70.0], [260.0, 71.0], [264.0, 70.0], [284.0, 71.0], [278.0, 72.0], [281.0, 71.0], [287.0, 71.0], [285.0, 71.0], [280.0, 70.5], [273.0, 70.0], [274.0, 70.0], [277.0, 70.0], [282.0, 71.0], [283.0, 71.0], [302.0, 70.0], [295.0, 71.0], [289.0, 71.0], [288.0, 70.0], [303.0, 71.0], [291.0, 71.0], [300.0, 71.0], [301.0, 70.0], [296.0, 71.0], [299.0, 70.0], [297.0, 70.0], [298.0, 70.0], [292.0, 71.0], [294.0, 71.0], [316.0, 71.0], [306.0, 71.0], [307.0, 70.0], [314.0, 71.0], [315.0, 71.0], [312.0, 70.0], [313.0, 70.0], [308.0, 71.0], [310.0, 71.0], [309.0, 70.0], [317.0, 71.0], [318.0, 71.0], [319.0, 71.0], [311.0, 71.0], [304.0, 71.0], [305.0, 71.0], [321.0, 73.0], [328.0, 72.0], [327.0, 72.0], [331.0, 72.0], [326.0, 72.0], [325.0, 72.0], [324.0, 71.0], [332.0, 72.0], [322.0, 71.0], [333.0, 71.0], [334.0, 71.0], [335.0, 71.0], [329.0, 71.0], [320.0, 72.0], [330.0, 71.0], [339.0, 71.0], [338.0, 71.0], [337.0, 71.0], [340.0, 71.0], [336.0, 72.0], [342.0, 71.0], [341.0, 71.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 342.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 7.233333333333333, "minX": 1.77084168E12, "maxY": 327.3666666666667, "series": [{"data": [[1.77084174E12, 226.63333333333333], [1.77084186E12, 318.2], [1.77084168E12, 7.233333333333333], [1.77084198E12, 248.65], [1.7708418E12, 327.3666666666667], [1.77084192E12, 299.8666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77084198E12, "title": "Hits Per Second"}},
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
        fixTimeStamps(infos.data.result.series, -18000000);
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
        data: {"result": {"minY": 7.15, "minX": 1.77084168E12, "maxY": 327.3666666666667, "series": [{"data": [[1.77084174E12, 226.3], [1.77084186E12, 318.2], [1.77084168E12, 7.15], [1.77084198E12, 249.06666666666666], [1.7708418E12, 327.3666666666667], [1.77084192E12, 299.8666666666667]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77084198E12, "title": "Codes Per Second"}},
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
        fixTimeStamps(infos.data.result.series, -18000000);
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
        data: {"result": {"minY": 7.15, "minX": 1.77084168E12, "maxY": 327.3666666666667, "series": [{"data": [[1.77084174E12, 226.3], [1.77084186E12, 318.2], [1.77084168E12, 7.15], [1.77084198E12, 249.06666666666666], [1.7708418E12, 327.3666666666667], [1.77084192E12, 299.8666666666667]], "isOverall": false, "label": "Petición HTTP-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77084198E12, "title": "Transactions Per Second"}},
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
        fixTimeStamps(infos.data.result.series, -18000000);
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
        data: {"result": {"minY": 7.15, "minX": 1.77084168E12, "maxY": 327.3666666666667, "series": [{"data": [[1.77084174E12, 226.3], [1.77084186E12, 318.2], [1.77084168E12, 7.15], [1.77084198E12, 249.06666666666666], [1.7708418E12, 327.3666666666667], [1.77084192E12, 299.8666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77084198E12, "title": "Total Transactions Per Second"}},
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
        fixTimeStamps(infos.data.result.series, -18000000);
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

