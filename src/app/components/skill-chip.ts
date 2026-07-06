import { ChangeDetectionStrategy, Component, input, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-skill-chip',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, MatIconModule],
  template: `
    <div 
      class="group relative flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 border cursor-default select-none
             dark:bg-neutral-900/60 dark:border-white/10 dark:text-neutral-200 dark:hover:border-accent-cyan/50 dark:hover:shadow-[0_0_15px_rgba(6,182,212,0.25)]
             bg-white/80 border-black/5 text-neutral-800 hover:border-accent-indigo/50 hover:shadow-[0_4px_15px_rgba(99,102,241,0.15)] hover:-translate-y-0.5"
      (mouseenter)="showTooltip.set(true)"
      (mouseleave)="showTooltip.set(false)"
    >
      <mat-icon class="text-accent-indigo dark:text-accent-cyan !w-4 !h-4 !text-base flex items-center justify-center">{{ icon() }}</mat-icon>
      <span>{{ name() }}</span>
      
      @if (usedIn().length > 0 && showTooltip()) {
        <div class="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-52 px-3 py-2 text-xs font-normal rounded-xl shadow-xl z-50 transition-all duration-200
                    dark:bg-neutral-950 dark:border-white/10 dark:text-neutral-300 border
                    bg-white border-neutral-200 text-neutral-600">
          <p class="font-semibold text-neutral-900 dark:text-white mb-1 flex items-center gap-1">
            <mat-icon class="!w-3.5 !h-3.5 !text-xs text-accent-indigo dark:text-accent-cyan">check_circle</mat-icon>
            Applied in:
          </p>
          <ul class="list-disc list-inside space-y-0.5 pl-0.5">
            @for (project of usedIn(); track project) {
              <li>{{ project }}</li>
            }
          </ul>
          <div class="absolute top-full left-1/2 -translate-x-1/2 -mt-1.5 border-6 border-transparent 
                      dark:border-t-neutral-950 border-t-white"></div>
        </div>
      }
    </div>
  `
})
export class SkillChip {
  name = input.required<string>();
  icon = input<string>('code');
  usedIn = input<string[]>([]);
  showTooltip = signal(false);
}
