import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';
@Component({
  selector: 'app-performance-chart',
  templateUrl: './performance-chart.component.html',
  styleUrls: ['./performance-chart.component.css']
})
export class PerformanceChartComponent implements OnInit {

  public lineChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Expenses' },
    { data: [40, 55, 56, 81, 80, 59, 65], label: 'Net worth' },
  ];
  public lineChartLabels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public lineChartOptions: (ChartOptions) = {
    responsive: true,
  };
  public lineChartColors: Color[] = [
    {
      borderColor: 'rgb(244,137,166)',
      borderWidth: 1.5,
      backgroundColor: 'rgb(244,137,166,0.3)',
      pointBorderColor: 'rgb(244,137,166)'
    },
    {
      borderColor: 'rgb(84,126,219)',
      borderWidth: 1.5,
      backgroundColor: 'rgb(84,126,219,0.3)',
      pointBorderColor: 'rgb(84,126,219)'
    },
  ];
  public lineChartLegend = true;
  public lineChartType = 'line';
  public lineChartPlugins = [];

  constructor() { }

  ngOnInit(): void {
  }

}
