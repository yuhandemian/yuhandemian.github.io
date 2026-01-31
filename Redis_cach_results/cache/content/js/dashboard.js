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

    var data = {"OkPercent": 99.78791738352139, "KoPercent": 0.2120826164786162};
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
    createTable($("#apdexTable"), {"supportsControllersDiscrimination": true, "overall": {"data": [0.9978791738352139, 500, 1500, "Total"], "isController": false}, "titles": ["Apdex", "T (Toleration threshold)", "F (Frustration threshold)", "Label"], "items": [{"data": [0.9978791738352139, 500, 1500, "GET Playlist Detail (Cached)"], "isController": false}]}, function(index, item){
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
    createTable($("#statisticsTable"), {"supportsControllersDiscrimination": true, "overall": {"data": ["Total", 344677, 731, 0.2120826164786162, 1.520501803137396, 0, 206, 1.0, 3.0, 5.0, 7.0, 383.25166314745445, 380.0744952043089, 71.88662038457818], "isController": false}, "titles": ["Label", "#Samples", "FAIL", "Error %", "Average", "Min", "Max", "Median", "90th pct", "95th pct", "99th pct", "Transactions/s", "Received", "Sent"], "items": [{"data": ["GET Playlist Detail (Cached)", 344677, 731, 0.2120826164786162, 1.520501803137396, 0, 206, 1.0, 3.0, 5.0, 7.0, 383.25166314745445, 380.0744952043089, 71.88662038457818], "isController": false}]}, function(index, item){
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
    createTable($("#errorsTable"), {"supportsControllersDiscrimination": false, "titles": ["Type of error", "Number of errors", "% in errors", "% in all samples"], "items": [{"data": ["The operation lasted too long: It took 157 milliseconds, but should not have lasted longer than 100 milliseconds.", 4, 0.5471956224350205, 0.0011605067933166413], "isController": false}, {"data": ["The operation lasted too long: It took 199 milliseconds, but should not have lasted longer than 100 milliseconds.", 1, 0.13679890560875513, 2.901266983291603E-4], "isController": false}, {"data": ["The operation lasted too long: It took 140 milliseconds, but should not have lasted longer than 100 milliseconds.", 1, 0.13679890560875513, 2.901266983291603E-4], "isController": false}, {"data": ["The operation lasted too long: It took 193 milliseconds, but should not have lasted longer than 100 milliseconds.", 1, 0.13679890560875513, 2.901266983291603E-4], "isController": false}, {"data": ["The operation lasted too long: It took 205 milliseconds, but should not have lasted longer than 100 milliseconds.", 2, 0.27359781121751026, 5.802533966583206E-4], "isController": false}, {"data": ["The operation lasted too long: It took 196 milliseconds, but should not have lasted longer than 100 milliseconds.", 1, 0.13679890560875513, 2.901266983291603E-4], "isController": false}, {"data": ["The operation lasted too long: It took 139 milliseconds, but should not have lasted longer than 100 milliseconds.", 2, 0.27359781121751026, 5.802533966583206E-4], "isController": false}, {"data": ["The operation lasted too long: It took 168 milliseconds, but should not have lasted longer than 100 milliseconds.", 1, 0.13679890560875513, 2.901266983291603E-4], "isController": false}, {"data": ["The operation lasted too long: It took 167 milliseconds, but should not have lasted longer than 100 milliseconds.", 1, 0.13679890560875513, 2.901266983291603E-4], "isController": false}, {"data": ["The operation lasted too long: It took 161 milliseconds, but should not have lasted longer than 100 milliseconds.", 3, 0.4103967168262654, 8.70380094987481E-4], "isController": false}, {"data": ["The operation lasted too long: It took 188 milliseconds, but should not have lasted longer than 100 milliseconds.", 1, 0.13679890560875513, 2.901266983291603E-4], "isController": false}, {"data": ["The operation lasted too long: It took 123 milliseconds, but should not have lasted longer than 100 milliseconds.", 1, 0.13679890560875513, 2.901266983291603E-4], "isController": false}, {"data": ["The operation lasted too long: It took 141 milliseconds, but should not have lasted longer than 100 milliseconds.", 3, 0.4103967168262654, 8.70380094987481E-4], "isController": false}, {"data": ["The operation lasted too long: It took 125 milliseconds, but should not have lasted longer than 100 milliseconds.", 1, 0.13679890560875513, 2.901266983291603E-4], "isController": false}, {"data": ["The operation lasted too long: It took 180 milliseconds, but should not have lasted longer than 100 milliseconds.", 2, 0.27359781121751026, 5.802533966583206E-4], "isController": false}, {"data": ["The operation lasted too long: It took 170 milliseconds, but should not have lasted longer than 100 milliseconds.", 1, 0.13679890560875513, 2.901266983291603E-4], "isController": false}, {"data": ["The operation lasted too long: It took 103 milliseconds, but should not have lasted longer than 100 milliseconds.", 1, 0.13679890560875513, 2.901266983291603E-4], "isController": false}, {"data": ["The operation lasted too long: It took 194 milliseconds, but should not have lasted longer than 100 milliseconds.", 2, 0.27359781121751026, 5.802533966583206E-4], "isController": false}, {"data": ["The operation lasted too long: It took 159 milliseconds, but should not have lasted longer than 100 milliseconds.", 1, 0.13679890560875513, 2.901266983291603E-4], "isController": false}, {"data": ["The operation lasted too long: It took 153 milliseconds, but should not have lasted longer than 100 milliseconds.", 1, 0.13679890560875513, 2.901266983291603E-4], "isController": false}, {"data": ["The operation lasted too long: It took 192 milliseconds, but should not have lasted longer than 100 milliseconds.", 3, 0.4103967168262654, 8.70380094987481E-4], "isController": false}, {"data": ["The operation lasted too long: It took 206 milliseconds, but should not have lasted longer than 100 milliseconds.", 2, 0.27359781121751026, 5.802533966583206E-4], "isController": false}, {"data": ["400", 689, 94.25444596443228, 0.19989729514879148], "isController": false}, {"data": ["The operation lasted too long: It took 108 milliseconds, but should not have lasted longer than 100 milliseconds.", 1, 0.13679890560875513, 2.901266983291603E-4], "isController": false}, {"data": ["The operation lasted too long: It took 160 milliseconds, but should not have lasted longer than 100 milliseconds.", 2, 0.27359781121751026, 5.802533966583206E-4], "isController": false}, {"data": ["The operation lasted too long: It took 163 milliseconds, but should not have lasted longer than 100 milliseconds.", 1, 0.13679890560875513, 2.901266983291603E-4], "isController": false}, {"data": ["The operation lasted too long: It took 119 milliseconds, but should not have lasted longer than 100 milliseconds.", 1, 0.13679890560875513, 2.901266983291603E-4], "isController": false}, {"data": ["The operation lasted too long: It took 166 milliseconds, but should not have lasted longer than 100 milliseconds.", 1, 0.13679890560875513, 2.901266983291603E-4], "isController": false}]}, function(index, item){
        switch(index){
            case 2:
            case 3:
                item = item.toFixed(2) + '%';
                break;
        }
        return item;
    }, [[1, 1]]);

        // Create top5 errors by sampler
    createTable($("#top5ErrorsBySamplerTable"), {"supportsControllersDiscrimination": false, "overall": {"data": ["Total", 344677, 731, "400", 689, "The operation lasted too long: It took 157 milliseconds, but should not have lasted longer than 100 milliseconds.", 4, "The operation lasted too long: It took 161 milliseconds, but should not have lasted longer than 100 milliseconds.", 3, "The operation lasted too long: It took 141 milliseconds, but should not have lasted longer than 100 milliseconds.", 3, "The operation lasted too long: It took 192 milliseconds, but should not have lasted longer than 100 milliseconds.", 3], "isController": false}, "titles": ["Sample", "#Samples", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors"], "items": [{"data": ["GET Playlist Detail (Cached)", 344677, 731, "400", 689, "The operation lasted too long: It took 157 milliseconds, but should not have lasted longer than 100 milliseconds.", 4, "The operation lasted too long: It took 161 milliseconds, but should not have lasted longer than 100 milliseconds.", 3, "The operation lasted too long: It took 141 milliseconds, but should not have lasted longer than 100 milliseconds.", 3, "The operation lasted too long: It took 192 milliseconds, but should not have lasted longer than 100 milliseconds.", 3], "isController": false}]}, function(index, item){
        return item;
    }, [[0, 0]], 0);

});
