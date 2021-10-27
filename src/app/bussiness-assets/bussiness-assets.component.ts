import { Component, OnInit, ViewChild } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { MatTable } from '@angular/material/table';
import { BussinessAsset } from '../model/bussiness-asset';

import { Router } from '@angular/router';


@Component({
  selector: 'app-bussiness-assets',
  templateUrl: './bussiness-assets.component.html',
  styleUrls: ['./bussiness-assets.component.css']
})
export class BussinessAssetsComponent implements OnInit {

  @ViewChild('assetsTable', { static: true }) table: MatTable<BussinessAsset> | undefined;

  // table header //
  displayedColumns: string[] = ['name', 'type', 'edit', 'delete']
  //////////

  assetTypes: string[] = ['Fisicos', 'Red']
  bussinessAssets: BussinessAsset[] = []
  assetName: string = ''
  assetType: string = ''

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  startTest(): void {
    this.router.navigate(['/test'])
  }

  addAsset(): void {
    if (this.assetName != null && this.assetType != null) {
      this.bussinessAssets.push(new BussinessAsset(this.assetName, this.assetType))
      this.table?.renderRows();
      this.assetName = this.assetType = '';
    }
  }

  removeAsset(bussinessAsset: BussinessAsset): void {
    let assetIndex = this.bussinessAssets.indexOf(bussinessAsset);
    this.bussinessAssets.splice(assetIndex, 1);
    this.table?.renderRows();
  }

  editAsset(bussinessAsset: BussinessAsset): void {
  }

  drop(event: CdkDragDrop<BussinessAsset[]>) {
    moveItemInArray(this.bussinessAssets, event.previousIndex, event.currentIndex);
    this.table?.renderRows();
  }

}
