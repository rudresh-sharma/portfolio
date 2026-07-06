import { ChangeDetectionStrategy, Component, HostListener, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { ThemeService } from '../services/theme';

@Component({
  selector: 'app-navbar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, MatIconModule],
  template: `
    <!-- Top-Level Fixed Scroll Progress Bar -->
    <div class="scroll-progress-container">
      <div class="scroll-progress-bar" [style.width.%]="scrollPercent()"></div>
    </div>

    <!-- Main Header -->
    <header 
      class="fixed top-4 left-0 right-0 z-40 px-4 transition-all duration-300"
      [class.translate-y-0]="visible()"
      [class.-translate-y-24]="!visible()"
    >
      <div 
        class="max-w-6xl mx-auto rounded-full px-6 py-3.5 flex items-center justify-between transition-all duration-300 border"
        [class.dark:glass-panel-dark]="isScrolled()"
        [class.glass-panel-light]="isScrolled()"
        [class.dark:bg-transparent]="!isScrolled()"
        [class.bg-transparent]="!isScrolled()"
        [class.dark:border-white/5]="!isScrolled()"
        [class.border-transparent]="!isScrolled()"
      >
        <!-- Logo / Name -->
        <a 
          href="#hero" 
          class="flex items-center gap-2 group cursor-pointer"
        >
          <div class="w-8 h-8 rounded-lg bg-gradient-to-tr from-accent-indigo to-accent-cyan flex items-center justify-center text-white font-black text-sm tracking-tighter">
            RS
          </div>
          <span class="font-display font-bold text-base tracking-tight dark:text-white text-neutral-950 group-hover:text-accent-indigo dark:group-hover:text-accent-cyan transition-colors duration-200">
            Rudresh Sharma
          </span>
        </a>

        <!-- Desktop Navigation Items -->
        <nav class="hidden md:flex items-center gap-1.5">
          @for (item of navItems; track item.id) {
            <a 
              [href]="'#' + item.id"
              class="relative px-3.5 py-1.5 text-xs font-semibold tracking-wide rounded-full transition-all duration-300 cursor-pointer select-none"
              [class.text-accent-indigo]="activeSection() === item.id"
              [class.dark:text-accent-cyan]="activeSection() === item.id"
              [class.dark:text-neutral-400]="activeSection() !== item.id"
              [class.text-neutral-600]="activeSection() !== item.id"
              [class.hover:text-neutral-900]="activeSection() !== item.id"
              [class.dark:hover:text-neutral-100]="activeSection() !== item.id"
            >
              <!-- Active Highlight Dot -->
              @if (activeSection() === item.id) {
                <span class="absolute inset-0 -z-10 rounded-full dark:bg-accent-cyan/10 bg-accent-indigo/10 transition-all duration-300"></span>
              }
              {{ item.label }}
            </a>
          }
        </nav>

        <!-- Right Side Controls (Theme Toggle & Menu Icon) -->
        <div class="flex items-center gap-3">
          <!-- Theme Toggle -->
          <button 
            (click)="themeService.toggleTheme()" 
            aria-label="Toggle theme mode"
            class="p-2 rounded-full cursor-pointer transition-all duration-300 border border-transparent
                   dark:text-neutral-200 dark:hover:bg-white/5 dark:hover:border-white/10
                   text-neutral-700 hover:bg-black/5 hover:border-black/5 flex items-center justify-center"
          >
            @if (themeService.theme() === 'dark') {
              <mat-icon class="!w-5 !h-5 !text-lg text-yellow-400 flex items-center justify-center">light_mode</mat-icon>
            } @else {
              <mat-icon class="!w-5 !h-5 !text-lg text-indigo-900 flex items-center justify-center">dark_mode</mat-icon>
            }
          </button>

          <!-- Resume Download Button (Desktop) -->
          <a 
            href="#contact"
            class="hidden md:flex items-center gap-1.5 px-4.5 py-2 rounded-full text-xs font-bold text-white bg-neutral-950 hover:bg-accent-indigo dark:bg-white dark:text-neutral-950 dark:hover:bg-accent-cyan shadow-md hover:shadow-lg transition-all duration-300"
          >
            <mat-icon class="!w-4 !h-4 !text-base flex items-center justify-center">contact_mail</mat-icon>
            Hire Me
          </a>

          <!-- Mobile Hamburger Toggle -->
          <button 
            (click)="toggleMenu()"
            aria-label="Toggle menu"
            class="md:hidden p-2 rounded-full cursor-pointer text-neutral-800 dark:text-neutral-200 hover:bg-black/5 dark:hover:bg-white/5 border border-transparent hover:border-black/5 dark:hover:border-white/10 flex items-center justify-center"
          >
            <mat-icon class="!w-5 !h-5 !text-lg flex items-center justify-center">
              {{ menuOpen() ? 'close' : 'menu' }}
            </mat-icon>
          </button>
        </div>
      </div>

      <!-- Mobile Navigation Drawer -->
      @if (menuOpen()) {
        <div 
          class="md:hidden mt-2 mx-auto max-w-lg rounded-3xl p-5 border shadow-2xl flex flex-col gap-3 animate-fade-in
                     dark:glass-panel-dark dark:border-white/10
                     glass-panel-light border-black/5"
        >
          @for (item of navItems; track item.id) {
            <a 
              [href]="'#' + item.id"
              (click)="closeMenu()"
              class="flex items-center gap-3 px-4 py-3 rounded-2xl text-sm font-semibold transition-all duration-200 cursor-pointer"
              [class.bg-accent-indigo/10]="activeSection() === item.id"
              [class.text-accent-indigo]="activeSection() === item.id"
              [class.dark:bg-accent-cyan/15]="activeSection() === item.id"
              [class.dark:text-accent-cyan]="activeSection() === item.id"
              [class.text-neutral-700]="activeSection() !== item.id"
              [class.dark:text-neutral-300]="activeSection() !== item.id"
              [class.hover:bg-black/5]="activeSection() !== item.id"
              [class.dark:hover:bg-white/5]="activeSection() !== item.id"
            >
              <mat-icon class="!w-4 !h-4 !text-base flex items-center justify-center">{{ item.icon }}</mat-icon>
              {{ item.label }}
            </a>
          }
          
          <a 
            href="#contact"
            (click)="closeMenu()"
            class="flex items-center justify-center gap-2 mt-2 w-full py-3.5 rounded-2xl text-xs font-bold text-white bg-gradient-to-r from-accent-indigo to-accent-blue"
          >
            <mat-icon class="!w-4 !h-4 !text-base flex items-center justify-center">contact_mail</mat-icon>
            Contact Rudresh
          </a>
        </div>
      }
    </header>
  `
})
export class Navbar {
  themeService = inject(ThemeService);

  visible = signal(true);
  isScrolled = signal(false);
  menuOpen = signal(false);
  activeSection = signal('hero');
  scrollPercent = signal(0);

  private lastScrollY = 0;

  navItems = [
    { id: 'hero', label: 'Home', icon: 'home' },
    { id: 'about', label: 'About', icon: 'person' },
    { id: 'skills', label: 'Skills', icon: 'code' },
    { id: 'projects', label: 'Projects', icon: 'folder_special' },
    { id: 'timeline', label: 'Timeline', icon: 'timeline' },
    { id: 'achievements', label: 'Achievements', icon: 'emoji_events' },
    { id: 'profiles', label: 'Profiles', icon: 'link' },
    { id: 'contact', label: 'Contact', icon: 'mail' },
  ];

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const currentScrollY = window.pageYOffset || document.documentElement.scrollTop;
    
    // Determine scroll direction & visibility of header
    if (currentScrollY > this.lastScrollY && currentScrollY > 100) {
      this.visible.set(false); // Hide on scroll down
    } else {
      this.visible.set(true); // Show on scroll up
    }
    this.lastScrollY = currentScrollY;

    // Is scrolled boolean for glass navbar state
    this.isScrolled.set(currentScrollY > 20);

    // Calculate overall scroll percentage
    const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    if (docHeight > 0) {
      this.scrollPercent.set((currentScrollY / docHeight) * 100);
    }

    // Active Section Highlight Engine
    const scrollPosition = currentScrollY + 200; // Offset for trigger point
    for (const item of this.navItems) {
      const el = document.getElementById(item.id);
      if (el) {
        const top = el.offsetTop;
        const height = el.offsetHeight;
        if (scrollPosition >= top && scrollPosition < top + height) {
          this.activeSection.set(item.id);
        }
      }
    }
  }

  toggleMenu() {
    this.menuOpen.update(v => !v);
  }

  closeMenu() {
    this.menuOpen.set(false);
  }
}
