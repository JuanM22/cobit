import { Component, OnInit, ViewChild } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { MatTable } from '@angular/material/table';
import { BussinessAsset } from '../model/bussiness-asset';

import { Router } from '@angular/router';
import { ReportService } from '../services/report.service';
import { IReport } from '../interfaces/IReport';
import { Report } from '../model/report';


@Component({
  selector: 'app-bussiness-assets',
  templateUrl: './bussiness-assets.component.html',
  styleUrls: ['./bussiness-assets.component.css']
})
export class BussinessAssetsComponent implements OnInit, IReport {

  @ViewChild('assetsTable', { static: true }) table: MatTable<BussinessAsset> | undefined;

  // table header //
  displayedColumns: string[] = ['name', 'type', 'edit', 'delete']
  //////////

  assetTypes: string[] = ['Activos de Información', 'Activos Físicos', 'Activos de Servicios de TI', 'Activos Humanos']
  assetName: string = ''
  assetType: string = ''
  isEditing: boolean = false
  assetIndex = -1

  report: Report = new Report()

  constructor(private router: Router, private reportServices: ReportService) { }

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

  startTest(): void {
    this.router.navigate(['/test'])
  }
  
  goToInit(): void {
    this.router.navigate(['/home'])
  }

  addAsset(): void {
    if (this.assetName != null && this.assetType != null) {
      this.report.bussiness_assets.push(new BussinessAsset(this.assetName, this.assetType))
      this.table?.renderRows();
      this.assetName = ''
      this.assetType = 'none'
      this.updateReport()
    }
  }

  removeAsset(bussinessAsset: BussinessAsset): void {
    let assetIndex = this.report.bussiness_assets.indexOf(bussinessAsset);
    this.report.bussiness_assets.splice(assetIndex, 1);
    this.table?.renderRows();
    this.updateReport()
  }

  editAsset(bussinessAsset: BussinessAsset): void {
    this.assetIndex = this.report.bussiness_assets.indexOf(bussinessAsset)
    this.assetName = bussinessAsset.assetName
    this.assetType = bussinessAsset.assetType
    this.isEditing = true
  }

  drop(event: CdkDragDrop<BussinessAsset[]>) {
    moveItemInArray(this.report.bussiness_assets, event.previousIndex, event.currentIndex);
    this.table?.renderRows();
  }

  updateAsset(): void {
    const asset = this.report.bussiness_assets[this.assetIndex]
    asset.assetName = this.assetName
    asset.assetType = this.assetType
    this.report.bussiness_assets[this.assetIndex] = asset
    this.updateReport()
    this.isEditing = false
    this.assetIndex = -1
    this.assetName = ''
    this.assetType = 'none'
  }

}
