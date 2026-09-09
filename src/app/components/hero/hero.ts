import { Component, OnDestroy, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.css'
})
export class Hero implements OnInit, OnDestroy {

  typedText = signal('');

  private texts = [
    'Rudresh Sharma',
    'Java Backend Developer',

    'Spring Boot Developer',
    'AI Developer'
  ];

  private textIndex = 0;
  private charIndex = 0;
  private deleting = false;
  private timer: ReturnType<typeof setTimeout> | null = null;

  ngOnInit(): void {
    this.runTyping();
  }

  private runTyping(): void {
    const currentText = this.texts[this.textIndex];

    if (!this.deleting) {
      this.charIndex++;
      this.typedText.set(currentText.slice(0, this.charIndex));

      if (this.charIndex === currentText.length) {
        this.timer = setTimeout(() => {
          this.deleting = true;
          this.runTyping();
        }, 2000);
        return;
      }

      this.timer = setTimeout(() => this.runTyping(), 120);
      return;
    }

    this.charIndex--;
    this.typedText.set(currentText.slice(0, this.charIndex));

    if (this.charIndex === 0) {
      this.deleting = false;
      this.textIndex = (this.textIndex + 1) % this.texts.length;
      this.timer = setTimeout(() => this.runTyping(), 500);
      return;
    }

    this.timer = setTimeout(() => this.runTyping(), 70);
  }

  ngOnDestroy(): void {
    if (this.timer !== null) {
      clearTimeout(this.timer);
    }
  }
}