import { Component } from '@angular/core';
import { User } from 'src/app/models/user.model';
// import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent {
  public user: User = {
    userId: '1',
    username: 'Peter',
    token: 'love',
    role: 'Admin',
  };

  navLinks = [
    {
      route: '/dashboard/viewprofile',
      label: 'Profile',
      role: 'User',
    },
    {
      route: '/dashboard/productorders',
      label: 'Products Orders',
      role: 'User',
    },
    {
      route: '/dashboard/products',
      label: 'Products',
      role: 'User',
    },
    {
      route: '/dashboard/rawmaterialorders',
      label: 'RM Orders',
      role: 'User',
    },
    {
      route: '/dashboard/rawmaterials',
      label: 'Raw Materials',
      role: 'User',
    },
    {
      route: '/dashboard/suppliers',
      label: 'Suppliers',
      role: 'User',
    },
    {
      route: '/dashboard/distributors',
      label: 'Distributors',
      role: 'User',
    },
    {
      route: '/dashboard/users',
      label: 'Manage Users',
      role: 'Admin',
    },
  ];
}
