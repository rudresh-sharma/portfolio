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
}