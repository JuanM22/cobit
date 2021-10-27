import { Component, Input, OnInit } from '@angular/core'

@Component({
  selector: 'app-domains-compo',
  templateUrl: './domains-compo.component.html',
  styleUrls: ['./domains-compo.component.css'],
})
export class DomainsCompoComponent implements OnInit {

  @Input() domainIndex: number = 0

  domains = [
    'Planear y Organizar',
    'Adquirir e Implementar',
    'Entregar y Dar Soporte',
    'Evaluar y Monitorear',
  ]  

  domainOneQuestions= [];
  domainTwoQuestions= [];
  domainThreeQuestions= [];
  domainFourQuestions= [];

  editQuestions: boolean = true;

  constructor() {}

  ngOnInit(): void {}

  updateIndex(index: number): void {
    if (index < this.domains.length && index >= 0) {
      this.domainIndex = index;
    }
  }

}
