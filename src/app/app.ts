import { ChangeDetectionStrategy, Component, HostListener, OnInit, PLATFORM_ID, inject, signal } from '@angular/core';
import { isPlatformBrowser, CommonModule } from '@angular/common';

// Standalone Components
import { Navbar } from './components/navbar';
import { Hero } from './components/hero';
import { About } from './components/about';
import { Skills } from './components/skills';
import { Projects } from './components/projects';
import { Timeline } from './components/timeline';
import { Achievements } from './components/achievements';
import { Certification } from './components/certification';
import { CodingProfiles } from './components/coding-profiles';
import { Contact } from './components/contact';
import { Footer } from './components/footer';
import { ThemeService } from './services/theme';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-root',
  imports: [
    CommonModule,
    Navbar,
    Hero,
    About,
    Skills,
    Projects,
    Timeline,
    Achievements,
    Certification,
    CodingProfiles,
    Contact,
    Footer
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App implements OnInit {
  private platformId = inject(PLATFORM_ID);
  themeService = inject(ThemeService);

  isBrowser = isPlatformBrowser(this.platformId);
  isLoading = signal(true);
  
  // Custom cursor variables
  cursorX = signal(0);
  cursorY = signal(0);
  cursorActive = signal(false);
  hasFinePointer = signal(false);

  // Diagnostic state labels for loading screen
  loadingStage = signal('Initializing application containers...');

  ngOnInit() {
    if (this.isBrowser) {
      // Check if device supports custom cursor pointer
      this.hasFinePointer.set(window.matchMedia('(pointer: fine)').matches);

      // Loading stage simulation sequence for backend vibe
      setTimeout(() => this.loadingStage.set('Connecting to Eureka discovery registry...'), 400);
      setTimeout(() => this.loadingStage.set('Validating database transactional pooling...'), 800);
      setTimeout(() => this.loadingStage.set('Compiling portfolio dashboard modules...'), 1200);

      // End loading screen
      setTimeout(() => {
        this.isLoading.set(false);
      }, 1600);
    } else {
      this.isLoading.set(false);
    }
  }

  @HostListener('window:mousemove', ['$event'])
  onMouseMove(e: MouseEvent) {
    if (this.isBrowser && this.hasFinePointer()) {
      this.cursorX.set(e.clientX);
      this.cursorY.set(e.clientY);

      const target = e.target as HTMLElement | null;
      const isHoverable = target && (
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.closest('a') || 
        target.closest('button') || 
        target.closest('app-skill-chip') ||
        target.closest('app-project-card') ||
        target.classList.contains('cursor-pointer') ||
        target.closest('.cursor-pointer')
      );
      this.cursorActive.set(!!isHoverable);
    }
  }
}
