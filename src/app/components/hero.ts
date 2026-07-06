import { ChangeDetectionStrategy, Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { ThemeService } from '../services/theme';

@Component({
  selector: 'app-hero',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, MatIconModule],
  template: `
    <section 
      id="hero" 
      class="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden transition-colors duration-300
             dark:bg-bg-dark bg-bg-light"
    >
      <!-- Premium Grid Overlay -->
      <div class="absolute inset-0 bg-[linear-gradient(to_right,rgba(120,119,198,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(120,119,198,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none"></div>

      <!-- Theme-Tuned Background Blobs (Glowing ambient light) -->
      <div class="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full filter blur-[120px] opacity-30 pointer-events-none animate-pulse
                  dark:bg-accent-indigo bg-accent-indigo/40"></div>
      <div class="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-80 h-80 rounded-full filter blur-[140px] opacity-30 pointer-events-none animate-pulse-slow
                  dark:bg-accent-cyan bg-accent-cyan/40"></div>

      <!-- Content Container -->
      <div class="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10 w-full">
        
        <!-- Left Side: Copywriting -->
        <div class="lg:col-span-7 flex flex-col justify-center text-left">
          
          <!-- Modern Accent Tag -->
          <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs font-semibold tracking-wide w-fit mb-6 animate-fade-in
                      dark:bg-white/5 dark:border-white/10 dark:text-accent-cyan
                      bg-black/5 border-black/5 text-accent-indigo">
            <span class="flex h-2 w-2 relative">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-cyan opacity-75"></span>
              <span class="relative inline-flex rounded-full h-2 w-2 bg-accent-cyan"></span>
            </span>
            Available for Software Engineering Roles
          </div>

          <!-- Hero Name -->
          <h1 class="text-4xl sm:text-5xl md:text-6xl font-extrabold font-display tracking-tight text-neutral-950 dark:text-white leading-none mb-3">
            Hi, I'm <span class="gradient-text">Rudresh Sharma</span>
          </h1>

          <!-- Typing Dynamic Role -->
          <h2 class="text-xl sm:text-2xl font-semibold font-sans tracking-tight text-neutral-700 dark:text-neutral-300 min-h-[40px] flex items-center mb-6">
            <span>{{ typedText() }}</span>
            <span class="typing-cursor">|</span>
          </h2>

          <!-- Narrative/Intro Line -->
          <p class="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 mb-8 max-w-xl leading-relaxed">
            I enjoy building scalable backend systems using <strong class="dark:text-white text-neutral-900 font-semibold">Java, Spring Boot, REST APIs, and Microservices</strong> while continuously solving Data Structures & Algorithms problems.
          </p>

          <!-- Interactive CTAs -->
          <div class="flex flex-wrap items-center gap-4">
            <!-- Project CTA -->
            <a 
              href="#projects" 
              class="flex items-center gap-2 px-6 py-3.5 rounded-2xl text-sm font-bold text-white bg-accent-blue hover:bg-accent-indigo shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 cursor-pointer select-none"
            >
              <mat-icon class="!w-5 !h-5 !text-lg flex items-center justify-center">folder_open</mat-icon>
              View Projects
            </a>

            <!-- Resume Download Link -->
            <button 
              (click)="downloadResume()"
              class="flex items-center gap-2 px-6 py-3.5 rounded-2xl text-sm font-bold border transition-all duration-300 hover:-translate-y-0.5 cursor-pointer select-none
                     dark:border-white/10 dark:text-neutral-200 dark:hover:bg-white/5
                     border-neutral-300 text-neutral-800 hover:bg-neutral-100"
            >
              <mat-icon class="!w-5 !h-5 !text-lg flex items-center justify-center">download</mat-icon>
              Download Resume
            </button>

            <!-- Contact CTA -->
            <a 
              href="#contact" 
              class="flex items-center gap-2 px-5 py-3.5 rounded-2xl text-sm font-semibold transition-all duration-300 cursor-pointer select-none
                     dark:text-neutral-300 dark:hover:text-white hover:text-neutral-950 text-neutral-600"
            >
              <mat-icon class="!w-5 !h-5 !text-lg flex items-center justify-center">chat_bubble_outline</mat-icon>
              Contact Me
            </a>
          </div>

        </div>

        <!-- Right Side: Beautiful Theme-Aware Interactive Coding Workspace -->
        <div class="lg:col-span-5 relative flex justify-center lg:justify-end">
          
          <!-- Ambient glowing orb wrapper -->
          <div class="relative w-full max-w-md h-96 lg:h-[450px]">
            
            <!-- Main IDE Mockup Card -->
            <div 
              class="absolute inset-0 rounded-2xl shadow-2xl overflow-hidden flex flex-col border transition-all duration-500
                     dark:glass-panel-dark dark:border-white/10
                     glass-panel-light border-black/5"
            >
              <!-- Window Header -->
              <div class="px-4 py-3 flex items-center justify-between border-b dark:bg-neutral-900/40 bg-neutral-100/50 dark:border-white/5 border-black/5">
                <div class="flex items-center gap-1.5">
                  <span class="w-3 h-3 rounded-full bg-red-500"></span>
                  <span class="w-3 h-3 rounded-full bg-yellow-400"></span>
                  <span class="w-3 h-3 rounded-full bg-green-500"></span>
                </div>
                <span class="text-xs font-mono text-neutral-400 dark:text-neutral-500 flex items-center gap-1">
                  <mat-icon class="!w-3.5 !h-3.5 !text-xs flex items-center justify-center">terminal</mat-icon>
                  src/main/java/Developer.java
                </span>
                <div class="w-10"></div>
              </div>

              <!-- Editor View Area -->
              <div class="p-4 flex-1 font-mono text-xs overflow-auto leading-relaxed dark:text-neutral-300 text-neutral-700 bg-transparent">
                <!-- Styled syntax highlight block -->
                <div class="space-y-1">
                  <p><span class="text-accent-indigo dark:text-pink-400 font-semibold">package</span> com.rudresh.profile;</p>
                  <p>&nbsp;</p>
                  <p><span class="text-yellow-600 dark:text-yellow-400">&#64;RestController</span></p>
                  <p><span class="text-yellow-600 dark:text-yellow-400">&#64;RequestMapping</span>(<span class="text-emerald-600 dark:text-emerald-400">"/api/v1"</span>)</p>
                  <p><span class="text-accent-indigo dark:text-blue-400 font-semibold">public class</span> <span class="text-accent-blue dark:text-green-400">Developer</span> &#123;</p>
                  
                  <p class="pl-4"><span class="text-yellow-600 dark:text-yellow-400">&#64;Autowired</span></p>
                  <p class="pl-4"><span class="text-accent-indigo dark:text-blue-400">private</span> <span class="text-emerald-600 dark:text-teal-400">SkillService</span> service;</p>
                  <p>&nbsp;</p>
                  
                  <p class="pl-4 text-neutral-400 dark:text-neutral-500">// 400+ DSA problems solved</p>
                  <p class="pl-4"><span class="text-yellow-600 dark:text-yellow-400">&#64;GetMapping</span>(<span class="text-emerald-600 dark:text-emerald-400">"/rudresh"</span>)</p>
                  <p class="pl-4"><span class="text-accent-indigo dark:text-blue-400">public</span> ResponseEntity&lt;Profile&gt; <span class="text-accent-indigo dark:text-violet-400">get</span>() &#123;</p>
                  <p class="pl-8"><span class="text-accent-indigo dark:text-pink-400 font-semibold">return</span> ResponseEntity.ok(</p>
                  <p class="pl-12">Profile.builder()</p>
                  <p class="pl-16">.name(<span class="text-emerald-600 dark:text-emerald-400">"Rudresh Sharma"</span>)</p>
                  <p class="pl-16">.skills(<span class="text-accent-indigo dark:text-blue-400">"Spring Boot"</span>, <span class="text-accent-indigo dark:text-blue-400">"Microservices"</span>)</p>
                  <p class="pl-16">.database(<span class="text-emerald-600 dark:text-amber-400">"MySQL"</span>)</p>
                  <p class="pl-16">.build()</p>
                  <p class="pl-8">);</p>
                  <p class="pl-4">&#125;</p>
                  <p>&#125;</p>
                </div>
              </div>

              <!-- Terminal/Footer state bar -->
              <div class="px-4 py-2 border-t dark:bg-neutral-900/60 bg-neutral-100/50 dark:border-white/5 border-black/5 flex items-center justify-between text-[10px] font-mono text-neutral-500">
                <span class="flex items-center gap-1">
                  <span class="w-1.5 h-1.5 rounded-full bg-accent-cyan animate-pulse"></span>
                  Spring Boot Eureka: UP
                </span>
                <span>UTF-8</span>
                <span>Java 21 (LTS)</span>
              </div>
            </div>

            <!-- Floating Tech Icon Tags orbiting the editor -->
            <div class="absolute -top-6 -left-6 p-2 rounded-xl border animate-float dark:glass-panel-dark bg-white dark:border-white/10 border-neutral-200 shadow-lg flex items-center gap-1">
              <span class="text-xs font-bold font-mono dark:text-emerald-400 text-emerald-600">☕ Java</span>
            </div>
            
            <div class="absolute top-1/2 -right-8 p-2 rounded-xl border animate-float-delayed dark:glass-panel-dark bg-white dark:border-white/10 border-neutral-200 shadow-lg flex items-center gap-1">
              <span class="text-xs font-bold font-mono dark:text-green-400 text-green-700">🍃 Spring</span>
            </div>

            <div class="absolute -bottom-4 left-6 p-2 rounded-xl border animate-float-slow dark:glass-panel-dark bg-white dark:border-white/10 border-neutral-200 shadow-lg flex items-center gap-1">
              <span class="text-xs font-bold font-mono dark:text-accent-cyan text-accent-indigo">🅰️ Angular</span>
            </div>

            <div class="absolute top-1/4 -left-12 p-1.5 rounded-xl border animate-float-slow dark:glass-panel-dark bg-white dark:border-white/5 border-neutral-200 shadow-md flex items-center">
              <span class="text-[10px] font-mono dark:text-neutral-400 text-neutral-600">⚡ Microservices</span>
            </div>

            <div class="absolute bottom-1/3 -right-10 p-1.5 rounded-xl border animate-float dark:glass-panel-dark bg-white dark:border-white/5 border-neutral-200 shadow-md flex items-center">
              <span class="text-[10px] font-mono dark:text-amber-400 text-amber-600">🛢️ MySQL</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  `
})
export class Hero implements OnInit {
  themeService = inject(ThemeService);

