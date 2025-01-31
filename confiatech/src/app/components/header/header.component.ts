import { Component, HostListener, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser, NgOptimizedImage } from '@angular/common'
import { SidebarModule } from 'primeng/sidebar';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {  faTimes } from '@fortawesome/free-solid-svg-icons';
import { ConfiaButtonComponent } from "../../utils/confia-button/confia-button.component";
import { IsActiveMatchOptions, RouterModule } from '@angular/router';
import { Iroute } from '../../utils/types/Iroutes.interface';
import { routes } from '../../utils/helpers/routes';
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
 urls:Iroute[]=routes;

 options:IsActiveMatchOptions={
fragment:'exact',
paths:'subset',
matrixParams:'subset',
queryParams:'subset'
 }
 isFixed: boolean = false;
 isBrowser:boolean=false;
 constructor( @Inject(PLATFORM_ID) platformId: Object){
    this.isBrowser = isPlatformBrowser(platformId);
 }
  @HostListener('window:scroll', [])
  onWindowScroll() {
    if(this.isBrowser){
    this.isFixed = window.scrollY > 150?true:false; }
  }
 showSidebar(){
  this.visible=true;
 }
 hideSidebar(){
  this.visible=false;
 }
}
