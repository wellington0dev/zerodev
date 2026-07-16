import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {
  protected readonly title = signal('zerodev');

  constructor() { }

  ngOnInit(): void {
    try {
      var pref = localStorage.getItem('theme') || 'system';
      var dark = pref === 'dark' ||
        (pref === 'system' && matchMedia('(prefers-color-scheme: dark)').matches);
      document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light');
    } catch (e) { }
  }
}
