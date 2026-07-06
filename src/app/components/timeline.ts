import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { ThemeService } from '../services/theme';

@Component({
  selector: 'app-timeline',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, MatIconModule],
  template: `
    <section 
      id="timeline" 
      class="relative py-24 transition-colors duration-300
             dark:bg-bg-dark bg-bg-light"
    >
      <!-- Background mesh circles for high-quality artistic rhythm -->
      <div class="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-accent-blue/5 rounded-full filter blur-[100px] pointer-events-none"></div>

      <div class="max-w-6xl mx-auto px-6 relative z-10">
        
        <!-- Section Header -->
        <div class="text-center md:text-left mb-20">
          <p class="text-xs font-bold uppercase tracking-widest text-accent-indigo dark:text-accent-cyan mb-2">My Journey</p>
          <h2 class="text-3xl md:text-4xl font-extrabold font-display tracking-tight text-neutral-950 dark:text-white">
            Experience & Milestone Timeline
          </h2>
          <div class="h-1 w-12 bg-accent-blue mt-3 rounded-full mx-auto md:mx-0"></div>
          <p class="text-sm text-neutral-500 dark:text-neutral-400 mt-4 max-w-xl">
            A linear progression charting my academic foundations, algorithmic self-education, and backend architectural development.
          </p>
        </div>

        <!-- Vertical Timeline Tree -->
        <div class="relative min-h-[500px] pl-6 md:pl-0">
          
          <!-- Central Connecting Line (Desktop) or Left Line (Mobile) -->
          <div class="absolute top-0 bottom-0 left-[27px] md:left-1/2 w-0.5 -translate-x-1/2
                      dark:bg-gradient-to-b dark:from-accent-indigo/60 dark:via-accent-blue/40 dark:to-accent-cyan/10
                      bg-gradient-to-b from-accent-indigo/40 via-accent-blue/20 to-accent-cyan/10"></div>

          <!-- Timeline Items Loop -->
          <div class="space-y-12">
            @for (node of timelineNodes; track node.year; let idx = $index; let odd = $odd) {
              <div class="relative flex flex-col md:flex-row items-start md:items-center justify-between">
                
                <!-- Dot Marker on Central Line -->
                <div 
                  class="absolute left-0 md:left-1/2 w-10 h-10 -translate-x-[12px] md:-translate-x-1/2 rounded-full border-4 flex items-center justify-center z-20 transition-all duration-300
                         dark:bg-neutral-950 dark:border-neutral-900 group-hover:scale-110 shadow-lg
                         bg-white border-neutral-100"
                >
                  <mat-icon class="text-accent-indigo dark:text-accent-cyan !w-4 !h-4 !text-base flex items-center justify-center">{{ node.icon }}</mat-icon>
                </div>

                <!-- Left Content Spacer (or actual card on desktop if odd) -->
                <div class="w-full md:w-[45%] hidden md:block" [class.order-1]="odd" [class.order-3]="!odd">
                  @if (!odd) {
                    <div class="text-right pr-6">
                      <span class="font-mono text-xs font-bold uppercase tracking-wider text-accent-indigo dark:text-accent-cyan">{{ node.subtitle }}</span>
                      <h4 class="text-4xl font-black text-neutral-300 dark:text-neutral-800 leading-none mt-1">{{ node.year }}</h4>
                    </div>
                  } @else {
                    <div 
                      class="rounded-3xl p-6 border transition-all duration-300 text-left
                             dark:bg-neutral-900/50 dark:border-white/5 dark:hover:border-accent-cyan/20
                             bg-white border-black/5 hover:shadow-xl"
                    >
                      <div class="flex items-center gap-2 mb-2">
                        <span class="px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider rounded-full bg-accent-indigo/10 dark:bg-accent-cyan/10 text-accent-indigo dark:text-accent-cyan">
                          {{ node.year }}
                        </span>
                        <span class="text-xs font-mono font-medium text-neutral-500">{{ node.subtitle }}</span>
                      </div>
                      <h3 class="text-lg font-bold font-display text-neutral-950 dark:text-white mb-2">{{ node.title }}</h3>
                      <p class="text-xs leading-relaxed text-neutral-600 dark:text-neutral-400">{{ node.desc }}</p>
                    </div>
                  }
                </div>

                <!-- Right Content Spacer (or actual card on desktop if even) -->
                <div class="w-full md:w-[45%] pl-8 md:pl-0" [class.order-3]="odd" [class.order-1]="!odd">
                  @if (odd) {
                    <div class="text-left pl-6 hidden md:block">
                      <span class="font-mono text-xs font-bold uppercase tracking-wider text-accent-indigo dark:text-accent-cyan">{{ node.subtitle }}</span>
                      <h4 class="text-4xl font-black text-neutral-300 dark:text-neutral-800 leading-none mt-1">{{ node.year }}</h4>
                    </div>
                  } @else {
                    <div 
                      class="rounded-3xl p-6 border transition-all duration-300 text-left
                             dark:bg-neutral-900/50 dark:border-white/5 dark:hover:border-accent-cyan/20
                             bg-white border-black/5 hover:shadow-xl"
                    >
                      <div class="flex items-center gap-2 mb-2">
                        <span class="px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider rounded-full bg-accent-indigo/10 dark:bg-accent-cyan/10 text-accent-indigo dark:text-accent-cyan">
                          {{ node.year }}
                        </span>
                        <span class="text-xs font-mono font-medium text-neutral-500">{{ node.subtitle }}</span>
                      </div>
                      <h3 class="text-lg font-bold font-display text-neutral-950 dark:text-white mb-2">{{ node.title }}</h3>
                      <p class="text-xs leading-relaxed text-neutral-600 dark:text-neutral-400">{{ node.desc }}</p>
                    </div>
                  }

                  <!-- Mobile Fallback Card (shown on mobile regardless of idx, because columns collapse) -->
                  <div 
                    class="rounded-3xl p-5 border transition-all duration-300 text-left md:hidden mt-2
                           dark:bg-neutral-900/50 dark:border-white/5
                           bg-white border-black/5"
                  >
                    <div class="flex items-center gap-2 mb-2">
                      <span class="px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider rounded-full bg-accent-indigo/10 dark:bg-accent-cyan/10 text-accent-indigo dark:text-accent-cyan">
                        {{ node.year }}
                      </span>
                      <span class="text-xs font-mono font-medium text-neutral-500">{{ node.subtitle }}</span>
                    </div>
                    <h3 class="text-base font-bold font-display text-neutral-950 dark:text-white mb-1.5">{{ node.title }}</h3>
                    <p class="text-xs leading-relaxed text-neutral-600 dark:text-neutral-400">{{ node.desc }}</p>
                  </div>
                </div>

              </div>
            }
          </div>

        </div>

      </div>
    </section>
  `
})
export class Timeline {
  themeService = inject(ThemeService);

