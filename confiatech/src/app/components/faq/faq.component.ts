import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.scss',
})
export class FAQComponent {
  faq = [
    {
      heading: 'What services does your software agency offer?',
      answer:
        'We provide custom web and mobile app development, UI/UX design, backend development, API integrations, and long-term support and maintenance.',
    },
    {
      heading: 'Which industries do you serve?',
      answer:
        'We work with clients across various industries including legal, healthcare, e-commerce, education, real estate, and more.',
    },
    {
      heading: 'Do you develop apps for both iOS and Android?',
      answer:
        'Yes! We build native apps for both platforms and also offer cross-platform development using frameworks like Flutter and React Native.',
    },
    {
      heading: 'How do you ensure the quality of your projects?',
      answer:
        'Our team follows agile methodologies, rigorous QA testing, and continuous code reviews to ensure top-notch performance and reliability.',
    },
    {
      heading: 'Can you redesign or improve an existing app or website?',
      answer:
        'Absolutely. Whether you need a UI/UX refresh, feature enhancements, or performance improvements, we can help modernize and optimize your existing solution.',
    },
    {
      heading: 'Do you offer post-launch support and maintenance?',
      answer:
        'Yes, we offer flexible maintenance and support packages to keep your application updated, secure, and running smoothly.',
    },
    {
      heading: 'What is your typical project timeline?',
      answer:
        "Project timelines vary based on scope and complexity, but most small to mid-size projects take between 4 to 12 weeks. We'll provide a detailed timeline after the initial consultation.",
    },
    {
      heading: 'How much does a custom web or mobile app cost?',
      answer:
        "Costs depend on the project's features, technology stack, and timeline. We offer transparent pricing after understanding your requirements during a free consultation.",
    },
    {
      heading: 'Will I have ownership of the source code?',
      answer:
        'Yes. Upon full payment, you will have complete ownership of the source code and intellectual property of your project.',
    },
    {
      heading: 'How do we get started with your agency?',
      answer:
        'Simply reach out via our contact form or email us to schedule a free consultation. We’ll discuss your ideas, goals, and how we can bring your vision to life.',
    },
  ];
}