  roles = [
    'Computer Science Undergraduate',
    'AI & ML Student',
    'Java Backend Developer',
    'Spring Boot Architect',
    'Microservices Builder'
  ];
  typedText = signal('');
  private currentRoleIndex = 0;
  private charIndex = 0;
  private isDeleting = false;

  ngOnInit() {
    if (typeof window !== 'undefined') {
      this.tick();
    }
  }

  private tick() {
    const currentRole = this.roles[this.currentRoleIndex];
    if (this.isDeleting) {
      this.typedText.update(text => text.slice(0, -1));
      this.charIndex--;
    } else {
      this.typedText.set(currentRole.slice(0, this.charIndex + 1));
      this.charIndex++;
    }

    let delay = 100;
    if (this.isDeleting) delay /= 2;

    if (!this.isDeleting && this.charIndex === currentRole.length) {
      delay = 2000; // Hold full sentence
      this.isDeleting = true;
    } else if (this.isDeleting && this.charIndex === 0) {
      this.isDeleting = false;
      this.currentRoleIndex = (this.currentRoleIndex + 1) % this.roles.length;
      delay = 500; // Pause before typing next
    }

    setTimeout(() => this.tick(), delay);
  }

  downloadResume() {
    // Generate a simple simulation of downing a resume or alert
    alert('Rudresh Sharma - Resume.pdf download started successfully.');
    // In real app, we could trigger window.open() or link, but keep it elegant and safe
  }
}
