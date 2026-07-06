import { ChangeDetectionStrategy, Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { ThemeService } from '../services/theme';

@Component({
  selector: 'app-about',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, MatIconModule],
  template: `
    <section 
      id="about" 
      class="relative py-24 transition-colors duration-300
             dark:bg-bg-dark bg-bg-light"
    >
      <div class="max-w-6xl mx-auto px-6 relative z-10">
        
        <!-- Section Header -->
        <div class="text-center md:text-left mb-16">
          <p class="text-xs font-bold uppercase tracking-widest text-accent-indigo dark:text-accent-cyan mb-2">My Background</p>
          <h2 class="text-3xl md:text-4xl font-extrabold font-display tracking-tight text-neutral-950 dark:text-white">
            About Me
          </h2>
          <div class="h-1 w-12 bg-accent-blue mt-3 rounded-full mx-auto md:mx-0"></div>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          <!-- Left Column: Academic Card / Identity Frame -->
          <div class="lg:col-span-5">
            <div 
              class="rounded-3xl p-6 border transition-all duration-300 relative overflow-hidden
                     dark:glass-panel-dark dark:border-white/10
                     glass-panel-light border-black/5"
            >
              <!-- Decorative border glow -->
              <div class="absolute -top-12 -left-12 w-32 h-32 rounded-full bg-accent-indigo/10 filter blur-xl pointer-events-none"></div>
              
              <div class="flex items-center gap-4 mb-6">
                <div class="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent-indigo to-accent-blue flex items-center justify-center text-white shadow-md">
                  <mat-icon class="!w-7 !h-7 !text-3xl flex items-center justify-center">school</mat-icon>
                </div>
                <div>
                  <h3 class="text-lg font-bold font-display text-neutral-950 dark:text-white leading-tight">Technocrats Institute of Technology Excellence</h3>
                  <p class="text-xs text-neutral-500 dark:text-neutral-400 font-medium">B.Tech in Computer Science (AI & ML)</p>
                </div>
              </div>

              <div class="space-y-4">
                <div class="flex items-center justify-between text-xs py-2 border-b dark:border-white/5 border-black/5">
                  <span class="text-neutral-500 dark:text-neutral-400 font-medium">Duration</span>
                  <span class="font-mono font-semibold dark:text-white text-neutral-900">2022 – 2026</span>
                </div>
                <div class="flex items-center justify-between text-xs py-2 border-b dark:border-white/5 border-black/5">
                  <span class="text-neutral-500 dark:text-neutral-400 font-medium">Current CGPA</span>
                  <span class="font-mono font-semibold dark:text-accent-cyan text-accent-indigo">7.68 / 10.0</span>
                </div>
                <div class="flex items-center justify-between text-xs py-2 border-b dark:border-white/5 border-black/5">
                  <span class="text-neutral-500 dark:text-neutral-400 font-medium">Core Focus</span>
                  <span class="font-semibold dark:text-white text-neutral-900">Backend, Distributed Systems, DSA</span>
                </div>
                <div class="flex items-center justify-between text-xs py-2">
                  <span class="text-neutral-500 dark:text-neutral-400 font-medium">Location</span>
                  <span class="font-semibold dark:text-white text-neutral-900">Bhopal, MP, India</span>
                </div>
              </div>

              <!-- Extra Callout -->
              <div class="mt-6 p-4 rounded-2xl dark:bg-white/5 bg-neutral-100 border dark:border-white/5 border-black/5 text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                <strong class="dark:text-white text-neutral-900 font-semibold">Self-Driven Scholar:</strong> Committed to building performance-oriented backend frameworks. Regularly solving coding contests and working with Spring Cloud architecture.
              </div>
            </div>
          </div>

          <!-- Right Column: Narrative Biography & Counters -->
          <div class="lg:col-span-7 space-y-8">
            <div class="prose dark:prose-invert">
              <h3 class="text-2xl font-bold font-display text-neutral-950 dark:text-white mb-4">
                Bridging Algorithmic Logic & Distributed Architecture
              </h3>
              <p class="text-neutral-600 dark:text-neutral-400 leading-relaxed mb-4">
                As a Computer Science undergraduate specializing in Artificial Intelligence & Machine Learning, I found my true passion in backend system engineering. I have spent the last few years mastering the core components of the Java enterprise ecosystem, particularly Spring Boot, JDBC, microservice orchestrations, and secure APIs.
              </p>
              <p class="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                Beyond traditional frameworks, I am deeply analytical. I solve algorithmic challenges daily on platforms like LeetCode and CodeChef, maintaining a high standard of code optimization. My ultimate objective is to architect resilient backend services that empower modern applications under heavy loads.
              </p>
            </div>

            <!-- Animated Counters Grid -->
            <div class="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4">
              
              <!-- Problems Card -->
              <div class="p-5 rounded-2xl border dark:glass-panel-dark glass-panel-light dark:border-white/5 border-black/5 text-center flex flex-col justify-center items-center">
                <mat-icon class="text-accent-indigo dark:text-accent-cyan !w-5 !h-5 !text-xl mb-2 flex items-center justify-center">done_all</mat-icon>
                <span class="text-2xl font-black font-mono tracking-tight dark:text-white text-neutral-950">
                  {{ problemsSolved() }}+
                </span>
                <span class="text-[10px] uppercase font-bold tracking-wider text-neutral-500 dark:text-neutral-500 mt-1">
                  DSA Solved
                </span>
              </div>

              <!-- Projects Card -->
              <div class="p-5 rounded-2xl border dark:glass-panel-dark glass-panel-light dark:border-white/5 border-black/5 text-center flex flex-col justify-center items-center">
                <mat-icon class="text-accent-blue dark:text-accent-indigo !w-5 !h-5 !text-xl mb-2 flex items-center justify-center">developer_board</mat-icon>
                <span class="text-2xl font-black font-mono tracking-tight dark:text-white text-neutral-950">
                  {{ projectsCount() }}+
                </span>
                <span class="text-[10px] uppercase font-bold tracking-wider text-neutral-500 dark:text-neutral-500 mt-1">
                  Core Projects
                </span>
              </div>

              <!-- CGPA Card -->
              <div class="p-5 rounded-2xl border dark:glass-panel-dark glass-panel-light dark:border-white/5 border-black/5 text-center flex flex-col justify-center items-center">
                <mat-icon class="text-accent-cyan dark:text-accent-blue !w-5 !h-5 !text-xl mb-2 flex items-center justify-center">star_outline</mat-icon>
                <span class="text-2xl font-black font-mono tracking-tight dark:text-white text-neutral-950">
                  {{ cgpaValue() }}
                </span>
                <span class="text-[10px] uppercase font-bold tracking-wider text-neutral-500 dark:text-neutral-500 mt-1">
                  CGPA Score
                </span>
              </div>

              <!-- Graduation Year -->
              <div class="p-5 rounded-2xl border dark:glass-panel-dark glass-panel-light dark:border-white/5 border-black/5 text-center flex flex-col justify-center items-center">
                <mat-icon class="text-accent-indigo dark:text-accent-cyan !w-5 !h-5 !text-xl mb-2 flex items-center justify-center">school</mat-icon>
                <span class="text-2xl font-black font-mono tracking-tight dark:text-white text-neutral-950">
                  {{ gradYear() }}
                </span>
                <span class="text-[10px] uppercase font-bold tracking-wider text-neutral-500 dark:text-neutral-500 mt-1">
                  Graduation
                </span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  `
})
export class About implements OnInit {
  themeService = inject(ThemeService);

  problemsSolved = signal(0);
  projectsCount = signal(0);
  cgpaValue = signal(0.00);
  gradYear = signal(0);

  ngOnInit() {
    if (typeof window !== 'undefined') {
      this.animateCount(0, 400, 1500, (v) => this.problemsSolved.set(Math.floor(v)));
      this.animateCount(0, 2, 1000, (v) => this.projectsCount.set(Math.floor(v)));
      this.animateCount(0, 7.68, 1200, (v) => this.cgpaValue.set(parseFloat(v.toFixed(2))));
      this.animateCount(2000, 2026, 800, (v) => this.gradYear.set(Math.floor(v)));
    } else {
      this.problemsSolved.set(400);
      this.projectsCount.set(2);
      this.cgpaValue.set(7.68);
      this.gradYear.set(2026);
    }
  }

  private animateCount(start: number, end: number, duration: number, updateFn: (v: number) => void) {
    const startTime = performance.now();
    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeProgress = 1 - Math.pow(1 - progress, 3); // Cubic Ease-out
      const current = start + (end - start) * easeProgress;
      updateFn(current);
      if (progress < 1) {
        requestAnimationFrame(tick);
      }
    };
    requestAnimationFrame(tick);
  }
}
