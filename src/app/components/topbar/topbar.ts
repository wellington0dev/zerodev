import { Component, OnInit, output, signal } from '@angular/core';

@Component({
  selector: 'app-topbar',
  imports: [],
  templateUrl: './topbar.html',
  styleUrl: './topbar.scss',
})
export class Topbar implements OnInit {
  darkTheme = signal(false);
  navigate = output<string>();

  ngOnInit(): void {
    let theme = localStorage.getItem("theme");
    this.darkTheme.set(theme === "dark");
  }

  toggleTheme() {
    this.darkTheme.set(!this.darkTheme())
    let theme = this.darkTheme() ? "dark" : "light"
    localStorage.setItem('theme', theme);
    document.documentElement.setAttribute('data-theme', theme);
  }
}
