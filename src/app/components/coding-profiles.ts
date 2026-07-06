import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { ThemeService } from '../services/theme';

@Component({
  selector: 'app-coding-profiles',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, MatIconModule],
  template: `
    <section 
      id="profiles" 
      class="relative py-24 transition-colors duration-300
             dark:bg-bg-dark bg-bg-light"
    >
      <div class="max-w-6xl mx-auto px-6 relative z-10">
        
        <!-- Section Header -->
        <div class="text-center md:text-left mb-16">
          <p class="text-xs font-bold uppercase tracking-widest text-accent-indigo dark:text-accent-cyan mb-2">Network & Analytics</p>
          <h2 class="text-3xl md:text-4xl font-extrabold font-display tracking-tight text-neutral-950 dark:text-white">
            Developer Profiles
          </h2>
          <div class="h-1 w-12 bg-accent-blue mt-3 rounded-full mx-auto md:mx-0"></div>
          <p class="text-sm text-neutral-500 dark:text-neutral-400 mt-4 max-w-xl">
            My active handles on global coding pipelines, algorithmic repositories, and professional networks.
          </p>
        </div>

        <!-- Coding Profiles Grid -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          @for (p of profiles; track p.platform) {
            <div 
              class="group relative rounded-3xl p-6 border transition-all duration-300 flex flex-col justify-between overflow-hidden
                     dark:glass-panel-dark dark:border-white/5 dark:hover:border-accent-cyan/30
                     glass-panel-light border-black/5 hover:shadow-xl hover:-translate-y-0.5"
            >
              <!-- Ambient Hover Color Accents -->
              <div class="absolute -bottom-10 -right-10 w-24 h-24 rounded-full filter blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" [class]="p.pColorAccent"></div>

              <div>
                <!-- Top Section -->
                <div class="flex items-center justify-between mb-5">
                  <div class="flex items-center gap-3">
                    <div class="p-2.5 rounded-xl text-white flex items-center justify-center font-bold font-mono text-sm shadow-sm" [class]="p.logoBg">
                      {{ p.logoText }}
                    </div>
                    <div>
                      <h3 class="font-display font-bold text-base text-neutral-950 dark:text-white leading-tight">
                        {{ p.platform }}
                      </h3>
                      <!-- Small handle with click-to-copy -->
                      <button 
                        (click)="copyHandle(p.username)"
                        class="text-xs font-mono text-neutral-500 dark:text-neutral-400 hover:text-accent-indigo dark:hover:text-accent-cyan flex items-center gap-1 transition-colors duration-200 mt-0.5 cursor-pointer"
                        title="Copy username"
                      >
                        <span>&#64;{{ p.username }}</span>
                        <mat-icon class="!w-3 !h-3 !text-[10px] flex items-center justify-center">content_copy</mat-icon>
                      </button>
                    </div>
                  </div>
                </div>

                <!-- Descriptive metric / placeholder stat -->
                <div class="p-4 rounded-2xl dark:bg-white/5 bg-neutral-100/50 border dark:border-white/5 border-black/5 mb-6">
                  <div class="flex justify-between items-center text-xs">
                    <span class="text-neutral-500 dark:text-neutral-400 font-medium">{{ p.metricLabel }}</span>
                    <span class="font-mono font-bold text-neutral-950 dark:text-white" [class]="p.metricClass">{{ p.metricValue }}</span>
                  </div>
                  @if (p.secondaryMetricValue) {
                    <div class="flex justify-between items-center text-xs mt-2 pt-2 border-t dark:border-white/5 border-black/5">
                      <span class="text-neutral-500 dark:text-neutral-400 font-medium">{{ p.secondaryMetricLabel }}</span>
                      <span class="font-mono font-bold text-neutral-600 dark:text-neutral-300 text-[11px]">{{ p.secondaryMetricValue }}</span>
                    </div>
                  }
                </div>
              </div>

              <!-- CTA Visit Profile -->
              <a 
                [href]="p.link" 
                target="_blank"
                class="flex items-center justify-center gap-1.5 w-full py-2.5 rounded-xl text-xs font-semibold border transition-all duration-300
                       dark:border-white/10 dark:text-neutral-300 dark:hover:bg-white/5 dark:hover:border-accent-cyan/30
                       border-neutral-300 text-neutral-700 hover:bg-neutral-50 hover:border-accent-indigo/30"
              >
                <mat-icon class="!w-4 !h-4 !text-base flex items-center justify-center">link</mat-icon>
                Visit Profile
              </a>

            </div>
          }
        </div>

      </div>
    </section>
  `
})
export class CodingProfiles {
  themeService = inject(ThemeService);

