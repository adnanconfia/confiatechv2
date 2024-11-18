import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, ElementRef, Inject, PLATFORM_ID, ViewChild } from '@angular/core';
import { CardModule } from 'primeng/card';
import { TimelineModule } from 'primeng/timeline';
import { StepperModule } from 'primeng/stepper';
import { ConfiaButtonComponent } from "../../utils/confia-button/confia-button.component";
interface phaseItem {
 heading?:string,
 text?:string
}
@Component({
  selector: 'app-phases',
  standalone: true,
  imports: [TimelineModule, CommonModule, CardModule, StepperModule, ConfiaButtonComponent,ConfiaButtonComponent],
  templateUrl: './phases.component.html',
  styleUrl: './phases.component.scss'
})
export class PhasesComponent {
  
  @ViewChild('firstElement') firstElement!: ElementRef;
  @ViewChild('lastElement') lastElement!: ElementRef;
  @ViewChild('absoluteElement') absoluteElement!: ElementRef;
  phases: phaseItem[];
  isBrowser:boolean;
  active:number=0
  constructor( @Inject(PLATFORM_ID) platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
    this.phases=[]
}

calculateHeight(){
  // Get the top position of the first element
  const firstElementTop = this.firstElement.nativeElement.getBoundingClientRect().top + window.scrollY;

  // Get the top position of the last element
  const lastElementTop = this.lastElement.nativeElement.getBoundingClientRect().top + window.scrollY;

  // Calculate the total height from the first element to the top of the last element
  const totalHeight = lastElementTop - firstElementTop;

  // Set the absolute element's top position and height dynamically
  const absoluteElement = this.absoluteElement.nativeElement;

  absoluteElement.style.setProperty('height', `${totalHeight}px`, 'important');
}
ngAfterViewInit():  void {
  if(this.isBrowser){

   this.calculateHeight()
  
  }
  
}
ngOnInit(): void {
  if(this.isBrowser)
{  this.phases = [
    {
      heading:"Discovery and Planning",
      text:"<ul class=' md:tw-text-sm tw-list-none sm:tw-text-base xs:tw-text-xs tw-text-[12px]  tw-text-dark'>\
      <li>\
      <b>Client Consultation:</b> Meet with the client to understand their goals, target audience, key features, and any specific requirements.\
      </li>\
      <li>\
      <b>Research & Analysis:</b> Analyze competitors, identify target audience preferences, and conduct market research to gather insights that will shape the website’s strategy.\
      </li>\
      <li>\
      <b>Define Scope: </b>Outline the project’s scope, including key functionalities, features, timelines, and deliverables. Create a detailed project plan with milestones.\
      </li>\
      <li>\
      <b>Sitemap Creation: </b>Develop a sitemap to visualize the structure of the website, ensuring all important pages and features are included.\
      </li>\
      </ul"
    },
    {
      heading:"Design",
    text:"<ul class=' md:tw-text-sm tw-list-none sm:tw-text-base xs:tw-text-xs tw-text-[12px]  tw-text-dark'>\
      <li>\
      <b>Wireframing:</b> Create low-fidelity wireframes to outline the basic structure and layout of the website’s pages\
      </li>\
      <li>\
      <b>UI/UX Design:</b> Develop high-fidelity mockups with detailed visual elements, including typography, color schemes, and interactive features. Focus on user experience (UX) and user interface (UI) design.\
      </li>\
      <li>\
      <b>Client Review and Feedback: </b>Present the design mockups to the client for review and gather feedback. Make necessary revisions based on the feedback.\
      </li>\
      </ul"
    },
    {
      heading:"Content Creation",
   text:"<ul class=' md:tw-text-sm tw-list-none sm:tw-text-base xs:tw-text-xs tw-text-[12px]  tw-text-dark'>\
      <li>\
      <b>Content Strategy:</b> Develop a content strategy that aligns with the website’s goals and target audience.\
      </li>\
      <li>\
      <b>Copywriting:</b> Write compelling, SEO-optimized content for each page, including headlines, body text, calls to action, and meta descriptions.\
      </li>\
      <li>\
      <b>Multimedia Integration:</b> Source or create images, videos, and other multimedia elements that will enhance the website’s visual appeal and user engagement.\
      </li>\
      </ul"
    },
    {
      heading:"Development",
    text:"<ul class=' md:tw-text-sm tw-list-none sm:tw-text-base xs:tw-text-xs tw-text-[12px]  tw-text-dark'>\
      <li>\
      <b>Front-End Development:</b> Convert the design into a functional website using HTML, CSS, JavaScript, and other front-end technologies. Ensure the site is responsive and works on all devices.\
      </li>\
      <li>\
      <b>Back-End Development:</b> Set up the server, database, and any necessary back-end systems to manage content, handle user interactions, and support the website’s features.\
      </li>\
      <li>\
      <b>Feature Implementation:</b> Develop and integrate any custom features or functionalities, such as e-commerce capabilities, user authentication, or API integrations.\
      </li>\
      </ul"
    },
    {
      heading:"Testing",
    text:"<ul class=' md:tw-text-sm tw-list-none sm:tw-text-base xs:tw-text-xs tw-text-[12px]  tw-text-dark'>\
      <li>\
      <b>Functional Testing:</b> Ensure all website features and functionalities work as intended, including forms, links, and interactive elements.\
      </li>\
      <li>\
      <b>Performance Testing:</b> Test the website’s load times, speed, and responsiveness across different devices and browsers.\
      </li>\
      <li>\
      <b>Security Testing:</b> Conduct security checks to identify vulnerabilities and implement necessary security measures, such as SSL certificates and data encryption.\
      </li>\
      <li>\
      <b>Usability Testing:</b> Test the website’s user experience to ensure it is intuitive, accessible, and easy to navigate.\
      </li>\
      <li>\
      <b>Client Review and Approval:</b> Present the fully functional website to the client for final review and approval.\
      </li>\
      </ul"
    },
    {
      heading:"Launch",
   text:"<ul class=' md:tw-text-sm tw-list-none sm:tw-text-base xs:tw-text-xs tw-text-[12px]  tw-text-dark'>\
      <li>\
      <b>Pre-Launch Checks:</b> Double-check all aspects of the website, including SEO settings, analytics integration, and content accuracy.\
      </li>\
      <li>\
      <b>Deployment:</b> Move the website from the development environment to the live server. Ensure all configurations are correctly set up.\
      </li>\
      <li>\
      <b>Post-Launch Monitoring:</b> Monitor the website’s performance and user feedback after launch. Address any issues that arise and make necessary adjustments.\
      </li>\
      </ul"
    },
    {
      heading:"Maintenance and Updates",
   text:"<ul class=' md:tw-text-sm tw-list-none sm:tw-text-base xs:tw-text-xs tw-text-[12px]  tw-text-dark'>\
      <li>\
      <b>Regular Maintenance:</b> Provide ongoing support to keep the website updated with the latest security patches, software updates, and content changes.\
      </li>\
      <li>\
      <b>Performance Optimization:</b> Continuously monitor and optimize the website’s performance, including load times, SEO rankings, and user engagement.\
      </li>\
      <li>\
      <b>Content Updates:</b> Assist the client with content updates, new feature development, or redesigns as needed.\
      </li>\
      <li>\
      <b>Analytics and Reporting:</b> Provide regular reports on website traffic, user behavior, and other key metrics to help the client understand the site’s performance and make data-driven decisions.\
      </li>\
      </ul"
    }
  ];

  var self=this;
  window.addEventListener('resize', function() {

      self.calculateHeight()
    
});
  }
}
}
