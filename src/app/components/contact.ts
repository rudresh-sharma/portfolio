import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { ThemeService } from '../services/theme';

@Component({
  selector: 'app-contact',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, ReactiveFormsModule, MatIconModule],
  template: `
    <section 
      id="contact" 
      class="relative py-24 transition-colors duration-300
             dark:bg-bg-dark bg-bg-light"
    >
      <!-- Background graphical gradients -->
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(99,102,241,0.03),transparent_40%)] pointer-events-none"></div>

      <div class="max-w-6xl mx-auto px-6 relative z-10">
        
        <!-- Section Header -->
        <div class="text-center md:text-left mb-16">
          <p class="text-xs font-bold uppercase tracking-widest text-accent-indigo dark:text-accent-cyan mb-2">Get In Touch</p>
          <h2 class="text-3xl md:text-4xl font-extrabold font-display tracking-tight text-neutral-950 dark:text-white">
            Contact Me
          </h2>
          <div class="h-1 w-12 bg-accent-blue mt-3 rounded-full mx-auto md:mx-0"></div>
          <p class="text-sm text-neutral-500 dark:text-neutral-400 mt-4 max-w-xl">
            Have a question, career opportunity, or project proposal? Send a message directly and I will respond promptly.
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          <!-- Left Column: Form Card -->
          <div class="lg:col-span-7">
            <div 
              class="rounded-3xl p-6 md:p-8 border h-full transition-all duration-300
                     dark:glass-panel-dark dark:border-white/5
                     glass-panel-light border-black/5"
            >
              <h3 class="text-xl font-bold font-display text-neutral-950 dark:text-white mb-6 flex items-center gap-2">
                <mat-icon class="text-accent-indigo dark:text-accent-cyan !w-5 !h-5 !text-xl flex items-center justify-center">mail_outline</mat-icon>
                Submit Message
              </h3>

              <!-- Submit Success Notification -->
              @if (isSuccess()) {
                <div class="mb-6 p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs flex items-start gap-3">
                  <mat-icon class="!w-5 !h-5 !text-lg flex items-center justify-center mt-0.5">check_circle</mat-icon>
                  <div>
                    <p class="font-bold">Message Transmitted Successfully!</p>
                    <p class="mt-0.5 font-medium text-neutral-500 dark:text-neutral-400">Thank you, {{ submittedName() }}. I have received your message and will respond shortly.</p>
                  </div>
                </div>
              }

              <!-- Submit Error Notification -->
              @if (isError()) {
                <div class="mb-6 p-4 rounded-2xl bg-red-500/10 border border-red-500/20 text-red-600 dark:text-red-400 text-xs flex items-start gap-3">
                  <mat-icon class="!w-5 !h-5 !text-lg flex items-center justify-center mt-0.5">error_outline</mat-icon>
                  <div>
                    <p class="font-bold">Transmission Error</p>
                    <p class="mt-0.5 font-medium text-neutral-500 dark:text-neutral-400">There was an issue processing your request on the server. Please try again.</p>
                  </div>
                </div>
              }

              <!-- Standard Reactive Form (Strictly No NgModel) -->
              <form [formGroup]="contactForm" (ngSubmit)="onSubmit()" class="space-y-5">
                
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <!-- Name Field -->
                  <div class="flex flex-col gap-1.5">
                    <label for="name" class="text-xs font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 pl-1">Your Name</label>
                    <input 
                      id="name"
                      type="text" 
                      formControlName="name"
                      placeholder="Rudresh Sharma"
                      class="px-4 py-3 rounded-xl text-sm border focus:outline-none transition-all duration-300 w-full font-medium
                             dark:bg-neutral-950 dark:border-white/10 dark:text-white dark:focus:border-accent-cyan dark:focus:shadow-[0_0_10px_rgba(6,182,212,0.15)]
                             bg-white border-neutral-300 text-neutral-900 focus:border-accent-indigo focus:shadow-[0_4px_12px_rgba(99,102,241,0.05)]"
                    >
                    @if (contactForm.get('name')?.invalid && contactForm.get('name')?.touched) {
                      <span class="text-[10px] text-red-500 pl-1">Name is required.</span>
                    }
                  </div>

                  <!-- Email Field -->
                  <div class="flex flex-col gap-1.5">
                    <label for="email" class="text-xs font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 pl-1">Email Address</label>
                    <input 
                      id="email"
                      type="email" 
                      formControlName="email"
                      placeholder="rudreshsharma533@gmail.com"
                      class="px-4 py-3 rounded-xl text-sm border focus:outline-none transition-all duration-300 w-full font-medium
                             dark:bg-neutral-950 dark:border-white/10 dark:text-white dark:focus:border-accent-cyan dark:focus:shadow-[0_0_10px_rgba(6,182,212,0.15)]
                             bg-white border-neutral-300 text-neutral-900 focus:border-accent-indigo focus:shadow-[0_4px_12px_rgba(99,102,241,0.05)]"
                    >
                    @if (contactForm.get('email')?.invalid && contactForm.get('email')?.touched) {
                      <span class="text-[10px] text-red-500 pl-1">Please enter a valid email.</span>
                    }
                  </div>
                </div>

                <!-- Subject Field -->
                <div class="flex flex-col gap-1.5">
                  <label for="subject" class="text-xs font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 pl-1">Subject</label>
                  <input 
                    id="subject"
                    type="text" 
                    formControlName="subject"
                    placeholder="Project Proposal / Employment Inquiry"
                    class="px-4 py-3 rounded-xl text-sm border focus:outline-none transition-all duration-300 w-full font-medium
                           dark:bg-neutral-950 dark:border-white/10 dark:text-white dark:focus:border-accent-cyan dark:focus:shadow-[0_0_10px_rgba(6,182,212,0.15)]
                           bg-white border-neutral-300 text-neutral-900 focus:border-accent-indigo focus:shadow-[0_4px_12px_rgba(99,102,241,0.05)]"
                  >
                  @if (contactForm.get('subject')?.invalid && contactForm.get('subject')?.touched) {
                    <span class="text-[10px] text-red-500 pl-1">Subject is required.</span>
                  }
                </div>

                <!-- Message Field -->
                <div class="flex flex-col gap-1.5">
                  <label for="message" class="text-xs font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 pl-1">Message Content</label>
                  <textarea 
                    id="message"
                    rows="5"
                    formControlName="message"
                    placeholder="Hi Rudresh, I would love to connect to discuss potential collaborations..."
                    class="px-4 py-3 rounded-xl text-sm border focus:outline-none transition-all duration-300 w-full font-medium resize-none
                           dark:bg-neutral-950 dark:border-white/10 dark:text-white dark:focus:border-accent-cyan dark:focus:shadow-[0_0_10px_rgba(6,182,212,0.15)]
                           bg-white border-neutral-300 text-neutral-900 focus:border-accent-indigo focus:shadow-[0_4px_12px_rgba(99,102,241,0.05)]"
                  ></textarea>
                  @if (contactForm.get('message')?.invalid && contactForm.get('message')?.touched) {
                    <span class="text-[10px] text-red-500 pl-1">Message is required.</span>
                  }
                </div>

                <!-- Submit Button -->
                <button 
                  type="submit" 
                  [disabled]="contactForm.invalid || isSubmitting()"
                  class="flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3.5 rounded-2xl text-xs font-bold text-white bg-accent-indigo hover:bg-accent-blue disabled:opacity-50 shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer select-none"
                >
                  @if (isSubmitting()) {
                    <span class="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                    Sending...
                  } @else {
                    <mat-icon class="!w-4 !h-4 !text-base flex items-center justify-center">send</mat-icon>
                    Send Message
                  }
                </button>
              </form>
            </div>
          </div>

          <!-- Right Column: Info Details Card -->
          <div class="lg:col-span-5">
            <div 
              class="rounded-3xl p-6 md:p-8 border h-full flex flex-col justify-between transition-all duration-300 relative overflow-hidden
                     dark:glass-panel-dark dark:border-white/5
                     glass-panel-light border-black/5"
            >
              <!-- Small visual accent bubble -->
              <div class="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-accent-cyan/15 filter blur-xl pointer-events-none"></div>

              <div class="space-y-6">
                <h3 class="text-xl font-bold font-display text-neutral-950 dark:text-white flex items-center gap-2">
                  <mat-icon class="text-accent-indigo dark:text-accent-cyan !w-5 !h-5 !text-xl flex items-center justify-center">person_pin</mat-icon>
                  Information Detail
                </h3>

                <!-- Contact Points Grid -->
                <div class="space-y-4">
                  <!-- Email Point -->
                  <div class="flex items-start gap-4">
                    <div class="p-3 rounded-2xl bg-accent-indigo/10 text-accent-indigo dark:bg-accent-cyan/10 dark:text-accent-cyan flex items-center justify-center mt-0.5">
                      <mat-icon class="!w-5 !h-5 !text-lg flex items-center justify-center">email</mat-icon>
                    </div>
                    <div>
                      <p class="text-[10px] font-bold uppercase tracking-widest text-neutral-500 dark:text-neutral-500 leading-tight">Email Address</p>
                      <a href="mailto:rudreshsharma533@gmail.com" class="text-sm font-semibold text-neutral-900 dark:text-white hover:text-accent-indigo dark:hover:text-accent-cyan transition-colors duration-200">
                        rudreshsharma533&#64;gmail.com
                      </a>
                    </div>
                  </div>

                  <!-- Phone Point -->
                  <div class="flex items-start gap-4">
                    <div class="p-3 rounded-2xl bg-accent-indigo/10 text-accent-indigo dark:bg-accent-cyan/10 dark:text-accent-cyan flex items-center justify-center mt-0.5">
                      <mat-icon class="!w-5 !h-5 !text-lg flex items-center justify-center">phone</mat-icon>
                    </div>
                    <div>
                      <p class="text-[10px] font-bold uppercase tracking-widest text-neutral-500 dark:text-neutral-500 leading-tight">Mobile Number</p>
                      <a href="tel:+917999853578" class="text-sm font-semibold text-neutral-900 dark:text-white hover:text-accent-indigo dark:hover:text-accent-cyan transition-colors duration-200 font-mono">
                        +91 79998 53578
                      </a>
                    </div>
                  </div>

                  <!-- Location Point -->
                  <div class="flex items-start gap-4">
                    <div class="p-3 rounded-2xl bg-accent-indigo/10 text-accent-indigo dark:bg-accent-cyan/10 dark:text-accent-cyan flex items-center justify-center mt-0.5">
                      <mat-icon class="!w-5 !h-5 !text-lg flex items-center justify-center">location_on</mat-icon>
                    </div>
                    <div>
                      <p class="text-[10px] font-bold uppercase tracking-widest text-neutral-500 dark:text-neutral-500 leading-tight">Current Location</p>
                      <p class="text-sm font-semibold text-neutral-900 dark:text-white">
                        Bhopal, Madhya Pradesh, India
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Extra interactive callout frame / map-simulating UI panel -->
              <div class="mt-8 p-4 rounded-2xl border dark:bg-neutral-950/60 bg-neutral-100/30 dark:border-white/5 border-black/5 flex flex-col justify-center h-28 relative overflow-hidden">
                <div class="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1),transparent_70%)] pointer-events-none"></div>
                <!-- Stylized map vectors -->
                <div class="relative z-10 flex items-center gap-3">
                  <div class="relative flex h-3 w-3">
                    <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-indigo opacity-75"></span>
                    <span class="relative inline-flex rounded-full h-3 w-3 bg-accent-indigo"></span>
                  </div>
                  <div>
                    <h4 class="text-xs font-bold text-neutral-900 dark:text-white">Active Status</h4>
                    <p class="text-[10px] text-neutral-500 dark:text-neutral-400 mt-0.5">Open to both relocation and remote architectures globally.</p>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  `
})
export class Contact {
  themeService = inject(ThemeService);

  isSubmitting = signal(false);
  isSuccess = signal(false);
  isError = signal(false);
  submittedName = signal('');

  contactForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    subject: new FormControl('', [Validators.required]),
    message: new FormControl('', [Validators.required])
  });

  onSubmit() {
    if (this.contactForm.valid) {
      this.isSubmitting.set(true);
      this.isSuccess.set(false);
      this.isError.set(false);

      const nameValue = this.contactForm.get('name')?.value || '';
      this.submittedName.set(nameValue);

      // Perform simulation (or real API request proxy if desired)
      // We will make an actual fetch to our node backend to show proper full-stack engineering
      fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(this.contactForm.value)
      })
      .then(async (response) => {
        if (response.ok) {
          this.isSuccess.set(true);
          this.contactForm.reset();
        } else {
          this.isError.set(true);
        }
      })
      .catch(() => {
        this.isError.set(true);
      })
      .finally(() => {
        this.isSubmitting.set(false);
      });
    }
  }
}