  profiles = [
    {
      platform: 'GitHub',
      username: 'rudreshsharma533',
      logoText: 'GH',
      logoBg: 'bg-neutral-900 dark:bg-neutral-800',
      metricLabel: 'Academic Contributions',
      metricValue: '400+ Solves',
      metricClass: 'text-emerald-500 dark:text-emerald-400',
      secondaryMetricLabel: 'Primary Repositories',
      secondaryMetricValue: '2 Core Architectures',
      link: 'https://github.com/rudreshsharma533',
      pColorAccent: 'bg-neutral-500/10'
    },
    {
      platform: 'LeetCode',
      username: 'rudreshsharma',
      logoText: 'LC',
      logoBg: 'bg-amber-600',
      metricLabel: 'Challenges Solved',
      metricValue: '400+ Problems',
      metricClass: 'text-amber-500 dark:text-amber-400',
      secondaryMetricLabel: 'Landmark Consistency',
      secondaryMetricValue: '50-Day Streak Badge',
      link: 'https://leetcode.com/u/rudreshsharma533/',
      pColorAccent: 'bg-amber-500/10'
    },
    {
      platform: 'CodeChef',
      username: 'rudresh_533',
      logoText: 'CC',
      logoBg: 'bg-orange-800',
      metricLabel: 'Contest Star Rank',
      metricValue: '2-Star Coder',
      metricClass: 'text-orange-500 dark:text-orange-400',
      secondaryMetricLabel: 'Contest Max Rating',
      secondaryMetricValue: '1400+ Score',
      link: 'https://www.codechef.com/users/rudresh_533',
      pColorAccent: 'bg-orange-500/10'
    },
    {
      platform: 'Codeforces',
      username: 'rudresh533',
      logoText: 'CF',
      logoBg: 'bg-blue-600',
      metricLabel: 'Contest Rank',
      metricValue: 'Pupil',
      metricClass: 'text-blue-500 dark:text-blue-400',
      secondaryMetricLabel: 'Contest Max Rating',
      secondaryMetricValue: '1000+ Rating',
      link: 'https://codeforces.com/profile/rudresh533',
      pColorAccent: 'bg-blue-500/10'
    },
    {
      platform: 'LinkedIn',
      username: 'rudresh-sharma',
      logoText: 'IN',
      logoBg: 'bg-indigo-600',
      metricLabel: 'Professional Contacts',
      metricValue: '500+ Conn.',
      metricClass: 'text-indigo-500 dark:text-indigo-400',
      secondaryMetricLabel: 'Domain Specialties',
      secondaryMetricValue: 'Java, Microservices, AI/ML',
      link: 'https://linkedin.com/in/rudreshsharma533',
      pColorAccent: 'bg-indigo-500/10'
    },
    {
      platform: 'Portfolio',
      username: 'rudresh.dev',
      logoText: 'PF',
      logoBg: 'bg-cyan-600',
      metricLabel: 'Framework Engine',
      metricValue: 'Angular 21',
      metricClass: 'text-cyan-500 dark:text-cyan-400',
      secondaryMetricLabel: 'Rendering Node',
      secondaryMetricValue: 'Server Side Rendered (SSR)',
      link: '#hero',
      pColorAccent: 'bg-cyan-500/10'
    }
  ];

  copyHandle(text: string) {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(text);
      alert(`Copied @${text} to clipboard!`);
    }
  }
}