  timelineNodes = [
    {
      year: '2022',
      subtitle: 'Academic Induction',
      title: 'Commenced B.Tech CS (AI & ML)',
      desc: 'Enrolled at Technocrats Institute of Technology Excellence. Laid structural foundation in discrete math, systems, and foundational engineering principles.',
      icon: 'school'
    },
    {
      year: '2023',
      subtitle: 'Language Acquisition',
      title: 'Discovered OOP & Java Ecosystem',
      desc: 'Mastered Java core mechanics, memory mapping, garbage collection, collections framework, and multi-threaded concurrency models.',
      icon: 'integration_instructions'
    },
    {
      year: '2024 (Early)',
      subtitle: 'Algorithmic Competence',
      title: 'Algorithmic Self-Education & DSA',
      desc: 'Solved over 400+ complex challenges on LeetCode and CodeChef. Developed strong intuitions for space/time complexities, sliding windows, and graphs.',
      icon: 'reorder'
    },
    {
      year: '2024 (Late)',
      subtitle: 'System Deployments',
      title: 'Architected Spring Boot Systems',
      desc: 'Designed and implemented the Spring-based Quantity Measurement App using microservices, and built the SQL-safe transactional Bank Management System.',
      icon: 'developer_board'
    },
    {
      year: '2025',
      subtitle: 'Frontend Specialization',
      title: 'Acquired Modern Angular Standards',
      desc: 'Acquired advanced competence in Angular standalone architectures, signals, RxJS reactive pipelines, and Tailwind visual styling.',
      icon: 'desktop_windows'
    },
    {
      year: '2026',
      subtitle: 'Enterprise Preparation',
      title: 'Preparing for Software Engineering Roles',
      desc: 'Finishing up my final academic semester with a strong B.Tech GPA. Preparing for software engineer positions at leading tech firms.',
      icon: 'verified_user'
    }
  ];
}
