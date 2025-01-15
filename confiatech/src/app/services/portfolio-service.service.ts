import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';

@Injectable({
  providedIn: 'root'
})


export class PortfolioServiceService {
 private isBrowser:boolean=false;
  constructor( @Inject(PLATFORM_ID) platformId: Object) {
     this.isBrowser = isPlatformBrowser(platformId);
    }
  getPortfolio():portfolio[]{
    if(this.isBrowser){
      return [
        {
          id:1,
          title:"Alzubair Marine Cargo",
          image:`${window.location.origin}/assets/portfolio/alzubair.jpg`,
          description:`Al Zubair Marine Cargo is a trusted name in global freight services, connecting businesses and individuals with reliable shipping solutions. As the company has grown, its website has become outdated, making it harder to meet the needs of modern customers. A complete redesign is needed to create a sleek, user-friendly platform that reflects the company’s excellence.
We provide experienced web developers skilled in Angular, React, Django, and AWS to deliver a high-performance website tailored to your needs. The updated design will offer fast loading times, responsive layouts, and smooth navigation, ensuring a better experience for users on any device.
By leveraging Angular and React, the website will feature a dynamic and interactive interface, making it easier for visitors to explore services. Django will power the back-end with secure and efficient functionality, while AWS ensures the site is scalable and reliable, even with heavy traffic.
The redesigned website will showcase Al Zubair Marine Cargo’s global shipping services, highlighting the company’s commitment to reliability and efficiency. With a fresh, modern design and advanced technology, the site will position the company as a leader in the cargo industry, ready to meet the demands of today’s digital world.
`,
     technologies:[
            "Angular",
            "Django",
            "Boostrap",
            "MySQL"
          ],
          url:'https://alzubairmarinecargo.com/',
          images:[],
          metaDescription:`Discover the redesigned Alzubair Marine Cargo website, showcasing reliable global freight services with modern design and enhanced user experience.`
        },
        {  id:2,
          title:"Axis Ims",
          image:`${window.location.origin}/assets/portfolio/axis.jpg`,
                    description:`We developed a powerful web application for a UK-based law agency specializing in immigration visa services. The agency needed a skilled team to build a platform that could streamline their internal operations and improve the experience for clients applying for immigration visas. Using Angular for the front-end and Django for the back-end, we created a modern and efficient solution tailored to their needs.
The primary goal of the application was to simplify inter-office work, reduce manual data entry, and provide a user-friendly interface. By automating repetitive tasks and centralizing data, the platform enhanced productivity and saved valuable time for the agency’s team.
Deployed on AWS, the application benefits from secure and scalable cloud hosting. This ensures high performance, data security, and reliable access, even during peak usage periods. The AWS infrastructure provides flexibility and scalability, making it an ideal solution for the agency's growing requirements.
The intuitive interface, built with Angular, ensures clients can easily navigate the visa application process, while the Django back-end provides robust functionality for efficient task management.
Visit IMS to explore how this project demonstrates the power of technology in simplifying complex workflows and enhancing client experiences.
<br/>
<br/>
<br/>
<b>Demo Account:</b><br/>
<b>Email:</b> ahsan@axis.lawyer<br/>
<b>Password:</b> axis@2021<br/>
`,
          technologies:[
            "Angular",
            "Django",
            "Boostrap",
            "MySQL"
          ],
          url:'https://ims.confiatech.com',
          images:[],
          metaDescription:'Explore Axis IMS, a web app for managing immigration visas and inter-office tasks with Angular, Django, and AWS for seamless efficiency.'
        },
        {  id:3,
          title:"Desi Atta Chakki",
          image:`${window.location.origin}/assets/portfolio/dac.jpg`,
                    description:`Desi Atta Chakki is an e-commerce platform developed to help a brand expand its online sales and reach a wider audience. Built using WooCommerce in WordPress, the website provides a robust and user-friendly solution for showcasing and selling products effectively.
To ensure the website reflects the brand’s unique identity, we created a fully customized theme and utilized child theme development for flexibility and future updates. This approach allowed us to design a platform tailored to the brand’s specific needs, ensuring a seamless and visually appealing shopping experience for customers.
The website is hosted on shared hosting, which offers an affordable and reliable solution, perfect for small to medium-sized businesses. Shared hosting ensures smooth performance and easy maintenance while keeping operational costs low.
The e-commerce platform includes key features such as easy navigation, secure payment integration, and a responsive design, making it accessible across all devices. Customers can browse products effortlessly, make purchases securely, and enjoy a hassle-free online shopping experience.
Desi Atta Chakki is a prime example of how a customized WordPress solution can transform a traditional business into a thriving online store. It’s a powerful tool that combines functionality and design to boost sales and build a strong online presence.
`,
          technologies:[
            "Wordpress",
            "MySQL"
          ],
          url:'https://desiattachakki.com/',
          images:[],
          metaDescription:`See how ConfiaTech built an e-commerce platform for Desi Atta Chakki using WordPress and WooCommerce with a custom theme for online sales growth`
  
  
        },
        {
          id:4,
          title:"Host App",
          image:`${window.location.origin}/assets/portfolio/hostApp.jpg`,
                    description:`Host App is an innovative solution designed to streamline hotel management and enhance the guest experience. The application allows users to book hotel rooms easily and manage their stay, including accessing services like room service and laundry. Built using Angular for a responsive and interactive front-end, and leveraging Firebase for secure and scalable cloud-based storage, the app offers a seamless experience for both guests and hotel staff.
The system comprises four interconnected applications:
<ol class="tw-list-[square] marker:tw-text-confia-dark-green marker:tw-text-3xl">
<li><b>User App:</b> Guests can log in, explore available rooms, book their stay, and request services like room cleaning or laundry.</li>
<li><b>Service Worker App:</b> Workers receive and complete assigned tasks efficiently, ensuring prompt service for guests.</li>
<li><b>Manager App:</b> Managers oversee all tasks, assign orders to workers, and ensure smooth operations.</li>
<li><b>Admin App:</b> Administrators manage hotel details, including room availability, pricing, and staff assignments.</li>
</ol>
The application is deployed using cloud hosting on Firebase, ensuring reliability, fast performance, and real-time updates. Firebase’s robust features, such as push notifications and secure data handling, enhance communication between guests and hotel staff.
Host App is a comprehensive solution that simplifies hotel operations, improves service delivery, and ensures a comfortable and hassle-free experience for guests. It’s the perfect digital tool for modern hospitality management.
`,
          technologies:[
            "Angular",
            "Bootstrap",
            "Firebase"
          ],
          url:'',
          images:[],
          metaDescription:`Learn about My Host App, a hotel management solution using Angular, Firebase, and cloud hosting to streamline bookings and services.`
  
  
        },
        {
          id:5,
          title:"Impirium",
          image:`${window.location.origin}/assets/portfolio/impirum.jpg`,
                    description:`Impirium is a web platform designed to keep user data and interactions safe while delivering a smooth and easy-to-use experience. Built with Angular for the front-end and Django for the back-end, it combines modern technology with strong security features.
The platform includes advanced protections like multi-factor authentication, data encryption, secure session management, and role-based access control. These features ensure that users’ information stays safe and protected from cyber threats.
With the help of REST APIs, Impirium connects easily with other systems, making it flexible and powerful for various needs. It uses shared hosting, which keeps costs low while ensuring reliable performance and easy maintenance.
The user interface, powered by Angular, is designed to be simple and smooth, making it easy for anyone to navigate. The Django back-end ensures that the platform runs securely and efficiently, giving users a safe and seamless experience.
Impirium is the perfect solution for businesses and organizations that need a secure, reliable platform to protect their data while providing an excellent user experience.
`,
          technologies:[
            "Angular",
            "Tailwind",
            
          ],
          url:'https://impirium.pakdiagnostic.com/',
          images:[],
          metaDescription:`Discover Impirium, a security-focused web app built with Angular and Django, offering advanced protection with AWS deployment.`
  
  
        },
        {
          id:6,
          title:"Kazaroo",
          image:`${window.location.origin}/assets/portfolio/kazaroo.jpg`,
                    description:`Kazaroo is an innovative web platform that connects Owners, Visitors, and Artists in one seamless ecosystem. Built with Angular for a responsive front-end and ASP.NET for a secure and efficient back-end, the platform offers a modern and user-friendly experience.
The platform is designed using the Onion Architecture, which ensures a highly modular and maintainable codebase. This architecture separates concerns into layers, making the platform more scalable, easier to test, and simpler to update as business needs evolve. For instance, business logic remains independent of the user interface, allowing for flexibility in integrating new features without affecting existing ones.
Kazaroo also leverages Cloud Functions, enabling efficient serverless operations for tasks like real-time notifications, automated workflows, and seamless data processing. These functions reduce server load and enhance performance, providing a smooth experience for all users.
Hosted on Azure, Kazaroo guarantees reliability, scalability, and top-notch security. The platform empowers Owners to effortlessly list products, Visitors to enjoy a hassle-free shopping experience, and Artists to showcase their creative work to a wider audience.
With a powerful combination of Angular, ASP.NET, Onion Architecture, and Cloud Functions, Kazaroo stands as a robust and versatile platform. Explore it today at Kazaroo and join a community where creativity meets innovation.
`,
          technologies:[
            "Angular",
            "Bootstrap",
            "SQL Server",
            "ASP.net",
            
          ],
          url:"https://guest.kazaroo.app/accommodation/9027d67f-376e-4626-16f3-08dc4fea1631",
          images:[],
          metaDescription:`Explore Kazaroo, a versatile platform connecting owners, visitors, and artists, built with Angular, ASP.NET, and deployed on Azure.`
  
  
        },
        {
          id:7,
          title:"Loom Centric",
          image:`${window.location.origin}/assets/portfolio/loomCentric.jpg`,
                    description:`Loom Centric is a comprehensive web application designed to make social media management simple and efficient. Built with Angular for the front-end and Django for the back-end, this platform enables users to schedule and automate posts across multiple platforms, including Facebook, Instagram, Twitter, LinkedIn, Pinterest, Google My Business, and TikTok.
The app seamlessly integrates with Meta APIs, TikTok APIs, LinkedIn APIs, Pinterest APIs, and Twitter APIs, providing a unified solution to streamline your social media operations. Whether you’re managing posts for a single brand or multiple accounts, Loom Centric ensures consistency and helps you engage effectively with your audience.
With deployment powered by AWS EC2, the platform delivers unmatched reliability, scalability, and security, ensuring smooth performance even during peak usage. The user-friendly interface, designed using Angular, offers intuitive navigation, making it accessible for both beginners and professionals. Meanwhile, the Django back-end ensures robust functionality and secure data handling.
Loom Centric helps users save time by automating repetitive tasks while maintaining a consistent online presence. It is the perfect tool for businesses and influencers looking to optimize their social media strategy and boost engagement.
`,
          technologies:[
            "Angular",
            "Bootstrap",
            "Postgres SQL",
            "Django",
            
          ],
          url:'https://app.loomcentric.com',
          images:[],
          metaDescription:`See Loom Centric, a social media management app for scheduling posts across platforms, built with Angular, Django, and AWS deployment`
  
  
        },
        {
          id:8,
          title:"My Coverage Plan",
          image:`${window.location.origin}/assets/portfolio/mcp.jpg`,
                    description:`My Coverage Plan is a powerful web application designed to help users find the right medical insurance plans tailored to their needs. Built with Angular for the front-end and a Headless CMS for content management, the platform offers a fully customized user interface that is both intuitive and visually appealing.
The application is focused on easing the process of exploring, comparing, and selecting insurance plans, ensuring users avoid the financial burden of medical debt. With seamless navigation and a user-friendly design, My Coverage Plan makes it simple to find and understand the best options for healthcare coverage.
The back-end is hosted on AWS Cloud Hosting, providing a secure, scalable, and reliable foundation for the platform. This ensures fast loading times and uninterrupted access for users, even during high traffic periods.
Using the flexibility of a Headless CMS, the platform delivers personalized experiences by dynamically presenting relevant content and recommendations. The Angular-powered interface ensures smooth performance and effortless usability across devices.
My Coverage Plan is the ultimate solution for anyone seeking financial security and peace of mind in their healthcare journey. It combines advanced technology with user-centric design to transform the way people choose medical insurance.
`,
          technologies:[
            "Angular",
            "Tailwind",
            "Postgres SQL",
            "Payload CMS",
            "Nodejs",
            
          ],
          url:'https://advocus.confiatech.com/',
          images:[],
          metaDescription:`Discover My Coverage Plan, a user-friendly web app for customizing medical insurance, built with Angular, Headless CMS, and AWS hosting.`
  
  
        },
        {
          id:9,
          title:"Nug By Hassaan",
          image:`${window.location.origin}/assets/portfolio/nbh.jpg`,
                    description:`𝗡𝘂𝗴𝗕𝘆𝗛𝗮𝘀𝘀𝗮𝗻 is an elegant e-commerce platform that brings high-end artificial jewelry to life. Designed with a focus on beauty and functionality, the website offers a seamless shopping experience. Built using WordPress, the platform combines intuitive navigation with visually stunning product displays, making it easy for customers to explore and purchase their favorite pieces.
The site architecture is carefully optimized for speed and performance, ensuring quick load times and a hassle-free browsing experience. From product discovery to checkout, every step of the user journey is designed to be smooth and enjoyable, reflecting the sophistication of the jewelry collection.
Deployed on AWS, the platform benefits from reliable and secure cloud hosting, offering scalability and consistent performance even during high traffic periods. This ensures customers can shop confidently without interruptions, whether they're browsing or making purchases.
𝗡𝘂𝗴𝗕𝘆𝗛𝗮𝘀𝘀𝗮𝗻 goes beyond being just an online store—it’s a digital showcase of artistry and craftsmanship. By blending technology with stunning design, the platform elevates the online shopping experience, making it a delight for customers. Discover the perfect combination of style, elegance, and functionality with NugByHassan
`,
          technologies:[
            "Wordpress",
           
            
          ],
          url:'https://nugbyhassaan.com/',
          images:[],
          metaDescription:`Explore Nug By Hassaan, an e-commerce website for high-end artificial jewelry, built with WordPress and hosted on shared hosting`
  
  
        },
        {
          id:10,
          title:"New to the street",
          image:`${window.location.origin}/assets/portfolio/ntts.jpg`,
                    description:`New to the Street is an impressive addition to ConfiaTech's web portfolio, designed to keep users informed with the latest news, exclusive interviews, and insightful content. Built using React for a modern and responsive front-end and ASP.NET for a secure and efficient back-end, the platform provides a seamless user experience.
Covering a wide range of industries, including biopharmaceuticals, leadership, and more, New to the Street ensures users stay updated on the topics that matter most. The platform’s clean design and intuitive navigation make it easy to explore articles, interviews, and industry insights tailored to your interests.
Deployed on Azure, the platform benefits from reliable performance, scalability, and advanced security. Whether it’s during high traffic periods or routine browsing, users can count on a fast and consistent experience.
New to the Street combines cutting-edge technology with high-quality content, making it a trusted source for staying ahead in various industries. Its dynamic interface, powered by React, ensures that the latest stories and updates are always accessible, while ASP.NET guarantees robust functionality behind the scenes.
For anyone seeking fresh perspectives and valuable information, New to the Street is the go-to platform for knowledge and inspiration.
`,
          technologies:[
            "Angular",
            "Bootstrap",
           
           
            
          ],
          url:'',
          images:[],
          metaDescription:`Learn about New to the Street, a content-driven platform for industry news and insights, built with Angular, and AWS deployment.`
  
  
        },
      
        {  id:11,
          title:"Play Local",
          image:`${window.location.origin}/assets/portfolio/playlocal.jpg`,
                    description:`PlayLocal is a versatile app designed to let users download videos and audio from popular platforms like Facebook, Instagram, YouTube, and TikTok. Once downloaded, users can play the content directly on their local device, offering a seamless way to enjoy media offline.
The application was developed using React for a responsive and intuitive front-end experience and Python Flask for the back-end, ensuring smooth performance and secure functionality. The app’s clean interface makes it easy for users to navigate, select, and download their favorite media files effortlessly.
To optimize cost and accessibility, PlayLocal is hosted on shared hosting, providing reliable and affordable infrastructure for small to medium-scale usage. Shared hosting ensures the platform remains accessible to users while keeping operational expenses minimal.
PlayLocal stands out with its ability to handle downloads from multiple platforms and play content directly on the user’s device. It eliminates the need for third-party tools and offers an all-in-one solution for managing and enjoying downloaded media.
Whether you want to save content for offline use or create a personal media library, PlayLocal is the ultimate app for all your downloading needs, combining powerful technology with ease of use.
`,
          technologies:[
            "Flutter",
            "Dart",
           
           
            
          ],
          url:'',
          images:[],
          metaDescription:`Discover Play Local, a media downloader app for videos and audio from platforms like YouTube and TikTok, built with Flask,and Flutter.`
  
  
        },
        {
          id:12,
          title:"Presentation Stack",
          image:`${window.location.origin}/assets/portfolio/pstack.jpg`,
                    description:`Presentation Stack is an innovative web application designed to simplify the process of creating professional and visually appealing presentations. Built with React for the front-end and ASP.NET for the back-end, this platform combines modern technology with an intuitive user interface, allowing users to customize and purchase templates effortlessly.
The application offers a diverse library of pre-designed templates tailored for various industries and occasions, such as business, education, marketing, and more. Users can browse through the extensive collection, select a template that fits their needs, and personalize it without requiring any design skills or expensive software.
Key features like drag-and-drop functionality and easy-to-use customization tools ensure a seamless experience for users, whether they're creating a corporate presentation, educational slides, or promotional materials. The platform is ideal for anyone looking to save time while achieving professional results.
Hosted on AWS, Presentation Stack ensures secure, reliable, and scalable performance. The robust cloud infrastructure guarantees quick load times and uninterrupted access, even during peak usage.
Presentation Stack is the perfect solution for professionals, educators, and marketers seeking high-quality, customizable presentation templates. Experience the future of presentations today with Presentation Stack, where design meets simplicity.
`,
          technologies:[
            "Angular",
            "Bootstrap",
            "Material",
            "PrimeNg",
            "Django",
            "MySQL",
           
           
           
            
          ],
          url:'',
          images:[],
          metaDescription:`Explore Presentation Stack, a platform for customizable templates, built with React, ASP.NET, and deployed on AWS for seamless performance.`
  
        },
        {
          id:13,
          title:"Visu",
          image:`${window.location.origin}/assets/portfolio/visu.jpg`,
                    description:`VISU is an innovative web application that revolutionizes the advertising landscape by seamlessly connecting advertisers, users, and audiences. Designed to deliver a balanced and efficient ecosystem, VISU empowers advertisers with flexible models while rewarding users for their engagement.
Built with Angular for the front-end and Django for the back-end, VISU ensures a modern and user-friendly interface paired with secure and robust functionality. This combination allows advertisers to easily create and manage campaigns while ensuring users have a smooth and engaging experience.
VISU focuses on fair distribution and meaningful engagement, helping advertisers achieve their goals in a cost-effective manner. The platform’s unique approach ensures ads reach the right audience, maximizing value and impact. By rewarding users for their participation, VISU creates a win-win environment that fosters trust and interaction.
Hosted on AWS, the platform benefits from scalable cloud infrastructure, delivering high performance, reliability, and data security. With fast load times and uninterrupted service, VISU ensures an optimal experience for all users, whether they are creating campaigns or engaging with content.
VISU redefines advertising by combining advanced technology with a fair and engaging model. Explore the future of advertising today at VISU, where connection, innovation, and results come together.`,
          technologies:[
            "Angular",
            "Bootstrap",
            "Material",
            "PrimeNg",
            "Django",
            "PostgresSQL",
           
           
            
          ],
          url:'https://app.visu.network',
          images:[],
          metaDescription:`See VISU, an innovative advertising platform connecting users and advertisers, built with Angular, Django, and AWS for secure deployment.`
  
  
        },  {
          id:14,
          title:"Sequest Consulting",
          image:`${window.location.origin}/assets/portfolio/sequest.jpg`,
                    description:`Sequest Consulting specializes in helping manufacturing enterprises transition smoothly to Infor LN. Using an agile methodology, template-based implementation, and business process optimization, Sequest ensures a quick and efficient migration tailored to the unique needs of each business.
Built with Angular for the front-end and Django for the back-end, the platform delivers a responsive and user-friendly interface, coupled with robust functionality. This modern technology stack ensures that Sequest Consulting’s solutions are both efficient and scalable, meeting the demands of today’s dynamic manufacturing environment.
The migration process is supported by well-structured templates that streamline implementation, reducing downtime and ensuring a seamless transition. With a focus on business process optimization, Sequest Consulting helps enterprises unlock the full potential of Infor LN, improving operational efficiency and productivity.
Deployed on AWS, the platform leverages the cloud’s scalability and reliability to handle complex migrations with ease. AWS provides secure hosting, ensuring data integrity and fast performance, even during large-scale operations.
Sequest Consulting is the trusted partner for manufacturing businesses looking to modernize their processes with Infor LN. By combining cutting-edge technology, agile practices, and industry expertise, Sequest delivers solutions that drive success. Transform your manufacturing operations with Sequest Consulting today.

`,
          technologies:[
            "Angular",
            "Bootstrap",
           
           
            
          ],
          url:'https://sequest-consulting.com',
          images:[],
          metaDescription:`Discover Sequest Consulting, a web app for rapid migration to Infor LN, using Angular, Django, and AWS to optimize business processes.`
  
  
        },
      ]
    }else{
      return [];
    }
  
  }
}
export interface portfolio  {
  id:number,
title:string,
image:string,
description:string,
technologies:string[],
url:string,
images:string[],
metaDescription:string
  
}
