import { Serie } from './serie.js';

import { data } from './data.js';

const averageSeasonsElm: HTMLElement = document.getElementById("average-seasons")!;
let seriesTbody: HTMLElement = document.getElementById('series')!;

renderSeriesInTable(data);

averageSeasonsElm.innerHTML = `Average seasons :${getAverageSeasons(data)}`


function renderSeriesInTable(series: Serie[]): void {
  console.log('Desplegando Series');
  series.forEach((serie) => {
    let trElement = document.createElement("tr");
    trElement.innerHTML = `<td>${serie.id}</td>
                           <td class="text-primary">${serie.name}</td>
                           <td>${serie.canal}</td>
                           <td>${serie.seasons}</td>`;
    seriesTbody.appendChild(trElement);
  });
}


function getAverageSeasons(series: Serie[]): string {
  let averageseasons: number = 0;
  series.forEach((serie) => averageseasons = averageseasons + serie.seasons);
  averageseasons= (averageseasons/series.length);
  let averageseasons2 : string = averageseasons.toFixed(1);
  return averageseasons2;
}