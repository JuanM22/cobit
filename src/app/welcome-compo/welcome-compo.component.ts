import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome-compo',
  templateUrl: './welcome-compo.component.html',
  styleUrls: ['./welcome-compo.component.css']
})
export class WelcomeCompoComponent implements OnInit {

  bussiness: string = '';
  auditor: string = '';

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToAssetsForm(): void {
    if(this.bussiness !== '' && this.auditor !== '') {
      this.router.navigate(['/bussiness_assets']);
    } else {
      alert('Digite todos los datos');
    }
  }

}
