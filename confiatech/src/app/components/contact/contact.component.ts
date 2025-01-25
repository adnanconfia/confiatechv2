import { ContactService } from './../../services/contact.service';
import { Component } from '@angular/core';
import { ConfiaButtonComponent } from "../../utils/confia-button/confia-button.component";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { RECAPTCHA_SETTINGS, RecaptchaFormsModule, RecaptchaModule, RecaptchaSettings } from 'ng-recaptcha';
import { environment } from '../../../environments/environment';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { Iemail } from '../../utils/types/Iemail.interface';
import { loaderService } from '../../utils/helpers/loader';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ConfiaButtonComponent,FontAwesomeModule,NgOptimizedImage,  RecaptchaModule,CommonModule,FormsModule,ReactiveFormsModule,
    RecaptchaFormsModule],
  providers: [
    {
      provide: RECAPTCHA_SETTINGS,
      useValue: {
        siteKey: environment.recaptcha.siteKey,
      } as RecaptchaSettings,
    },
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  token: string|undefined;
 location=faLocationDot;
 phone = faPhone;
 mail = faEnvelope;
 contactForm!:FormGroup;
 constructor(private fb:FormBuilder,private contact:ContactService,private loader:loaderService){
  this.token=undefined;
  this.contactForm = this.fb.group({
    name:new FormControl("",[Validators.required,Validators.pattern(/^(\s+\S+\s*)*(?!\s).*$/)]),
    subject:new FormControl("",[Validators.required,Validators.pattern(/^(\s+\S+\s*)*(?!\s).*$/)]),
    message:new FormControl("",[Validators.required,Validators.min(5),Validators.pattern(/^(\s+\S+\s*)*(?!\s).*$/)]),
    email:new FormControl("",[Validators.required,Validators.email,Validators.pattern(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]),
  })
 }
 submit(){
  if(this.contactForm.invalid){
    Swal.fire({
      title: 'Error!',
      text: 'Please fill all the fields',
      icon: 'error',

    })
  }else{
    if(!this.token){
      Swal.fire({
        title: 'Error!',
        text: 'Invalid Recaptcha',
        icon: 'error',
  
      })
    }else{
      this.loader.loading$.next(true);
        var data:Iemail=this.contactForm.value;
        this.contact.sendMail(data).subscribe((resp:any)=>{
          this.loader.loading$.next(false);
          Swal.fire({
            title: 'Success!',
            text: 'Message sent successfully',
            icon: 'success',
      
          })
        },(err:any)=>{
          this.loader.loading$.next(false);
          Swal.fire({
            title: 'Error!',
            text: 'Something is not right, Please try again letter',
            icon: 'error',
      
          })
        })
    }
  }
 }
 

}
