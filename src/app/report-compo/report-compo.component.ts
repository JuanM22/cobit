import { Component, OnInit } from '@angular/core';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-report-compo',
  templateUrl: './report-compo.component.html',
  styleUrls: ['./report-compo.component.css']
})
export class ReportCompoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  generatePDF(): void {
    let DATA = document.getElementById('pdf-content')
    if(DATA != null) {
      html2canvas(DATA).then(canvas => {
        console.log(canvas)
        let fileWidth = 8.5
        let fileHeight = canvas.height * fileWidth / canvas.width        
        const FILEURI = canvas.toDataURL('image/png')
        let PDF = new jsPDF('p', 'in', 'letter')
        PDF.addPage('PNG', 'p')
        PDF.addImage(FILEURI, 'PNG', 1, 1, fileWidth - 2, fileHeight)
        PDF.save('report.pdf')
      })
    }
  }

}
