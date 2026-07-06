import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { ThemeService } from '../services/theme';
import { ProjectCard } from './project-card';

@Component({
  selector: 'app-projects',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, MatIconModule, ProjectCard],
  template: `
    <section 
      id="projects" 
      class="relative py-24 transition-colors duration-300
             dark:bg-bg-dark bg-bg-light"
    >
      <!-- Subtle visual indicator line -->
      <div class="absolute inset-x-0 bottom-0 h-px dark:bg-white/5 bg-black/5"></div>

      <div class="max-w-6xl mx-auto px-6 relative z-10">
        
        <!-- Section Header -->
        <div class="text-center md:text-left mb-16">
          <p class="text-xs font-bold uppercase tracking-widest text-accent-indigo dark:text-accent-cyan mb-2">My Creative Workspace</p>
          <h2 class="text-3xl md:text-4xl font-extrabold font-display tracking-tight text-neutral-950 dark:text-white">
            Featured Projects
          </h2>
          <div class="h-1 w-12 bg-accent-blue mt-3 rounded-full mx-auto md:mx-0"></div>
          <p class="text-sm text-neutral-500 dark:text-neutral-400 mt-4 max-w-xl">
            A selection of hand-crafted systems showcasing architecture patterns, backend integration depth, and strict computer science logic.
          </p>
        </div>

        <!-- Projects Grid -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          @for (proj of projectsList; track proj.title) {
            <div class="h-full">
              <app-project-card
                [title]="proj.title"
                [description]="proj.description"
                [tech]="proj.tech"
                [features]="proj.features"
                [liveUrl]="proj.liveUrl"
                [githubUrl]="proj.githubUrl"
                [icon]="proj.icon"
              ></app-project-card>
            </div>
          }
        </div>

      </div>
    </section>
  `
})
export class Projects {
  themeService = inject(ThemeService);

  projectsList = [
    {
      title: 'Quantity Measurement App',
      description: 'A highly scalable quantity measurement web application constructed using Java Spring Boot microservices. It features fully separated modules, centralized client UI integration, and secure authorization protocols to standardise engineering units.',
      tech: ['Java', 'Spring Boot', 'Microservices', 'REST APIs', 'Angular', 'Google OAuth2', 'Eureka Server', 'API Gateway'],
      features: [
        'Central Service Discovery with Eureka Server',
        'Secure authorization using Google OAuth2 integration',
        'Decoupled Spring Boot Microservice communication',
        'Central API Gateway for consolidated request routing'
      ],
      liveUrl: 'https://github.com/rudreshsharma533', // simulation url
      githubUrl: 'https://github.com/rudreshsharma533',
      icon: 'architecture'
    },
    {
      title: 'Bank Management System',
      description: 'A transaction-safe banking application built in Java, leveraging MySQL for persistence. It provides a robust, thread-safe console ledger layer that supports ledger updates, transfers, audits, and statements.',
      tech: ['Java', 'MySQL', 'JDBC', 'SQL Queries'],
      features: [
        'Direct relational database connectivity using Java JDBC',
        'ACID transactional safe banking queries',
        'Robust OOP architecture for bank models',
        'Comprehensive CRUD operations for accounts and transactions'
      ],
      liveUrl: null,
      githubUrl: 'https://github.com/rudreshsharma533',
      icon: 'account_balance'
    }
  ];
}
