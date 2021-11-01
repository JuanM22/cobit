import { Component, Inject, OnInit } from '@angular/core';
import { MatSnackBarRef, MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';

@Component({
  selector: 'app-custom-toast-compo',
  templateUrl: './custom-toast-compo.component.html',
  styleUrls: ['./custom-toast-compo.component.css']
})
export class CustomToastCompoComponent implements OnInit {

  message = ''

  constructor(
    public snackBarRef: MatSnackBarRef<CustomToastCompoComponent>,@Inject(MAT_SNACK_BAR_DATA) public data: any) { }

  ngOnInit(): void {
    this.message = this.data.message
  }

  cancel(): void {
    this.snackBarRef.dismiss()
  }

}
