import { Component } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common'
import { SidebarModule } from 'primeng/sidebar';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {  faTimes } from '@fortawesome/free-solid-svg-icons';
import { ConfiaButtonComponent } from "../../utils/confia-button/confia-button.component";
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgOptimizedImage, SidebarModule, CommonModule, FontAwesomeModule, ConfiaButtonComponent,RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
 visible:boolean=false;
 close=faTimes
 urls=[
  {
    label:"Home",
    route:"/home",
    isActive:true,
    type:"text"
  },
  {
    label:"About",
    route:"#",
    isActive:false,
     type:"text"
  },
  {
    label:"Services",
    route:"/services",
    isActive:false,
     type:"text"
  },
  {
    label:"Portfolio",
    route:"#",
    isActive:false,
     type:"text"
  },
  {
    label:"Blogs",
    route:"#",
    isActive:false,
     type:"text"
  },
  {
    label:"GET A FREE QUOTE",
    route:"#",
    isActive:false,
     type:"button"
  }
 ]
 showSidebar(){
  this.visible=true;
 }
 hideSidebar(){
  this.visible=false;
 }
}
