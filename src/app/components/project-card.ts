import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-project-card',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, MatIconModule],
  template: `
    <div 
      #cardElement
      class="group relative rounded-2xl p-6 transition-all duration-300 ease-out cursor-pointer h-full flex flex-col justify-between overflow-hidden
             dark:glass-panel-dark dark:hover:border-accent-cyan/40
             glass-panel-light hover:border-accent-indigo/30"
      (mousemove)="onMouseMove($event, cardElement)"
      (mouseleave)="onMouseLeave(cardElement)"
      style="transform-style: preserve-3d; transform: perspective(1000px);"
    >
      <!-- Premium Background Glow/Bezel -->
      <div class="absolute -inset-px bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none -z-10
                  dark:from-accent-indigo/20 dark:via-accent-blue/10 dark:to-accent-cyan/20
                  from-accent-indigo/10 via-accent-blue/5 to-accent-cyan/10"></div>

      <div>
        <!-- Top Tech Icon & Header -->
        <div class="flex items-center justify-between mb-4">
          <div class="p-3 rounded-xl bg-gradient-to-tr from-accent-indigo/10 to-accent-blue/5 border dark:border-white/10 border-black/5">
            <mat-icon class="text-accent-indigo dark:text-accent-cyan !w-6 !h-6 !text-2xl flex items-center justify-center">{{ icon() }}</mat-icon>
          </div>
          <!-- Corner Arrow Decorator -->
          <mat-icon class="text-neutral-400 dark:text-neutral-600 group-hover:text-accent-indigo dark:group-hover:text-accent-cyan transition-colors duration-300">
            arrow_outward
          </mat-icon>
        </div>

        <!-- Project Title -->
        <h3 class="text-xl font-bold font-display tracking-tight text-neutral-900 dark:text-white mb-2 group-hover:text-accent-indigo dark:group-hover:text-accent-cyan transition-colors duration-300">
          {{ title() }}
        </h3>

        <!-- Description -->
        <p class="text-sm text-neutral-600 dark:text-neutral-400 mb-5 leading-relaxed">
          {{ description() }}
        </p>

        <!-- Tech Chips -->
        <div class="flex flex-wrap gap-1.5 mb-5">
          @for (techItem of tech(); track techItem) {
            <span class="text-xs px-2.5 py-1 rounded-full font-mono font-medium border
                         dark:bg-white/5 dark:border-white/5 dark:text-neutral-300
                         bg-neutral-100 border-neutral-200 text-neutral-700">
              {{ techItem }}
            </span>
          }
        </div>

        <!-- Divider -->
        <div class="h-px w-full dark:bg-white/10 bg-black/5 mb-4"></div>

        <!-- Feature Highlights -->
        <div class="space-y-2 mb-6">
          <h4 class="text-xs font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-1">Key Architectures</h4>
          @for (feat of features(); track feat) {
            <div class="flex items-start gap-2 text-xs text-neutral-600 dark:text-neutral-300">
              <mat-icon class="text-accent-cyan dark:text-accent-blue !w-4 !h-4 !text-sm flex items-center justify-center mt-0.5">check_circle_outline</mat-icon>
              <span>{{ feat }}</span>
            </div>
          }
        </div>
      </div>

      <!-- Action Buttons -->
      <div class="flex items-center gap-3 mt-auto">
        @if (liveUrl()) {
          <a 
            [href]="liveUrl()" 
            target="_blank"
            class="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-accent-blue hover:bg-accent-indigo shadow-md hover:shadow-lg transition-all duration-300"
          >
            <mat-icon class="!w-4 !h-4 !text-base flex items-center justify-center">launch</mat-icon>
            Live Demo
          </a>
        }
        @if (githubUrl()) {
          <a 
            [href]="githubUrl()" 
            target="_blank"
            class="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold border transition-all duration-300
                   dark:border-white/10 dark:text-neutral-200 dark:hover:bg-white/10
                   border-neutral-300 text-neutral-800 hover:bg-neutral-100"
          >
            <mat-icon class="!w-4 !h-4 !text-base flex items-center justify-center">code</mat-icon>
            GitHub
          </a>
        }
      </div>
    </div>
  `
})
export class ProjectCard {
  title = input.required<string>();
  description = input.required<string>();
  tech = input<string[]>([]);
  features = input<string[]>([]);
  liveUrl = input<string | null>(null);
  githubUrl = input<string | null>(null);
  icon = input<string>('folder');

  onMouseMove(e: MouseEvent, card: HTMLDivElement) {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const xc = rect.width / 2;
    const yc = rect.height / 2;
    const angleX = -(yc - y) / 18; // Tilt sensitive ratio
    const angleY = (xc - x) / 18;
    card.style.transform = `perspective(1000px) rotateX(${angleX}deg) rotateY(${angleY}deg) scale3d(1.02, 1.02, 1.02)`;
  }

  onMouseLeave(card: HTMLDivElement) {
    card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
  }
}
