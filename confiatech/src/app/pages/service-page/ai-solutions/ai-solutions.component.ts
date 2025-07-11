import { Component } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { AnalyticsService } from '../../../services/analytics.service';
import { ConfiaButtonComponent } from '../../../utils/confia-button/confia-button.component';
import { ServiceSliderComponent } from '../../../components/service-slider/service-slider.component';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-ai-solutions',
  standalone: true,
  imports: [ConfiaButtonComponent, ServiceSliderComponent, NgOptimizedImage],
  templateUrl: './ai-solutions.component.html',
  styleUrl: './ai-solutions.component.scss',
})
export class AiSolutionsComponent {
  constructor(
    private title: Title,
    private meta: Meta,
    private analytics: AnalyticsService
  ) {}
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.title.setTitle('Artificial intelligence (AI) Services');
    this.meta.updateTag({
      name: 'description',
      content: `Enhance your business with AI solutions from ConfiaTech Pvt Ltd. We specialize in machine learning, data analytics, predictive modeling, and scalable architectures.`,
    });

    this.meta.updateTag({
      name: 'keywords',
      content:
        'AI, Machine Learning, Data Analytics, Predictive Modeling, Natural Language Processing, Python, Django, TensorFlow, PyTorch, Scikit-learn, Deep Learning, Data Engineering, Intelligent Automation',
    });
    this.analytics.trackEvent(
      'AI  development page',
      'AI development page loaded into view',
      'AI development page'
    );
  }
}
