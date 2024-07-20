import { Component } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common'
import { SidebarModule } from 'primeng/sidebar';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {  faTimes } from '@fortawesome/free-solid-svg-icons';
import { ConfiaButtonComponent } from "../../utils/confia-button/confia-button.component";
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgOptimizedImage, SidebarModule, CommonModule, FontAwesomeModule, ConfiaButtonComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
 visible:boolean=false;
 close=faTimes
 showSidebar(){
  this.visible=true;
 }
 hideSidebar(){
  this.visible=false;
 }
}
