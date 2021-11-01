import { Component, Input, OnInit } from '@angular/core'
import { IReport } from '../interfaces/IReport';
import { Report } from '../model/report';
import { ReportService } from '../services/report.service';

@Component({
  selector: 'app-domains-compo',
  templateUrl: './domains-compo.component.html',
  styleUrls: ['./domains-compo.component.css'],
})
export class DomainsCompoComponent implements OnInit, IReport {

  @Input() domainIndex: number = 0

  domains = [
    'Planear y Organizar',
    'Adquirir e Implementar',
    'Entregar y Dar Soporte',
    'Evaluar y Monitorear',
  ]

  domainOneQuestions = [];
  domainTwoQuestions = [];
  domainThreeQuestions = [];
  domainFourQuestions = [];

  editQuestions: boolean = false;

  report: Report = new Report()

  constructor(private reportServices: ReportService) { }

  ngOnInit(): void {
    this.getReport()
  }

  updateReport(): void {
    this.reportServices.updateReport(this.report).subscribe(res => {
      console.log(res.data)
    })
  }

  getReport(): void {
    const reportId = localStorage.getItem('reportId')
    this.report.reportId = (reportId === null) ? 0 : parseInt(reportId);
    if (this.report.reportId > 0) {
      this.reportServices.getReport(this.report.reportId).subscribe(res => this.report = res)
    }
  }

  updateIndex(index: number): void {
    if (index < this.domains.length && index >= 0) {
      this.domainIndex = index;
    }
  }

}
