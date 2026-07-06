import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { ThemeService } from '../services/theme';
import { SkillChip } from './skill-chip';

@Component({
  selector: 'app-skills',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, MatIconModule, SkillChip],
  template: `
    <section 
      id="skills" 
      class="relative py-24 transition-colors duration-300
             dark:bg-bg-dark bg-bg-light"
    >
      <!-- Background glow overlay subtle -->
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(6,182,212,0.03),transparent_40%)] pointer-events-none"></div>

      <div class="max-w-6xl mx-auto px-6 relative z-10">
        
        <!-- Section Header -->
        <div class="text-center md:text-left mb-16">
          <p class="text-xs font-bold uppercase tracking-widest text-accent-indigo dark:text-accent-cyan mb-2">Technical Capabilities</p>
          <h2 class="text-3xl md:text-4xl font-extrabold font-display tracking-tight text-neutral-950 dark:text-white">
            Skills & Expertise
          </h2>
          <div class="h-1 w-12 bg-accent-blue mt-3 rounded-full mx-auto md:mx-0"></div>
          <p class="text-sm text-neutral-500 dark:text-neutral-400 mt-4 max-w-xl">
            A qualitative overview of my technical stack and where they are actively implemented. Hover over any chip to inspect the context.
          </p>
        </div>

        <!-- Skills Grid Layout -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          @for (cat of categories; track cat.title) {
            <div 
              class="rounded-3xl p-6 border transition-all duration-300 group flex flex-col justify-between
                     dark:bg-neutral-900/40 dark:border-white/5 dark:hover:border-white/10
                     bg-white border-black/5 hover:shadow-lg hover:-translate-y-0.5"
            >
              <div>
                <!-- Category Icon and Title -->
                <div class="flex items-center gap-3 mb-3">
                  <div class="p-2.5 rounded-xl bg-accent-indigo/10 text-accent-indigo dark:bg-accent-cyan/10 dark:text-accent-cyan flex items-center justify-center">
                    <mat-icon class="!w-5 !h-5 !text-lg flex items-center justify-center">{{ cat.icon }}</mat-icon>
                  </div>
                  <h3 class="font-display font-bold text-base dark:text-white text-neutral-950 group-hover:text-accent-indigo dark:group-hover:text-accent-cyan transition-colors duration-200">
                    {{ cat.title }}
                  </h3>
                </div>

                <!-- Category Sub-Description -->
                <p class="text-xs text-neutral-500 dark:text-neutral-400 mb-5 leading-relaxed">
                  {{ cat.desc }}
                </p>
              </div>

              <!-- Reusable Chips Group -->
              <div class="flex flex-wrap gap-2.5">
                @for (skill of cat.skills; track skill.name) {
                  <app-skill-chip 
                    [name]="skill.name" 
                    [icon]="skill.icon" 
                    [usedIn]="skill.usedIn"
                  ></app-skill-chip>
                }
              </div>
            </div>
          }
        </div>

      </div>
    </section>
  `
})
export class Skills {
  themeService = inject(ThemeService);

  categories = [
    {
      title: 'Programming Languages',
      icon: 'code',
      desc: 'Languages used for core algorithmic problem solving and writing robust application components.',
      skills: [
        { name: 'Java', icon: 'coffee', usedIn: ['Quantity Measurement App', 'Bank Management System', '400+ LeetCode Solutions'] },
        { name: 'Python', icon: 'terminal', usedIn: ['AI & ML Modeling', 'Basic Scripting'] }
      ]
    },
    {
      title: 'Enterprise Backend',
      icon: 'settings_suggest',
      desc: 'Architectures, service frameworks, and gateways used to deploy distributed server software.',
      skills: [
        { name: 'Spring Boot', icon: 'bolt', usedIn: ['Quantity Measurement App'] },
        { name: 'REST APIs', icon: 'api', usedIn: ['Quantity Measurement App', 'Bank Management System'] },
        { name: 'Microservices', icon: 'dns', usedIn: ['Quantity Measurement App'] },
        { name: 'OAuth2', icon: 'lock', usedIn: ['Quantity Measurement App'] },
        { name: 'API Gateway', icon: 'router', usedIn: ['Quantity Measurement App'] },
        { name: 'Eureka Server', icon: 'hub', usedIn: ['Quantity Measurement App'] }
      ]
    },
    {
      title: 'Databases & Drivers',
      icon: 'storage',
      desc: 'Database modeling systems, transactional queries, and data mapping drivers.',
      skills: [
        { name: 'MySQL', icon: 'database', usedIn: ['Bank Management System', 'Quantity Measurement App'] },
        { name: 'JDBC', icon: 'settings_input_hdmi', usedIn: ['Bank Management System'] },
        { name: 'SQL', icon: 'find_in_page', usedIn: ['Bank Management System', 'Quantity Measurement App'] }
      ]
    },
    {
      title: 'Core Computer Science',
      icon: 'architecture',
      desc: 'Core theoretical subjects enabling highly optimized logic, clean code, and database normalization.',
      skills: [
        { name: 'DSA', icon: 'reorder', usedIn: ['400+ LeetCode problems', 'Competitive Coding'] },
        { name: 'OOP', icon: 'category', usedIn: ['Bank Management System', 'Quantity Measurement App'] },
        { name: 'DBMS', icon: 'grid_on', usedIn: ['Bank Management System', 'Quantity Measurement App'] }
      ]
    },
    {
      title: 'Utilities & Editors',
      icon: 'construction',
      desc: 'Integrated development environments, endpoint clients, and standard version controllers.',
      skills: [
        { name: 'Git & GitHub', icon: 'source', usedIn: ['Version Control', 'Project Hosting'] },
        { name: 'Postman', icon: 'settings_ethernet', usedIn: ['REST API Testing', 'Authorization Testing'] },
        { name: 'IntelliJ IDEA', icon: 'wysiwyg', usedIn: ['Java and Spring Boot coding'] },
        { name: 'VS Code', icon: 'integration_instructions', usedIn: ['Angular Frontend & CSS layout'] },
        { name: 'STS', icon: 'tune', usedIn: ['Spring Integration and Discovery'] }
      ]
    },
    {
      title: 'Cloud Platforms',
      icon: 'cloud',
      desc: 'Cloud systems and hosting infrastructures facilitating server deployments.',
      skills: [
        { name: 'Azure Fundamentals', icon: 'cloud_queue', usedIn: ['AZ-900 Certified Solutions'] }
      ]
    }
  ];
}
