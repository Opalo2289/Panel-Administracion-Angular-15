import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SidebarService } from 'src/app/services/sidebar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  menuItems?: any[]
  subMenu: any;

  constructor(private SidebarService: SidebarService, private router: Router) {
    this.menuItems = SidebarService.menu
  }

  ngOnInit(): void {

  }

  logout() {
    this.router.navigateByUrl('login');
  }

}
