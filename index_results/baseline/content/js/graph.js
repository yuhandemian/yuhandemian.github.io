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
        data: {"result": {"minY": 33.0, "minX": 0.0, "maxY": 2922.0, "series": [{"data": [[0.0, 33.0], [0.1, 47.0], [0.2, 52.0], [0.3, 56.0], [0.4, 59.0], [0.5, 60.0], [0.6, 61.0], [0.7, 62.0], [0.8, 63.0], [0.9, 64.0], [1.0, 65.0], [1.1, 65.0], [1.2, 66.0], [1.3, 66.0], [1.4, 67.0], [1.5, 68.0], [1.6, 68.0], [1.7, 69.0], [1.8, 69.0], [1.9, 69.0], [2.0, 70.0], [2.1, 71.0], [2.2, 71.0], [2.3, 71.0], [2.4, 72.0], [2.5, 72.0], [2.6, 73.0], [2.7, 73.0], [2.8, 74.0], [2.9, 74.0], [3.0, 75.0], [3.1, 75.0], [3.2, 76.0], [3.3, 76.0], [3.4, 77.0], [3.5, 77.0], [3.6, 78.0], [3.7, 78.0], [3.8, 79.0], [3.9, 79.0], [4.0, 80.0], [4.1, 80.0], [4.2, 81.0], [4.3, 82.0], [4.4, 82.0], [4.5, 83.0], [4.6, 84.0], [4.7, 84.0], [4.8, 85.0], [4.9, 86.0], [5.0, 87.0], [5.1, 87.0], [5.2, 88.0], [5.3, 89.0], [5.4, 91.0], [5.5, 92.0], [5.6, 93.0], [5.7, 95.0], [5.8, 97.0], [5.9, 98.0], [6.0, 101.0], [6.1, 104.0], [6.2, 107.0], [6.3, 111.0], [6.4, 115.0], [6.5, 118.0], [6.6, 121.0], [6.7, 123.0], [6.8, 126.0], [6.9, 128.0], [7.0, 130.0], [7.1, 132.0], [7.2, 133.0], [7.3, 135.0], [7.4, 136.0], [7.5, 138.0], [7.6, 139.0], [7.7, 140.0], [7.8, 142.0], [7.9, 143.0], [8.0, 144.0], [8.1, 145.0], [8.2, 146.0], [8.3, 147.0], [8.4, 148.0], [8.5, 149.0], [8.6, 150.0], [8.7, 151.0], [8.8, 152.0], [8.9, 152.0], [9.0, 153.0], [9.1, 154.0], [9.2, 154.0], [9.3, 155.0], [9.4, 156.0], [9.5, 156.0], [9.6, 157.0], [9.7, 157.0], [9.8, 157.0], [9.9, 158.0], [10.0, 158.0], [10.1, 159.0], [10.2, 159.0], [10.3, 159.0], [10.4, 160.0], [10.5, 160.0], [10.6, 161.0], [10.7, 161.0], [10.8, 161.0], [10.9, 161.0], [11.0, 162.0], [11.1, 162.0], [11.2, 162.0], [11.3, 163.0], [11.4, 163.0], [11.5, 163.0], [11.6, 163.0], [11.7, 164.0], [11.8, 164.0], [11.9, 164.0], [12.0, 164.0], [12.1, 165.0], [12.2, 165.0], [12.3, 165.0], [12.4, 165.0], [12.5, 165.0], [12.6, 166.0], [12.7, 166.0], [12.8, 166.0], [12.9, 166.0], [13.0, 167.0], [13.1, 167.0], [13.2, 167.0], [13.3, 167.0], [13.4, 167.0], [13.5, 168.0], [13.6, 168.0], [13.7, 168.0], [13.8, 168.0], [13.9, 168.0], [14.0, 168.0], [14.1, 169.0], [14.2, 169.0], [14.3, 169.0], [14.4, 169.0], [14.5, 169.0], [14.6, 170.0], [14.7, 170.0], [14.8, 170.0], [14.9, 170.0], [15.0, 170.0], [15.1, 170.0], [15.2, 171.0], [15.3, 171.0], [15.4, 171.0], [15.5, 171.0], [15.6, 171.0], [15.7, 171.0], [15.8, 172.0], [15.9, 172.0], [16.0, 172.0], [16.1, 172.0], [16.2, 172.0], [16.3, 172.0], [16.4, 172.0], [16.5, 173.0], [16.6, 173.0], [16.7, 173.0], [16.8, 173.0], [16.9, 173.0], [17.0, 173.0], [17.1, 174.0], [17.2, 174.0], [17.3, 174.0], [17.4, 174.0], [17.5, 174.0], [17.6, 174.0], [17.7, 174.0], [17.8, 175.0], [17.9, 175.0], [18.0, 175.0], [18.1, 175.0], [18.2, 175.0], [18.3, 175.0], [18.4, 175.0], [18.5, 175.0], [18.6, 176.0], [18.7, 176.0], [18.8, 176.0], [18.9, 176.0], [19.0, 176.0], [19.1, 176.0], [19.2, 176.0], [19.3, 177.0], [19.4, 177.0], [19.5, 177.0], [19.6, 177.0], [19.7, 177.0], [19.8, 177.0], [19.9, 177.0], [20.0, 177.0], [20.1, 178.0], [20.2, 178.0], [20.3, 178.0], [20.4, 178.0], [20.5, 178.0], [20.6, 178.0], [20.7, 178.0], [20.8, 178.0], [20.9, 179.0], [21.0, 179.0], [21.1, 179.0], [21.2, 179.0], [21.3, 179.0], [21.4, 179.0], [21.5, 179.0], [21.6, 179.0], [21.7, 180.0], [21.8, 180.0], [21.9, 180.0], [22.0, 180.0], [22.1, 180.0], [22.2, 180.0], [22.3, 180.0], [22.4, 180.0], [22.5, 180.0], [22.6, 181.0], [22.7, 181.0], [22.8, 181.0], [22.9, 181.0], [23.0, 181.0], [23.1, 181.0], [23.2, 181.0], [23.3, 181.0], [23.4, 182.0], [23.5, 182.0], [23.6, 182.0], [23.7, 182.0], [23.8, 182.0], [23.9, 182.0], [24.0, 182.0], [24.1, 182.0], [24.2, 182.0], [24.3, 183.0], [24.4, 183.0], [24.5, 183.0], [24.6, 183.0], [24.7, 183.0], [24.8, 183.0], [24.9, 183.0], [25.0, 183.0], [25.1, 183.0], [25.2, 184.0], [25.3, 184.0], [25.4, 184.0], [25.5, 184.0], [25.6, 184.0], [25.7, 184.0], [25.8, 184.0], [25.9, 184.0], [26.0, 184.0], [26.1, 185.0], [26.2, 185.0], [26.3, 185.0], [26.4, 185.0], [26.5, 185.0], [26.6, 185.0], [26.7, 185.0], [26.8, 185.0], [26.9, 185.0], [27.0, 186.0], [27.1, 186.0], [27.2, 186.0], [27.3, 186.0], [27.4, 186.0], [27.5, 186.0], [27.6, 186.0], [27.7, 186.0], [27.8, 186.0], [27.9, 187.0], [28.0, 187.0], [28.1, 187.0], [28.2, 187.0], [28.3, 187.0], [28.4, 187.0], [28.5, 187.0], [28.6, 187.0], [28.7, 187.0], [28.8, 188.0], [28.9, 188.0], [29.0, 188.0], [29.1, 188.0], [29.2, 188.0], [29.3, 188.0], [29.4, 188.0], [29.5, 188.0], [29.6, 188.0], [29.7, 189.0], [29.8, 189.0], [29.9, 189.0], [30.0, 189.0], [30.1, 189.0], [30.2, 189.0], [30.3, 189.0], [30.4, 189.0], [30.5, 190.0], [30.6, 190.0], [30.7, 190.0], [30.8, 190.0], [30.9, 190.0], [31.0, 190.0], [31.1, 190.0], [31.2, 190.0], [31.3, 190.0], [31.4, 191.0], [31.5, 191.0], [31.6, 191.0], [31.7, 191.0], [31.8, 191.0], [31.9, 191.0], [32.0, 191.0], [32.1, 191.0], [32.2, 191.0], [32.3, 192.0], [32.4, 192.0], [32.5, 192.0], [32.6, 192.0], [32.7, 192.0], [32.8, 192.0], [32.9, 192.0], [33.0, 192.0], [33.1, 193.0], [33.2, 193.0], [33.3, 193.0], [33.4, 193.0], [33.5, 193.0], [33.6, 193.0], [33.7, 193.0], [33.8, 193.0], [33.9, 194.0], [34.0, 194.0], [34.1, 194.0], [34.2, 194.0], [34.3, 194.0], [34.4, 194.0], [34.5, 194.0], [34.6, 194.0], [34.7, 195.0], [34.8, 195.0], [34.9, 195.0], [35.0, 195.0], [35.1, 195.0], [35.2, 195.0], [35.3, 195.0], [35.4, 195.0], [35.5, 196.0], [35.6, 196.0], [35.7, 196.0], [35.8, 196.0], [35.9, 196.0], [36.0, 196.0], [36.1, 196.0], [36.2, 197.0], [36.3, 197.0], [36.4, 197.0], [36.5, 197.0], [36.6, 197.0], [36.7, 197.0], [36.8, 197.0], [36.9, 197.0], [37.0, 198.0], [37.1, 198.0], [37.2, 198.0], [37.3, 198.0], [37.4, 198.0], [37.5, 198.0], [37.6, 198.0], [37.7, 199.0], [37.8, 199.0], [37.9, 199.0], [38.0, 199.0], [38.1, 199.0], [38.2, 199.0], [38.3, 199.0], [38.4, 200.0], [38.5, 200.0], [38.6, 200.0], [38.7, 200.0], [38.8, 200.0], [38.9, 200.0], [39.0, 200.0], [39.1, 201.0], [39.2, 201.0], [39.3, 201.0], [39.4, 201.0], [39.5, 201.0], [39.6, 201.0], [39.7, 201.0], [39.8, 202.0], [39.9, 202.0], [40.0, 202.0], [40.1, 202.0], [40.2, 202.0], [40.3, 202.0], [40.4, 203.0], [40.5, 203.0], [40.6, 203.0], [40.7, 203.0], [40.8, 203.0], [40.9, 204.0], [41.0, 204.0], [41.1, 204.0], [41.2, 204.0], [41.3, 204.0], [41.4, 204.0], [41.5, 205.0], [41.6, 205.0], [41.7, 205.0], [41.8, 205.0], [41.9, 205.0], [42.0, 206.0], [42.1, 206.0], [42.2, 206.0], [42.3, 206.0], [42.4, 206.0], [42.5, 207.0], [42.6, 207.0], [42.7, 207.0], [42.8, 207.0], [42.9, 207.0], [43.0, 208.0], [43.1, 208.0], [43.2, 208.0], [43.3, 208.0], [43.4, 209.0], [43.5, 209.0], [43.6, 209.0], [43.7, 209.0], [43.8, 209.0], [43.9, 210.0], [44.0, 210.0], [44.1, 210.0], [44.2, 210.0], [44.3, 211.0], [44.4, 211.0], [44.5, 211.0], [44.6, 211.0], [44.7, 212.0], [44.8, 212.0], [44.9, 212.0], [45.0, 212.0], [45.1, 213.0], [45.2, 213.0], [45.3, 213.0], [45.4, 213.0], [45.5, 214.0], [45.6, 214.0], [45.7, 214.0], [45.8, 214.0], [45.9, 215.0], [46.0, 215.0], [46.1, 215.0], [46.2, 216.0], [46.3, 216.0], [46.4, 216.0], [46.5, 216.0], [46.6, 217.0], [46.7, 217.0], [46.8, 217.0], [46.9, 218.0], [47.0, 218.0], [47.1, 218.0], [47.2, 218.0], [47.3, 219.0], [47.4, 219.0], [47.5, 219.0], [47.6, 220.0], [47.7, 220.0], [47.8, 220.0], [47.9, 221.0], [48.0, 221.0], [48.1, 221.0], [48.2, 222.0], [48.3, 222.0], [48.4, 222.0], [48.5, 223.0], [48.6, 223.0], [48.7, 224.0], [48.8, 224.0], [48.9, 224.0], [49.0, 225.0], [49.1, 225.0], [49.2, 225.0], [49.3, 226.0], [49.4, 226.0], [49.5, 227.0], [49.6, 227.0], [49.7, 227.0], [49.8, 228.0], [49.9, 228.0], [50.0, 228.0], [50.1, 229.0], [50.2, 229.0], [50.3, 230.0], [50.4, 230.0], [50.5, 230.0], [50.6, 231.0], [50.7, 231.0], [50.8, 231.0], [50.9, 232.0], [51.0, 232.0], [51.1, 233.0], [51.2, 233.0], [51.3, 233.0], [51.4, 234.0], [51.5, 234.0], [51.6, 234.0], [51.7, 235.0], [51.8, 235.0], [51.9, 235.0], [52.0, 236.0], [52.1, 236.0], [52.2, 237.0], [52.3, 237.0], [52.4, 237.0], [52.5, 238.0], [52.6, 238.0], [52.7, 238.0], [52.8, 239.0], [52.9, 239.0], [53.0, 240.0], [53.1, 240.0], [53.2, 240.0], [53.3, 241.0], [53.4, 241.0], [53.5, 241.0], [53.6, 242.0], [53.7, 242.0], [53.8, 242.0], [53.9, 243.0], [54.0, 243.0], [54.1, 243.0], [54.2, 244.0], [54.3, 244.0], [54.4, 244.0], [54.5, 244.0], [54.6, 245.0], [54.7, 245.0], [54.8, 245.0], [54.9, 246.0], [55.0, 246.0], [55.1, 246.0], [55.2, 247.0], [55.3, 247.0], [55.4, 247.0], [55.5, 248.0], [55.6, 248.0], [55.7, 248.0], [55.8, 248.0], [55.9, 249.0], [56.0, 249.0], [56.1, 249.0], [56.2, 250.0], [56.3, 250.0], [56.4, 250.0], [56.5, 250.0], [56.6, 251.0], [56.7, 251.0], [56.8, 251.0], [56.9, 251.0], [57.0, 252.0], [57.1, 252.0], [57.2, 252.0], [57.3, 252.0], [57.4, 253.0], [57.5, 253.0], [57.6, 253.0], [57.7, 254.0], [57.8, 254.0], [57.9, 254.0], [58.0, 254.0], [58.1, 255.0], [58.2, 255.0], [58.3, 255.0], [58.4, 255.0], [58.5, 256.0], [58.6, 256.0], [58.7, 256.0], [58.8, 256.0], [58.9, 257.0], [59.0, 257.0], [59.1, 257.0], [59.2, 257.0], [59.3, 258.0], [59.4, 258.0], [59.5, 258.0], [59.6, 258.0], [59.7, 259.0], [59.8, 259.0], [59.9, 259.0], [60.0, 259.0], [60.1, 260.0], [60.2, 260.0], [60.3, 260.0], [60.4, 260.0], [60.5, 260.0], [60.6, 261.0], [60.7, 261.0], [60.8, 261.0], [60.9, 261.0], [61.0, 262.0], [61.1, 262.0], [61.2, 262.0], [61.3, 262.0], [61.4, 262.0], [61.5, 263.0], [61.6, 263.0], [61.7, 263.0], [61.8, 263.0], [61.9, 264.0], [62.0, 264.0], [62.1, 264.0], [62.2, 264.0], [62.3, 265.0], [62.4, 265.0], [62.5, 265.0], [62.6, 265.0], [62.7, 266.0], [62.8, 266.0], [62.9, 266.0], [63.0, 266.0], [63.1, 266.0], [63.2, 267.0], [63.3, 267.0], [63.4, 267.0], [63.5, 267.0], [63.6, 268.0], [63.7, 268.0], [63.8, 268.0], [63.9, 268.0], [64.0, 269.0], [64.1, 269.0], [64.2, 269.0], [64.3, 269.0], [64.4, 270.0], [64.5, 270.0], [64.6, 270.0], [64.7, 270.0], [64.8, 270.0], [64.9, 271.0], [65.0, 271.0], [65.1, 271.0], [65.2, 271.0], [65.3, 272.0], [65.4, 272.0], [65.5, 272.0], [65.6, 272.0], [65.7, 273.0], [65.8, 273.0], [65.9, 273.0], [66.0, 273.0], [66.1, 273.0], [66.2, 274.0], [66.3, 274.0], [66.4, 274.0], [66.5, 274.0], [66.6, 275.0], [66.7, 275.0], [66.8, 275.0], [66.9, 275.0], [67.0, 275.0], [67.1, 276.0], [67.2, 276.0], [67.3, 276.0], [67.4, 276.0], [67.5, 277.0], [67.6, 277.0], [67.7, 277.0], [67.8, 277.0], [67.9, 278.0], [68.0, 278.0], [68.1, 278.0], [68.2, 278.0], [68.3, 278.0], [68.4, 279.0], [68.5, 279.0], [68.6, 279.0], [68.7, 279.0], [68.8, 280.0], [68.9, 280.0], [69.0, 280.0], [69.1, 280.0], [69.2, 280.0], [69.3, 281.0], [69.4, 281.0], [69.5, 281.0], [69.6, 281.0], [69.7, 282.0], [69.8, 282.0], [69.9, 282.0], [70.0, 282.0], [70.1, 282.0], [70.2, 283.0], [70.3, 283.0], [70.4, 283.0], [70.5, 283.0], [70.6, 284.0], [70.7, 284.0], [70.8, 284.0], [70.9, 284.0], [71.0, 285.0], [71.1, 285.0], [71.2, 285.0], [71.3, 285.0], [71.4, 285.0], [71.5, 286.0], [71.6, 286.0], [71.7, 286.0], [71.8, 286.0], [71.9, 287.0], [72.0, 287.0], [72.1, 287.0], [72.2, 287.0], [72.3, 287.0], [72.4, 288.0], [72.5, 288.0], [72.6, 288.0], [72.7, 288.0], [72.8, 289.0], [72.9, 289.0], [73.0, 289.0], [73.1, 289.0], [73.2, 290.0], [73.3, 290.0], [73.4, 290.0], [73.5, 290.0], [73.6, 290.0], [73.7, 291.0], [73.8, 291.0], [73.9, 291.0], [74.0, 291.0], [74.1, 292.0], [74.2, 292.0], [74.3, 292.0], [74.4, 292.0], [74.5, 293.0], [74.6, 293.0], [74.7, 293.0], [74.8, 293.0], [74.9, 293.0], [75.0, 294.0], [75.1, 294.0], [75.2, 294.0], [75.3, 294.0], [75.4, 295.0], [75.5, 295.0], [75.6, 295.0], [75.7, 295.0], [75.8, 295.0], [75.9, 296.0], [76.0, 296.0], [76.1, 296.0], [76.2, 296.0], [76.3, 297.0], [76.4, 297.0], [76.5, 297.0], [76.6, 297.0], [76.7, 298.0], [76.8, 298.0], [76.9, 298.0], [77.0, 298.0], [77.1, 298.0], [77.2, 299.0], [77.3, 299.0], [77.4, 299.0], [77.5, 299.0], [77.6, 300.0], [77.7, 300.0], [77.8, 300.0], [77.9, 300.0], [78.0, 301.0], [78.1, 301.0], [78.2, 301.0], [78.3, 301.0], [78.4, 302.0], [78.5, 302.0], [78.6, 302.0], [78.7, 302.0], [78.8, 303.0], [78.9, 303.0], [79.0, 303.0], [79.1, 303.0], [79.2, 304.0], [79.3, 304.0], [79.4, 304.0], [79.5, 304.0], [79.6, 305.0], [79.7, 305.0], [79.8, 305.0], [79.9, 305.0], [80.0, 306.0], [80.1, 306.0], [80.2, 306.0], [80.3, 306.0], [80.4, 307.0], [80.5, 307.0], [80.6, 307.0], [80.7, 307.0], [80.8, 308.0], [80.9, 308.0], [81.0, 308.0], [81.1, 308.0], [81.2, 309.0], [81.3, 309.0], [81.4, 309.0], [81.5, 309.0], [81.6, 310.0], [81.7, 310.0], [81.8, 310.0], [81.9, 310.0], [82.0, 311.0], [82.1, 311.0], [82.2, 311.0], [82.3, 311.0], [82.4, 312.0], [82.5, 312.0], [82.6, 312.0], [82.7, 312.0], [82.8, 313.0], [82.9, 313.0], [83.0, 313.0], [83.1, 314.0], [83.2, 314.0], [83.3, 314.0], [83.4, 314.0], [83.5, 315.0], [83.6, 315.0], [83.7, 315.0], [83.8, 316.0], [83.9, 316.0], [84.0, 316.0], [84.1, 316.0], [84.2, 317.0], [84.3, 317.0], [84.4, 317.0], [84.5, 318.0], [84.6, 318.0], [84.7, 318.0], [84.8, 318.0], [84.9, 319.0], [85.0, 319.0], [85.1, 319.0], [85.2, 320.0], [85.3, 320.0], [85.4, 320.0], [85.5, 321.0], [85.6, 321.0], [85.7, 321.0], [85.8, 322.0], [85.9, 322.0], [86.0, 322.0], [86.1, 323.0], [86.2, 323.0], [86.3, 323.0], [86.4, 324.0], [86.5, 324.0], [86.6, 325.0], [86.7, 325.0], [86.8, 325.0], [86.9, 326.0], [87.0, 326.0], [87.1, 326.0], [87.2, 327.0], [87.3, 327.0], [87.4, 328.0], [87.5, 328.0], [87.6, 328.0], [87.7, 329.0], [87.8, 329.0], [87.9, 330.0], [88.0, 330.0], [88.1, 330.0], [88.2, 331.0], [88.3, 331.0], [88.4, 332.0], [88.5, 332.0], [88.6, 333.0], [88.7, 333.0], [88.8, 334.0], [88.9, 334.0], [89.0, 335.0], [89.1, 335.0], [89.2, 336.0], [89.3, 336.0], [89.4, 337.0], [89.5, 337.0], [89.6, 338.0], [89.7, 338.0], [89.8, 339.0], [89.9, 339.0], [90.0, 340.0], [90.1, 341.0], [90.2, 341.0], [90.3, 342.0], [90.4, 342.0], [90.5, 343.0], [90.6, 344.0], [90.7, 344.0], [90.8, 345.0], [90.9, 346.0], [91.0, 346.0], [91.1, 347.0], [91.2, 348.0], [91.3, 349.0], [91.4, 349.0], [91.5, 350.0], [91.6, 351.0], [91.7, 352.0], [91.8, 353.0], [91.9, 353.0], [92.0, 354.0], [92.1, 355.0], [92.2, 356.0], [92.3, 357.0], [92.4, 358.0], [92.5, 359.0], [92.6, 360.0], [92.7, 361.0], [92.8, 362.0], [92.9, 363.0], [93.0, 364.0], [93.1, 366.0], [93.2, 367.0], [93.3, 368.0], [93.4, 370.0], [93.5, 371.0], [93.6, 373.0], [93.7, 374.0], [93.8, 376.0], [93.9, 377.0], [94.0, 379.0], [94.1, 381.0], [94.2, 382.0], [94.3, 384.0], [94.4, 386.0], [94.5, 388.0], [94.6, 390.0], [94.7, 392.0], [94.8, 394.0], [94.9, 396.0], [95.0, 399.0], [95.1, 401.0], [95.2, 403.0], [95.3, 406.0], [95.4, 408.0], [95.5, 411.0], [95.6, 414.0], [95.7, 416.0], [95.8, 419.0], [95.9, 422.0], [96.0, 425.0], [96.1, 427.0], [96.2, 430.0], [96.3, 434.0], [96.4, 437.0], [96.5, 441.0], [96.6, 445.0], [96.7, 449.0], [96.8, 453.0], [96.9, 458.0], [97.0, 462.0], [97.1, 468.0], [97.2, 473.0], [97.3, 479.0], [97.4, 484.0], [97.5, 489.0], [97.6, 495.0], [97.7, 500.0], [97.8, 506.0], [97.9, 512.0], [98.0, 518.0], [98.1, 524.0], [98.2, 530.0], [98.3, 536.0], [98.4, 543.0], [98.5, 550.0], [98.6, 558.0], [98.7, 566.0], [98.8, 576.0], [98.9, 586.0], [99.0, 598.0], [99.1, 612.0], [99.2, 627.0], [99.3, 644.0], [99.4, 664.0], [99.5, 697.0], [99.6, 724.0], [99.7, 773.0], [99.8, 845.0], [99.9, 984.0]], "isOverall": false, "label": "GET Playlists with Deep Cursor", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 76981.0, "series": [{"data": [[0.0, 11709.0], [600.0, 985.0], [2400.0, 1.0], [700.0, 458.0], [2800.0, 1.0], [2900.0, 4.0], [200.0, 76981.0], [800.0, 216.0], [900.0, 98.0], [1000.0, 37.0], [1100.0, 36.0], [300.0, 34428.0], [1200.0, 10.0], [1300.0, 13.0], [1400.0, 2.0], [1500.0, 29.0], [100.0, 63786.0], [400.0, 5201.0], [1600.0, 4.0], [1700.0, 8.0], [1800.0, 35.0], [1900.0, 11.0], [500.0, 2601.0], [2000.0, 1.0]], "isOverall": false, "label": "GET Playlists with Deep Cursor", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 2900.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 94.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 192138.0, "series": [{"data": [[0.0, 192138.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 4423.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 94.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 71.84549833271606, "minX": 1.76985636E12, "maxY": 100.0, "series": [{"data": [[1.76985762E12, 100.0], [1.76985702E12, 99.87798478089753], [1.76985732E12, 100.0], [1.76985642E12, 100.0], [1.76985672E12, 100.0], [1.76985774E12, 100.0], [1.76985714E12, 100.0], [1.76985744E12, 100.0], [1.76985654E12, 100.0], [1.76985684E12, 100.0], [1.76985786E12, 98.94055793991413], [1.76985726E12, 100.0], [1.76985756E12, 100.0], [1.76985666E12, 100.0], [1.76985696E12, 83.40540540540549], [1.76985636E12, 71.84549833271606], [1.76985738E12, 100.0], [1.76985768E12, 100.0], [1.76985678E12, 100.0], [1.76985708E12, 100.0], [1.76985648E12, 100.0], [1.7698575E12, 100.0], [1.7698578E12, 100.0], [1.7698569E12, 100.0], [1.7698572E12, 100.0], [1.7698566E12, 100.0]], "isOverall": false, "label": "Playlist Deep Pagination Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.76985786E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 49.96551724137931, "minX": 1.0, "maxY": 299.12765957446805, "series": [{"data": [[2.0, 222.0], [3.0, 137.2], [4.0, 115.66666666666666], [5.0, 80.57142857142857], [6.0, 87.4], [7.0, 71.22222222222223], [8.0, 73.375], [9.0, 93.69999999999999], [10.0, 65.5], [11.0, 57.166666666666664], [12.0, 70.23076923076923], [13.0, 59.769230769230774], [14.0, 56.0], [15.0, 59.1875], [16.0, 62.17647058823529], [17.0, 64.16666666666667], [18.0, 66.04761904761905], [19.0, 71.15789473684211], [20.0, 60.17391304347826], [21.0, 58.19047619047619], [22.0, 54.652173913043484], [23.0, 62.592592592592595], [24.0, 57.56], [25.0, 50.888888888888886], [26.0, 64.07142857142856], [27.0, 61.903225806451616], [28.0, 49.96551724137931], [29.0, 58.42424242424242], [30.0, 58.06896551724139], [31.0, 67.5151515151515], [32.0, 81.23529411764704], [33.0, 65.31428571428569], [34.0, 88.5], [35.0, 74.0], [36.0, 76.66666666666667], [37.0, 89.67346938775512], [38.0, 66.27586206896552], [39.0, 111.6078431372549], [41.0, 140.86666666666665], [40.0, 64.52941176470588], [42.0, 299.12765957446805], [43.0, 137.57142857142856], [44.0, 86.34090909090907], [45.0, 92.60416666666666], [46.0, 89.1578947368421], [47.0, 128.72916666666669], [48.0, 117.59615384615387], [49.0, 68.70588235294119], [50.0, 101.6346153846154], [51.0, 100.47916666666666], [52.0, 74.47368421052634], [53.0, 70.92000000000002], [54.0, 75.46551724137932], [55.0, 69.80327868852459], [56.0, 75.21153846153845], [57.0, 85.51612903225802], [58.0, 75.57627118644069], [59.0, 73.53968253968249], [60.0, 73.64615384615384], [61.0, 79.64406779661014], [62.0, 82.8030303030303], [63.0, 83.11290322580646], [64.0, 96.2666666666667], [65.0, 113.55223880597016], [66.0, 101.4090909090909], [67.0, 91.51470588235294], [68.0, 97.88059701492537], [69.0, 95.93103448275863], [70.0, 144.06521739130432], [71.0, 217.74285714285716], [72.0, 241.7260273972603], [73.0, 110.8030303030303], [74.0, 131.3768115942029], [75.0, 138.75806451612914], [76.0, 193.887323943662], [77.0, 177.57692307692304], [78.0, 117.00000000000004], [79.0, 156.72727272727278], [80.0, 187.38888888888897], [81.0, 141.97590361445785], [82.0, 137.88888888888889], [83.0, 150.11999999999998], [84.0, 155.42253521126761], [85.0, 153.09230769230766], [86.0, 217.16666666666663], [87.0, 228.37499999999994], [88.0, 171.4933333333334], [89.0, 180.4342105263158], [90.0, 178.98749999999995], [91.0, 194.42105263157887], [92.0, 207.26582278481027], [93.0, 202.22368421052641], [94.0, 216.18987341772154], [95.0, 222.48684210526318], [96.0, 258.71794871794884], [97.0, 245.36363636363637], [98.0, 224.9875], [99.0, 244.31506849315073], [100.0, 246.76288187319355], [1.0, 209.0]], "isOverall": false, "label": "GET Playlists with Deep Cursor", "isController": false}, {"data": [[99.15913147390168, 244.11399659301676]], "isOverall": false, "label": "GET Playlists with Deep Cursor-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 10526.1, "minX": 1.76985636E12, "maxY": 1561448.1666666667, "series": [{"data": [[1.76985762E12, 1548870.3333333333], [1.76985702E12, 1369546.3666666667], [1.76985732E12, 1554260.8333333333], [1.76985642E12, 1320852.1833333333], [1.76985672E12, 1288329.5], [1.76985774E12, 1501254.25], [1.76985714E12, 1424170.1], [1.76985744E12, 1554260.8333333333], [1.76985654E12, 1393444.25], [1.76985684E12, 1327859.8333333333], [1.76985786E12, 837324.3333333334], [1.76985726E12, 1545636.0333333334], [1.76985756E12, 1534136.3], [1.76985666E12, 1354632.65], [1.76985696E12, 904166.5333333333], [1.76985636E12, 484965.31666666665], [1.76985738E12, 1554620.2], [1.76985768E12, 1555159.25], [1.76985678E12, 1318336.6166666667], [1.76985708E12, 1382124.2], [1.76985648E12, 1365593.3333333333], [1.7698575E12, 1552643.6833333333], [1.7698578E12, 1414826.5666666667], [1.7698569E12, 1308813.4], [1.7698572E12, 1561448.1666666667], [1.7698566E12, 1378350.85]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.76985762E12, 33618.0], [1.76985702E12, 29725.8], [1.76985732E12, 33735.0], [1.76985642E12, 28668.9], [1.76985672E12, 27963.0], [1.76985774E12, 32584.5], [1.76985714E12, 30911.4], [1.76985744E12, 33735.0], [1.76985654E12, 30244.5], [1.76985684E12, 28821.0], [1.76985786E12, 18174.0], [1.76985726E12, 33547.8], [1.76985756E12, 33298.2], [1.76985666E12, 29402.1], [1.76985696E12, 19624.8], [1.76985636E12, 10526.1], [1.76985738E12, 33742.8], [1.76985768E12, 33754.5], [1.76985678E12, 28614.3], [1.76985708E12, 29998.8], [1.76985648E12, 29640.0], [1.7698575E12, 33699.9], [1.7698578E12, 30708.6], [1.7698569E12, 28407.6], [1.7698572E12, 33891.0], [1.7698566E12, 29916.9]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.76985786E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 188.47100115074792, "minX": 1.76985636E12, "maxY": 333.6701534170151, "series": [{"data": [[1.76985762E12, 193.74709976798155], [1.76985702E12, 282.4271844660193], [1.76985732E12, 191.19976878612638], [1.76985642E12, 314.02788736226444], [1.76985672E12, 333.6701534170151], [1.76985774E12, 215.05625374027517], [1.76985714E12, 254.15278829169847], [1.76985744E12, 190.90254335260076], [1.76985654E12, 271.2033526756936], [1.76985684E12, 309.3449255751028], [1.76985786E12, 191.17381974248894], [1.76985726E12, 195.30504533829364], [1.76985756E12, 198.86542515811593], [1.76985666E12, 292.5394614670375], [1.76985696E12, 216.71263910969785], [1.76985636E12, 237.84253427195267], [1.76985738E12, 191.3542533518267], [1.76985768E12, 190.96129404968232], [1.76985678E12, 315.03230203080204], [1.76985708E12, 277.93148725948873], [1.76985648E12, 287.7421052631585], [1.7698575E12, 192.0490683948609], [1.7698578E12, 260.2802895605785], [1.7698569E12, 320.2924217462939], [1.7698572E12, 188.47100115074792], [1.7698566E12, 279.76886976926147]], "isOverall": false, "label": "GET Playlists with Deep Cursor", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76985786E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 188.37836593785974, "minX": 1.76985636E12, "maxY": 333.55090655509144, "series": [{"data": [[1.76985762E12, 193.66032482598612], [1.76985702E12, 282.292311729206], [1.76985732E12, 191.1174566473986], [1.76985642E12, 313.8491361719494], [1.76985672E12, 333.55090655509144], [1.76985774E12, 214.94949132256158], [1.76985714E12, 254.03848094877625], [1.76985744E12, 190.82184971098192], [1.76985654E12, 271.085493230173], [1.76985684E12, 309.2269282814615], [1.76985786E12, 191.07532188841222], [1.76985726E12, 195.22250639386263], [1.76985756E12, 198.77980791754496], [1.76985666E12, 292.42923464650687], [1.76985696E12, 216.60612082670863], [1.76985636E12, 237.19525750277913], [1.76985738E12, 191.26803051317629], [1.76985768E12, 190.86701328711698], [1.76985678E12, 314.91345236472694], [1.76985708E12, 277.82124284971275], [1.76985648E12, 287.61986842105165], [1.7698575E12, 191.9625043397756], [1.7698578E12, 260.15201930403845], [1.7698569E12, 320.1773750686428], [1.7698572E12, 188.37836593785974], [1.7698566E12, 279.6480250293308]], "isOverall": false, "label": "GET Playlists with Deep Cursor", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76985786E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0023605150214592216, "minX": 1.76985636E12, "maxY": 0.02778806965542797, "series": [{"data": [[1.76985762E12, 0.003944315545243606], [1.76985702E12, 0.008396746260823923], [1.76985732E12, 0.008208092485549087], [1.76985642E12, 0.007345939327982585], [1.76985672E12, 0.007531380753138065], [1.76985774E12, 0.00598444045481748], [1.76985714E12, 0.006686853393893516], [1.76985744E12, 0.0034682080924855574], [1.76985654E12, 0.005673758865248252], [1.76985684E12, 0.022598105548037935], [1.76985786E12, 0.0023605150214592216], [1.76985726E12, 0.00418507323878168], [1.76985756E12, 0.004567814476458186], [1.76985666E12, 0.005173099880620776], [1.76985696E12, 0.0164944356120827], [1.76985636E12, 0.02778806965542797], [1.76985738E12, 0.004623208506703656], [1.76985768E12, 0.004159445407279041], [1.76985678E12, 0.005315524056153752], [1.76985708E12, 0.007800312012480543], [1.76985648E12, 0.0081578947368421], [1.7698575E12, 0.004629093854877901], [1.7698578E12, 0.005207010414020833], [1.7698569E12, 0.010296540362438211], [1.7698572E12, 0.0047180667433832065], [1.7698566E12, 0.006909138313127362]], "isOverall": false, "label": "GET Playlists with Deep Cursor", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76985786E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 33.0, "minX": 1.76985636E12, "maxY": 2922.0, "series": [{"data": [[1.76985762E12, 502.0], [1.76985702E12, 1575.0], [1.76985732E12, 563.0], [1.76985642E12, 1026.0], [1.76985672E12, 1357.0], [1.76985774E12, 1504.0], [1.76985714E12, 742.0], [1.76985744E12, 524.0], [1.76985654E12, 935.0], [1.76985684E12, 792.0], [1.76985786E12, 595.0], [1.76985726E12, 568.0], [1.76985756E12, 870.0], [1.76985666E12, 910.0], [1.76985696E12, 1354.0], [1.76985636E12, 946.0], [1.76985738E12, 567.0], [1.76985768E12, 582.0], [1.76985678E12, 945.0], [1.76985708E12, 1010.0], [1.76985648E12, 1092.0], [1.7698575E12, 664.0], [1.7698578E12, 2922.0], [1.7698569E12, 956.0], [1.7698572E12, 1590.0], [1.7698566E12, 896.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.76985762E12, 55.0], [1.76985702E12, 55.0], [1.76985732E12, 55.0], [1.76985642E12, 61.0], [1.76985672E12, 57.0], [1.76985774E12, 55.0], [1.76985714E12, 59.0], [1.76985744E12, 54.0], [1.76985654E12, 60.0], [1.76985684E12, 55.0], [1.76985786E12, 58.0], [1.76985726E12, 56.0], [1.76985756E12, 55.0], [1.76985666E12, 54.0], [1.76985696E12, 41.0], [1.76985636E12, 33.0], [1.76985738E12, 56.0], [1.76985768E12, 56.0], [1.76985678E12, 61.0], [1.76985708E12, 56.0], [1.76985648E12, 60.0], [1.7698575E12, 56.0], [1.7698578E12, 57.0], [1.7698569E12, 64.0], [1.7698572E12, 52.0], [1.7698566E12, 58.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.76985762E12, 229.0], [1.76985702E12, 457.6999999999998], [1.76985732E12, 226.0], [1.76985642E12, 418.0], [1.76985672E12, 495.0], [1.76985774E12, 288.0], [1.76985714E12, 302.0], [1.76985744E12, 223.0], [1.76985654E12, 314.0], [1.76985684E12, 372.0], [1.76985786E12, 245.0], [1.76985726E12, 235.0], [1.76985756E12, 250.0], [1.76985666E12, 344.0], [1.76985696E12, 349.0], [1.76985636E12, 455.0], [1.76985738E12, 224.0], [1.76985768E12, 223.0], [1.76985678E12, 371.0], [1.76985708E12, 371.0], [1.76985648E12, 360.0], [1.7698575E12, 233.0], [1.7698578E12, 394.5], [1.7698569E12, 380.0], [1.7698572E12, 304.0], [1.7698566E12, 339.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.76985762E12, 347.78999999999905], [1.76985702E12, 899.0], [1.76985732E12, 340.0], [1.76985642E12, 674.9599999999991], [1.76985672E12, 724.8699999999999], [1.76985774E12, 730.0], [1.76985714E12, 471.72999999999956], [1.76985744E12, 342.0], [1.76985654E12, 504.8799999999992], [1.76985684E12, 560.0], [1.76985786E12, 364.0], [1.76985726E12, 351.0], [1.76985756E12, 457.0], [1.76985666E12, 523.0], [1.76985696E12, 584.6800000000003], [1.76985636E12, 695.0], [1.76985738E12, 341.0], [1.76985768E12, 347.0], [1.76985678E12, 596.6199999999999], [1.76985708E12, 544.1399999999994], [1.76985648E12, 596.9899999999998], [1.7698575E12, 341.0], [1.7698578E12, 1548.0], [1.7698569E12, 591.0], [1.7698572E12, 725.0], [1.7698566E12, 517.2799999999997]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.76985762E12, 191.0], [1.76985702E12, 234.0], [1.76985732E12, 189.0], [1.76985642E12, 300.0], [1.76985672E12, 313.0], [1.76985774E12, 191.0], [1.76985714E12, 250.0], [1.76985744E12, 188.0], [1.76985654E12, 267.0], [1.76985684E12, 303.0], [1.76985786E12, 185.0], [1.76985726E12, 192.0], [1.76985756E12, 189.0], [1.76985666E12, 287.0], [1.76985696E12, 287.0], [1.76985636E12, 216.0], [1.76985738E12, 190.0], [1.76985768E12, 188.0], [1.76985678E12, 310.0], [1.76985708E12, 268.0], [1.76985648E12, 277.0], [1.7698575E12, 189.0], [1.7698578E12, 196.0], [1.7698569E12, 315.0], [1.7698572E12, 158.0], [1.7698566E12, 274.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.76985762E12, 255.0], [1.76985702E12, 582.0], [1.76985732E12, 275.4499999999989], [1.76985642E12, 475.0], [1.76985672E12, 598.0], [1.76985774E12, 347.0], [1.76985714E12, 392.0], [1.76985744E12, 272.0], [1.76985654E12, 415.1999999999998], [1.76985684E12, 435.0], [1.76985786E12, 289.0], [1.76985726E12, 283.84999999999945], [1.76985756E12, 305.0], [1.76985666E12, 435.0], [1.76985696E12, 383.0], [1.76985636E12, 518.0], [1.76985738E12, 255.0], [1.76985768E12, 280.0], [1.76985678E12, 458.09999999999945], [1.76985708E12, 418.0], [1.76985648E12, 446.9499999999998], [1.7698575E12, 278.0], [1.7698578E12, 589.0], [1.7698569E12, 441.75], [1.7698572E12, 355.0], [1.7698566E12, 417.0]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.76985786E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 39.5, "minX": 1.0, "maxY": 1557.0, "series": [{"data": [[3.0, 83.0], [8.0, 52.0], [9.0, 47.0], [12.0, 57.5], [18.0, 39.5], [21.0, 50.0], [23.0, 69.5], [25.0, 55.0], [28.0, 41.0], [30.0, 68.0], [34.0, 45.0], [37.0, 58.0], [38.0, 137.0], [40.0, 44.5], [41.0, 55.0], [45.0, 1557.0], [46.0, 44.0], [48.0, 227.0], [50.0, 80.0], [51.0, 55.0], [53.0, 323.0], [54.0, 54.0], [55.0, 749.0], [58.0, 82.5], [59.0, 55.0], [61.0, 904.0], [66.0, 174.0], [67.0, 63.0], [71.0, 409.0], [74.0, 461.0], [73.0, 608.0], [72.0, 69.5], [76.0, 70.0], [77.0, 526.0], [79.0, 249.0], [80.0, 116.5], [83.0, 584.0], [82.0, 68.0], [84.0, 358.5], [87.0, 376.0], [90.0, 562.0], [89.0, 443.0], [91.0, 64.0], [94.0, 636.5], [93.0, 641.5], [97.0, 80.5], [99.0, 99.0], [96.0, 473.0], [98.0, 496.5], [103.0, 159.0], [101.0, 101.5], [102.0, 358.0], [100.0, 484.5], [107.0, 351.0], [106.0, 324.0], [104.0, 361.5], [105.0, 317.5], [109.0, 355.0], [111.0, 328.5], [108.0, 396.0], [110.0, 375.0], [112.0, 374.0], [113.0, 369.5], [115.0, 361.0], [114.0, 361.0], [117.0, 340.0], [116.0, 331.0], [119.0, 324.0], [118.0, 336.0], [120.0, 316.0], [123.0, 314.0], [122.0, 311.0], [121.0, 315.0], [125.0, 295.0], [124.0, 298.0], [126.0, 294.0], [127.0, 287.0], [129.0, 274.0], [131.0, 262.0], [130.0, 266.0], [128.0, 277.0], [132.0, 259.0], [133.0, 259.0], [134.0, 243.0], [135.0, 246.0], [136.0, 235.0], [138.0, 209.0], [140.0, 203.0], [141.0, 200.0], [142.0, 194.0], [139.0, 209.0], [143.0, 194.0], [137.0, 215.0], [146.0, 183.0], [144.0, 190.0], [147.0, 183.0], [150.0, 177.0], [145.0, 187.0], [148.0, 181.0], [149.0, 177.0], [151.0, 176.0], [154.0, 148.0], [155.0, 139.0], [157.0, 138.0], [156.0, 142.0], [159.0, 133.0], [153.0, 154.0], [152.0, 157.5], [160.0, 131.0], [1.0, 78.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 160.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 39.0, "minX": 1.0, "maxY": 1557.0, "series": [{"data": [[3.0, 83.0], [8.0, 52.0], [9.0, 46.0], [12.0, 57.5], [18.0, 39.0], [21.0, 50.0], [23.0, 69.5], [25.0, 55.0], [28.0, 41.0], [30.0, 68.0], [34.0, 45.0], [37.0, 58.0], [38.0, 134.0], [40.0, 44.0], [41.0, 55.0], [45.0, 1557.0], [46.0, 43.0], [48.0, 227.0], [50.0, 79.5], [51.0, 55.0], [53.0, 323.0], [54.0, 53.0], [55.0, 747.0], [58.0, 79.5], [59.0, 55.0], [61.0, 904.0], [66.0, 169.0], [67.0, 63.0], [71.0, 409.0], [74.0, 461.0], [73.0, 608.0], [72.0, 69.0], [76.0, 70.0], [77.0, 526.0], [79.0, 249.0], [80.0, 115.5], [83.0, 583.0], [82.0, 68.0], [84.0, 358.5], [87.0, 376.0], [90.0, 561.5], [89.0, 443.0], [91.0, 64.0], [94.0, 636.5], [93.0, 641.5], [97.0, 80.0], [99.0, 97.0], [96.0, 473.0], [98.0, 496.5], [103.0, 159.0], [101.0, 100.5], [102.0, 358.0], [100.0, 484.0], [107.0, 351.0], [106.0, 324.0], [104.0, 361.5], [105.0, 317.0], [109.0, 354.0], [111.0, 328.5], [108.0, 396.0], [110.0, 374.5], [112.0, 373.5], [113.0, 369.0], [115.0, 361.0], [114.0, 361.0], [117.0, 340.0], [116.0, 331.0], [119.0, 324.0], [118.0, 336.0], [120.0, 316.0], [123.0, 314.0], [122.0, 311.0], [121.0, 315.0], [125.0, 295.0], [124.0, 298.0], [126.0, 294.0], [127.0, 287.0], [129.0, 274.0], [131.0, 261.0], [130.0, 266.0], [128.0, 277.0], [132.0, 259.0], [133.0, 259.0], [134.0, 243.0], [135.0, 246.0], [136.0, 235.0], [138.0, 209.0], [140.0, 203.0], [141.0, 200.0], [142.0, 194.0], [139.0, 209.0], [143.0, 194.0], [137.0, 215.0], [146.0, 183.0], [144.0, 190.0], [147.0, 183.0], [150.0, 177.0], [145.0, 187.0], [148.0, 181.0], [149.0, 177.0], [151.0, 175.0], [154.0, 147.0], [155.0, 139.0], [157.0, 138.0], [156.0, 142.0], [159.0, 133.0], [153.0, 154.0], [152.0, 157.0], [160.0, 131.0], [1.0, 77.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 160.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 45.71666666666667, "minX": 1.76985636E12, "maxY": 144.61666666666667, "series": [{"data": [[1.76985762E12, 143.61666666666667], [1.76985702E12, 127.25], [1.76985732E12, 144.16666666666666], [1.76985642E12, 122.58333333333333], [1.76985672E12, 119.43333333333334], [1.76985774E12, 139.43333333333334], [1.76985714E12, 132.18333333333334], [1.76985744E12, 144.25], [1.76985654E12, 129.28333333333333], [1.76985684E12, 123.11666666666666], [1.76985786E12, 77.23333333333333], [1.76985726E12, 143.35], [1.76985756E12, 142.33333333333334], [1.76985666E12, 125.73333333333333], [1.76985696E12, 83.56666666666666], [1.76985636E12, 45.71666666666667], [1.76985738E12, 144.2], [1.76985768E12, 144.25], [1.76985678E12, 122.35], [1.76985708E12, 128.18333333333334], [1.76985648E12, 126.43333333333334], [1.7698575E12, 143.95], [1.7698578E12, 131.05], [1.7698569E12, 121.48333333333333], [1.7698572E12, 144.61666666666667], [1.7698566E12, 127.81666666666666]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.76985786E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 44.983333333333334, "minX": 1.76985636E12, "maxY": 144.83333333333334, "series": [{"data": [[1.76985762E12, 143.66666666666666], [1.76985702E12, 127.03333333333333], [1.76985732E12, 144.16666666666666], [1.76985642E12, 122.51666666666667], [1.76985672E12, 119.5], [1.76985774E12, 139.25], [1.76985714E12, 132.1], [1.76985744E12, 144.16666666666666], [1.76985654E12, 129.25], [1.76985684E12, 123.16666666666667], [1.76985786E12, 77.66666666666667], [1.76985726E12, 143.36666666666667], [1.76985756E12, 142.3], [1.76985666E12, 125.65], [1.76985696E12, 83.86666666666666], [1.76985636E12, 44.983333333333334], [1.76985738E12, 144.2], [1.76985768E12, 144.25], [1.76985678E12, 122.28333333333333], [1.76985708E12, 128.2], [1.76985648E12, 126.66666666666667], [1.7698575E12, 144.01666666666668], [1.7698578E12, 131.23333333333332], [1.7698569E12, 121.4], [1.7698572E12, 144.83333333333334], [1.7698566E12, 127.85]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.76985786E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 44.983333333333334, "minX": 1.76985636E12, "maxY": 144.83333333333334, "series": [{"data": [[1.76985762E12, 143.66666666666666], [1.76985702E12, 127.03333333333333], [1.76985732E12, 144.16666666666666], [1.76985642E12, 122.51666666666667], [1.76985672E12, 119.5], [1.76985774E12, 139.25], [1.76985714E12, 132.1], [1.76985744E12, 144.16666666666666], [1.76985654E12, 129.25], [1.76985684E12, 123.16666666666667], [1.76985786E12, 77.66666666666667], [1.76985726E12, 143.36666666666667], [1.76985756E12, 142.3], [1.76985666E12, 125.65], [1.76985696E12, 83.86666666666666], [1.76985636E12, 44.983333333333334], [1.76985738E12, 144.2], [1.76985768E12, 144.25], [1.76985678E12, 122.28333333333333], [1.76985708E12, 128.2], [1.76985648E12, 126.66666666666667], [1.7698575E12, 144.01666666666668], [1.7698578E12, 131.23333333333332], [1.7698569E12, 121.4], [1.7698572E12, 144.83333333333334], [1.7698566E12, 127.85]], "isOverall": false, "label": "GET Playlists with Deep Cursor-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76985786E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 44.983333333333334, "minX": 1.76985636E12, "maxY": 144.83333333333334, "series": [{"data": [[1.76985762E12, 143.66666666666666], [1.76985702E12, 127.03333333333333], [1.76985732E12, 144.16666666666666], [1.76985642E12, 122.51666666666667], [1.76985672E12, 119.5], [1.76985774E12, 139.25], [1.76985714E12, 132.1], [1.76985744E12, 144.16666666666666], [1.76985654E12, 129.25], [1.76985684E12, 123.16666666666667], [1.76985786E12, 77.66666666666667], [1.76985726E12, 143.36666666666667], [1.76985756E12, 142.3], [1.76985666E12, 125.65], [1.76985696E12, 83.86666666666666], [1.76985636E12, 44.983333333333334], [1.76985738E12, 144.2], [1.76985768E12, 144.25], [1.76985678E12, 122.28333333333333], [1.76985708E12, 128.2], [1.76985648E12, 126.66666666666667], [1.7698575E12, 144.01666666666668], [1.7698578E12, 131.23333333333332], [1.7698569E12, 121.4], [1.7698572E12, 144.83333333333334], [1.7698566E12, 127.85]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76985786E12, "title": "Total Transactions Per Second"}},
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

