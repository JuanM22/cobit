import { Component, Input, OnInit } from '@angular/core'

@Component({
  selector: 'app-domains-compo',
  templateUrl: './domains-compo.component.html',
  styleUrls: ['./domains-compo.component.css'],
})
export class DomainsCompoComponent implements OnInit {

  domains = [
    'Planear y Organizar',
    'Adquirir e Implementar',
    'Entregar y Dar Soporte',
    'Evaluar y Monitorear',
  ]
  
  @Input() domainIndex: number = 0

  domainOneQuestions= [];
  domainTwoQuestions= [];
  domainThreeQuestions= [];
  domainFourQuestions= [];

  constructor() {}

  ngOnInit(): void {}

  updateIndex(index: number): void {
    if (index < this.domains.length && index >= 0) {
      this.domainIndex = index;
    }
  }
}
