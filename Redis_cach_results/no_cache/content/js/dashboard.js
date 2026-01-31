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

    var data = {"OkPercent": 99.85643108244702, "KoPercent": 0.14356891755297738};
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
    createTable($("#apdexTable"), {"supportsControllersDiscrimination": true, "overall": {"data": [0.9985643108244703, 500, 1500, "Total"], "isController": false}, "titles": ["Apdex", "T (Toleration threshold)", "F (Frustration threshold)", "Label"], "items": [{"data": [0.9985643108244703, 500, 1500, "GET Playlist Detail (Cached)"], "isController": false}]}, function(index, item){
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
    createTable($("#statisticsTable"), {"supportsControllersDiscrimination": true, "overall": {"data": ["Total", 223586, 321, 0.14356891755297738, 2.8309330637875045, 0, 200, 2.0, 4.0, 5.0, 9.0, 373.6559409332625, 350.24730333004527, 70.05134957401224], "isController": false}, "titles": ["Label", "#Samples", "FAIL", "Error %", "Average", "Min", "Max", "Median", "90th pct", "95th pct", "99th pct", "Transactions/s", "Received", "Sent"], "items": [{"data": ["GET Playlist Detail (Cached)", 223586, 321, 0.14356891755297738, 2.8309330637875045, 0, 200, 2.0, 4.0, 5.0, 9.0, 373.6559409332625, 350.24730333004527, 70.05134957401224], "isController": false}]}, function(index, item){
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
    createTable($("#errorsTable"), {"supportsControllersDiscrimination": false, "titles": ["Type of error", "Number of errors", "% in errors", "% in all samples"], "items": [{"data": ["The operation lasted too long: It took 178 milliseconds, but should not have lasted longer than 100 milliseconds.", 1, 0.3115264797507788, 4.472551948690884E-4], "isController": false}, {"data": ["The operation lasted too long: It took 136 milliseconds, but should not have lasted longer than 100 milliseconds.", 1, 0.3115264797507788, 4.472551948690884E-4], "isController": false}, {"data": ["The operation lasted too long: It took 140 milliseconds, but should not have lasted longer than 100 milliseconds.", 1, 0.3115264797507788, 4.472551948690884E-4], "isController": false}, {"data": ["The operation lasted too long: It took 172 milliseconds, but should not have lasted longer than 100 milliseconds.", 2, 0.6230529595015576, 8.945103897381768E-4], "isController": false}, {"data": ["The operation lasted too long: It took 167 milliseconds, but should not have lasted longer than 100 milliseconds.", 1, 0.3115264797507788, 4.472551948690884E-4], "isController": false}, {"data": ["The operation lasted too long: It took 161 milliseconds, but should not have lasted longer than 100 milliseconds.", 1, 0.3115264797507788, 4.472551948690884E-4], "isController": false}, {"data": ["The operation lasted too long: It took 141 milliseconds, but should not have lasted longer than 100 milliseconds.", 4, 1.2461059190031152, 0.0017890207794763536], "isController": false}, {"data": ["The operation lasted too long: It took 189 milliseconds, but should not have lasted longer than 100 milliseconds.", 1, 0.3115264797507788, 4.472551948690884E-4], "isController": false}, {"data": ["The operation lasted too long: It took 130 milliseconds, but should not have lasted longer than 100 milliseconds.", 2, 0.6230529595015576, 8.945103897381768E-4], "isController": false}, {"data": ["The operation lasted too long: It took 109 milliseconds, but should not have lasted longer than 100 milliseconds.", 3, 0.9345794392523364, 0.0013417655846072651], "isController": false}, {"data": ["The operation lasted too long: It took 110 milliseconds, but should not have lasted longer than 100 milliseconds.", 1, 0.3115264797507788, 4.472551948690884E-4], "isController": false}, {"data": ["The operation lasted too long: It took 184 milliseconds, but should not have lasted longer than 100 milliseconds.", 2, 0.6230529595015576, 8.945103897381768E-4], "isController": false}, {"data": ["The operation lasted too long: It took 200 milliseconds, but should not have lasted longer than 100 milliseconds.", 1, 0.3115264797507788, 4.472551948690884E-4], "isController": false}, {"data": ["The operation lasted too long: It took 181 milliseconds, but should not have lasted longer than 100 milliseconds.", 1, 0.3115264797507788, 4.472551948690884E-4], "isController": false}, {"data": ["The operation lasted too long: It took 120 milliseconds, but should not have lasted longer than 100 milliseconds.", 1, 0.3115264797507788, 4.472551948690884E-4], "isController": false}, {"data": ["The operation lasted too long: It took 138 milliseconds, but should not have lasted longer than 100 milliseconds.", 2, 0.6230529595015576, 8.945103897381768E-4], "isController": false}, {"data": ["The operation lasted too long: It took 135 milliseconds, but should not have lasted longer than 100 milliseconds.", 4, 1.2461059190031152, 0.0017890207794763536], "isController": false}, {"data": ["The operation lasted too long: It took 171 milliseconds, but should not have lasted longer than 100 milliseconds.", 3, 0.9345794392523364, 0.0013417655846072651], "isController": false}, {"data": ["The operation lasted too long: It took 174 milliseconds, but should not have lasted longer than 100 milliseconds.", 2, 0.6230529595015576, 8.945103897381768E-4], "isController": false}, {"data": ["The operation lasted too long: It took 132 milliseconds, but should not have lasted longer than 100 milliseconds.", 2, 0.6230529595015576, 8.945103897381768E-4], "isController": false}, {"data": ["400", 224, 69.78193146417445, 0.1001851636506758], "isController": false}, {"data": ["The operation lasted too long: It took 158 milliseconds, but should not have lasted longer than 100 milliseconds.", 1, 0.3115264797507788, 4.472551948690884E-4], "isController": false}, {"data": ["The operation lasted too long: It took 116 milliseconds, but should not have lasted longer than 100 milliseconds.", 3, 0.9345794392523364, 0.0013417655846072651], "isController": false}, {"data": ["The operation lasted too long: It took 113 milliseconds, but should not have lasted longer than 100 milliseconds.", 2, 0.6230529595015576, 8.945103897381768E-4], "isController": false}, {"data": ["The operation lasted too long: It took 145 milliseconds, but should not have lasted longer than 100 milliseconds.", 3, 0.9345794392523364, 0.0013417655846072651], "isController": false}, {"data": ["The operation lasted too long: It took 119 milliseconds, but should not have lasted longer than 100 milliseconds.", 1, 0.3115264797507788, 4.472551948690884E-4], "isController": false}, {"data": ["The operation lasted too long: It took 142 milliseconds, but should not have lasted longer than 100 milliseconds.", 2, 0.6230529595015576, 8.945103897381768E-4], "isController": false}, {"data": ["The operation lasted too long: It took 175 milliseconds, but should not have lasted longer than 100 milliseconds.", 2, 0.6230529595015576, 8.945103897381768E-4], "isController": false}, {"data": ["The operation lasted too long: It took 118 milliseconds, but should not have lasted longer than 100 milliseconds.", 1, 0.3115264797507788, 4.472551948690884E-4], "isController": false}, {"data": ["The operation lasted too long: It took 143 milliseconds, but should not have lasted longer than 100 milliseconds.", 2, 0.6230529595015576, 8.945103897381768E-4], "isController": false}, {"data": ["The operation lasted too long: It took 139 milliseconds, but should not have lasted longer than 100 milliseconds.", 3, 0.9345794392523364, 0.0013417655846072651], "isController": false}, {"data": ["The operation lasted too long: It took 164 milliseconds, but should not have lasted longer than 100 milliseconds.", 2, 0.6230529595015576, 8.945103897381768E-4], "isController": false}, {"data": ["The operation lasted too long: It took 129 milliseconds, but should not have lasted longer than 100 milliseconds.", 1, 0.3115264797507788, 4.472551948690884E-4], "isController": false}, {"data": ["The operation lasted too long: It took 111 milliseconds, but should not have lasted longer than 100 milliseconds.", 1, 0.3115264797507788, 4.472551948690884E-4], "isController": false}, {"data": ["The operation lasted too long: It took 123 milliseconds, but should not have lasted longer than 100 milliseconds.", 2, 0.6230529595015576, 8.945103897381768E-4], "isController": false}, {"data": ["The operation lasted too long: It took 144 milliseconds, but should not have lasted longer than 100 milliseconds.", 1, 0.3115264797507788, 4.472551948690884E-4], "isController": false}, {"data": ["The operation lasted too long: It took 117 milliseconds, but should not have lasted longer than 100 milliseconds.", 3, 0.9345794392523364, 0.0013417655846072651], "isController": false}, {"data": ["The operation lasted too long: It took 165 milliseconds, but should not have lasted longer than 100 milliseconds.", 2, 0.6230529595015576, 8.945103897381768E-4], "isController": false}, {"data": ["The operation lasted too long: It took 107 milliseconds, but should not have lasted longer than 100 milliseconds.", 4, 1.2461059190031152, 0.0017890207794763536], "isController": false}, {"data": ["The operation lasted too long: It took 133 milliseconds, but should not have lasted longer than 100 milliseconds.", 1, 0.3115264797507788, 4.472551948690884E-4], "isController": false}, {"data": ["The operation lasted too long: It took 128 milliseconds, but should not have lasted longer than 100 milliseconds.", 3, 0.9345794392523364, 0.0013417655846072651], "isController": false}, {"data": ["The operation lasted too long: It took 170 milliseconds, but should not have lasted longer than 100 milliseconds.", 1, 0.3115264797507788, 4.472551948690884E-4], "isController": false}, {"data": ["The operation lasted too long: It took 124 milliseconds, but should not have lasted longer than 100 milliseconds.", 1, 0.3115264797507788, 4.472551948690884E-4], "isController": false}, {"data": ["The operation lasted too long: It took 131 milliseconds, but should not have lasted longer than 100 milliseconds.", 1, 0.3115264797507788, 4.472551948690884E-4], "isController": false}, {"data": ["The operation lasted too long: It took 134 milliseconds, but should not have lasted longer than 100 milliseconds.", 2, 0.6230529595015576, 8.945103897381768E-4], "isController": false}, {"data": ["The operation lasted too long: It took 127 milliseconds, but should not have lasted longer than 100 milliseconds.", 2, 0.6230529595015576, 8.945103897381768E-4], "isController": false}, {"data": ["The operation lasted too long: It took 176 milliseconds, but should not have lasted longer than 100 milliseconds.", 1, 0.3115264797507788, 4.472551948690884E-4], "isController": false}, {"data": ["The operation lasted too long: It took 159 milliseconds, but should not have lasted longer than 100 milliseconds.", 1, 0.3115264797507788, 4.472551948690884E-4], "isController": false}, {"data": ["The operation lasted too long: It took 173 milliseconds, but should not have lasted longer than 100 milliseconds.", 2, 0.6230529595015576, 8.945103897381768E-4], "isController": false}, {"data": ["The operation lasted too long: It took 105 milliseconds, but should not have lasted longer than 100 milliseconds.", 3, 0.9345794392523364, 0.0013417655846072651], "isController": false}, {"data": ["The operation lasted too long: It took 108 milliseconds, but should not have lasted longer than 100 milliseconds.", 4, 1.2461059190031152, 0.0017890207794763536], "isController": false}, {"data": ["The operation lasted too long: It took 121 milliseconds, but should not have lasted longer than 100 milliseconds.", 1, 0.3115264797507788, 4.472551948690884E-4], "isController": false}, {"data": ["The operation lasted too long: It took 137 milliseconds, but should not have lasted longer than 100 milliseconds.", 1, 0.3115264797507788, 4.472551948690884E-4], "isController": false}, {"data": ["The operation lasted too long: It took 166 milliseconds, but should not have lasted longer than 100 milliseconds.", 1, 0.3115264797507788, 4.472551948690884E-4], "isController": false}]}, function(index, item){
        switch(index){
            case 2:
            case 3:
                item = item.toFixed(2) + '%';
                break;
        }
        return item;
    }, [[1, 1]]);

        // Create top5 errors by sampler
    createTable($("#top5ErrorsBySamplerTable"), {"supportsControllersDiscrimination": false, "overall": {"data": ["Total", 223586, 321, "400", 224, "The operation lasted too long: It took 141 milliseconds, but should not have lasted longer than 100 milliseconds.", 4, "The operation lasted too long: It took 135 milliseconds, but should not have lasted longer than 100 milliseconds.", 4, "The operation lasted too long: It took 107 milliseconds, but should not have lasted longer than 100 milliseconds.", 4, "The operation lasted too long: It took 108 milliseconds, but should not have lasted longer than 100 milliseconds.", 4], "isController": false}, "titles": ["Sample", "#Samples", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors"], "items": [{"data": ["GET Playlist Detail (Cached)", 223586, 321, "400", 224, "The operation lasted too long: It took 141 milliseconds, but should not have lasted longer than 100 milliseconds.", 4, "The operation lasted too long: It took 135 milliseconds, but should not have lasted longer than 100 milliseconds.", 4, "The operation lasted too long: It took 107 milliseconds, but should not have lasted longer than 100 milliseconds.", 4, "The operation lasted too long: It took 108 milliseconds, but should not have lasted longer than 100 milliseconds.", 4], "isController": false}]}, function(index, item){
        return item;
    }, [[0, 0]], 0);

});
