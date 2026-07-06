import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { ThemeService } from '../services/theme';

@Component({
  selector: 'app-footer',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, MatIconModule],
  template: `
    <footer 
      class="relative py-12 transition-colors duration-300 border-t
             dark:bg-bg-dark dark:border-white/5 bg-bg-light border-black/5"
    >
      <div class="max-w-6xl mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
        
        <!-- Left Side: Brand copyright -->
        <div class="flex items-center gap-3">
          <div class="w-7 h-7 rounded-lg bg-gradient-to-tr from-accent-indigo to-accent-cyan flex items-center justify-center text-white font-black text-xs">
            RS
          </div>
          <span class="text-xs font-semibold text-neutral-500 dark:text-neutral-400">
            &copy; 2026 Rudresh Sharma. All rights reserved.
          </span>
        </div>

        <!-- Center: Social Links -->
        <div class="flex items-center gap-3">
          <!-- LinkedIn -->
          <a 
            href="https://linkedin.com/in/rudreshsharma533" 
            target="_blank"
            aria-label="LinkedIn Profile"
            class="p-2 rounded-full border dark:border-white/10 border-neutral-300 dark:text-neutral-300 text-neutral-700 hover:text-accent-indigo dark:hover:text-accent-cyan hover:scale-105 transition-all duration-200 flex items-center justify-center"
          >
            <mat-icon class="!w-4 !h-4 !text-base flex items-center justify-center">link</mat-icon>
          </a>
          <!-- GitHub -->
          <a 
            href="https://github.com/rudreshsharma533" 
            target="_blank"
            aria-label="GitHub Repository"
            class="p-2 rounded-full border dark:border-white/10 border-neutral-300 dark:text-neutral-300 text-neutral-700 hover:text-accent-indigo dark:hover:text-accent-cyan hover:scale-105 transition-all duration-200 flex items-center justify-center"
          >
            <mat-icon class="!w-4 !h-4 !text-base flex items-center justify-center">code</mat-icon>
          </a>
          <!-- Email -->
          <a 
            href="mailto:rudreshsharma533&#64;gmail.com" 
            aria-label="Send email"
            class="p-2 rounded-full border dark:border-white/10 border-neutral-300 dark:text-neutral-300 text-neutral-700 hover:text-accent-indigo dark:hover:text-accent-cyan hover:scale-105 transition-all duration-200 flex items-center justify-center"
          >
            <mat-icon class="!w-4 !h-4 !text-base flex items-center justify-center">email</mat-icon>
          </a>
        </div>

        <!-- Right Side: Back to top -->
        <div>
          <button 
            (click)="scrollToTop()"
            class="flex items-center gap-1.5 px-4.5 py-2.5 rounded-full text-xs font-bold border transition-all duration-300 hover:-translate-y-0.5 cursor-pointer select-none
                   dark:border-white/10 dark:text-neutral-300 dark:hover:bg-white/5
                   border-neutral-300 text-neutral-700 hover:bg-neutral-100"
          >
            <mat-icon class="!w-4 !h-4 !text-base flex items-center justify-center">keyboard_arrow_up</mat-icon>
            Back to Top
          </button>
        </div>

      </div>
    </footer>
  `
})
export class Footer {
  themeService = inject(ThemeService);

  scrollToTop() {
    if (typeof window !== 'undefined') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  }
}
