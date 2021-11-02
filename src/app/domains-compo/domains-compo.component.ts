import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core'
import { Domain } from '../model/domain';
import { IReport } from '../interfaces/IReport';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CustomToastCompoComponent } from '../custom-toast-compo/custom-toast-compo.component';
import { Report } from '../model/report';
import { ReportService } from '../services/report.service';

@Component({
  selector: 'app-domains-compo',
  templateUrl: './domains-compo.component.html',
  styleUrls: ['./domains-compo.component.css'],
})
export class DomainsCompoComponent implements OnInit, OnChanges, IReport {

  @Input() domainIndex: number = 0

  domainsLabels = [
    'Planear y Organizar',
    'Adquirir e Implementar',
    'Entregar y Dar Soporte',
    'Evaluar y Monitorear',
  ]

  currentDomain = new Domain()

  editQuestions: boolean = false;

  report: Report = new Report()

  constructor(private _snackBar: MatSnackBar, private reportServices: ReportService) { }

  ngOnInit(): void {
    this.getReport()
  }

  ngOnChanges(_changes: SimpleChanges): void {
    console.log('domains compo')
    this.currentDomain = this.report.domains[this.domainIndex]
  }

  updateList(message: string): void {
    if (message == 'updated') this.updateReport()
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
      this.reportServices.getReport(this.report.reportId).subscribe(res => {
        this.report = res;
        this.currentDomain = this.report.domains[this.domainIndex]
      })
    }
  }

  openPopUpMessage(message: string) {
    this._snackBar.openFromComponent(CustomToastCompoComponent, {
      horizontalPosition: 'end',
      verticalPosition: 'bottom',
      duration: 60000,
      data: {
        message: message
      }
    });
  }

}
