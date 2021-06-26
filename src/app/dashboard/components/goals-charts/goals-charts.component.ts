import { Component, Input, OnInit } from '@angular/core';
import { ChartOptions, ChartType } from 'chart.js';
import { Color, Label, MultiDataSet } from 'ng2-charts';

@Component({
  selector: 'app-goals-charts',
  templateUrl: './goals-charts.component.html',
  styleUrls: ['./goals-charts.component.css']
})
export class GoalsChartsComponent implements OnInit {

  @Input() title = '';
  @Input() percentage = '';
  @Input() amount1 = '';
  @Input() amount2 = '';

  public doughnutChartLabels: Label[] = ['Download Sales'];
  public doughnutChartData: MultiDataSet = [
    [350, 450],
  ];
  public doughnutChartType: ChartType = 'doughnut';

  constructor() { }

  ngOnInit(): void {
  }

  public chartOptions: (ChartOptions) = {
    responsive: true,
    cutoutPercentage: 90,
    maintainAspectRatio: true,
    // rotation: (-0.5 * Math.PI) - (180 / 180 * Math.PI),
    legend: {
      display: false,
    },

  };

  public chartColors: Color[] = [
    {
      backgroundColor: ['#74b35a', '#e0e0e0'],
    }
  ];

  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

}
