import { Component } from '@angular/core';
// import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  // public user: User = null;

  navLinks=[
    {
      route: '/dashboard/viewprofile',
      class: 'fas fa-user',
      label: 'Profile',
      role: 'User',
    },
    {
      route: '/dashboard/productorders',
      class: 'fas fa-truck-moving',
      label: 'Products Orders',
      role: 'User',
    },
    {
      route: '/dashboard/products',
      class: 'fas fa-boxes',
      label: 'Products',
      role: 'User',
    },
    {
      route: '/dashboard/rawmaterialorders',
      class: 'fas fa-truck-moving',
      label: 'RM Orders',
      role: 'User',
    },
    {
      route: '/dashboard/rawmaterials',
      class: 'fas fa-boxes',
      label: 'Raw Materials',
      role: 'User',
    },
    {
      route: 'suppliers',
      class: 'fas fa-people-carry',
      label: 'Suppliers',
      role: 'User',
    },
    {
      route: '/dashboard/distributors',
      class: 'fas fa-people-carry',
      label: 'Distributors',
      role: 'User',
    },
    {
      route: '/dashboard/users',
      class: 'fas fa-users',
      label: 'Manage Users',
      role: 'Admin',
    },
  ];
}
