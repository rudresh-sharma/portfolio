import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.html'
})
export class Navbar {

  isMenuOpen = false;

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu(): void {
    this.isMenuOpen = false;
  }

  

isNavVisible = true;
private lastScrollY = 0;

@HostListener('window:scroll', [])
onWindowScroll(): void {
  const currentScrollY = window.scrollY;

  // Always show at the top
  if (currentScrollY <= 10) {
    this.isNavVisible = true;
    this.lastScrollY = currentScrollY;
    return;
  }

  // Keep navbar visible while mobile menu is open
  if (this.isMenuOpen) {
    this.isNavVisible = true;
    this.lastScrollY = currentScrollY;
    return;
  }

  // Scrolling down → hide
  if (currentScrollY > this.lastScrollY) {
    this.isNavVisible = false;
  }

  // Scrolling up → show
  else if (currentScrollY < this.lastScrollY) {
    this.isNavVisible = true;
  }

  this.lastScrollY = currentScrollY;
}


activeSection = 'home';

private sectionIds = [
  'home',
  'about',
  'skills',
  'projects',
  'experience',
  'contact'
];

@HostListener('window:scroll', [])
onScroll(): void {
  // Existing navbar hide/show logic
  const currentScrollY = window.scrollY;

  if (currentScrollY <= 10) {
    this.isNavVisible = true;
  } else if (!this.isMenuOpen) {
    if (currentScrollY > this.lastScrollY) {
      this.isNavVisible = false;
    } else if (currentScrollY < this.lastScrollY) {
      this.isNavVisible = true;
    }
  }

  this.lastScrollY = currentScrollY;

  // Find active section
  const scrollPosition = currentScrollY + 150;

  for (const id of this.sectionIds) {
    const section = document.getElementById(id);

    if (
      section &&
      section.offsetTop <= scrollPosition &&
      section.offsetTop + section.offsetHeight > scrollPosition
    ) {
      this.activeSection = id;
      break;
    }
  }
}
}