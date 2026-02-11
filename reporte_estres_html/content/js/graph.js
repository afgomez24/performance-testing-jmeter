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
        data: {"result": {"minY": 60.0, "minX": 0.0, "maxY": 8199.0, "series": [{"data": [[0.0, 60.0], [0.1, 66.0], [0.2, 68.0], [0.3, 69.0], [0.4, 69.0], [0.5, 70.0], [0.6, 70.0], [0.7, 71.0], [0.8, 71.0], [0.9, 72.0], [1.0, 72.0], [1.1, 73.0], [1.2, 73.0], [1.3, 73.0], [1.4, 73.0], [1.5, 74.0], [1.6, 74.0], [1.7, 74.0], [1.8, 74.0], [1.9, 74.0], [2.0, 74.0], [2.1, 75.0], [2.2, 75.0], [2.3, 75.0], [2.4, 75.0], [2.5, 75.0], [2.6, 76.0], [2.7, 76.0], [2.8, 76.0], [2.9, 76.0], [3.0, 76.0], [3.1, 76.0], [3.2, 77.0], [3.3, 77.0], [3.4, 77.0], [3.5, 77.0], [3.6, 77.0], [3.7, 77.0], [3.8, 78.0], [3.9, 78.0], [4.0, 78.0], [4.1, 78.0], [4.2, 78.0], [4.3, 79.0], [4.4, 79.0], [4.5, 79.0], [4.6, 79.0], [4.7, 79.0], [4.8, 80.0], [4.9, 80.0], [5.0, 80.0], [5.1, 80.0], [5.2, 81.0], [5.3, 81.0], [5.4, 81.0], [5.5, 81.0], [5.6, 82.0], [5.7, 82.0], [5.8, 82.0], [5.9, 83.0], [6.0, 83.0], [6.1, 84.0], [6.2, 84.0], [6.3, 85.0], [6.4, 86.0], [6.5, 88.0], [6.6, 90.0], [6.7, 92.0], [6.8, 94.0], [6.9, 96.0], [7.0, 98.0], [7.1, 101.0], [7.2, 104.0], [7.3, 109.0], [7.4, 117.0], [7.5, 122.0], [7.6, 127.0], [7.7, 131.0], [7.8, 135.0], [7.9, 138.0], [8.0, 142.0], [8.1, 144.0], [8.2, 147.0], [8.3, 149.0], [8.4, 151.0], [8.5, 154.0], [8.6, 156.0], [8.7, 157.0], [8.8, 159.0], [8.9, 160.0], [9.0, 161.0], [9.1, 162.0], [9.2, 163.0], [9.3, 164.0], [9.4, 165.0], [9.5, 166.0], [9.6, 167.0], [9.7, 167.0], [9.8, 168.0], [9.9, 169.0], [10.0, 169.0], [10.1, 170.0], [10.2, 171.0], [10.3, 171.0], [10.4, 172.0], [10.5, 173.0], [10.6, 173.0], [10.7, 174.0], [10.8, 174.0], [10.9, 175.0], [11.0, 175.0], [11.1, 176.0], [11.2, 176.0], [11.3, 177.0], [11.4, 177.0], [11.5, 178.0], [11.6, 178.0], [11.7, 178.0], [11.8, 179.0], [11.9, 179.0], [12.0, 179.0], [12.1, 180.0], [12.2, 180.0], [12.3, 181.0], [12.4, 181.0], [12.5, 181.0], [12.6, 182.0], [12.7, 182.0], [12.8, 182.0], [12.9, 183.0], [13.0, 183.0], [13.1, 183.0], [13.2, 183.0], [13.3, 184.0], [13.4, 184.0], [13.5, 184.0], [13.6, 185.0], [13.7, 185.0], [13.8, 185.0], [13.9, 185.0], [14.0, 186.0], [14.1, 186.0], [14.2, 186.0], [14.3, 186.0], [14.4, 187.0], [14.5, 187.0], [14.6, 187.0], [14.7, 187.0], [14.8, 187.0], [14.9, 188.0], [15.0, 188.0], [15.1, 188.0], [15.2, 188.0], [15.3, 189.0], [15.4, 189.0], [15.5, 189.0], [15.6, 190.0], [15.7, 190.0], [15.8, 190.0], [15.9, 190.0], [16.0, 190.0], [16.1, 191.0], [16.2, 191.0], [16.3, 191.0], [16.4, 191.0], [16.5, 192.0], [16.6, 192.0], [16.7, 192.0], [16.8, 192.0], [16.9, 192.0], [17.0, 193.0], [17.1, 193.0], [17.2, 193.0], [17.3, 193.0], [17.4, 194.0], [17.5, 194.0], [17.6, 194.0], [17.7, 194.0], [17.8, 194.0], [17.9, 195.0], [18.0, 195.0], [18.1, 195.0], [18.2, 195.0], [18.3, 195.0], [18.4, 195.0], [18.5, 196.0], [18.6, 196.0], [18.7, 196.0], [18.8, 196.0], [18.9, 196.0], [19.0, 197.0], [19.1, 197.0], [19.2, 197.0], [19.3, 197.0], [19.4, 197.0], [19.5, 197.0], [19.6, 198.0], [19.7, 198.0], [19.8, 198.0], [19.9, 198.0], [20.0, 198.0], [20.1, 198.0], [20.2, 199.0], [20.3, 199.0], [20.4, 199.0], [20.5, 199.0], [20.6, 199.0], [20.7, 200.0], [20.8, 200.0], [20.9, 200.0], [21.0, 200.0], [21.1, 200.0], [21.2, 201.0], [21.3, 201.0], [21.4, 201.0], [21.5, 201.0], [21.6, 201.0], [21.7, 201.0], [21.8, 202.0], [21.9, 202.0], [22.0, 202.0], [22.1, 202.0], [22.2, 202.0], [22.3, 202.0], [22.4, 202.0], [22.5, 203.0], [22.6, 203.0], [22.7, 203.0], [22.8, 203.0], [22.9, 203.0], [23.0, 203.0], [23.1, 204.0], [23.2, 204.0], [23.3, 204.0], [23.4, 204.0], [23.5, 204.0], [23.6, 204.0], [23.7, 205.0], [23.8, 205.0], [23.9, 205.0], [24.0, 205.0], [24.1, 205.0], [24.2, 205.0], [24.3, 206.0], [24.4, 206.0], [24.5, 206.0], [24.6, 206.0], [24.7, 206.0], [24.8, 206.0], [24.9, 207.0], [25.0, 207.0], [25.1, 207.0], [25.2, 207.0], [25.3, 207.0], [25.4, 207.0], [25.5, 207.0], [25.6, 208.0], [25.7, 208.0], [25.8, 208.0], [25.9, 208.0], [26.0, 208.0], [26.1, 208.0], [26.2, 208.0], [26.3, 209.0], [26.4, 209.0], [26.5, 209.0], [26.6, 209.0], [26.7, 209.0], [26.8, 209.0], [26.9, 209.0], [27.0, 210.0], [27.1, 210.0], [27.2, 210.0], [27.3, 210.0], [27.4, 210.0], [27.5, 210.0], [27.6, 211.0], [27.7, 211.0], [27.8, 211.0], [27.9, 211.0], [28.0, 211.0], [28.1, 211.0], [28.2, 211.0], [28.3, 212.0], [28.4, 212.0], [28.5, 212.0], [28.6, 212.0], [28.7, 212.0], [28.8, 213.0], [28.9, 213.0], [29.0, 213.0], [29.1, 213.0], [29.2, 213.0], [29.3, 213.0], [29.4, 214.0], [29.5, 214.0], [29.6, 214.0], [29.7, 214.0], [29.8, 214.0], [29.9, 214.0], [30.0, 214.0], [30.1, 215.0], [30.2, 215.0], [30.3, 215.0], [30.4, 215.0], [30.5, 215.0], [30.6, 215.0], [30.7, 215.0], [30.8, 215.0], [30.9, 216.0], [31.0, 216.0], [31.1, 216.0], [31.2, 216.0], [31.3, 216.0], [31.4, 216.0], [31.5, 217.0], [31.6, 217.0], [31.7, 217.0], [31.8, 217.0], [31.9, 217.0], [32.0, 217.0], [32.1, 217.0], [32.2, 218.0], [32.3, 218.0], [32.4, 218.0], [32.5, 218.0], [32.6, 218.0], [32.7, 218.0], [32.8, 218.0], [32.9, 218.0], [33.0, 219.0], [33.1, 219.0], [33.2, 219.0], [33.3, 219.0], [33.4, 219.0], [33.5, 219.0], [33.6, 219.0], [33.7, 220.0], [33.8, 220.0], [33.9, 220.0], [34.0, 220.0], [34.1, 220.0], [34.2, 220.0], [34.3, 220.0], [34.4, 221.0], [34.5, 221.0], [34.6, 221.0], [34.7, 221.0], [34.8, 221.0], [34.9, 221.0], [35.0, 221.0], [35.1, 221.0], [35.2, 222.0], [35.3, 222.0], [35.4, 222.0], [35.5, 222.0], [35.6, 222.0], [35.7, 222.0], [35.8, 222.0], [35.9, 223.0], [36.0, 223.0], [36.1, 223.0], [36.2, 223.0], [36.3, 223.0], [36.4, 223.0], [36.5, 223.0], [36.6, 223.0], [36.7, 224.0], [36.8, 224.0], [36.9, 224.0], [37.0, 224.0], [37.1, 224.0], [37.2, 224.0], [37.3, 224.0], [37.4, 224.0], [37.5, 225.0], [37.6, 225.0], [37.7, 225.0], [37.8, 225.0], [37.9, 225.0], [38.0, 225.0], [38.1, 225.0], [38.2, 225.0], [38.3, 226.0], [38.4, 226.0], [38.5, 226.0], [38.6, 226.0], [38.7, 226.0], [38.8, 226.0], [38.9, 226.0], [39.0, 227.0], [39.1, 227.0], [39.2, 227.0], [39.3, 227.0], [39.4, 227.0], [39.5, 227.0], [39.6, 227.0], [39.7, 227.0], [39.8, 228.0], [39.9, 228.0], [40.0, 228.0], [40.1, 228.0], [40.2, 228.0], [40.3, 228.0], [40.4, 228.0], [40.5, 228.0], [40.6, 229.0], [40.7, 229.0], [40.8, 229.0], [40.9, 229.0], [41.0, 229.0], [41.1, 229.0], [41.2, 229.0], [41.3, 229.0], [41.4, 230.0], [41.5, 230.0], [41.6, 230.0], [41.7, 230.0], [41.8, 230.0], [41.9, 230.0], [42.0, 230.0], [42.1, 230.0], [42.2, 231.0], [42.3, 231.0], [42.4, 231.0], [42.5, 231.0], [42.6, 231.0], [42.7, 231.0], [42.8, 231.0], [42.9, 231.0], [43.0, 232.0], [43.1, 232.0], [43.2, 232.0], [43.3, 232.0], [43.4, 232.0], [43.5, 232.0], [43.6, 232.0], [43.7, 232.0], [43.8, 232.0], [43.9, 233.0], [44.0, 233.0], [44.1, 233.0], [44.2, 233.0], [44.3, 233.0], [44.4, 233.0], [44.5, 233.0], [44.6, 233.0], [44.7, 233.0], [44.8, 234.0], [44.9, 234.0], [45.0, 234.0], [45.1, 234.0], [45.2, 234.0], [45.3, 234.0], [45.4, 234.0], [45.5, 234.0], [45.6, 235.0], [45.7, 235.0], [45.8, 235.0], [45.9, 235.0], [46.0, 235.0], [46.1, 235.0], [46.2, 235.0], [46.3, 235.0], [46.4, 235.0], [46.5, 236.0], [46.6, 236.0], [46.7, 236.0], [46.8, 236.0], [46.9, 236.0], [47.0, 236.0], [47.1, 236.0], [47.2, 236.0], [47.3, 236.0], [47.4, 237.0], [47.5, 237.0], [47.6, 237.0], [47.7, 237.0], [47.8, 237.0], [47.9, 237.0], [48.0, 237.0], [48.1, 237.0], [48.2, 237.0], [48.3, 238.0], [48.4, 238.0], [48.5, 238.0], [48.6, 238.0], [48.7, 238.0], [48.8, 238.0], [48.9, 238.0], [49.0, 238.0], [49.1, 238.0], [49.2, 239.0], [49.3, 239.0], [49.4, 239.0], [49.5, 239.0], [49.6, 239.0], [49.7, 239.0], [49.8, 239.0], [49.9, 239.0], [50.0, 239.0], [50.1, 240.0], [50.2, 240.0], [50.3, 240.0], [50.4, 240.0], [50.5, 240.0], [50.6, 240.0], [50.7, 240.0], [50.8, 240.0], [50.9, 240.0], [51.0, 240.0], [51.1, 241.0], [51.2, 241.0], [51.3, 241.0], [51.4, 241.0], [51.5, 241.0], [51.6, 241.0], [51.7, 241.0], [51.8, 241.0], [51.9, 241.0], [52.0, 242.0], [52.1, 242.0], [52.2, 242.0], [52.3, 242.0], [52.4, 242.0], [52.5, 242.0], [52.6, 242.0], [52.7, 242.0], [52.8, 242.0], [52.9, 243.0], [53.0, 243.0], [53.1, 243.0], [53.2, 243.0], [53.3, 243.0], [53.4, 243.0], [53.5, 243.0], [53.6, 243.0], [53.7, 243.0], [53.8, 244.0], [53.9, 244.0], [54.0, 244.0], [54.1, 244.0], [54.2, 244.0], [54.3, 244.0], [54.4, 244.0], [54.5, 244.0], [54.6, 244.0], [54.7, 245.0], [54.8, 245.0], [54.9, 245.0], [55.0, 245.0], [55.1, 245.0], [55.2, 245.0], [55.3, 245.0], [55.4, 245.0], [55.5, 246.0], [55.6, 246.0], [55.7, 246.0], [55.8, 246.0], [55.9, 246.0], [56.0, 246.0], [56.1, 246.0], [56.2, 246.0], [56.3, 246.0], [56.4, 247.0], [56.5, 247.0], [56.6, 247.0], [56.7, 247.0], [56.8, 247.0], [56.9, 247.0], [57.0, 247.0], [57.1, 247.0], [57.2, 247.0], [57.3, 248.0], [57.4, 248.0], [57.5, 248.0], [57.6, 248.0], [57.7, 248.0], [57.8, 248.0], [57.9, 248.0], [58.0, 248.0], [58.1, 249.0], [58.2, 249.0], [58.3, 249.0], [58.4, 249.0], [58.5, 249.0], [58.6, 249.0], [58.7, 249.0], [58.8, 249.0], [58.9, 249.0], [59.0, 250.0], [59.1, 250.0], [59.2, 250.0], [59.3, 250.0], [59.4, 250.0], [59.5, 250.0], [59.6, 250.0], [59.7, 250.0], [59.8, 251.0], [59.9, 251.0], [60.0, 251.0], [60.1, 251.0], [60.2, 251.0], [60.3, 251.0], [60.4, 251.0], [60.5, 251.0], [60.6, 251.0], [60.7, 252.0], [60.8, 252.0], [60.9, 252.0], [61.0, 252.0], [61.1, 252.0], [61.2, 252.0], [61.3, 252.0], [61.4, 252.0], [61.5, 252.0], [61.6, 253.0], [61.7, 253.0], [61.8, 253.0], [61.9, 253.0], [62.0, 253.0], [62.1, 253.0], [62.2, 253.0], [62.3, 254.0], [62.4, 254.0], [62.5, 254.0], [62.6, 254.0], [62.7, 254.0], [62.8, 254.0], [62.9, 254.0], [63.0, 254.0], [63.1, 254.0], [63.2, 255.0], [63.3, 255.0], [63.4, 255.0], [63.5, 255.0], [63.6, 255.0], [63.7, 255.0], [63.8, 255.0], [63.9, 255.0], [64.0, 255.0], [64.1, 256.0], [64.2, 256.0], [64.3, 256.0], [64.4, 256.0], [64.5, 256.0], [64.6, 256.0], [64.7, 256.0], [64.8, 256.0], [64.9, 256.0], [65.0, 256.0], [65.1, 257.0], [65.2, 257.0], [65.3, 257.0], [65.4, 257.0], [65.5, 257.0], [65.6, 257.0], [65.7, 257.0], [65.8, 257.0], [65.9, 257.0], [66.0, 258.0], [66.1, 258.0], [66.2, 258.0], [66.3, 258.0], [66.4, 258.0], [66.5, 258.0], [66.6, 258.0], [66.7, 258.0], [66.8, 258.0], [66.9, 259.0], [67.0, 259.0], [67.1, 259.0], [67.2, 259.0], [67.3, 259.0], [67.4, 259.0], [67.5, 259.0], [67.6, 259.0], [67.7, 259.0], [67.8, 259.0], [67.9, 260.0], [68.0, 260.0], [68.1, 260.0], [68.2, 260.0], [68.3, 260.0], [68.4, 260.0], [68.5, 260.0], [68.6, 260.0], [68.7, 260.0], [68.8, 261.0], [68.9, 261.0], [69.0, 261.0], [69.1, 261.0], [69.2, 261.0], [69.3, 261.0], [69.4, 261.0], [69.5, 261.0], [69.6, 261.0], [69.7, 262.0], [69.8, 262.0], [69.9, 262.0], [70.0, 262.0], [70.1, 262.0], [70.2, 262.0], [70.3, 262.0], [70.4, 262.0], [70.5, 262.0], [70.6, 263.0], [70.7, 263.0], [70.8, 263.0], [70.9, 263.0], [71.0, 263.0], [71.1, 263.0], [71.2, 263.0], [71.3, 263.0], [71.4, 264.0], [71.5, 264.0], [71.6, 264.0], [71.7, 264.0], [71.8, 264.0], [71.9, 264.0], [72.0, 264.0], [72.1, 264.0], [72.2, 265.0], [72.3, 265.0], [72.4, 265.0], [72.5, 265.0], [72.6, 265.0], [72.7, 265.0], [72.8, 265.0], [72.9, 266.0], [73.0, 266.0], [73.1, 266.0], [73.2, 266.0], [73.3, 266.0], [73.4, 266.0], [73.5, 266.0], [73.6, 266.0], [73.7, 267.0], [73.8, 267.0], [73.9, 267.0], [74.0, 267.0], [74.1, 267.0], [74.2, 267.0], [74.3, 267.0], [74.4, 268.0], [74.5, 268.0], [74.6, 268.0], [74.7, 268.0], [74.8, 268.0], [74.9, 268.0], [75.0, 268.0], [75.1, 269.0], [75.2, 269.0], [75.3, 269.0], [75.4, 269.0], [75.5, 269.0], [75.6, 269.0], [75.7, 270.0], [75.8, 270.0], [75.9, 270.0], [76.0, 270.0], [76.1, 270.0], [76.2, 270.0], [76.3, 270.0], [76.4, 271.0], [76.5, 271.0], [76.6, 271.0], [76.7, 271.0], [76.8, 271.0], [76.9, 271.0], [77.0, 272.0], [77.1, 272.0], [77.2, 272.0], [77.3, 272.0], [77.4, 272.0], [77.5, 272.0], [77.6, 273.0], [77.7, 273.0], [77.8, 273.0], [77.9, 273.0], [78.0, 273.0], [78.1, 273.0], [78.2, 274.0], [78.3, 274.0], [78.4, 274.0], [78.5, 274.0], [78.6, 274.0], [78.7, 274.0], [78.8, 275.0], [78.9, 275.0], [79.0, 275.0], [79.1, 275.0], [79.2, 275.0], [79.3, 275.0], [79.4, 276.0], [79.5, 276.0], [79.6, 276.0], [79.7, 276.0], [79.8, 276.0], [79.9, 277.0], [80.0, 277.0], [80.1, 277.0], [80.2, 277.0], [80.3, 277.0], [80.4, 278.0], [80.5, 278.0], [80.6, 278.0], [80.7, 278.0], [80.8, 279.0], [80.9, 279.0], [81.0, 279.0], [81.1, 279.0], [81.2, 279.0], [81.3, 280.0], [81.4, 280.0], [81.5, 280.0], [81.6, 280.0], [81.7, 281.0], [81.8, 281.0], [81.9, 281.0], [82.0, 281.0], [82.1, 282.0], [82.2, 282.0], [82.3, 282.0], [82.4, 282.0], [82.5, 283.0], [82.6, 283.0], [82.7, 283.0], [82.8, 284.0], [82.9, 284.0], [83.0, 284.0], [83.1, 285.0], [83.2, 285.0], [83.3, 285.0], [83.4, 285.0], [83.5, 286.0], [83.6, 286.0], [83.7, 286.0], [83.8, 287.0], [83.9, 287.0], [84.0, 287.0], [84.1, 288.0], [84.2, 288.0], [84.3, 289.0], [84.4, 289.0], [84.5, 290.0], [84.6, 290.0], [84.7, 290.0], [84.8, 291.0], [84.9, 291.0], [85.0, 292.0], [85.1, 292.0], [85.2, 292.0], [85.3, 293.0], [85.4, 293.0], [85.5, 294.0], [85.6, 294.0], [85.7, 295.0], [85.8, 295.0], [85.9, 296.0], [86.0, 296.0], [86.1, 297.0], [86.2, 297.0], [86.3, 298.0], [86.4, 298.0], [86.5, 299.0], [86.6, 299.0], [86.7, 300.0], [86.8, 300.0], [86.9, 301.0], [87.0, 301.0], [87.1, 302.0], [87.2, 302.0], [87.3, 303.0], [87.4, 303.0], [87.5, 304.0], [87.6, 305.0], [87.7, 305.0], [87.8, 306.0], [87.9, 306.0], [88.0, 307.0], [88.1, 307.0], [88.2, 307.0], [88.3, 308.0], [88.4, 308.0], [88.5, 309.0], [88.6, 309.0], [88.7, 310.0], [88.8, 310.0], [88.9, 311.0], [89.0, 311.0], [89.1, 312.0], [89.2, 312.0], [89.3, 313.0], [89.4, 314.0], [89.5, 314.0], [89.6, 315.0], [89.7, 315.0], [89.8, 316.0], [89.9, 316.0], [90.0, 317.0], [90.1, 318.0], [90.2, 318.0], [90.3, 319.0], [90.4, 320.0], [90.5, 320.0], [90.6, 321.0], [90.7, 322.0], [90.8, 322.0], [90.9, 323.0], [91.0, 324.0], [91.1, 325.0], [91.2, 325.0], [91.3, 326.0], [91.4, 327.0], [91.5, 328.0], [91.6, 329.0], [91.7, 330.0], [91.8, 330.0], [91.9, 332.0], [92.0, 333.0], [92.1, 334.0], [92.2, 335.0], [92.3, 337.0], [92.4, 338.0], [92.5, 340.0], [92.6, 341.0], [92.7, 343.0], [92.8, 346.0], [92.9, 349.0], [93.0, 352.0], [93.1, 358.0], [93.2, 365.0], [93.3, 374.0], [93.4, 383.0], [93.5, 392.0], [93.6, 400.0], [93.7, 407.0], [93.8, 415.0], [93.9, 421.0], [94.0, 427.0], [94.1, 431.0], [94.2, 435.0], [94.3, 439.0], [94.4, 442.0], [94.5, 447.0], [94.6, 451.0], [94.7, 454.0], [94.8, 458.0], [94.9, 460.0], [95.0, 463.0], [95.1, 466.0], [95.2, 468.0], [95.3, 471.0], [95.4, 474.0], [95.5, 476.0], [95.6, 480.0], [95.7, 483.0], [95.8, 486.0], [95.9, 489.0], [96.0, 494.0], [96.1, 501.0], [96.2, 508.0], [96.3, 516.0], [96.4, 524.0], [96.5, 533.0], [96.6, 541.0], [96.7, 556.0], [96.8, 566.0], [96.9, 572.0], [97.0, 579.0], [97.1, 584.0], [97.2, 590.0], [97.3, 595.0], [97.4, 599.0], [97.5, 605.0], [97.6, 609.0], [97.7, 614.0], [97.8, 622.0], [97.9, 630.0], [98.0, 651.0], [98.1, 674.0], [98.2, 696.0], [98.3, 715.0], [98.4, 731.0], [98.5, 742.0], [98.6, 753.0], [98.7, 768.0], [98.8, 786.0], [98.9, 797.0], [99.0, 807.0], [99.1, 830.0], [99.2, 873.0], [99.3, 934.0], [99.4, 1086.0], [99.5, 1239.0], [99.6, 1291.0], [99.7, 1346.0], [99.8, 1419.0], [99.9, 2246.0], [100.0, 8199.0]], "isOverall": false, "label": "Petición HTTP", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 29636.0, "series": [{"data": [[0.0, 3161.0], [600.0, 367.0], [700.0, 311.0], [800.0, 150.0], [900.0, 49.0], [1000.0, 18.0], [1100.0, 22.0], [1200.0, 73.0], [1300.0, 72.0], [1400.0, 35.0], [1500.0, 15.0], [100.0, 6101.0], [1600.0, 1.0], [1900.0, 1.0], [2000.0, 1.0], [2100.0, 2.0], [2300.0, 15.0], [2200.0, 2.0], [2400.0, 9.0], [2500.0, 7.0], [2600.0, 5.0], [2800.0, 1.0], [200.0, 29636.0], [3700.0, 1.0], [3600.0, 1.0], [4200.0, 1.0], [300.0, 3103.0], [4900.0, 2.0], [5300.0, 1.0], [400.0, 1112.0], [500.0, 598.0], [8100.0, 1.0]], "isOverall": false, "label": "Petición HTTP", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 8100.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 66.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 43123.0, "series": [{"data": [[0.0, 43123.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 1685.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 66.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 94.2503867723845, "minX": 1.77084336E12, "maxY": 100.0, "series": [{"data": [[1.77084348E12, 96.13060582218728], [1.77084342E12, 100.0], [1.77084336E12, 94.2503867723845]], "isOverall": false, "label": "Estres", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77084348E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 81.24999999999997, "minX": 1.0, "maxY": 1378.0, "series": [{"data": [[2.0, 605.0], [3.0, 611.0], [4.0, 459.0], [5.0, 874.0], [6.0, 442.0], [7.0, 421.0], [8.0, 442.0], [9.0, 328.0], [10.0, 351.0], [11.0, 427.0], [12.0, 195.0], [13.0, 823.0], [14.0, 399.0], [15.0, 842.1428571428571], [16.0, 242.0], [17.0, 127.21052631578948], [18.0, 128.6875], [19.0, 117.73684210526315], [20.0, 84.90909090909089], [21.0, 87.76666666666667], [22.0, 87.70833333333334], [23.0, 82.01818181818179], [24.0, 86.33333333333333], [25.0, 82.14893617021276], [26.0, 94.5], [27.0, 88.125], [28.0, 81.24999999999997], [29.0, 183.66666666666666], [30.0, 84.81818181818183], [31.0, 93.34285714285713], [32.0, 93.76666666666667], [33.0, 89.66666666666667], [34.0, 122.99999999999999], [35.0, 116.46153846153848], [36.0, 112.36842105263159], [37.0, 118.57446808510642], [38.0, 87.51219512195122], [39.0, 93.87878787878788], [40.0, 87.28571428571428], [41.0, 123.02777777777774], [42.0, 85.21052631578947], [43.0, 127.3235294117647], [44.0, 103.56603773584905], [45.0, 110.02380952380952], [46.0, 109.525], [47.0, 135.16216216216216], [48.0, 108.82978723404253], [49.0, 99.44444444444446], [50.0, 116.54347826086956], [51.0, 128.52777777777777], [52.0, 117.00000000000003], [53.0, 99.55882352941178], [54.0, 165.08571428571432], [55.0, 144.88888888888886], [56.0, 124.02777777777777], [57.0, 105.05714285714286], [58.0, 165.68292682926827], [59.0, 154.04878048780492], [60.0, 114.43243243243244], [61.0, 191.20930232558132], [62.0, 166.04545454545456], [63.0, 192.69047619047623], [64.0, 95.36363636363636], [65.0, 164.63829787234047], [66.0, 154.5862068965517], [67.0, 159.00000000000006], [68.0, 186.3055555555556], [69.0, 154.89189189189193], [70.0, 206.57999999999996], [71.0, 140.4193548387097], [72.0, 153.98076923076925], [73.0, 176.53333333333333], [74.0, 212.34210526315795], [75.0, 200.42857142857142], [76.0, 137.55172413793102], [77.0, 206.87234042553197], [78.0, 179.75862068965515], [79.0, 193.1836734693878], [80.0, 197.37931034482756], [81.0, 230.0], [82.0, 193.0], [83.0, 185.59615384615387], [84.0, 181.71875], [85.0, 196.07142857142856], [86.0, 306.92857142857144], [87.0, 167.3076923076923], [88.0, 216.25454545454542], [89.0, 194.43478260869563], [90.0, 237.2413793103448], [91.0, 271.0399999999999], [92.0, 219.82978723404253], [93.0, 256.6486486486487], [94.0, 266.69565217391295], [95.0, 218.2258064516129], [96.0, 309.19999999999993], [97.0, 242.8709677419355], [98.0, 242.04545454545448], [99.0, 235.34042553191495], [100.0, 263.06804854112943], [1.0, 1378.0]], "isOverall": false, "label": "Petición HTTP", "isController": false}, {"data": [[97.24018362526189, 256.02299772696784]], "isOverall": false, "label": "Petición HTTP-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 2859.75, "minX": 1.77084336E12, "maxY": 1.0978966333333334E7, "series": [{"data": [[1.77084348E12, 608851.3666666667], [1.77084342E12, 1.0978966333333334E7], [1.77084336E12, 9908326.35]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.77084348E12, 2859.75], [1.77084342E12, 51567.75], [1.77084336E12, 46539.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77084348E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 249.29733127054706, "minX": 1.77084336E12, "maxY": 266.5444531864674, "series": [{"data": [[1.77084348E12, 266.5444531864674], [1.77084342E12, 261.5093154151587], [1.77084336E12, 249.29733127054706]], "isOverall": false, "label": "Petición HTTP", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77084348E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 186.42839876232927, "minX": 1.77084336E12, "maxY": 192.70443736637637, "series": [{"data": [[1.77084348E12, 190.90401258851313], [1.77084342E12, 192.70443736637637], [1.77084336E12, 186.42839876232927]], "isOverall": false, "label": "Petición HTTP", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77084348E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.77084336E12, "maxY": 1.4428639993018828, "series": [{"data": [[1.77084348E12, 0.0], [1.77084342E12, 1.4428639993018828], [1.77084336E12, 1.4201798491587745]], "isOverall": false, "label": "Petición HTTP", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77084348E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 60.0, "minX": 1.77084336E12, "maxY": 8199.0, "series": [{"data": [[1.77084348E12, 1433.0], [1.77084342E12, 8199.0], [1.77084336E12, 5308.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.77084348E12, 70.0], [1.77084342E12, 61.0], [1.77084336E12, 60.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.77084348E12, 329.79999999999995], [1.77084342E12, 320.0], [1.77084336E12, 314.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.77084348E12, 909.2799999999966], [1.77084342E12, 818.9900000000016], [1.77084336E12, 795.9900000000016]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.77084348E12, 240.0], [1.77084342E12, 240.0], [1.77084336E12, 241.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.77084348E12, 490.1999999999996], [1.77084342E12, 470.0], [1.77084336E12, 446.0]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77084348E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 75.0, "minX": 27.0, "maxY": 262.0, "series": [{"data": [[27.0, 262.0], [143.0, 248.0], [265.0, 75.0], [317.0, 75.0], [330.0, 256.0], [331.0, 252.0], [351.0, 246.0], [349.0, 253.0], [352.0, 250.5], [357.0, 249.0], [363.0, 249.0], [355.0, 254.0], [356.0, 246.0], [353.0, 252.0], [354.0, 253.5], [362.0, 223.5], [367.0, 226.0], [365.0, 241.0], [358.0, 247.0], [359.0, 245.0], [380.0, 240.0], [374.0, 234.0], [377.0, 228.5], [372.0, 237.0], [378.0, 244.0], [375.0, 240.0], [381.0, 246.0], [368.0, 245.0], [369.0, 248.0], [370.0, 241.0], [383.0, 246.0], [376.0, 244.0], [382.0, 245.0], [379.0, 240.0], [398.0, 78.0], [384.0, 236.5], [385.0, 244.0], [392.0, 229.0], [394.0, 247.0], [395.0, 246.0], [387.0, 235.0], [386.0, 240.0], [396.0, 226.0], [397.0, 243.0], [391.0, 241.0], [389.0, 244.0], [388.0, 238.0], [390.0, 238.0], [393.0, 235.0], [402.0, 189.0], [405.0, 239.0], [407.0, 223.0], [412.0, 236.0], [417.0, 225.0], [416.0, 209.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 417.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 73.0, "minX": 27.0, "maxY": 258.0, "series": [{"data": [[27.0, 258.0], [143.0, 211.0], [265.0, 73.0], [317.0, 74.0], [330.0, 220.0], [331.0, 220.0], [351.0, 213.0], [349.0, 219.0], [352.0, 211.0], [357.0, 203.0], [363.0, 216.0], [355.0, 226.0], [356.0, 207.0], [353.0, 211.0], [354.0, 211.0], [362.0, 182.0], [367.0, 188.0], [365.0, 205.0], [358.0, 206.5], [359.0, 211.0], [380.0, 202.0], [374.0, 198.0], [377.0, 174.0], [372.0, 198.0], [378.0, 209.0], [375.0, 206.0], [381.0, 214.0], [368.0, 212.0], [369.0, 212.0], [370.0, 204.0], [383.0, 211.0], [376.0, 212.0], [382.0, 209.0], [379.0, 206.0], [398.0, 76.0], [384.0, 192.0], [385.0, 199.0], [392.0, 154.0], [394.0, 209.0], [395.0, 207.0], [387.0, 196.0], [386.0, 197.0], [396.0, 150.0], [397.0, 199.0], [391.0, 203.0], [389.0, 214.0], [388.0, 203.0], [390.0, 200.0], [393.0, 194.0], [402.0, 127.0], [405.0, 201.0], [407.0, 144.0], [412.0, 173.5], [417.0, 147.0], [416.0, 146.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 417.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 19.516666666666666, "minX": 1.77084336E12, "maxY": 381.98333333333335, "series": [{"data": [[1.77084348E12, 19.516666666666666], [1.77084342E12, 381.98333333333335], [1.77084336E12, 346.4]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77084348E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 21.183333333333334, "minX": 1.77084336E12, "maxY": 381.98333333333335, "series": [{"data": [[1.77084348E12, 21.183333333333334], [1.77084342E12, 381.98333333333335], [1.77084336E12, 344.73333333333335]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77084348E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 21.183333333333334, "minX": 1.77084336E12, "maxY": 381.98333333333335, "series": [{"data": [[1.77084348E12, 21.183333333333334], [1.77084342E12, 381.98333333333335], [1.77084336E12, 344.73333333333335]], "isOverall": false, "label": "Petición HTTP-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77084348E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 21.183333333333334, "minX": 1.77084336E12, "maxY": 381.98333333333335, "series": [{"data": [[1.77084348E12, 21.183333333333334], [1.77084342E12, 381.98333333333335], [1.77084336E12, 344.73333333333335]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77084348E12, "title": "Total Transactions Per Second"}},
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

