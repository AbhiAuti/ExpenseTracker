import { Token } from '@angular/compiler';
import { Component, NgModule } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-mainlayout',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './mainlayout.component.html',
  styleUrl: './mainlayout.component.css'
})
export class MainlayoutComponent {

  constructor(private router:Router){}

  Add() {
  this.router.navigate(["add"])
 }

 goHome() {
    this.router.navigate(['home']);
  }

logout() {
  localStorage.removeItem("token");
  console.log("Logged out");
}
}
