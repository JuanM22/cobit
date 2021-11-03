import { Component, OnInit } from '@angular/core';
import { ReportService } from '../services/report.service';
import { Report } from '../model/report';
import { Router } from '@angular/router';

@Component({
  selector: 'app-report-compo',
  templateUrl: './report-compo.component.html',
  styleUrls: ['./report-compo.component.css']
})
export class ReportCompoComponent implements OnInit {

  commentary = 'Los procesos con nivel de madurez entre 0 y 2 deben mejorarse'
  showPanel = false
  report: Report = new Report()

  constructor(private router: Router, private reportServices: ReportService) { }

  ngOnInit(): void {
    this.getReport()
  }

  getReport(): void {
    const reportId = localStorage.getItem('reportId')
    this.report.reportId = (reportId === null) ? 0 : parseInt(reportId);
    if (this.report.reportId > 0) {
      this.reportServices.getReport(this.report.reportId).subscribe(res => {
        this.report = res;
      })
    }
  }

  goToInit(): void {
    this.router.navigate(['/home'])
  }

}
