import { data } from './data.js';
var averageSeasonsElm = document.getElementById("average-seasons");
var seriesTbody = document.getElementById('series');
renderSeriesInTable(data);
averageSeasonsElm.innerHTML = "Average seasons :".concat(getAverageSeasons(data));
function renderSeriesInTable(series) {
    console.log('Desplegando Series');
    series.forEach(function (serie) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>".concat(serie.id, "</td>\n                           <td class=\"text-primary\">").concat(serie.name, "</td>\n                           <td>").concat(serie.canal, "</td>\n                           <td>").concat(serie.seasons, "</td>");
        seriesTbody.appendChild(trElement);
    });
}
function getAverageSeasons(series) {
    var averageseasons = 0;
    series.forEach(function (serie) { return averageseasons = averageseasons + serie.seasons; });
    averageseasons = (averageseasons / series.length);
    var averageseasons2 = averageseasons.toFixed(1);
    return averageseasons2;
}
