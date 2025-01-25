import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, EventEmitter, Inject, Input, Output, PLATFORM_ID } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { routes } from '../helpers/routes';

@Component({
  selector: 'confia-button',
  standalone: true,
  imports: [FontAwesomeModule,CommonModule,RouterModule],
  templateUrl: './confia-button.component.html',
  styleUrl: './confia-button.component.scss'
})

export class ConfiaButtonComponent {
@Input() type:buttonType='button';
@Input() backgroundColor:bgColor='bg-dark-green';
@Input() color: Color = 'text-white';
@Input() fragment!:string;
@Input() border: border = 'border border-dark-green';
@Input() content!: string;
@Input() URL: string='#';
@Input() target: string='_self';
@Input() borderRadius: BorderRadius = 'br-6px';
@Input() fontSize:any='fs-13px';
@Input() fontWeight:any='fw-700';
@Input() padding:any='px-md-3  px-1 py-2';
@Input() width: boolean = false;
@Input() disabled: boolean = false;
@Input() icon: any;
@Input() hoverClass:string='';
@Input() iconPosition: iconPosition = 'right';
@Output() confia_btn_click: EventEmitter<any> = new EventEmitter();
@Input() isCenter:boolean=false;
currentFragment: string | null = null;
isBrowser:boolean;
constructor(public route: ActivatedRoute,@Inject(PLATFORM_ID) platformId: Object){
  this.isBrowser = isPlatformBrowser(platformId);
}
clickEvent() {
  this.confia_btn_click.emit();
}
isFragmentActive(fragment: string): boolean {
  return this.currentFragment === fragment;
}
ngOnInit() {
  this.route.fragment.subscribe((fragment) => {
    this.currentFragment = fragment;
  });  
  if(this.isBrowser)
   {
    var self=this;
    window.addEventListener('scroll', function() {
      const sections =routes.map(x=>x.fragment);
  
      sections.forEach((section:any) => {
        const element = document.getElementById(section);
     
        if (element) {
          const rect = element.getBoundingClientRect();

          const inView = rect.top >= 0 && rect.bottom <= window.innerHeight;
          if (inView) {
       
            self.currentFragment = section;
          }
        }
      });
    });
   }
}
}


export type bgColor =  'bg-white' | 'bg-dark-green' |  'bg-light' | 'bg-ultra-light'| 'bg-danger';
export type Color = 'text-white'| 'text-dark-green'| 'text-semi-light'|'text-danger'| 'text-danger';
export type border = 'border-0'|'border border-dark-green' | 'border border-danger';
export type BorderRadius = 'br-12px' | 'br-6px';
export type iconPosition = 'right'| 'left' | 'center';
export type buttonType = 'button' | 'submit' | 'link';