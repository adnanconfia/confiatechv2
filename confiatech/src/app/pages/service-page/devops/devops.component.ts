import { Component } from '@angular/core';
import { ServiceSliderComponent } from '../../../components/service-slider/service-slider.component';
import { NgOptimizedImage } from '@angular/common';
import { ConfiaButtonComponent } from '../../../utils/confia-button/confia-button.component';
import { Meta, Title } from '@angular/platform-browser';
import { AnalyticsService } from '../../../services/analytics.service';

@Component({
  selector: 'app-devops',
  standalone: true,
  imports: [ServiceSliderComponent,NgOptimizedImage,ConfiaButtonComponent],
  templateUrl: './devops.component.html',
  styleUrl: './devops.component.scss'
})
export class DevopsComponent {
  constructor(private title:Title,private meta:Meta,private analytics:AnalyticsService){}
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.title.setTitle("DevOps Solutions");
    this.meta.updateTag({ name: 'description', content: `
    ConfiaTech Pvt Ltd provides reliable DevOps solutions to streamline workflows, automate processes, and enhance software delivery efficiency.` });
    this.meta.updateTag({ name: 'keywords', content: 'docker, Kubernetes, CI/CD pipelines, GITHUB , AWS , Azure, GCP , Jenkins, Share Hosting , Hosting, Email Server , Domain , Clusters, EC2 , ECS, EKS , Lamda Functions' });
   
    this.analytics.trackEvent("Devops page","Devops page loaded into view","Devops page");
    // this.analytics.eventWithParam("Devops Loaded",{
    //   "transaction_id":123566,
    //   "value":23500,
    //   "currency":'$',
    //   "item":`[{"name":"item1","price":123}]`,
    //   "payment_method":"stripe 2",
    //   "Discount":1234
    // })


  }
}
