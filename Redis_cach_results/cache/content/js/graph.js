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
        data: {"result": {"minY": 0.0, "minX": 0.0, "maxY": 206.0, "series": [{"data": [[0.0, 0.0], [0.1, 0.0], [0.2, 0.0], [0.3, 0.0], [0.4, 0.0], [0.5, 0.0], [0.6, 0.0], [0.7, 0.0], [0.8, 0.0], [0.9, 0.0], [1.0, 0.0], [1.1, 0.0], [1.2, 0.0], [1.3, 0.0], [1.4, 0.0], [1.5, 0.0], [1.6, 0.0], [1.7, 0.0], [1.8, 0.0], [1.9, 0.0], [2.0, 0.0], [2.1, 0.0], [2.2, 0.0], [2.3, 0.0], [2.4, 0.0], [2.5, 0.0], [2.6, 0.0], [2.7, 0.0], [2.8, 0.0], [2.9, 0.0], [3.0, 0.0], [3.1, 0.0], [3.2, 0.0], [3.3, 0.0], [3.4, 0.0], [3.5, 0.0], [3.6, 0.0], [3.7, 0.0], [3.8, 0.0], [3.9, 0.0], [4.0, 0.0], [4.1, 0.0], [4.2, 0.0], [4.3, 0.0], [4.4, 0.0], [4.5, 0.0], [4.6, 0.0], [4.7, 0.0], [4.8, 0.0], [4.9, 0.0], [5.0, 0.0], [5.1, 0.0], [5.2, 0.0], [5.3, 0.0], [5.4, 0.0], [5.5, 0.0], [5.6, 0.0], [5.7, 0.0], [5.8, 0.0], [5.9, 0.0], [6.0, 0.0], [6.1, 0.0], [6.2, 0.0], [6.3, 0.0], [6.4, 0.0], [6.5, 0.0], [6.6, 0.0], [6.7, 0.0], [6.8, 0.0], [6.9, 0.0], [7.0, 0.0], [7.1, 0.0], [7.2, 0.0], [7.3, 0.0], [7.4, 0.0], [7.5, 0.0], [7.6, 0.0], [7.7, 0.0], [7.8, 0.0], [7.9, 0.0], [8.0, 0.0], [8.1, 0.0], [8.2, 0.0], [8.3, 0.0], [8.4, 0.0], [8.5, 0.0], [8.6, 0.0], [8.7, 0.0], [8.8, 0.0], [8.9, 0.0], [9.0, 0.0], [9.1, 0.0], [9.2, 0.0], [9.3, 0.0], [9.4, 0.0], [9.5, 0.0], [9.6, 0.0], [9.7, 0.0], [9.8, 0.0], [9.9, 0.0], [10.0, 0.0], [10.1, 0.0], [10.2, 0.0], [10.3, 0.0], [10.4, 0.0], [10.5, 0.0], [10.6, 0.0], [10.7, 0.0], [10.8, 0.0], [10.9, 0.0], [11.0, 0.0], [11.1, 0.0], [11.2, 0.0], [11.3, 0.0], [11.4, 0.0], [11.5, 0.0], [11.6, 0.0], [11.7, 0.0], [11.8, 0.0], [11.9, 0.0], [12.0, 0.0], [12.1, 0.0], [12.2, 0.0], [12.3, 0.0], [12.4, 0.0], [12.5, 0.0], [12.6, 0.0], [12.7, 0.0], [12.8, 0.0], [12.9, 0.0], [13.0, 0.0], [13.1, 0.0], [13.2, 0.0], [13.3, 0.0], [13.4, 0.0], [13.5, 0.0], [13.6, 0.0], [13.7, 0.0], [13.8, 0.0], [13.9, 0.0], [14.0, 0.0], [14.1, 0.0], [14.2, 0.0], [14.3, 0.0], [14.4, 0.0], [14.5, 0.0], [14.6, 0.0], [14.7, 0.0], [14.8, 0.0], [14.9, 0.0], [15.0, 0.0], [15.1, 0.0], [15.2, 0.0], [15.3, 0.0], [15.4, 0.0], [15.5, 1.0], [15.6, 1.0], [15.7, 1.0], [15.8, 1.0], [15.9, 1.0], [16.0, 1.0], [16.1, 1.0], [16.2, 1.0], [16.3, 1.0], [16.4, 1.0], [16.5, 1.0], [16.6, 1.0], [16.7, 1.0], [16.8, 1.0], [16.9, 1.0], [17.0, 1.0], [17.1, 1.0], [17.2, 1.0], [17.3, 1.0], [17.4, 1.0], [17.5, 1.0], [17.6, 1.0], [17.7, 1.0], [17.8, 1.0], [17.9, 1.0], [18.0, 1.0], [18.1, 1.0], [18.2, 1.0], [18.3, 1.0], [18.4, 1.0], [18.5, 1.0], [18.6, 1.0], [18.7, 1.0], [18.8, 1.0], [18.9, 1.0], [19.0, 1.0], [19.1, 1.0], [19.2, 1.0], [19.3, 1.0], [19.4, 1.0], [19.5, 1.0], [19.6, 1.0], [19.7, 1.0], [19.8, 1.0], [19.9, 1.0], [20.0, 1.0], [20.1, 1.0], [20.2, 1.0], [20.3, 1.0], [20.4, 1.0], [20.5, 1.0], [20.6, 1.0], [20.7, 1.0], [20.8, 1.0], [20.9, 1.0], [21.0, 1.0], [21.1, 1.0], [21.2, 1.0], [21.3, 1.0], [21.4, 1.0], [21.5, 1.0], [21.6, 1.0], [21.7, 1.0], [21.8, 1.0], [21.9, 1.0], [22.0, 1.0], [22.1, 1.0], [22.2, 1.0], [22.3, 1.0], [22.4, 1.0], [22.5, 1.0], [22.6, 1.0], [22.7, 1.0], [22.8, 1.0], [22.9, 1.0], [23.0, 1.0], [23.1, 1.0], [23.2, 1.0], [23.3, 1.0], [23.4, 1.0], [23.5, 1.0], [23.6, 1.0], [23.7, 1.0], [23.8, 1.0], [23.9, 1.0], [24.0, 1.0], [24.1, 1.0], [24.2, 1.0], [24.3, 1.0], [24.4, 1.0], [24.5, 1.0], [24.6, 1.0], [24.7, 1.0], [24.8, 1.0], [24.9, 1.0], [25.0, 1.0], [25.1, 1.0], [25.2, 1.0], [25.3, 1.0], [25.4, 1.0], [25.5, 1.0], [25.6, 1.0], [25.7, 1.0], [25.8, 1.0], [25.9, 1.0], [26.0, 1.0], [26.1, 1.0], [26.2, 1.0], [26.3, 1.0], [26.4, 1.0], [26.5, 1.0], [26.6, 1.0], [26.7, 1.0], [26.8, 1.0], [26.9, 1.0], [27.0, 1.0], [27.1, 1.0], [27.2, 1.0], [27.3, 1.0], [27.4, 1.0], [27.5, 1.0], [27.6, 1.0], [27.7, 1.0], [27.8, 1.0], [27.9, 1.0], [28.0, 1.0], [28.1, 1.0], [28.2, 1.0], [28.3, 1.0], [28.4, 1.0], [28.5, 1.0], [28.6, 1.0], [28.7, 1.0], [28.8, 1.0], [28.9, 1.0], [29.0, 1.0], [29.1, 1.0], [29.2, 1.0], [29.3, 1.0], [29.4, 1.0], [29.5, 1.0], [29.6, 1.0], [29.7, 1.0], [29.8, 1.0], [29.9, 1.0], [30.0, 1.0], [30.1, 1.0], [30.2, 1.0], [30.3, 1.0], [30.4, 1.0], [30.5, 1.0], [30.6, 1.0], [30.7, 1.0], [30.8, 1.0], [30.9, 1.0], [31.0, 1.0], [31.1, 1.0], [31.2, 1.0], [31.3, 1.0], [31.4, 1.0], [31.5, 1.0], [31.6, 1.0], [31.7, 1.0], [31.8, 1.0], [31.9, 1.0], [32.0, 1.0], [32.1, 1.0], [32.2, 1.0], [32.3, 1.0], [32.4, 1.0], [32.5, 1.0], [32.6, 1.0], [32.7, 1.0], [32.8, 1.0], [32.9, 1.0], [33.0, 1.0], [33.1, 1.0], [33.2, 1.0], [33.3, 1.0], [33.4, 1.0], [33.5, 1.0], [33.6, 1.0], [33.7, 1.0], [33.8, 1.0], [33.9, 1.0], [34.0, 1.0], [34.1, 1.0], [34.2, 1.0], [34.3, 1.0], [34.4, 1.0], [34.5, 1.0], [34.6, 1.0], [34.7, 1.0], [34.8, 1.0], [34.9, 1.0], [35.0, 1.0], [35.1, 1.0], [35.2, 1.0], [35.3, 1.0], [35.4, 1.0], [35.5, 1.0], [35.6, 1.0], [35.7, 1.0], [35.8, 1.0], [35.9, 1.0], [36.0, 1.0], [36.1, 1.0], [36.2, 1.0], [36.3, 1.0], [36.4, 1.0], [36.5, 1.0], [36.6, 1.0], [36.7, 1.0], [36.8, 1.0], [36.9, 1.0], [37.0, 1.0], [37.1, 1.0], [37.2, 1.0], [37.3, 1.0], [37.4, 1.0], [37.5, 1.0], [37.6, 1.0], [37.7, 1.0], [37.8, 1.0], [37.9, 1.0], [38.0, 1.0], [38.1, 1.0], [38.2, 1.0], [38.3, 1.0], [38.4, 1.0], [38.5, 1.0], [38.6, 1.0], [38.7, 1.0], [38.8, 1.0], [38.9, 1.0], [39.0, 1.0], [39.1, 1.0], [39.2, 1.0], [39.3, 1.0], [39.4, 1.0], [39.5, 1.0], [39.6, 1.0], [39.7, 1.0], [39.8, 1.0], [39.9, 1.0], [40.0, 1.0], [40.1, 1.0], [40.2, 1.0], [40.3, 1.0], [40.4, 1.0], [40.5, 1.0], [40.6, 1.0], [40.7, 1.0], [40.8, 1.0], [40.9, 1.0], [41.0, 1.0], [41.1, 1.0], [41.2, 1.0], [41.3, 1.0], [41.4, 1.0], [41.5, 1.0], [41.6, 1.0], [41.7, 1.0], [41.8, 1.0], [41.9, 1.0], [42.0, 1.0], [42.1, 1.0], [42.2, 1.0], [42.3, 1.0], [42.4, 1.0], [42.5, 1.0], [42.6, 1.0], [42.7, 1.0], [42.8, 1.0], [42.9, 1.0], [43.0, 1.0], [43.1, 1.0], [43.2, 1.0], [43.3, 1.0], [43.4, 1.0], [43.5, 1.0], [43.6, 1.0], [43.7, 1.0], [43.8, 1.0], [43.9, 1.0], [44.0, 1.0], [44.1, 1.0], [44.2, 1.0], [44.3, 1.0], [44.4, 1.0], [44.5, 1.0], [44.6, 1.0], [44.7, 1.0], [44.8, 1.0], [44.9, 1.0], [45.0, 1.0], [45.1, 1.0], [45.2, 1.0], [45.3, 1.0], [45.4, 1.0], [45.5, 1.0], [45.6, 1.0], [45.7, 1.0], [45.8, 1.0], [45.9, 1.0], [46.0, 1.0], [46.1, 1.0], [46.2, 1.0], [46.3, 1.0], [46.4, 1.0], [46.5, 1.0], [46.6, 1.0], [46.7, 1.0], [46.8, 1.0], [46.9, 1.0], [47.0, 1.0], [47.1, 1.0], [47.2, 1.0], [47.3, 1.0], [47.4, 1.0], [47.5, 1.0], [47.6, 1.0], [47.7, 1.0], [47.8, 1.0], [47.9, 1.0], [48.0, 1.0], [48.1, 1.0], [48.2, 1.0], [48.3, 1.0], [48.4, 1.0], [48.5, 1.0], [48.6, 1.0], [48.7, 1.0], [48.8, 1.0], [48.9, 1.0], [49.0, 1.0], [49.1, 1.0], [49.2, 1.0], [49.3, 1.0], [49.4, 1.0], [49.5, 1.0], [49.6, 1.0], [49.7, 1.0], [49.8, 1.0], [49.9, 1.0], [50.0, 1.0], [50.1, 1.0], [50.2, 1.0], [50.3, 1.0], [50.4, 1.0], [50.5, 1.0], [50.6, 1.0], [50.7, 1.0], [50.8, 1.0], [50.9, 1.0], [51.0, 1.0], [51.1, 1.0], [51.2, 1.0], [51.3, 1.0], [51.4, 1.0], [51.5, 1.0], [51.6, 1.0], [51.7, 1.0], [51.8, 1.0], [51.9, 1.0], [52.0, 1.0], [52.1, 1.0], [52.2, 1.0], [52.3, 1.0], [52.4, 1.0], [52.5, 1.0], [52.6, 1.0], [52.7, 1.0], [52.8, 1.0], [52.9, 1.0], [53.0, 1.0], [53.1, 1.0], [53.2, 1.0], [53.3, 1.0], [53.4, 1.0], [53.5, 1.0], [53.6, 1.0], [53.7, 1.0], [53.8, 1.0], [53.9, 1.0], [54.0, 1.0], [54.1, 1.0], [54.2, 1.0], [54.3, 1.0], [54.4, 1.0], [54.5, 1.0], [54.6, 1.0], [54.7, 1.0], [54.8, 1.0], [54.9, 1.0], [55.0, 1.0], [55.1, 1.0], [55.2, 1.0], [55.3, 1.0], [55.4, 1.0], [55.5, 1.0], [55.6, 1.0], [55.7, 1.0], [55.8, 1.0], [55.9, 1.0], [56.0, 1.0], [56.1, 1.0], [56.2, 1.0], [56.3, 1.0], [56.4, 1.0], [56.5, 1.0], [56.6, 1.0], [56.7, 1.0], [56.8, 1.0], [56.9, 1.0], [57.0, 1.0], [57.1, 1.0], [57.2, 1.0], [57.3, 1.0], [57.4, 1.0], [57.5, 1.0], [57.6, 1.0], [57.7, 1.0], [57.8, 1.0], [57.9, 1.0], [58.0, 1.0], [58.1, 1.0], [58.2, 1.0], [58.3, 1.0], [58.4, 1.0], [58.5, 1.0], [58.6, 1.0], [58.7, 1.0], [58.8, 1.0], [58.9, 1.0], [59.0, 1.0], [59.1, 1.0], [59.2, 1.0], [59.3, 1.0], [59.4, 1.0], [59.5, 1.0], [59.6, 1.0], [59.7, 1.0], [59.8, 1.0], [59.9, 1.0], [60.0, 1.0], [60.1, 1.0], [60.2, 1.0], [60.3, 1.0], [60.4, 1.0], [60.5, 1.0], [60.6, 1.0], [60.7, 1.0], [60.8, 1.0], [60.9, 1.0], [61.0, 1.0], [61.1, 1.0], [61.2, 1.0], [61.3, 1.0], [61.4, 1.0], [61.5, 1.0], [61.6, 1.0], [61.7, 1.0], [61.8, 1.0], [61.9, 1.0], [62.0, 1.0], [62.1, 1.0], [62.2, 1.0], [62.3, 1.0], [62.4, 1.0], [62.5, 1.0], [62.6, 1.0], [62.7, 1.0], [62.8, 1.0], [62.9, 1.0], [63.0, 1.0], [63.1, 1.0], [63.2, 1.0], [63.3, 1.0], [63.4, 1.0], [63.5, 1.0], [63.6, 1.0], [63.7, 1.0], [63.8, 1.0], [63.9, 1.0], [64.0, 1.0], [64.1, 1.0], [64.2, 1.0], [64.3, 1.0], [64.4, 1.0], [64.5, 1.0], [64.6, 1.0], [64.7, 1.0], [64.8, 1.0], [64.9, 1.0], [65.0, 1.0], [65.1, 1.0], [65.2, 1.0], [65.3, 1.0], [65.4, 1.0], [65.5, 1.0], [65.6, 1.0], [65.7, 1.0], [65.8, 1.0], [65.9, 1.0], [66.0, 1.0], [66.1, 1.0], [66.2, 1.0], [66.3, 1.0], [66.4, 1.0], [66.5, 1.0], [66.6, 1.0], [66.7, 1.0], [66.8, 1.0], [66.9, 1.0], [67.0, 1.0], [67.1, 1.0], [67.2, 1.0], [67.3, 1.0], [67.4, 1.0], [67.5, 1.0], [67.6, 1.0], [67.7, 1.0], [67.8, 1.0], [67.9, 1.0], [68.0, 1.0], [68.1, 1.0], [68.2, 1.0], [68.3, 1.0], [68.4, 1.0], [68.5, 1.0], [68.6, 1.0], [68.7, 1.0], [68.8, 1.0], [68.9, 1.0], [69.0, 1.0], [69.1, 1.0], [69.2, 1.0], [69.3, 1.0], [69.4, 1.0], [69.5, 1.0], [69.6, 2.0], [69.7, 2.0], [69.8, 2.0], [69.9, 2.0], [70.0, 2.0], [70.1, 2.0], [70.2, 2.0], [70.3, 2.0], [70.4, 2.0], [70.5, 2.0], [70.6, 2.0], [70.7, 2.0], [70.8, 2.0], [70.9, 2.0], [71.0, 2.0], [71.1, 2.0], [71.2, 2.0], [71.3, 2.0], [71.4, 2.0], [71.5, 2.0], [71.6, 2.0], [71.7, 2.0], [71.8, 2.0], [71.9, 2.0], [72.0, 2.0], [72.1, 2.0], [72.2, 2.0], [72.3, 2.0], [72.4, 2.0], [72.5, 2.0], [72.6, 2.0], [72.7, 2.0], [72.8, 2.0], [72.9, 2.0], [73.0, 2.0], [73.1, 2.0], [73.2, 2.0], [73.3, 2.0], [73.4, 2.0], [73.5, 2.0], [73.6, 2.0], [73.7, 2.0], [73.8, 2.0], [73.9, 2.0], [74.0, 2.0], [74.1, 2.0], [74.2, 2.0], [74.3, 2.0], [74.4, 2.0], [74.5, 2.0], [74.6, 2.0], [74.7, 2.0], [74.8, 2.0], [74.9, 2.0], [75.0, 2.0], [75.1, 2.0], [75.2, 2.0], [75.3, 2.0], [75.4, 2.0], [75.5, 2.0], [75.6, 2.0], [75.7, 2.0], [75.8, 2.0], [75.9, 2.0], [76.0, 2.0], [76.1, 2.0], [76.2, 2.0], [76.3, 2.0], [76.4, 2.0], [76.5, 2.0], [76.6, 2.0], [76.7, 2.0], [76.8, 2.0], [76.9, 2.0], [77.0, 2.0], [77.1, 2.0], [77.2, 2.0], [77.3, 2.0], [77.4, 2.0], [77.5, 2.0], [77.6, 2.0], [77.7, 2.0], [77.8, 2.0], [77.9, 2.0], [78.0, 2.0], [78.1, 2.0], [78.2, 2.0], [78.3, 2.0], [78.4, 2.0], [78.5, 2.0], [78.6, 2.0], [78.7, 2.0], [78.8, 2.0], [78.9, 2.0], [79.0, 2.0], [79.1, 2.0], [79.2, 2.0], [79.3, 2.0], [79.4, 2.0], [79.5, 2.0], [79.6, 2.0], [79.7, 2.0], [79.8, 2.0], [79.9, 2.0], [80.0, 2.0], [80.1, 2.0], [80.2, 2.0], [80.3, 2.0], [80.4, 2.0], [80.5, 2.0], [80.6, 2.0], [80.7, 2.0], [80.8, 2.0], [80.9, 2.0], [81.0, 2.0], [81.1, 2.0], [81.2, 2.0], [81.3, 2.0], [81.4, 2.0], [81.5, 2.0], [81.6, 2.0], [81.7, 2.0], [81.8, 2.0], [81.9, 2.0], [82.0, 2.0], [82.1, 2.0], [82.2, 2.0], [82.3, 2.0], [82.4, 2.0], [82.5, 2.0], [82.6, 2.0], [82.7, 2.0], [82.8, 2.0], [82.9, 2.0], [83.0, 2.0], [83.1, 2.0], [83.2, 2.0], [83.3, 2.0], [83.4, 2.0], [83.5, 2.0], [83.6, 2.0], [83.7, 2.0], [83.8, 2.0], [83.9, 2.0], [84.0, 2.0], [84.1, 2.0], [84.2, 2.0], [84.3, 2.0], [84.4, 2.0], [84.5, 2.0], [84.6, 2.0], [84.7, 2.0], [84.8, 2.0], [84.9, 2.0], [85.0, 2.0], [85.1, 2.0], [85.2, 2.0], [85.3, 2.0], [85.4, 2.0], [85.5, 2.0], [85.6, 2.0], [85.7, 2.0], [85.8, 2.0], [85.9, 2.0], [86.0, 2.0], [86.1, 2.0], [86.2, 2.0], [86.3, 2.0], [86.4, 2.0], [86.5, 2.0], [86.6, 2.0], [86.7, 2.0], [86.8, 2.0], [86.9, 2.0], [87.0, 2.0], [87.1, 2.0], [87.2, 2.0], [87.3, 2.0], [87.4, 3.0], [87.5, 3.0], [87.6, 3.0], [87.7, 3.0], [87.8, 3.0], [87.9, 3.0], [88.0, 3.0], [88.1, 3.0], [88.2, 3.0], [88.3, 3.0], [88.4, 3.0], [88.5, 3.0], [88.6, 3.0], [88.7, 3.0], [88.8, 3.0], [88.9, 3.0], [89.0, 3.0], [89.1, 3.0], [89.2, 3.0], [89.3, 3.0], [89.4, 3.0], [89.5, 3.0], [89.6, 3.0], [89.7, 3.0], [89.8, 3.0], [89.9, 3.0], [90.0, 3.0], [90.1, 3.0], [90.2, 3.0], [90.3, 3.0], [90.4, 3.0], [90.5, 3.0], [90.6, 3.0], [90.7, 3.0], [90.8, 3.0], [90.9, 3.0], [91.0, 3.0], [91.1, 3.0], [91.2, 3.0], [91.3, 3.0], [91.4, 3.0], [91.5, 3.0], [91.6, 3.0], [91.7, 3.0], [91.8, 3.0], [91.9, 3.0], [92.0, 3.0], [92.1, 3.0], [92.2, 3.0], [92.3, 3.0], [92.4, 3.0], [92.5, 3.0], [92.6, 3.0], [92.7, 3.0], [92.8, 3.0], [92.9, 3.0], [93.0, 3.0], [93.1, 3.0], [93.2, 3.0], [93.3, 3.0], [93.4, 3.0], [93.5, 4.0], [93.6, 4.0], [93.7, 4.0], [93.8, 4.0], [93.9, 4.0], [94.0, 4.0], [94.1, 4.0], [94.2, 4.0], [94.3, 4.0], [94.4, 4.0], [94.5, 4.0], [94.6, 4.0], [94.7, 4.0], [94.8, 4.0], [94.9, 4.0], [95.0, 4.0], [95.1, 4.0], [95.2, 4.0], [95.3, 4.0], [95.4, 4.0], [95.5, 4.0], [95.6, 4.0], [95.7, 4.0], [95.8, 4.0], [95.9, 4.0], [96.0, 4.0], [96.1, 5.0], [96.2, 5.0], [96.3, 5.0], [96.4, 5.0], [96.5, 5.0], [96.6, 5.0], [96.7, 5.0], [96.8, 5.0], [96.9, 5.0], [97.0, 5.0], [97.1, 5.0], [97.2, 5.0], [97.3, 5.0], [97.4, 5.0], [97.5, 6.0], [97.6, 6.0], [97.7, 6.0], [97.8, 6.0], [97.9, 6.0], [98.0, 6.0], [98.1, 6.0], [98.2, 6.0], [98.3, 6.0], [98.4, 7.0], [98.5, 7.0], [98.6, 7.0], [98.7, 7.0], [98.8, 7.0], [98.9, 8.0], [99.0, 8.0], [99.1, 8.0], [99.2, 9.0], [99.3, 9.0], [99.4, 10.0], [99.5, 10.0], [99.6, 12.0], [99.7, 13.0], [99.8, 17.0], [99.9, 31.0], [100.0, 206.0]], "isOverall": false, "label": "GET Playlist Detail (Cached)", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 4.0, "minX": 0.0, "maxY": 344635.0, "series": [{"data": [[0.0, 344635.0], [100.0, 38.0], [200.0, 4.0]], "isOverall": false, "label": "GET Playlist Detail (Cached)", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 200.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 731.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 343946.0, "series": [{"data": [[0.0, 343946.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 731.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 130.8773922375248, "minX": 1.76984526E12, "maxY": 200.0, "series": [{"data": [[1.76984616E12, 169.55500000000004], [1.76984586E12, 200.0], [1.76984556E12, 200.0], [1.76984544E12, 200.0], [1.7698461E12, 200.0], [1.7698458E12, 200.0], [1.7698455E12, 200.0], [1.76984568E12, 200.0], [1.76984538E12, 200.0], [1.76984604E12, 200.0], [1.76984574E12, 200.0], [1.76984526E12, 130.8773922375248], [1.76984592E12, 200.0], [1.76984562E12, 200.0], [1.76984532E12, 199.9484861227924], [1.76984598E12, 200.0]], "isOverall": false, "label": "Playlist Detail Viewers with Cache", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.76984616E12, "title": "Active Threads Over Time"}},
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
        fixTimeStamps(infos.data.result.series, 32400000);
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
        data: {"result": {"minY": 0.48437499999999994, "minX": 1.0, "maxY": 87.08139534883719, "series": [{"data": [[2.0, 14.0], [3.0, 7.5], [4.0, 10.666666666666668], [5.0, 10.666666666666668], [6.0, 13.25], [7.0, 21.0], [8.0, 34.66666666666667], [9.0, 15.0], [10.0, 15.142857142857142], [11.0, 14.4], [12.0, 26.333333333333332], [13.0, 31.285714285714285], [14.0, 12.374999999999998], [15.0, 31.818181818181817], [16.0, 10.857142857142858], [17.0, 13.3], [18.0, 15.799999999999999], [19.0, 12.428571428571427], [20.0, 10.692307692307692], [21.0, 16.857142857142858], [22.0, 12.384615384615385], [23.0, 13.5], [24.0, 9.600000000000001], [25.0, 24.42857142857143], [26.0, 10.0], [27.0, 11.95], [28.0, 11.642857142857142], [29.0, 12.470588235294116], [30.0, 13.857142857142858], [31.0, 13.866666666666665], [32.0, 76.5909090909091], [33.0, 37.642857142857146], [34.0, 48.28571428571428], [35.0, 24.799999999999997], [36.0, 33.11111111111111], [37.0, 31.25], [38.0, 26.636363636363637], [39.0, 15.774193548387098], [40.0, 18.30769230769231], [41.0, 15.421052631578947], [42.0, 12.639999999999997], [43.0, 9.571428571428573], [44.0, 5.333333333333333], [45.0, 3.8148148148148158], [46.0, 6.68], [47.0, 4.071428571428573], [48.0, 12.281249999999998], [49.0, 3.5000000000000004], [50.0, 4.263157894736841], [51.0, 4.61764705882353], [52.0, 3.8125000000000004], [53.0, 2.5172413793103443], [54.0, 2.9259259259259256], [55.0, 2.268292682926829], [56.0, 2.1851851851851856], [57.0, 6.027777777777779], [58.0, 3.228571428571429], [59.0, 2.3448275862068964], [60.0, 2.5348837209302335], [61.0, 2.84375], [62.0, 3.4864864864864873], [63.0, 2.764705882352941], [64.0, 3.0], [65.0, 2.142857142857143], [66.0, 4.727272727272729], [67.0, 3.75], [68.0, 2.8684210526315783], [69.0, 2.463414634146341], [70.0, 2.8524590163934427], [71.0, 11.300000000000002], [72.0, 3.058823529411765], [73.0, 3.3249999999999997], [74.0, 3.533333333333333], [75.0, 1.9574468085106382], [76.0, 3.3902439024390247], [77.0, 20.77358490566038], [78.0, 11.256410256410257], [79.0, 7.200000000000001], [80.0, 10.775510204081632], [81.0, 16.921568627450988], [82.0, 6.21875], [83.0, 6.878787878787882], [84.0, 2.4444444444444446], [85.0, 2.307692307692308], [86.0, 1.205128205128205], [87.0, 1.3541666666666667], [88.0, 1.4142857142857137], [89.0, 1.4583333333333335], [90.0, 1.4642857142857137], [91.0, 1.2439024390243907], [92.0, 1.2830188679245282], [93.0, 1.8461538461538467], [94.0, 1.3000000000000007], [95.0, 1.3846153846153846], [96.0, 1.434782608695652], [97.0, 1.254237288135593], [98.0, 1.4769230769230774], [99.0, 1.3148148148148142], [100.0, 16.161764705882348], [101.0, 1.625], [102.0, 1.3015873015873014], [103.0, 1.5970149253731347], [104.0, 1.157894736842105], [105.0, 1.1692307692307693], [106.0, 1.0877192982456143], [107.0, 1.545454545454545], [108.0, 1.5625000000000002], [109.0, 2.033707865168541], [110.0, 1.5], [111.0, 1.258064516129032], [112.0, 1.4246575342465753], [113.0, 1.6545454545454548], [114.0, 1.4722222222222223], [115.0, 87.08139534883719], [116.0, 1.2666666666666668], [117.0, 3.9259259259259265], [118.0, 3.3157894736842106], [119.0, 1.0982142857142856], [120.0, 0.8837209302325584], [121.0, 2.6511627906976747], [122.0, 1.1296296296296298], [123.0, 3.6521739130434785], [124.0, 1.0683760683760686], [125.0, 1.1139240506329113], [126.0, 1.0816326530612248], [127.0, 1.2660550458715596], [128.0, 1.0500000000000003], [129.0, 0.9243697478991597], [130.0, 0.8431372549019608], [131.0, 0.9058823529411766], [132.0, 1.3000000000000005], [133.0, 1.777777777777777], [134.0, 1.734375], [135.0, 2.8695652173913047], [136.0, 2.4285714285714293], [137.0, 1.6422018348623857], [138.0, 1.7714285714285718], [139.0, 1.5000000000000009], [140.0, 1.2], [141.0, 2.382352941176471], [142.0, 1.9454545454545458], [143.0, 0.9999999999999999], [144.0, 1.3524590163934427], [145.0, 1.7962962962962967], [146.0, 0.9417475728155341], [147.0, 1.0092592592592595], [148.0, 1.4468085106382984], [149.0, 1.158730158730159], [150.0, 1.4545454545454548], [151.0, 3.2230769230769245], [152.0, 1.2777777777777786], [153.0, 1.1153846153846152], [154.0, 1.2734375000000002], [155.0, 0.9729729729729729], [156.0, 0.8195488721804511], [157.0, 0.7865168539325844], [158.0, 0.6883116883116884], [159.0, 0.8384615384615386], [160.0, 0.9999999999999999], [161.0, 0.6690647482014391], [162.0, 2.1511627906976756], [163.0, 0.9999999999999994], [164.0, 0.8951612903225808], [165.0, 0.7872340425531914], [166.0, 0.7499999999999998], [167.0, 1.1081081081081081], [168.0, 0.7090909090909091], [169.0, 0.6640624999999997], [170.0, 0.5652173913043479], [171.0, 0.8580645161290318], [172.0, 1.283582089552239], [173.0, 0.75], [174.0, 0.784], [175.0, 0.9152542372881355], [176.0, 0.9868421052631579], [177.0, 0.9861111111111113], [178.0, 0.7317073170731705], [179.0, 0.7040000000000004], [180.0, 0.8484848484848484], [181.0, 0.8145695364238413], [182.0, 1.3472222222222219], [183.0, 1.0148148148148146], [184.0, 1.348837209302326], [185.0, 1.2285714285714282], [186.0, 0.8791946308724831], [187.0, 0.7413793103448275], [188.0, 0.8076923076923078], [189.0, 0.48437499999999994], [190.0, 0.6883116883116882], [191.0, 0.635135135135135], [192.0, 0.7627118644067794], [193.0, 0.9562499999999999], [194.0, 0.703389830508475], [195.0, 0.7127659574468084], [196.0, 0.591836734693878], [197.0, 1.6388888888888888], [198.0, 0.709876543209876], [199.0, 0.5769230769230764], [200.0, 1.4531559385487807], [1.0, 1.0]], "isOverall": false, "label": "GET Playlist Detail (Cached)", "isController": false}, {"data": [[197.70097511583157, 1.520501803137396]], "isOverall": false, "label": "GET Playlist Detail (Cached)-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 200.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 1920.6, "minX": 1.76984526E12, "maxY": 402796.73333333334, "series": [{"data": [[1.76984616E12, 10156.783333333333], [1.76984586E12, 401788.65], [1.76984556E12, 402740.36666666664], [1.76984544E12, 402433.2833333333], [1.7698461E12, 402777.3], [1.7698458E12, 402782.18333333335], [1.7698455E12, 402304.93333333335], [1.76984568E12, 402793.93333333335], [1.76984538E12, 402035.25], [1.76984604E12, 402796.73333333334], [1.76984574E12, 402768.51666666666], [1.76984526E12, 189299.88333333333], [1.76984592E12, 402289.36666666664], [1.76984562E12, 401993.85], [1.76984532E12, 402485.88333333336], [1.76984598E12, 402274.55]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.76984616E12, 1920.6], [1.76984586E12, 75993.0], [1.76984556E12, 76176.0], [1.76984544E12, 76114.6], [1.7698461E12, 76182.4], [1.7698458E12, 76182.4], [1.7698455E12, 76092.8], [1.76984568E12, 76185.6], [1.76984538E12, 76041.6], [1.76984604E12, 76185.6], [1.76984574E12, 76178.6], [1.76984526E12, 35795.6], [1.76984592E12, 76089.6], [1.76984562E12, 76031.4], [1.76984532E12, 76124.2], [1.76984598E12, 76085.8]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.76984616E12, "title": "Bytes Throughput Over Time"}},
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
        fixTimeStamps(infos.data.result.series, 32400000);
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
        data: {"result": {"minY": 1.075913698111619, "minX": 1.76984526E12, "maxY": 3.4942765158290343, "series": [{"data": [[1.76984616E12, 3.168333333333331], [1.76984586E12, 1.5322043894014188], [1.76984556E12, 1.4573457723987193], [1.76984544E12, 1.075913698111619], [1.7698461E12, 1.62278342717876], [1.7698458E12, 1.295318934364238], [1.7698455E12, 1.287421119057634], [1.76984568E12, 1.4717425101894988], [1.76984538E12, 1.8340911004462541], [1.76984604E12, 1.3653094667843202], [1.76984574E12, 1.5344791360255436], [1.76984526E12, 3.4942765158290343], [1.76984592E12, 1.3162522613488234], [1.76984562E12, 1.4726116795082276], [1.76984532E12, 1.4007148864592027], [1.76984598E12, 1.6515483002356106]], "isOverall": false, "label": "GET Playlist Detail (Cached)", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76984616E12, "title": "Response Time Over Time"}},
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
        fixTimeStamps(infos.data.result.series, 32400000);
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
        data: {"result": {"minY": 1.0205660932834404, "minX": 1.76984526E12, "maxY": 3.388749776426396, "series": [{"data": [[1.76984616E12, 3.161666666666666], [1.76984586E12, 1.495724335481704], [1.76984556E12, 1.396369137670194], [1.76984544E12, 1.0205660932834404], [1.7698461E12, 1.5868560383225367], [1.7698458E12, 1.2544751659803384], [1.7698455E12, 1.2230122002524195], [1.76984568E12, 1.427749065086771], [1.76984538E12, 1.780921108023903], [1.76984604E12, 1.3321147947392697], [1.76984574E12, 1.4920788334664032], [1.76984526E12, 3.388749776426396], [1.76984592E12, 1.2767049518280016], [1.76984562E12, 1.4318133973306395], [1.76984532E12, 1.3405382674516364], [1.76984598E12, 1.615365196903397]], "isOverall": false, "label": "GET Playlist Detail (Cached)", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76984616E12, "title": "Latencies Over Time"}},
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
        fixTimeStamps(infos.data.result.series, 32400000);
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
        data: {"result": {"minY": 0.0033333333333333344, "minX": 1.76984526E12, "maxY": 0.014487569307816223, "series": [{"data": [[1.76984616E12, 0.0033333333333333344], [1.76984586E12, 0.005434095791735143], [1.76984556E12, 0.005925365607665137], [1.76984544E12, 0.004331917399167229], [1.7698461E12, 0.006261030338683937], [1.7698458E12, 0.006134969325153348], [1.7698455E12, 0.005469078670593209], [1.76984568E12, 0.0054624143871591395], [1.76984538E12, 0.00677780584322637], [1.76984604E12, 0.005588470103785889], [1.76984574E12, 0.005799050300458021], [1.76984526E12, 0.014487569307816223], [1.76984592E12, 0.005427237157642341], [1.76984562E12, 0.0060629026146267655], [1.76984532E12, 0.0064760302775441455], [1.76984598E12, 0.005385392123864008]], "isOverall": false, "label": "GET Playlist Detail (Cached)", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76984616E12, "title": "Connect Time Over Time"}},
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
        fixTimeStamps(infos.data.result.series, 32400000);
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
        data: {"result": {"minY": 0.0, "minX": 1.76984526E12, "maxY": 98.0, "series": [{"data": [[1.76984616E12, 16.0], [1.76984586E12, 14.0], [1.76984556E12, 62.0], [1.76984544E12, 34.0], [1.7698461E12, 26.0], [1.7698458E12, 10.0], [1.7698455E12, 41.0], [1.76984568E12, 13.0], [1.76984538E12, 53.0], [1.76984604E12, 14.0], [1.76984574E12, 12.0], [1.76984526E12, 98.0], [1.76984592E12, 12.0], [1.76984562E12, 15.0], [1.76984532E12, 64.0], [1.76984598E12, 15.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.76984616E12, 0.0], [1.76984586E12, 0.0], [1.76984556E12, 0.0], [1.76984544E12, 0.0], [1.7698461E12, 0.0], [1.7698458E12, 0.0], [1.7698455E12, 0.0], [1.76984568E12, 0.0], [1.76984538E12, 0.0], [1.76984604E12, 0.0], [1.76984574E12, 0.0], [1.76984526E12, 0.0], [1.76984592E12, 0.0], [1.76984562E12, 0.0], [1.76984532E12, 0.0], [1.76984598E12, 0.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.76984616E12, 8.0], [1.76984586E12, 3.0], [1.76984556E12, 3.0], [1.76984544E12, 2.0], [1.7698461E12, 3.0], [1.7698458E12, 3.0], [1.7698455E12, 2.0], [1.76984568E12, 3.0], [1.76984538E12, 3.0], [1.76984604E12, 3.0], [1.76984574E12, 3.0], [1.76984526E12, 5.0], [1.76984592E12, 3.0], [1.76984562E12, 3.0], [1.76984532E12, 2.0], [1.76984598E12, 3.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.76984616E12, 11.0], [1.76984586E12, 8.0], [1.76984556E12, 8.0], [1.76984544E12, 4.990000000001601], [1.7698461E12, 7.0], [1.7698458E12, 6.0], [1.7698455E12, 7.0], [1.76984568E12, 6.0], [1.76984538E12, 11.0], [1.76984604E12, 7.0], [1.76984574E12, 8.0], [1.76984526E12, 39.0], [1.76984592E12, 6.0], [1.76984562E12, 7.0], [1.76984532E12, 8.0], [1.76984598E12, 8.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.76984616E12, 2.0], [1.76984586E12, 1.0], [1.76984556E12, 1.0], [1.76984544E12, 1.0], [1.7698461E12, 1.0], [1.7698458E12, 1.0], [1.7698455E12, 1.0], [1.76984568E12, 1.0], [1.76984538E12, 1.0], [1.76984604E12, 1.0], [1.76984574E12, 1.0], [1.76984526E12, 1.0], [1.76984592E12, 1.0], [1.76984562E12, 1.0], [1.76984532E12, 1.0], [1.76984598E12, 1.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.76984616E12, 9.0], [1.76984586E12, 5.0], [1.76984556E12, 4.0], [1.76984544E12, 2.0], [1.7698461E12, 4.0], [1.7698458E12, 3.0], [1.7698455E12, 3.0], [1.76984568E12, 4.0], [1.76984538E12, 5.0], [1.76984604E12, 4.0], [1.76984574E12, 5.0], [1.76984526E12, 12.0], [1.76984592E12, 4.0], [1.76984562E12, 4.0], [1.76984532E12, 3.0], [1.76984598E12, 5.0]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.76984616E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
        fixTimeStamps(infos.data.result.series, 32400000);
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
    data: {"result": {"minY": 0.0, "minX": 5.0, "maxY": 164.5, "series": [{"data": [[5.0, 16.0], [12.0, 21.5], [16.0, 15.0], [25.0, 19.0], [30.0, 13.0], [35.0, 14.0], [46.0, 12.0], [50.0, 13.0], [52.0, 13.0], [63.0, 44.0], [69.0, 24.0], [76.0, 15.0], [83.0, 5.0], [91.0, 4.0], [98.0, 3.0], [105.0, 2.0], [107.0, 3.0], [118.0, 2.0], [123.0, 3.0], [127.0, 3.0], [139.0, 2.0], [144.0, 2.0], [147.0, 4.0], [158.0, 7.0], [161.0, 3.0], [172.0, 1.0], [178.0, 1.0], [185.0, 1.0], [191.0, 1.0], [197.0, 2.0], [193.0, 1.0], [204.0, 6.0], [212.0, 1.0], [219.0, 1.0], [232.0, 2.0], [239.0, 1.0], [246.0, 1.0], [251.0, 1.0], [249.0, 1.0], [272.0, 2.0], [274.0, 1.0], [286.0, 1.0], [290.0, 1.0], [299.0, 1.0], [305.0, 1.0], [312.0, 1.0], [314.0, 1.0], [326.0, 1.0], [332.0, 1.0], [325.0, 1.0], [331.0, 1.0], [339.0, 1.0], [346.0, 1.0], [351.0, 1.0], [345.0, 1.0], [366.0, 1.0], [357.0, 1.0], [354.0, 2.0], [353.0, 1.0], [361.0, 2.0], [365.0, 1.0], [364.0, 1.0], [360.0, 1.0], [356.0, 1.0], [367.0, 1.0], [363.0, 1.0], [362.0, 1.0], [383.0, 1.0], [372.0, 1.0], [378.0, 1.0], [376.0, 1.0], [377.0, 1.0], [380.0, 1.0], [371.0, 1.0], [369.0, 1.0], [375.0, 1.0], [379.0, 1.0], [382.0, 1.0], [381.0, 1.0], [373.0, 1.0], [397.0, 1.0], [392.0, 1.0], [396.0, 1.0], [387.0, 2.0], [386.0, 1.0], [385.0, 1.0], [384.0, 1.0], [399.0, 1.0], [395.0, 1.0], [398.0, 1.0], [391.0, 1.0], [390.0, 1.0], [388.0, 1.0], [389.0, 1.0], [393.0, 1.0], [394.0, 1.0], [400.0, 1.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[52.0, 121.0], [63.0, 103.0], [83.0, 35.0], [118.0, 4.0], [144.0, 3.0], [161.0, 3.0], [185.0, 164.5], [197.0, 2.0], [204.0, 3.0], [219.0, 5.0], [232.0, 140.0], [246.0, 3.0], [249.0, 1.0], [272.0, 3.0], [286.0, 3.0], [299.0, 2.0], [305.0, 2.0], [314.0, 2.0], [332.0, 3.0], [325.0, 0.0], [331.0, 1.0], [339.0, 2.0], [351.0, 2.0], [346.0, 3.0], [366.0, 3.0], [357.0, 2.5], [361.0, 4.0], [364.0, 3.0], [365.0, 2.0], [360.0, 3.5], [356.0, 2.0], [367.0, 2.0], [363.0, 1.0], [354.0, 1.0], [353.0, 3.0], [383.0, 2.0], [378.0, 3.0], [380.0, 1.5], [375.0, 2.0], [369.0, 2.0], [379.0, 1.0], [382.0, 2.0], [373.0, 2.0], [372.0, 3.0], [381.0, 3.0], [376.0, 2.0], [377.0, 1.5], [399.0, 2.0], [392.0, 2.5], [397.0, 2.0], [395.0, 3.0], [398.0, 3.0], [396.0, 2.0], [387.0, 2.0], [386.0, 2.0], [385.0, 2.0], [384.0, 2.5], [391.0, 3.0], [390.0, 3.0], [388.0, 3.0], [389.0, 2.5], [393.0, 2.0], [394.0, 2.5], [400.0, 2.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 400.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 0.0, "minX": 5.0, "maxY": 164.5, "series": [{"data": [[5.0, 15.0], [12.0, 20.0], [16.0, 14.0], [25.0, 19.0], [30.0, 12.5], [35.0, 13.0], [46.0, 12.0], [50.0, 13.0], [52.0, 13.0], [63.0, 44.0], [69.0, 24.0], [76.0, 14.5], [83.0, 5.0], [91.0, 4.0], [98.0, 3.0], [105.0, 2.0], [107.0, 2.0], [118.0, 2.0], [123.0, 2.0], [127.0, 3.0], [139.0, 2.0], [144.0, 2.0], [147.0, 4.0], [158.0, 7.0], [161.0, 2.5], [172.0, 1.0], [178.0, 1.0], [185.0, 1.0], [191.0, 1.0], [197.0, 2.0], [193.0, 1.0], [204.0, 6.0], [212.0, 1.0], [219.0, 1.0], [232.0, 2.0], [239.0, 1.0], [246.0, 1.0], [251.0, 1.0], [249.0, 1.0], [272.0, 2.0], [274.0, 1.0], [286.0, 1.0], [290.0, 1.0], [299.0, 1.0], [305.0, 1.0], [312.0, 1.0], [314.0, 1.0], [326.0, 1.0], [332.0, 1.0], [325.0, 1.0], [331.0, 1.0], [339.0, 1.0], [346.0, 1.0], [351.0, 1.0], [345.0, 1.0], [366.0, 1.0], [357.0, 1.0], [354.0, 2.0], [353.0, 1.0], [361.0, 1.0], [365.0, 1.0], [364.0, 1.0], [360.0, 1.0], [356.0, 1.0], [367.0, 1.0], [363.0, 1.0], [362.0, 1.0], [383.0, 1.0], [372.0, 1.0], [378.0, 1.0], [376.0, 1.0], [377.0, 1.0], [380.0, 1.0], [371.0, 1.0], [369.0, 1.0], [375.0, 1.0], [379.0, 1.0], [382.0, 1.0], [381.0, 1.0], [373.0, 1.0], [397.0, 1.0], [392.0, 1.0], [396.0, 1.0], [387.0, 1.5], [386.0, 1.0], [385.0, 1.0], [384.0, 1.0], [399.0, 1.0], [395.0, 1.0], [398.0, 1.0], [391.0, 1.0], [390.0, 1.0], [388.0, 1.0], [389.0, 1.0], [393.0, 1.0], [394.0, 1.0], [400.0, 1.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[52.0, 121.0], [63.0, 102.0], [83.0, 35.0], [118.0, 4.0], [144.0, 3.0], [161.0, 3.0], [185.0, 164.5], [197.0, 2.0], [204.0, 3.0], [219.0, 5.0], [232.0, 140.0], [246.0, 3.0], [249.0, 1.0], [272.0, 3.0], [286.0, 3.0], [299.0, 2.0], [305.0, 2.0], [314.0, 2.0], [332.0, 3.0], [325.0, 0.0], [331.0, 1.0], [339.0, 2.0], [351.0, 2.0], [346.0, 3.0], [366.0, 3.0], [357.0, 2.5], [361.0, 4.0], [364.0, 3.0], [365.0, 2.0], [360.0, 3.5], [356.0, 2.0], [367.0, 2.0], [363.0, 1.0], [354.0, 1.0], [353.0, 3.0], [383.0, 2.0], [378.0, 3.0], [380.0, 1.5], [375.0, 2.0], [369.0, 2.0], [379.0, 1.0], [382.0, 2.0], [373.0, 2.0], [372.0, 3.0], [381.0, 3.0], [376.0, 2.0], [377.0, 1.5], [399.0, 2.0], [392.0, 2.5], [397.0, 2.0], [395.0, 3.0], [398.0, 3.0], [396.0, 2.0], [387.0, 2.0], [386.0, 2.0], [385.0, 2.0], [384.0, 2.5], [391.0, 3.0], [390.0, 2.5], [388.0, 3.0], [389.0, 2.5], [393.0, 2.0], [394.0, 2.5], [400.0, 2.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 400.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 10.0, "minX": 1.76984526E12, "maxY": 396.65, "series": [{"data": [[1.76984616E12, 10.0], [1.76984586E12, 395.8833333333333], [1.76984556E12, 396.6], [1.76984544E12, 396.28333333333336], [1.7698461E12, 396.6333333333333], [1.7698458E12, 396.6333333333333], [1.7698455E12, 396.1666666666667], [1.76984568E12, 396.65], [1.76984538E12, 395.9], [1.76984604E12, 396.65], [1.76984574E12, 396.6166666666667], [1.76984526E12, 186.36666666666667], [1.76984592E12, 396.01666666666665], [1.76984562E12, 395.85], [1.76984532E12, 396.3333333333333], [1.76984598E12, 396.03333333333336]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.76984616E12, "title": "Hits Per Second"}},
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
        fixTimeStamps(infos.data.result.series, 32400000);
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.76984526E12, "maxY": 395.85, "series": [{"data": [[1.76984616E12, 9.983333333333333], [1.76984586E12, 394.8666666666667], [1.76984556E12, 395.8], [1.76984544E12, 395.5], [1.7698461E12, 395.8333333333333], [1.7698458E12, 395.8333333333333], [1.7698455E12, 395.3666666666667], [1.76984568E12, 395.85], [1.76984538E12, 395.1], [1.76984604E12, 395.85], [1.76984574E12, 395.8333333333333], [1.76984526E12, 186.0], [1.76984592E12, 395.35], [1.76984562E12, 395.06666666666666], [1.76984532E12, 395.55], [1.76984598E12, 395.35]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.76984616E12, 0.016666666666666666], [1.76984586E12, 0.7833333333333333], [1.76984556E12, 0.8], [1.76984544E12, 0.7833333333333333], [1.7698461E12, 0.8], [1.7698458E12, 0.8], [1.7698455E12, 0.8], [1.76984568E12, 0.8], [1.76984538E12, 0.8], [1.76984604E12, 0.8], [1.76984574E12, 0.7833333333333333], [1.76984526E12, 0.36666666666666664], [1.76984592E12, 0.8], [1.76984562E12, 0.7833333333333333], [1.76984532E12, 0.7833333333333333], [1.76984598E12, 0.7833333333333333]], "isOverall": false, "label": "400", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.76984616E12, "title": "Codes Per Second"}},
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
        fixTimeStamps(infos.data.result.series, 32400000);
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.76984526E12, "maxY": 395.85, "series": [{"data": [[1.76984616E12, 9.983333333333333], [1.76984586E12, 394.8666666666667], [1.76984556E12, 395.8], [1.76984544E12, 395.5], [1.7698461E12, 395.8333333333333], [1.7698458E12, 395.8333333333333], [1.7698455E12, 395.3666666666667], [1.76984568E12, 395.85], [1.76984538E12, 395.1], [1.76984604E12, 395.85], [1.76984574E12, 395.8333333333333], [1.76984526E12, 185.3], [1.76984592E12, 395.35], [1.76984562E12, 395.06666666666666], [1.76984532E12, 395.55], [1.76984598E12, 395.35]], "isOverall": false, "label": "GET Playlist Detail (Cached)-success", "isController": false}, {"data": [[1.76984616E12, 0.016666666666666666], [1.76984586E12, 0.7833333333333333], [1.76984556E12, 0.8], [1.76984544E12, 0.7833333333333333], [1.7698461E12, 0.8], [1.7698458E12, 0.8], [1.7698455E12, 0.8], [1.76984568E12, 0.8], [1.76984538E12, 0.8], [1.76984604E12, 0.8], [1.76984574E12, 0.7833333333333333], [1.76984526E12, 1.0666666666666667], [1.76984592E12, 0.8], [1.76984562E12, 0.7833333333333333], [1.76984532E12, 0.7833333333333333], [1.76984598E12, 0.7833333333333333]], "isOverall": false, "label": "GET Playlist Detail (Cached)-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76984616E12, "title": "Transactions Per Second"}},
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
        fixTimeStamps(infos.data.result.series, 32400000);
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.76984526E12, "maxY": 395.85, "series": [{"data": [[1.76984616E12, 9.983333333333333], [1.76984586E12, 394.8666666666667], [1.76984556E12, 395.8], [1.76984544E12, 395.5], [1.7698461E12, 395.8333333333333], [1.7698458E12, 395.8333333333333], [1.7698455E12, 395.3666666666667], [1.76984568E12, 395.85], [1.76984538E12, 395.1], [1.76984604E12, 395.85], [1.76984574E12, 395.8333333333333], [1.76984526E12, 185.3], [1.76984592E12, 395.35], [1.76984562E12, 395.06666666666666], [1.76984532E12, 395.55], [1.76984598E12, 395.35]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.76984616E12, 0.016666666666666666], [1.76984586E12, 0.7833333333333333], [1.76984556E12, 0.8], [1.76984544E12, 0.7833333333333333], [1.7698461E12, 0.8], [1.7698458E12, 0.8], [1.7698455E12, 0.8], [1.76984568E12, 0.8], [1.76984538E12, 0.8], [1.76984604E12, 0.8], [1.76984574E12, 0.7833333333333333], [1.76984526E12, 1.0666666666666667], [1.76984592E12, 0.8], [1.76984562E12, 0.7833333333333333], [1.76984532E12, 0.7833333333333333], [1.76984598E12, 0.7833333333333333]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76984616E12, "title": "Total Transactions Per Second"}},
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
        fixTimeStamps(infos.data.result.series, 32400000);
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

