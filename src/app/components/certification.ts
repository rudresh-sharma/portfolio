import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { ThemeService } from '../services/theme';

@Component({
  selector: 'app-certification',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, MatIconModule],
  template: `
    <section 
      id="certifications" 
      class="relative py-24 transition-colors duration-300
             dark:bg-bg-dark bg-bg-light"
    >
      <!-- Subtle top divider -->
      <div class="absolute inset-x-0 top-0 h-px dark:bg-white/5 bg-black/5"></div>

      <div class="max-w-6xl mx-auto px-6 relative z-10">
        
        <!-- Section Header -->
        <div class="text-center md:text-left mb-16">
          <p class="text-xs font-bold uppercase tracking-widest text-accent-indigo dark:text-accent-cyan mb-2">Professional Credentials</p>
          <h2 class="text-3xl md:text-4xl font-extrabold font-display tracking-tight text-neutral-950 dark:text-white">
            Certifications
          </h2>
          <div class="h-1 w-12 bg-accent-blue mt-3 rounded-full mx-auto md:mx-0"></div>
          <p class="text-sm text-neutral-500 dark:text-neutral-400 mt-4 max-w-xl">
            Industry-validated certifications demonstrating specialized capabilities in cloud provisioning and modern artificial intelligence frameworks.
          </p>
        </div>

        <!-- Horizontal Certificates Grid -->
        <div class="space-y-6">
          @for (cert of certs; track cert.title) {
            <div 
              class="group flex flex-col md:flex-row items-stretch rounded-3xl border overflow-hidden transition-all duration-300
                     dark:glass-panel-dark dark:border-white/5 dark:hover:border-accent-cyan/30
                     glass-panel-light border-black/5 hover:shadow-xl hover:-translate-y-0.5"
            >
              <!-- Left Side: Highly Styled Vector Certificate Image/Badge Placeholder -->
              <div class="md:w-60 w-full p-6 flex items-center justify-center relative bg-gradient-to-br min-h-[160px]" [class]="cert.badgeBg">
                <!-- Visual Tech Emblem -->
                <div class="relative z-10 text-center flex flex-col items-center">
                  <mat-icon class="!w-12 !h-12 !text-5xl text-white flex items-center justify-center drop-shadow-md mb-2">
                    {{ cert.icon }}
                  </mat-icon>
                  <span class="text-white font-mono font-bold text-xs tracking-wider uppercase drop-shadow-sm">
                    {{ cert.code }}
                  </span>
                </div>
                <!-- Ambient circular gradients inside badge area -->
                <div class="absolute inset-0 bg-black/10 mix-blend-overlay"></div>
                <div class="absolute -top-12 -left-12 w-32 h-32 rounded-full bg-white/10 filter blur-xl"></div>
              </div>

              <!-- Right Side: Certificate Meta & Verification Controls -->
              <div class="flex-1 p-6 flex flex-col justify-between">
                <div>
                  <!-- Issuer Label & Date -->
                  <div class="flex items-center justify-between gap-4 mb-2">
                    <span class="text-xs font-bold uppercase tracking-wider text-accent-indigo dark:text-accent-cyan">
                      {{ cert.issuer }}
                    </span>
                    <span class="text-xs font-mono font-medium text-neutral-500 dark:text-neutral-400">
                      Issued: {{ cert.issuedDate }}
                    </span>
                  </div>

                  <!-- Certification Title -->
                  <h3 class="text-xl font-bold font-display text-neutral-950 dark:text-white mb-2 leading-tight">
                    {{ cert.title }}
                  </h3>

                  <!-- Skills verified -->
                  <div class="flex flex-wrap gap-1.5 mt-4">
                    @for (skill of cert.skills; track skill) {
                      <span class="text-[10px] px-2.5 py-1 rounded-full font-semibold border
                                   dark:bg-white/5 dark:border-white/5 dark:text-neutral-400
                                   bg-neutral-100 border-neutral-200 text-neutral-600">
                        {{ skill }}
                      </span>
                    }
                  </div>
                </div>

                <!-- Footer Action -->
                <div class="flex items-center justify-between border-t dark:border-white/5 border-black/5 pt-4 mt-6">
                  <div class="flex items-center gap-1.5 text-xs text-neutral-500 dark:text-neutral-400">
                    <mat-icon class="!w-4 !h-4 !text-base text-emerald-500 flex items-center justify-center">verified_user</mat-icon>
                    <span>Status: Active & Verified</span>
                  </div>
                  
                  <a 
                    [href]="cert.link"
                    target="_blank"
                    class="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-white bg-neutral-950 hover:bg-accent-indigo dark:bg-white dark:text-neutral-950 dark:hover:bg-accent-cyan shadow-sm hover:shadow-md transition-all duration-200"
                  >
                    <mat-icon class="!w-4 !h-4 !text-base flex items-center justify-center">workspace_premium</mat-icon>
                    Verify Credential
                  </a>
                </div>
              </div>

            </div>
          }
        </div>

      </div>
    </section>
  `
})
export class Certification {
  themeService = inject(ThemeService);

  certs = [
    {
      title: 'Microsoft Certified: Azure Fundamentals (AZ-900)',
      issuer: 'Microsoft',
      issuedDate: '2024',
      code: 'AZ-900',
      icon: 'cloud_queue',
      badgeBg: 'from-blue-600 to-indigo-700',
      skills: ['Cloud Computing', 'Azure Resources', 'Network Security', 'Virtual Routing', 'SLA Frameworks'],
      link: 'https://learn.microsoft.com/en-us/users/rudreshsharma',
    },
    {
      title: 'IBM Generative AI Foundations Certification',
      issuer: 'IBM',
      issuedDate: '2025',
      code: 'IBM-GENAI',
      icon: 'psychology',
      badgeBg: 'from-indigo-900 via-purple-900 to-accent-indigo',
      skills: ['Large Language Models (LLM)', 'Prompt Engineering', 'AI Orchestration', 'Cognitive Agents', 'Security Bias'],
      link: 'https://www.coursera.org/account/accomplishments/verify/IBM-GENAI',
    }
  ];
}
