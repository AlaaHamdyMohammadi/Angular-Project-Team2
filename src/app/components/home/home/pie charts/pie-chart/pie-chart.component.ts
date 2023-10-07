import { Component } from '@angular/core';
import  { Chart } from 'chart.js';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent {
  public chart: any;

  ngOnInit(): void {
    this.createChart();
  }
  createChart(){

    this.chart = new Chart("MyChartpie", {
      type: 'pie', //this denotes tha type of chart

      data: {// values on X-Axis
        labels: ['2022-05-10', '2022-05-11',
								  ],
	       datasets: [
          {
            label: "Sales",
            data: ['467','576',],
            backgroundColor: '#ee6666'
          },
          {
            label: "Profit",
            data: ['542', '555',
									],
            backgroundColor: '#f796de'
          }
        ]
      },
      options: {
        aspectRatio:2.5
      }

    });
  }


}
