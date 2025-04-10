import {
  Component,
  ComponentFactoryResolver,
  HostListener,
  Inject,
  PLATFORM_ID,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { HeroComponent } from '../../components/hero/hero.component';
import { ServicesComponent } from '../../components/services/services.component';
import { ClientCompComponent } from '../../components/client-comp/client-comp.component';
import { PortfolioCompComponent } from '../../components/portfolio-comp/portfolio-comp.component';
import { PhasesComponent } from '../../components/phases/phases.component';
import { AboutComponent } from '../../components/about/about.component';
import { ContactComponent } from '../../components/contact/contact.component';
import { Meta, Title } from '@angular/platform-browser';
import { AnalyticsService } from '../../services/analytics.service';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { TestimonialsComponent } from '../../components/testimonials/testimonials.component';
import { FAQComponent } from '../../components/faq/faq.component';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [HeroComponent, ServicesComponent, CommonModule],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss',
})
export class LandingComponent {
  @ViewChild('components', { read: ViewContainerRef })
  components!: ViewContainerRef;
  compsRendered: boolean = false;

  isBrowser: boolean = false;
  constructor(
    private meta: Meta,
    private analytics: AnalyticsService,
    private title: Title,
    private componentFactoryResolver: ComponentFactoryResolver,
    @Inject(PLATFORM_ID) platformId: Object
  ) {
    this.title.setTitle('ConfiaTech - Dream Digitizers');
    this.isBrowser = isPlatformBrowser(platformId);
    this.meta.updateTag({
      name: 'description',
      content:
        'ConfiaTech Pvt Ltd offers innovative tech solutions in web development, mobile apps, and enterprise software to drive your success',
    });
    this.meta.updateTag({
      name: 'keywords',
      content:
        'Customize Web apps, Angular Apps, Django Apps, WordPress Apps, Development, Web Development, Bespoke Solutions, Tech Company, IT Company, Software House',
    });
  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.analytics.trackEvent(
      'Home page',
      'Home page loaded into view',
      'Home page'
    );
  }
  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (this.isBrowser) {
      var clientHeight = window.innerHeight;
      var scrollTop = document.documentElement.scrollTop || window.scrollY;
      const scrollPosition = scrollTop + clientHeight + 10;

      const componentPos = this.components.element.nativeElement.offsetTop;
      if (!this.compsRendered && scrollPosition >= componentPos) {
        this.loadComponents();
      }
    }
  }
  async ngAfterViewInit() {
    setTimeout(async () => {
      await this.waitForLCPAndFCP();
    }, 3800);
  }
  private waitForLCPAndFCP(): Promise<void> {
    return new Promise((resolve) => {
      if (this.isBrowser) {
        if (!('PerformanceObserver' in window)) {
          resolve();
          return;
        }
      }
      let fcpDone = false;
      let lcpDone = false;

      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.name === 'first-contentful-paint') {
            fcpDone = true;
          }
          if (entry.entryType === 'largest-contentful-paint') {
            lcpDone = true;
          }
        }

        if (fcpDone && lcpDone) {
          observer.disconnect();
          this.loadComponents();
          resolve();
        }
      });

      observer.observe({ type: 'paint', buffered: true });
      observer.observe({ type: 'largest-contentful-paint', buffered: true });

      // Fallback timeout in case LCP/FCP detection fails
      setTimeout(resolve, 3000);
    });
  }
  private loadComponents() {
    if (!this.compsRendered) {
      var comps: any[] = [
        PortfolioCompComponent,
        AboutComponent,
        PhasesComponent,
        ClientCompComponent,
        TestimonialsComponent,
        FAQComponent,
        ContactComponent,
      ];
      this.compsRendered = true;
      comps.forEach((item) => {
        const componentFactory =
          this.componentFactoryResolver.resolveComponentFactory(item);
        this.components.createComponent(componentFactory);
      });
    }
  }
}
