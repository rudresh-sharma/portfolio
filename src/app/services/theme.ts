import { Injectable, PLATFORM_ID, inject, signal, effect } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private platformId = inject(PLATFORM_ID);
  private isBrowser = isPlatformBrowser(this.platformId);

  // Default theme is dark as requested
  theme = signal<'dark' | 'light'>('dark');

  constructor() {
    if (this.isBrowser) {
      const savedTheme = localStorage.getItem('theme') as 'dark' | 'light' | null;
      if (savedTheme) {
        this.theme.set(savedTheme);
      } else {
        const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
        this.theme.set(prefersLight ? 'light' : 'dark');
      }
    }

    // Effect to apply the theme class to document element on changes
    effect(() => {
      const currentTheme = this.theme();
      if (this.isBrowser) {
        localStorage.setItem('theme', currentTheme);
        const root = document.documentElement;
        if (currentTheme === 'dark') {
          root.classList.add('dark');
          root.classList.remove('light');
          root.style.colorScheme = 'dark';
        } else {
          root.classList.add('light');
          root.classList.remove('dark');
          root.style.colorScheme = 'light';
        }
      }
    });
  }

  toggleTheme() {
    this.theme.update((t) => (t === 'dark' ? 'light' : 'dark'));
  }

  isDark(): boolean {
    return this.theme() === 'dark';
  }
}
