import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Report } from '../model/report';
import { IReport } from '../interfaces/IReport'
import { ReportService } from '../services/report.service';


@Component({
  selector: 'app-welcome-compo',
  templateUrl: './welcome-compo.component.html',
  styleUrls: ['./welcome-compo.component.css']
})
export class WelcomeCompoComponent implements OnInit, IReport {

  report: Report = new Report()
  reportId: number = 0

  constructor(private router: Router, private reportServices: ReportService) { }

  updateReport(): void {
    this.reportServices.updateReport(this.report).subscribe(res => {
      if (res != -1) {
        localStorage.setItem('reportId', res.data)
        this.router.navigate(['/bussiness_assets']);
      }
    })
  }
  getReport(): void {
    this.reportServices.getReport(this.reportId).subscribe(res => this.report = res)
  }

  ngOnInit(): void {
    const reportId = localStorage.getItem('reportId')
    this.reportId = (reportId === null) ? 0 : parseInt(reportId);
    if (this.reportId > 0) this.getReport()
  }

  goToAssetsForm(): void {
    if (this.report.bussiness_name !== '' && this.report.auditor_name !== '') this.updateReport()
    else alert('Digite todos los datos');
  }

}
