import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { ThemeService } from '../services/theme';

@Component({
  selector: 'app-achievements',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, MatIconModule],
  template: `
    <section 
      id="achievements" 
      class="relative py-24 transition-colors duration-300
             dark:bg-bg-dark bg-bg-light"
    >
      <!-- Background subtle graphics -->
      <div class="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_bottom_right,rgba(99,102,241,0.03),transparent_40%)] pointer-events-none"></div>

      <div class="max-w-6xl mx-auto px-6 relative z-10">
        
        <!-- Section Header -->
        <div class="text-center md:text-left mb-16">
          <p class="text-xs font-bold uppercase tracking-widest text-accent-indigo dark:text-accent-cyan mb-2">My Milestones</p>
          <h2 class="text-3xl md:text-4xl font-extrabold font-display tracking-tight text-neutral-950 dark:text-white">
            Honors & Achievements
          </h2>
          <div class="h-1 w-12 bg-accent-blue mt-3 rounded-full mx-auto md:mx-0"></div>
          <p class="text-sm text-neutral-500 dark:text-neutral-400 mt-4 max-w-xl">
            Key professional highlights, technical contest recognitions, and consistency markers in my engineering journey.
          </p>
        </div>

        <!-- Bento Grid for Achievements -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          @for (ach of achievementsList; track ach.title) {
            <div 
              class="group relative rounded-3xl p-6 border transition-all duration-300 flex flex-col justify-between overflow-hidden
                     dark:glass-panel-dark dark:border-white/5 dark:hover:border-accent-indigo/30
                     glass-panel-light border-black/5 hover:border-accent-indigo/20 hover:shadow-xl"
            >
              <!-- Small accent blob inside card -->
              <div class="absolute -bottom-8 -right-8 w-20 h-20 rounded-full bg-accent-indigo/5 filter blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

              <div>
                <!-- Top Badge and Icon -->
                <div class="flex items-center justify-between mb-5">
                  <div class="p-3 rounded-2xl bg-gradient-to-tr from-accent-indigo/10 to-accent-blue/5 border dark:border-white/10 border-black/5">
                    <mat-icon class="text-accent-indigo dark:text-accent-cyan !w-6 !h-6 !text-2xl flex items-center justify-center">{{ ach.icon }}</mat-icon>
                  </div>
                  <span class="text-[10px] font-mono font-semibold uppercase tracking-wider text-neutral-400 dark:text-neutral-500">
                    {{ ach.tag }}
                  </span>
                </div>

                <!-- Title -->
                <h3 class="text-lg font-bold font-display text-neutral-950 dark:text-white mb-2 group-hover:text-accent-indigo dark:group-hover:text-accent-cyan transition-colors duration-200">
                  {{ ach.title }}
                </h3>

                <!-- Subtitle / Meta -->
                <p class="text-xs font-mono font-medium text-neutral-500 dark:text-neutral-400 mb-4">
                  {{ ach.meta }}
                </p>

                <!-- Description -->
                <p class="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed mb-4">
                  {{ ach.desc }}
                </p>
              </div>

              <!-- Decorator Footnote -->
              <div class="flex items-center gap-1.5 text-[10px] font-semibold text-accent-indigo dark:text-accent-cyan mt-auto">
                <mat-icon class="!w-3 !h-3 !text-xs flex items-center justify-center">verified</mat-icon>
                <span>{{ ach.credential }}</span>
              </div>
            </div>
          }
        </div>

      </div>
    </section>
  `
})
export class Achievements {
  themeService = inject(ThemeService);

  achievementsList = [
    {
      title: '400+ Algorithmic Solves',
      meta: 'LeetCode & CodeChef Solutions',
      tag: 'Problem Solving',
      desc: 'Maintained deep focus in Data Structures and Algorithms, solving optimized challenges targeting greedy heuristics, matrix traversals, and dynamic arrays.',
      icon: 'done_all',
      credential: 'Contest Verified',
    },
    {
      title: 'LeetCode 50-Day Badge',
      meta: 'Consistency Landmark Achievement',
      tag: 'Coding Consistency',
      desc: 'Awarded by LeetCode for solving challenges every single day for over fifty consecutive days, displaying rigorous problem-solving dedication.',
      icon: 'stars',
      credential: 'Verification Issued',
    },
    {
      title: 'Smart India Hackathon Participant',
      meta: 'National Level Hackathon Challenge',
      tag: 'Collaborative Dev',
      desc: 'Participated in a fast-paced coding sprint to deliver client solutions for government department statements, handling active backend REST routes.',
      icon: 'groups',
      credential: 'National Participant',
    },
    {
      title: 'Microsoft Azure Fundamentals',
      meta: 'AZ-900 Certification Milestone',
      tag: 'Cloud Integration',
      desc: 'Validated core knowledge of cloud infrastructure models, virtual resource provisioning, server-to-client networks, and azure security parameters.',
      icon: 'cloud_queue',
      credential: 'Credential ID Provided',
    },
    {
      title: 'IBM Generative AI Certification',
      meta: 'Advanced AI Foundational Training',
      tag: 'Artificial Intelligence',
      desc: 'Obtained comprehensive certification in foundational Large Language Models, prompt tuning vectors, and deployment of cognitive agents.',
      icon: 'psychology',
      credential: 'Certified Expert',
    }
  ];
}
