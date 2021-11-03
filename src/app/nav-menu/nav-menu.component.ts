import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit {

   domainIndex = 0;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToReportGenerator(): void {
    this.router.navigate(['/report'])
  }

  goToAssetsPage(): void {
    this.router.navigate(['/bussiness_assets'])
  }

}
