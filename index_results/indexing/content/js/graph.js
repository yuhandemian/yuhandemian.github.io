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
        data: {"result": {"minY": 7.0, "minX": 0.0, "maxY": 535.0, "series": [{"data": [[0.0, 7.0], [0.1, 9.0], [0.2, 9.0], [0.3, 9.0], [0.4, 9.0], [0.5, 10.0], [0.6, 10.0], [0.7, 10.0], [0.8, 10.0], [0.9, 10.0], [1.0, 10.0], [1.1, 10.0], [1.2, 10.0], [1.3, 10.0], [1.4, 10.0], [1.5, 10.0], [1.6, 10.0], [1.7, 10.0], [1.8, 10.0], [1.9, 10.0], [2.0, 10.0], [2.1, 10.0], [2.2, 10.0], [2.3, 10.0], [2.4, 10.0], [2.5, 11.0], [2.6, 11.0], [2.7, 11.0], [2.8, 11.0], [2.9, 11.0], [3.0, 11.0], [3.1, 11.0], [3.2, 11.0], [3.3, 11.0], [3.4, 11.0], [3.5, 11.0], [3.6, 11.0], [3.7, 11.0], [3.8, 11.0], [3.9, 11.0], [4.0, 11.0], [4.1, 11.0], [4.2, 11.0], [4.3, 11.0], [4.4, 11.0], [4.5, 11.0], [4.6, 11.0], [4.7, 11.0], [4.8, 11.0], [4.9, 11.0], [5.0, 11.0], [5.1, 11.0], [5.2, 11.0], [5.3, 11.0], [5.4, 11.0], [5.5, 11.0], [5.6, 11.0], [5.7, 11.0], [5.8, 11.0], [5.9, 11.0], [6.0, 11.0], [6.1, 11.0], [6.2, 11.0], [6.3, 11.0], [6.4, 11.0], [6.5, 11.0], [6.6, 11.0], [6.7, 11.0], [6.8, 11.0], [6.9, 11.0], [7.0, 11.0], [7.1, 11.0], [7.2, 11.0], [7.3, 11.0], [7.4, 12.0], [7.5, 12.0], [7.6, 12.0], [7.7, 12.0], [7.8, 12.0], [7.9, 12.0], [8.0, 12.0], [8.1, 12.0], [8.2, 12.0], [8.3, 12.0], [8.4, 12.0], [8.5, 12.0], [8.6, 12.0], [8.7, 12.0], [8.8, 12.0], [8.9, 12.0], [9.0, 12.0], [9.1, 12.0], [9.2, 12.0], [9.3, 12.0], [9.4, 12.0], [9.5, 12.0], [9.6, 12.0], [9.7, 12.0], [9.8, 12.0], [9.9, 12.0], [10.0, 12.0], [10.1, 12.0], [10.2, 12.0], [10.3, 12.0], [10.4, 12.0], [10.5, 12.0], [10.6, 12.0], [10.7, 12.0], [10.8, 12.0], [10.9, 12.0], [11.0, 12.0], [11.1, 12.0], [11.2, 12.0], [11.3, 12.0], [11.4, 12.0], [11.5, 12.0], [11.6, 12.0], [11.7, 12.0], [11.8, 12.0], [11.9, 12.0], [12.0, 12.0], [12.1, 12.0], [12.2, 12.0], [12.3, 12.0], [12.4, 12.0], [12.5, 12.0], [12.6, 12.0], [12.7, 12.0], [12.8, 12.0], [12.9, 12.0], [13.0, 12.0], [13.1, 12.0], [13.2, 12.0], [13.3, 12.0], [13.4, 12.0], [13.5, 12.0], [13.6, 12.0], [13.7, 12.0], [13.8, 12.0], [13.9, 12.0], [14.0, 12.0], [14.1, 12.0], [14.2, 12.0], [14.3, 12.0], [14.4, 12.0], [14.5, 12.0], [14.6, 12.0], [14.7, 12.0], [14.8, 13.0], [14.9, 13.0], [15.0, 13.0], [15.1, 13.0], [15.2, 13.0], [15.3, 13.0], [15.4, 13.0], [15.5, 13.0], [15.6, 13.0], [15.7, 13.0], [15.8, 13.0], [15.9, 13.0], [16.0, 13.0], [16.1, 13.0], [16.2, 13.0], [16.3, 13.0], [16.4, 13.0], [16.5, 13.0], [16.6, 13.0], [16.7, 13.0], [16.8, 13.0], [16.9, 13.0], [17.0, 13.0], [17.1, 13.0], [17.2, 13.0], [17.3, 13.0], [17.4, 13.0], [17.5, 13.0], [17.6, 13.0], [17.7, 13.0], [17.8, 13.0], [17.9, 13.0], [18.0, 13.0], [18.1, 13.0], [18.2, 13.0], [18.3, 13.0], [18.4, 13.0], [18.5, 13.0], [18.6, 13.0], [18.7, 13.0], [18.8, 13.0], [18.9, 13.0], [19.0, 13.0], [19.1, 13.0], [19.2, 13.0], [19.3, 13.0], [19.4, 13.0], [19.5, 13.0], [19.6, 13.0], [19.7, 13.0], [19.8, 13.0], [19.9, 13.0], [20.0, 13.0], [20.1, 13.0], [20.2, 13.0], [20.3, 13.0], [20.4, 13.0], [20.5, 13.0], [20.6, 13.0], [20.7, 13.0], [20.8, 13.0], [20.9, 13.0], [21.0, 13.0], [21.1, 13.0], [21.2, 13.0], [21.3, 13.0], [21.4, 13.0], [21.5, 13.0], [21.6, 13.0], [21.7, 13.0], [21.8, 13.0], [21.9, 13.0], [22.0, 13.0], [22.1, 13.0], [22.2, 13.0], [22.3, 13.0], [22.4, 13.0], [22.5, 13.0], [22.6, 13.0], [22.7, 13.0], [22.8, 14.0], [22.9, 14.0], [23.0, 14.0], [23.1, 14.0], [23.2, 14.0], [23.3, 14.0], [23.4, 14.0], [23.5, 14.0], [23.6, 14.0], [23.7, 14.0], [23.8, 14.0], [23.9, 14.0], [24.0, 14.0], [24.1, 14.0], [24.2, 14.0], [24.3, 14.0], [24.4, 14.0], [24.5, 14.0], [24.6, 14.0], [24.7, 14.0], [24.8, 14.0], [24.9, 14.0], [25.0, 14.0], [25.1, 14.0], [25.2, 14.0], [25.3, 14.0], [25.4, 14.0], [25.5, 14.0], [25.6, 14.0], [25.7, 14.0], [25.8, 14.0], [25.9, 14.0], [26.0, 14.0], [26.1, 14.0], [26.2, 14.0], [26.3, 14.0], [26.4, 14.0], [26.5, 14.0], [26.6, 14.0], [26.7, 14.0], [26.8, 14.0], [26.9, 14.0], [27.0, 14.0], [27.1, 14.0], [27.2, 14.0], [27.3, 14.0], [27.4, 14.0], [27.5, 14.0], [27.6, 14.0], [27.7, 14.0], [27.8, 14.0], [27.9, 14.0], [28.0, 14.0], [28.1, 14.0], [28.2, 14.0], [28.3, 14.0], [28.4, 14.0], [28.5, 14.0], [28.6, 14.0], [28.7, 14.0], [28.8, 14.0], [28.9, 14.0], [29.0, 14.0], [29.1, 14.0], [29.2, 14.0], [29.3, 14.0], [29.4, 14.0], [29.5, 14.0], [29.6, 14.0], [29.7, 14.0], [29.8, 15.0], [29.9, 15.0], [30.0, 15.0], [30.1, 15.0], [30.2, 15.0], [30.3, 15.0], [30.4, 15.0], [30.5, 15.0], [30.6, 15.0], [30.7, 15.0], [30.8, 15.0], [30.9, 15.0], [31.0, 15.0], [31.1, 15.0], [31.2, 15.0], [31.3, 15.0], [31.4, 15.0], [31.5, 15.0], [31.6, 15.0], [31.7, 15.0], [31.8, 15.0], [31.9, 15.0], [32.0, 15.0], [32.1, 15.0], [32.2, 15.0], [32.3, 15.0], [32.4, 15.0], [32.5, 15.0], [32.6, 15.0], [32.7, 15.0], [32.8, 15.0], [32.9, 15.0], [33.0, 15.0], [33.1, 15.0], [33.2, 15.0], [33.3, 15.0], [33.4, 15.0], [33.5, 15.0], [33.6, 15.0], [33.7, 15.0], [33.8, 15.0], [33.9, 15.0], [34.0, 15.0], [34.1, 15.0], [34.2, 15.0], [34.3, 15.0], [34.4, 15.0], [34.5, 15.0], [34.6, 15.0], [34.7, 15.0], [34.8, 15.0], [34.9, 15.0], [35.0, 15.0], [35.1, 15.0], [35.2, 15.0], [35.3, 15.0], [35.4, 15.0], [35.5, 16.0], [35.6, 16.0], [35.7, 16.0], [35.8, 16.0], [35.9, 16.0], [36.0, 16.0], [36.1, 16.0], [36.2, 16.0], [36.3, 16.0], [36.4, 16.0], [36.5, 16.0], [36.6, 16.0], [36.7, 16.0], [36.8, 16.0], [36.9, 16.0], [37.0, 16.0], [37.1, 16.0], [37.2, 16.0], [37.3, 16.0], [37.4, 16.0], [37.5, 16.0], [37.6, 16.0], [37.7, 16.0], [37.8, 16.0], [37.9, 16.0], [38.0, 16.0], [38.1, 16.0], [38.2, 16.0], [38.3, 16.0], [38.4, 16.0], [38.5, 16.0], [38.6, 16.0], [38.7, 16.0], [38.8, 16.0], [38.9, 16.0], [39.0, 16.0], [39.1, 16.0], [39.2, 16.0], [39.3, 16.0], [39.4, 16.0], [39.5, 16.0], [39.6, 16.0], [39.7, 16.0], [39.8, 16.0], [39.9, 16.0], [40.0, 17.0], [40.1, 17.0], [40.2, 17.0], [40.3, 17.0], [40.4, 17.0], [40.5, 17.0], [40.6, 17.0], [40.7, 17.0], [40.8, 17.0], [40.9, 17.0], [41.0, 17.0], [41.1, 17.0], [41.2, 17.0], [41.3, 17.0], [41.4, 17.0], [41.5, 17.0], [41.6, 17.0], [41.7, 17.0], [41.8, 17.0], [41.9, 17.0], [42.0, 17.0], [42.1, 17.0], [42.2, 17.0], [42.3, 17.0], [42.4, 17.0], [42.5, 17.0], [42.6, 17.0], [42.7, 17.0], [42.8, 17.0], [42.9, 17.0], [43.0, 17.0], [43.1, 17.0], [43.2, 17.0], [43.3, 17.0], [43.4, 17.0], [43.5, 17.0], [43.6, 17.0], [43.7, 17.0], [43.8, 17.0], [43.9, 18.0], [44.0, 18.0], [44.1, 18.0], [44.2, 18.0], [44.3, 18.0], [44.4, 18.0], [44.5, 18.0], [44.6, 18.0], [44.7, 18.0], [44.8, 18.0], [44.9, 18.0], [45.0, 18.0], [45.1, 18.0], [45.2, 18.0], [45.3, 18.0], [45.4, 18.0], [45.5, 18.0], [45.6, 18.0], [45.7, 18.0], [45.8, 18.0], [45.9, 18.0], [46.0, 18.0], [46.1, 18.0], [46.2, 18.0], [46.3, 18.0], [46.4, 18.0], [46.5, 18.0], [46.6, 18.0], [46.7, 18.0], [46.8, 18.0], [46.9, 18.0], [47.0, 18.0], [47.1, 19.0], [47.2, 19.0], [47.3, 19.0], [47.4, 19.0], [47.5, 19.0], [47.6, 19.0], [47.7, 19.0], [47.8, 19.0], [47.9, 19.0], [48.0, 19.0], [48.1, 19.0], [48.2, 19.0], [48.3, 19.0], [48.4, 19.0], [48.5, 19.0], [48.6, 19.0], [48.7, 19.0], [48.8, 19.0], [48.9, 19.0], [49.0, 19.0], [49.1, 19.0], [49.2, 19.0], [49.3, 19.0], [49.4, 19.0], [49.5, 19.0], [49.6, 19.0], [49.7, 19.0], [49.8, 19.0], [49.9, 19.0], [50.0, 19.0], [50.1, 20.0], [50.2, 20.0], [50.3, 20.0], [50.4, 20.0], [50.5, 20.0], [50.6, 20.0], [50.7, 20.0], [50.8, 20.0], [50.9, 20.0], [51.0, 20.0], [51.1, 20.0], [51.2, 20.0], [51.3, 20.0], [51.4, 20.0], [51.5, 20.0], [51.6, 20.0], [51.7, 20.0], [51.8, 20.0], [51.9, 20.0], [52.0, 20.0], [52.1, 20.0], [52.2, 20.0], [52.3, 20.0], [52.4, 20.0], [52.5, 20.0], [52.6, 20.0], [52.7, 20.0], [52.8, 21.0], [52.9, 21.0], [53.0, 21.0], [53.1, 21.0], [53.2, 21.0], [53.3, 21.0], [53.4, 21.0], [53.5, 21.0], [53.6, 21.0], [53.7, 21.0], [53.8, 21.0], [53.9, 21.0], [54.0, 21.0], [54.1, 21.0], [54.2, 21.0], [54.3, 21.0], [54.4, 21.0], [54.5, 21.0], [54.6, 21.0], [54.7, 21.0], [54.8, 21.0], [54.9, 21.0], [55.0, 21.0], [55.1, 21.0], [55.2, 21.0], [55.3, 22.0], [55.4, 22.0], [55.5, 22.0], [55.6, 22.0], [55.7, 22.0], [55.8, 22.0], [55.9, 22.0], [56.0, 22.0], [56.1, 22.0], [56.2, 22.0], [56.3, 22.0], [56.4, 22.0], [56.5, 22.0], [56.6, 22.0], [56.7, 22.0], [56.8, 22.0], [56.9, 22.0], [57.0, 22.0], [57.1, 22.0], [57.2, 22.0], [57.3, 22.0], [57.4, 22.0], [57.5, 23.0], [57.6, 23.0], [57.7, 23.0], [57.8, 23.0], [57.9, 23.0], [58.0, 23.0], [58.1, 23.0], [58.2, 23.0], [58.3, 23.0], [58.4, 23.0], [58.5, 23.0], [58.6, 23.0], [58.7, 23.0], [58.8, 23.0], [58.9, 23.0], [59.0, 23.0], [59.1, 23.0], [59.2, 23.0], [59.3, 23.0], [59.4, 23.0], [59.5, 23.0], [59.6, 23.0], [59.7, 24.0], [59.8, 24.0], [59.9, 24.0], [60.0, 24.0], [60.1, 24.0], [60.2, 24.0], [60.3, 24.0], [60.4, 24.0], [60.5, 24.0], [60.6, 24.0], [60.7, 24.0], [60.8, 24.0], [60.9, 24.0], [61.0, 24.0], [61.1, 24.0], [61.2, 24.0], [61.3, 24.0], [61.4, 24.0], [61.5, 24.0], [61.6, 24.0], [61.7, 24.0], [61.8, 24.0], [61.9, 24.0], [62.0, 25.0], [62.1, 25.0], [62.2, 25.0], [62.3, 25.0], [62.4, 25.0], [62.5, 25.0], [62.6, 25.0], [62.7, 25.0], [62.8, 25.0], [62.9, 25.0], [63.0, 25.0], [63.1, 25.0], [63.2, 25.0], [63.3, 25.0], [63.4, 25.0], [63.5, 25.0], [63.6, 25.0], [63.7, 25.0], [63.8, 25.0], [63.9, 25.0], [64.0, 25.0], [64.1, 25.0], [64.2, 25.0], [64.3, 26.0], [64.4, 26.0], [64.5, 26.0], [64.6, 26.0], [64.7, 26.0], [64.8, 26.0], [64.9, 26.0], [65.0, 26.0], [65.1, 26.0], [65.2, 26.0], [65.3, 26.0], [65.4, 26.0], [65.5, 26.0], [65.6, 26.0], [65.7, 26.0], [65.8, 26.0], [65.9, 26.0], [66.0, 26.0], [66.1, 26.0], [66.2, 26.0], [66.3, 26.0], [66.4, 26.0], [66.5, 26.0], [66.6, 26.0], [66.7, 27.0], [66.8, 27.0], [66.9, 27.0], [67.0, 27.0], [67.1, 27.0], [67.2, 27.0], [67.3, 27.0], [67.4, 27.0], [67.5, 27.0], [67.6, 27.0], [67.7, 27.0], [67.8, 27.0], [67.9, 27.0], [68.0, 27.0], [68.1, 27.0], [68.2, 27.0], [68.3, 27.0], [68.4, 27.0], [68.5, 27.0], [68.6, 27.0], [68.7, 27.0], [68.8, 27.0], [68.9, 27.0], [69.0, 27.0], [69.1, 28.0], [69.2, 28.0], [69.3, 28.0], [69.4, 28.0], [69.5, 28.0], [69.6, 28.0], [69.7, 28.0], [69.8, 28.0], [69.9, 28.0], [70.0, 28.0], [70.1, 28.0], [70.2, 28.0], [70.3, 28.0], [70.4, 28.0], [70.5, 28.0], [70.6, 28.0], [70.7, 28.0], [70.8, 28.0], [70.9, 28.0], [71.0, 28.0], [71.1, 28.0], [71.2, 28.0], [71.3, 28.0], [71.4, 28.0], [71.5, 28.0], [71.6, 29.0], [71.7, 29.0], [71.8, 29.0], [71.9, 29.0], [72.0, 29.0], [72.1, 29.0], [72.2, 29.0], [72.3, 29.0], [72.4, 29.0], [72.5, 29.0], [72.6, 29.0], [72.7, 29.0], [72.8, 29.0], [72.9, 29.0], [73.0, 29.0], [73.1, 29.0], [73.2, 29.0], [73.3, 29.0], [73.4, 29.0], [73.5, 29.0], [73.6, 29.0], [73.7, 29.0], [73.8, 29.0], [73.9, 29.0], [74.0, 29.0], [74.1, 30.0], [74.2, 30.0], [74.3, 30.0], [74.4, 30.0], [74.5, 30.0], [74.6, 30.0], [74.7, 30.0], [74.8, 30.0], [74.9, 30.0], [75.0, 30.0], [75.1, 30.0], [75.2, 30.0], [75.3, 30.0], [75.4, 30.0], [75.5, 30.0], [75.6, 30.0], [75.7, 30.0], [75.8, 30.0], [75.9, 30.0], [76.0, 30.0], [76.1, 30.0], [76.2, 30.0], [76.3, 30.0], [76.4, 30.0], [76.5, 31.0], [76.6, 31.0], [76.7, 31.0], [76.8, 31.0], [76.9, 31.0], [77.0, 31.0], [77.1, 31.0], [77.2, 31.0], [77.3, 31.0], [77.4, 31.0], [77.5, 31.0], [77.6, 31.0], [77.7, 31.0], [77.8, 31.0], [77.9, 31.0], [78.0, 31.0], [78.1, 31.0], [78.2, 31.0], [78.3, 31.0], [78.4, 31.0], [78.5, 31.0], [78.6, 31.0], [78.7, 31.0], [78.8, 32.0], [78.9, 32.0], [79.0, 32.0], [79.1, 32.0], [79.2, 32.0], [79.3, 32.0], [79.4, 32.0], [79.5, 32.0], [79.6, 32.0], [79.7, 32.0], [79.8, 32.0], [79.9, 32.0], [80.0, 32.0], [80.1, 32.0], [80.2, 32.0], [80.3, 32.0], [80.4, 32.0], [80.5, 32.0], [80.6, 32.0], [80.7, 32.0], [80.8, 32.0], [80.9, 32.0], [81.0, 33.0], [81.1, 33.0], [81.2, 33.0], [81.3, 33.0], [81.4, 33.0], [81.5, 33.0], [81.6, 33.0], [81.7, 33.0], [81.8, 33.0], [81.9, 33.0], [82.0, 33.0], [82.1, 33.0], [82.2, 33.0], [82.3, 33.0], [82.4, 33.0], [82.5, 33.0], [82.6, 33.0], [82.7, 33.0], [82.8, 33.0], [82.9, 33.0], [83.0, 34.0], [83.1, 34.0], [83.2, 34.0], [83.3, 34.0], [83.4, 34.0], [83.5, 34.0], [83.6, 34.0], [83.7, 34.0], [83.8, 34.0], [83.9, 34.0], [84.0, 34.0], [84.1, 34.0], [84.2, 34.0], [84.3, 34.0], [84.4, 34.0], [84.5, 34.0], [84.6, 34.0], [84.7, 34.0], [84.8, 35.0], [84.9, 35.0], [85.0, 35.0], [85.1, 35.0], [85.2, 35.0], [85.3, 35.0], [85.4, 35.0], [85.5, 35.0], [85.6, 35.0], [85.7, 35.0], [85.8, 35.0], [85.9, 35.0], [86.0, 35.0], [86.1, 35.0], [86.2, 35.0], [86.3, 35.0], [86.4, 36.0], [86.5, 36.0], [86.6, 36.0], [86.7, 36.0], [86.8, 36.0], [86.9, 36.0], [87.0, 36.0], [87.1, 36.0], [87.2, 36.0], [87.3, 36.0], [87.4, 36.0], [87.5, 36.0], [87.6, 36.0], [87.7, 36.0], [87.8, 36.0], [87.9, 37.0], [88.0, 37.0], [88.1, 37.0], [88.2, 37.0], [88.3, 37.0], [88.4, 37.0], [88.5, 37.0], [88.6, 37.0], [88.7, 37.0], [88.8, 37.0], [88.9, 37.0], [89.0, 37.0], [89.1, 37.0], [89.2, 37.0], [89.3, 38.0], [89.4, 38.0], [89.5, 38.0], [89.6, 38.0], [89.7, 38.0], [89.8, 38.0], [89.9, 38.0], [90.0, 38.0], [90.1, 38.0], [90.2, 38.0], [90.3, 38.0], [90.4, 38.0], [90.5, 39.0], [90.6, 39.0], [90.7, 39.0], [90.8, 39.0], [90.9, 39.0], [91.0, 39.0], [91.1, 39.0], [91.2, 39.0], [91.3, 39.0], [91.4, 39.0], [91.5, 39.0], [91.6, 40.0], [91.7, 40.0], [91.8, 40.0], [91.9, 40.0], [92.0, 40.0], [92.1, 40.0], [92.2, 40.0], [92.3, 40.0], [92.4, 40.0], [92.5, 41.0], [92.6, 41.0], [92.7, 41.0], [92.8, 41.0], [92.9, 41.0], [93.0, 41.0], [93.1, 41.0], [93.2, 41.0], [93.3, 42.0], [93.4, 42.0], [93.5, 42.0], [93.6, 42.0], [93.7, 42.0], [93.8, 42.0], [93.9, 42.0], [94.0, 43.0], [94.1, 43.0], [94.2, 43.0], [94.3, 43.0], [94.4, 43.0], [94.5, 43.0], [94.6, 44.0], [94.7, 44.0], [94.8, 44.0], [94.9, 44.0], [95.0, 44.0], [95.1, 44.0], [95.2, 45.0], [95.3, 45.0], [95.4, 45.0], [95.5, 45.0], [95.6, 45.0], [95.7, 46.0], [95.8, 46.0], [95.9, 46.0], [96.0, 46.0], [96.1, 47.0], [96.2, 47.0], [96.3, 47.0], [96.4, 47.0], [96.5, 48.0], [96.6, 48.0], [96.7, 48.0], [96.8, 49.0], [96.9, 49.0], [97.0, 49.0], [97.1, 50.0], [97.2, 50.0], [97.3, 51.0], [97.4, 51.0], [97.5, 52.0], [97.6, 52.0], [97.7, 53.0], [97.8, 53.0], [97.9, 54.0], [98.0, 55.0], [98.1, 55.0], [98.2, 56.0], [98.3, 57.0], [98.4, 58.0], [98.5, 60.0], [98.6, 61.0], [98.7, 63.0], [98.8, 66.0], [98.9, 69.0], [99.0, 72.0], [99.1, 75.0], [99.2, 81.0], [99.3, 89.0], [99.4, 96.0], [99.5, 108.0], [99.6, 129.0], [99.7, 153.0], [99.8, 169.0], [99.9, 225.0], [100.0, 535.0]], "isOverall": false, "label": "GET Playlists with Deep Cursor", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 4.0, "minX": 0.0, "maxY": 167317.0, "series": [{"data": [[0.0, 167317.0], [300.0, 53.0], [100.0, 709.0], [200.0, 144.0], [400.0, 39.0], [500.0, 4.0]], "isOverall": false, "label": "GET Playlists with Deep Cursor", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 500.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 4.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 168262.0, "series": [{"data": [[0.0, 168262.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 4.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 1.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 76.84659659659663, "minX": 1.76985828E12, "maxY": 100.0, "series": [{"data": [[1.76985828E12, 76.84659659659663], [1.76985894E12, 100.0], [1.76985888E12, 100.0], [1.76985858E12, 100.0], [1.769859E12, 100.0], [1.7698587E12, 100.0], [1.76985864E12, 100.0], [1.76985834E12, 100.0], [1.76985876E12, 100.0], [1.76985846E12, 100.0], [1.7698584E12, 100.0], [1.76985906E12, 100.0], [1.76985852E12, 100.0], [1.76985918E12, 98.90533333333339], [1.76985912E12, 100.0], [1.76985882E12, 100.0]], "isOverall": false, "label": "Playlist Deep Pagination Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.76985918E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 11.055555555555557, "minX": 1.0, "maxY": 75.88888888888886, "series": [{"data": [[2.0, 60.0], [3.0, 55.0], [4.0, 34.666666666666664], [5.0, 36.333333333333336], [6.0, 32.25], [7.0, 32.0], [8.0, 19.25], [9.0, 20.0], [10.0, 32.8], [11.0, 17.2], [12.0, 29.624999999999996], [13.0, 26.0], [14.0, 26.375], [15.0, 27.77777777777778], [16.0, 21.083333333333332], [17.0, 26.0], [18.0, 28.375], [19.0, 21.909090909090907], [20.0, 16.363636363636363], [21.0, 25.0], [22.0, 22.0], [23.0, 20.6875], [24.0, 30.88888888888889], [25.0, 26.166666666666668], [26.0, 26.333333333333336], [27.0, 21.5], [28.0, 27.849999999999998], [29.0, 23.78571428571429], [30.0, 24.909090909090907], [31.0, 24.099999999999998], [32.0, 27.304347826086953], [33.0, 25.999999999999996], [34.0, 24.538461538461537], [35.0, 22.583333333333332], [36.0, 23.17647058823529], [37.0, 25.48148148148148], [38.0, 26.071428571428573], [39.0, 29.615384615384606], [40.0, 25.058823529411768], [41.0, 25.9], [42.0, 22.79310344827586], [43.0, 24.65], [44.0, 27.437499999999993], [45.0, 21.764705882352942], [46.0, 30.8], [47.0, 19.904761904761905], [48.0, 27.088235294117645], [49.0, 20.100000000000005], [50.0, 19.2051282051282], [51.0, 19.68571428571429], [52.0, 17.8], [53.0, 29.634146341463417], [54.0, 15.722222222222221], [55.0, 23.799999999999994], [56.0, 24.000000000000004], [57.0, 20.73469387755102], [58.0, 25.444444444444446], [59.0, 12.374999999999996], [60.0, 23.93478260869565], [61.0, 13.450000000000005], [62.0, 21.11764705882353], [63.0, 17.94117647058824], [64.0, 19.314814814814817], [65.0, 22.567567567567576], [66.0, 14.86111111111111], [67.0, 18.188679245283016], [68.0, 11.166666666666664], [69.0, 23.813559322033893], [70.0, 11.714285714285714], [71.0, 30.54237288135593], [72.0, 20.433333333333337], [73.0, 19.352941176470583], [74.0, 23.258620689655178], [75.0, 12.565217391304348], [76.0, 24.080645161290324], [77.0, 11.055555555555557], [78.0, 27.029850746268668], [79.0, 14.166666666666666], [80.0, 19.72463768115942], [81.0, 26.94], [82.0, 22.305555555555564], [83.0, 34.552238805970156], [84.0, 13.38095238095238], [85.0, 30.835616438356155], [86.0, 14.285714285714285], [87.0, 75.88888888888886], [88.0, 12.879999999999999], [89.0, 16.50724637681159], [90.0, 13.11904761904762], [91.0, 15.192307692307692], [92.0, 15.249999999999996], [93.0, 17.470588235294116], [94.0, 17.7], [95.0, 15.366666666666669], [96.0, 26.228571428571424], [97.0, 13.314814814814815], [98.0, 23.666666666666664], [99.0, 13.968749999999996], [100.0, 23.739451138775568], [1.0, 67.0]], "isOverall": false, "label": "GET Playlists with Deep Cursor", "isController": false}, {"data": [[99.42087528080485, 23.734895938573597]], "isOverall": false, "label": "GET Playlists with Deep Cursor-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 15584.4, "minX": 1.76985828E12, "maxY": 2092723.45, "series": [{"data": [[1.76985828E12, 718014.6], [1.76985894E12, 2070969.2], [1.76985888E12, 2079954.3333333333], [1.76985858E12, 2024612.8333333333], [1.769859E12, 2029643.9666666666], [1.7698587E12, 2015097.35], [1.76985864E12, 2028745.0666666667], [1.76985834E12, 2087153.2666666666], [1.76985876E12, 2076372.2666666666], [1.76985846E12, 2033237.15], [1.7698584E12, 2089487.7], [1.76985906E12, 2012394.3666666667], [1.76985852E12, 2036471.45], [1.76985918E12, 808564.85], [1.76985912E12, 2030370.4333333333], [1.76985882E12, 2092723.45]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.76985828E12, 15584.4], [1.76985894E12, 44951.4], [1.76985888E12, 45146.4], [1.76985858E12, 43945.2], [1.769859E12, 44054.4], [1.7698587E12, 43738.5], [1.76985864E12, 44034.9], [1.76985834E12, 45302.4], [1.76985876E12, 45068.4], [1.76985846E12, 44132.4], [1.7698584E12, 45353.1], [1.76985906E12, 43680.0], [1.76985852E12, 44202.6], [1.76985918E12, 17550.0], [1.76985912E12, 44070.0], [1.76985882E12, 45423.3]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.76985918E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 13.39357774534209, "minX": 1.76985828E12, "maxY": 32.023777777777745, "series": [{"data": [[1.76985828E12, 20.095345345345297], [1.76985894E12, 17.331337844872486], [1.76985888E12, 16.1782999308915], [1.76985858E12, 29.694444444444454], [1.769859E12, 31.21299575070816], [1.7698587E12, 32.009094962104435], [1.76985864E12, 29.016827561774893], [1.76985834E12, 14.094180440771389], [1.76985876E12, 18.173243336794716], [1.76985846E12, 26.65597384234704], [1.7698584E12, 14.5870668157193], [1.76985906E12, 31.085357142857205], [1.76985852E12, 28.731780483500998], [1.76985918E12, 32.023777777777745], [1.76985912E12, 29.53451327433633], [1.76985882E12, 13.39357774534209]], "isOverall": false, "label": "GET Playlists with Deep Cursor", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76985918E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 13.324203657594246, "minX": 1.76985828E12, "maxY": 31.933333333333312, "series": [{"data": [[1.76985828E12, 19.986986986986956], [1.76985894E12, 17.25073746312685], [1.76985888E12, 16.095974429854927], [1.76985858E12, 29.5997515086972], [1.769859E12, 31.112783286118994], [1.7698587E12, 31.859384752563365], [1.76985864E12, 28.92135329023119], [1.76985834E12, 14.014032369146008], [1.76985876E12, 18.09276566285903], [1.76985846E12, 26.564687168610863], [1.7698584E12, 14.505202510963956], [1.76985906E12, 30.98044642857148], [1.76985852E12, 28.645050291159265], [1.76985918E12, 31.933333333333312], [1.76985912E12, 29.4342477876106], [1.76985882E12, 13.324203657594246]], "isOverall": false, "label": "GET Playlists with Deep Cursor", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76985918E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0022222222222222227, "minX": 1.76985828E12, "maxY": 0.02152152152152157, "series": [{"data": [[1.76985828E12, 0.02152152152152157], [1.76985894E12, 0.002863092139510677], [1.76985888E12, 0.0038009675190048314], [1.76985858E12, 0.004792332268370626], [1.769859E12, 0.004249291784702554], [1.7698587E12, 0.009540793580026742], [1.76985864E12, 0.0042511735010185145], [1.76985834E12, 0.004562672176308533], [1.76985876E12, 0.0029421945309795845], [1.76985846E12, 0.0049487451396253365], [1.7698584E12, 0.003955628170951939], [1.76985906E12, 0.004732142857142878], [1.76985852E12, 0.005205576142579858], [1.76985918E12, 0.0022222222222222227], [1.76985912E12, 0.003185840707964598], [1.76985882E12, 0.0022323345067399285]], "isOverall": false, "label": "GET Playlists with Deep Cursor", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76985918E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 7.0, "minX": 1.76985828E12, "maxY": 535.0, "series": [{"data": [[1.76985828E12, 162.0], [1.76985894E12, 79.0], [1.76985888E12, 218.0], [1.76985858E12, 370.0], [1.769859E12, 228.0], [1.7698587E12, 535.0], [1.76985864E12, 110.0], [1.76985834E12, 132.0], [1.76985876E12, 175.0], [1.76985846E12, 102.0], [1.7698584E12, 86.0], [1.76985906E12, 316.0], [1.76985852E12, 93.0], [1.76985918E12, 138.0], [1.76985912E12, 95.0], [1.76985882E12, 98.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.76985828E12, 7.0], [1.76985894E12, 9.0], [1.76985888E12, 8.0], [1.76985858E12, 9.0], [1.769859E12, 8.0], [1.7698587E12, 9.0], [1.76985864E12, 11.0], [1.76985834E12, 9.0], [1.76985876E12, 9.0], [1.76985846E12, 9.0], [1.7698584E12, 9.0], [1.76985906E12, 8.0], [1.76985852E12, 10.0], [1.76985918E12, 11.0], [1.76985912E12, 10.0], [1.76985882E12, 8.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.76985828E12, 32.0], [1.76985894E12, 32.0], [1.76985888E12, 19.0], [1.76985858E12, 40.0], [1.769859E12, 47.0], [1.7698587E12, 42.0], [1.76985864E12, 42.0], [1.76985834E12, 18.0], [1.76985876E12, 24.0], [1.76985846E12, 39.0], [1.7698584E12, 19.0], [1.76985906E12, 45.0], [1.76985852E12, 40.0], [1.76985918E12, 42.0], [1.76985912E12, 43.0], [1.76985882E12, 16.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.76985828E12, 93.0], [1.76985894E12, 46.0], [1.76985888E12, 59.0], [1.76985858E12, 102.30999999999949], [1.769859E12, 92.0], [1.7698587E12, 232.52000000000044], [1.76985864E12, 61.0], [1.76985834E12, 28.0], [1.76985876E12, 114.0], [1.76985846E12, 57.0], [1.7698584E12, 27.0], [1.76985906E12, 129.0], [1.76985852E12, 54.0], [1.76985918E12, 69.0], [1.76985912E12, 59.0], [1.76985882E12, 24.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.76985828E12, 16.0], [1.76985894E12, 14.0], [1.76985888E12, 14.0], [1.76985858E12, 27.0], [1.769859E12, 29.0], [1.7698587E12, 24.0], [1.76985864E12, 28.0], [1.76985834E12, 13.0], [1.76985876E12, 14.0], [1.76985846E12, 26.0], [1.7698584E12, 14.0], [1.76985906E12, 29.0], [1.76985852E12, 28.0], [1.76985918E12, 31.0], [1.76985912E12, 29.0], [1.76985882E12, 13.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.76985828E12, 38.0], [1.76985894E12, 36.0], [1.76985888E12, 23.0], [1.76985858E12, 45.0], [1.769859E12, 55.0], [1.7698587E12, 60.19999999999891], [1.76985864E12, 47.0], [1.76985834E12, 20.0], [1.76985876E12, 39.0], [1.76985846E12, 43.0], [1.7698584E12, 20.0], [1.76985906E12, 52.0], [1.76985852E12, 45.0], [1.76985918E12, 48.0], [1.76985912E12, 47.0], [1.76985882E12, 18.0]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.76985918E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 13.0, "minX": 2.0, "maxY": 220.0, "series": [{"data": [[2.0, 37.5], [6.0, 62.5], [8.0, 21.5], [14.0, 21.0], [22.0, 19.0], [27.0, 19.0], [36.0, 19.0], [39.0, 21.0], [44.0, 25.0], [56.0, 24.5], [58.0, 23.0], [74.0, 25.5], [81.0, 22.0], [85.0, 22.0], [95.0, 21.0], [96.0, 20.0], [99.0, 19.0], [109.0, 24.0], [111.0, 22.0], [119.0, 19.0], [123.0, 220.0], [120.0, 218.5], [125.0, 164.0], [130.0, 25.5], [136.0, 17.0], [139.0, 25.0], [147.0, 22.0], [144.0, 29.5], [148.0, 32.0], [155.0, 22.0], [157.0, 34.0], [156.0, 29.0], [159.0, 36.0], [154.0, 49.0], [160.0, 34.0], [166.0, 29.0], [164.0, 32.0], [165.0, 29.0], [167.0, 28.0], [162.0, 34.0], [163.0, 32.0], [161.0, 34.0], [172.0, 27.0], [169.0, 29.0], [170.0, 30.0], [168.0, 27.0], [171.0, 28.0], [173.0, 28.0], [174.0, 28.0], [175.0, 28.0], [178.0, 25.0], [182.0, 21.0], [176.0, 27.0], [180.0, 25.0], [183.0, 24.0], [181.0, 26.0], [177.0, 26.0], [179.0, 21.0], [188.0, 15.0], [189.0, 16.0], [191.0, 16.0], [185.0, 17.0], [190.0, 14.0], [184.0, 19.0], [187.0, 17.0], [186.0, 27.0], [195.0, 14.0], [199.0, 14.0], [196.0, 14.0], [193.0, 13.0], [192.0, 13.0], [198.0, 14.0], [194.0, 13.0], [197.0, 15.0], [200.0, 29.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 200.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 13.0, "minX": 2.0, "maxY": 220.0, "series": [{"data": [[2.0, 37.0], [6.0, 62.5], [8.0, 21.5], [14.0, 20.5], [22.0, 19.0], [27.0, 19.0], [36.0, 18.5], [39.0, 21.0], [44.0, 25.0], [56.0, 24.0], [58.0, 23.0], [74.0, 25.0], [81.0, 22.0], [85.0, 22.0], [95.0, 21.0], [96.0, 19.5], [99.0, 19.0], [109.0, 24.0], [111.0, 22.0], [119.0, 19.0], [123.0, 220.0], [120.0, 213.0], [125.0, 164.0], [130.0, 25.0], [136.0, 17.0], [139.0, 24.0], [147.0, 22.0], [144.0, 29.5], [148.0, 32.0], [155.0, 22.0], [157.0, 34.0], [156.0, 29.0], [159.0, 36.0], [154.0, 49.0], [160.0, 34.0], [166.0, 29.0], [164.0, 32.0], [165.0, 29.0], [167.0, 27.5], [162.0, 34.0], [163.0, 32.0], [161.0, 34.0], [172.0, 27.0], [169.0, 29.0], [170.0, 30.0], [168.0, 27.0], [171.0, 28.0], [173.0, 28.0], [174.0, 28.0], [175.0, 28.0], [178.0, 25.0], [182.0, 21.0], [176.0, 26.5], [180.0, 25.0], [183.0, 24.0], [181.0, 26.0], [177.0, 26.0], [179.0, 21.0], [188.0, 15.0], [189.0, 15.0], [191.0, 16.0], [185.0, 17.0], [190.0, 14.0], [184.0, 19.0], [187.0, 16.0], [186.0, 27.0], [195.0, 14.0], [199.0, 14.0], [196.0, 14.0], [193.0, 13.0], [192.0, 13.0], [198.0, 14.0], [194.0, 13.0], [197.0, 15.0], [200.0, 28.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 200.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 66.63333333333334, "minX": 1.76985828E12, "maxY": 194.06666666666666, "series": [{"data": [[1.76985828E12, 66.63333333333334], [1.76985894E12, 192.35], [1.76985888E12, 192.9], [1.76985858E12, 187.81666666666666], [1.769859E12, 188.01666666666668], [1.7698587E12, 187.23333333333332], [1.76985864E12, 187.95], [1.76985834E12, 193.56666666666666], [1.76985876E12, 192.36666666666667], [1.76985846E12, 188.85], [1.7698584E12, 193.83333333333334], [1.76985906E12, 186.83333333333334], [1.76985852E12, 188.85], [1.76985918E12, 75.0], [1.76985912E12, 188.16666666666666], [1.76985882E12, 194.06666666666666]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.76985918E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 66.6, "minX": 1.76985828E12, "maxY": 194.11666666666667, "series": [{"data": [[1.76985828E12, 66.6], [1.76985894E12, 192.1], [1.76985888E12, 192.93333333333334], [1.76985858E12, 187.8], [1.769859E12, 188.26666666666668], [1.7698587E12, 186.91666666666666], [1.76985864E12, 188.18333333333334], [1.76985834E12, 193.6], [1.76985876E12, 192.6], [1.76985846E12, 188.6], [1.7698584E12, 193.81666666666666], [1.76985906E12, 186.66666666666666], [1.76985852E12, 188.9], [1.76985918E12, 75.0], [1.76985912E12, 188.33333333333334], [1.76985882E12, 194.11666666666667]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.76985918E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 66.6, "minX": 1.76985828E12, "maxY": 194.11666666666667, "series": [{"data": [[1.76985828E12, 66.6], [1.76985894E12, 192.1], [1.76985888E12, 192.93333333333334], [1.76985858E12, 187.8], [1.769859E12, 188.26666666666668], [1.7698587E12, 186.91666666666666], [1.76985864E12, 188.18333333333334], [1.76985834E12, 193.6], [1.76985876E12, 192.6], [1.76985846E12, 188.6], [1.7698584E12, 193.81666666666666], [1.76985906E12, 186.66666666666666], [1.76985852E12, 188.9], [1.76985918E12, 75.0], [1.76985912E12, 188.33333333333334], [1.76985882E12, 194.11666666666667]], "isOverall": false, "label": "GET Playlists with Deep Cursor-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76985918E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 66.6, "minX": 1.76985828E12, "maxY": 194.11666666666667, "series": [{"data": [[1.76985828E12, 66.6], [1.76985894E12, 192.1], [1.76985888E12, 192.93333333333334], [1.76985858E12, 187.8], [1.769859E12, 188.26666666666668], [1.7698587E12, 186.91666666666666], [1.76985864E12, 188.18333333333334], [1.76985834E12, 193.6], [1.76985876E12, 192.6], [1.76985846E12, 188.6], [1.7698584E12, 193.81666666666666], [1.76985906E12, 186.66666666666666], [1.76985852E12, 188.9], [1.76985918E12, 75.0], [1.76985912E12, 188.33333333333334], [1.76985882E12, 194.11666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76985918E12, "title": "Total Transactions Per Second"}},
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

