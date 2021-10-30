import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FileService } from '../services/file.service';

@Component({
  selector: 'app-welcome-compo',
  templateUrl: './welcome-compo.component.html',
  styleUrls: ['./welcome-compo.component.css']
})
export class WelcomeCompoComponent implements OnInit {

  bussiness: string = '';
  auditor: string = '';
  report: any = {}

  constructor(private router: Router, private fileServices: FileService) { }

  ngOnInit(): void {
    this.getReport()
  }

  updateReport(): void {
    this.report.bussiness_name = this.bussiness
    this.report.auditor_name = this.auditor
    this.fileServices.updateFile(this.report).subscribe(res => {
      console.log(res.data)
    })
  }

  getReport(): void {
    this.fileServices.getJSON().subscribe(res => {
      this.report = res
    })
  }

  goToAssetsForm(): void {
    if (this.bussiness !== '' && this.auditor !== '') {
      this.updateReport()
      // this.router.navigate(['/bussiness_assets']);
    } else {
      alert('Digite todos los datos');
    }
  }

}
