import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'confia-button',
  standalone: true,
  imports: [FontAwesomeModule,CommonModule],
  templateUrl: './confia-button.component.html',
  styleUrl: './confia-button.component.scss'
})

export class ConfiaButtonComponent {
@Input() type:buttonType='button';
@Input() backgroundColor:bgColor='bg-dark-green';
@Input() color: Color = 'text-white';
@Input() border: border = 'border border-dark-green';
@Input() content!: string;
@Input() URL: string='#';
@Input() target: string='self';
@Input() borderRadius: BorderRadius = 'br-6px';
@Input() fontSize:any='fs-13px';
@Input() fontWeight:any='fw-700';
@Input() padding:any='px-md-3  px-1 py-2';
@Input() width: boolean = false;
@Input() disabled: boolean = false;
@Input() icon: any;
@Input() hoverClass:string='';
@Input() iconPosition: iconPosition = 'right';
@Output() kazaroo_btn_click: EventEmitter<any> = new EventEmitter();
@Input() isCenter:boolean=false;
clickEvent() {
  this.kazaroo_btn_click.emit();
}
}
export type bgColor =  'bg-white' | 'bg-dark-green' |  'bg-light' | 'bg-ultra-light'| 'bg-danger';
export type Color = 'text-white'| 'text-dark-green'| 'text-semi-light'|'text-danger'| 'text-danger';
export type border = 'border-0'|'border border-dark-green' | 'border border-danger';
export type BorderRadius = 'br-12px' | 'br-6px';
export type iconPosition = 'right'| 'left' | 'center';
export type buttonType = 'button' | 'submit' | 'link';