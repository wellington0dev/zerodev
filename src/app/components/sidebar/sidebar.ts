import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  imports: [],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
})
export class Sidebar {
  networks = signal([
    {
      name: "Instagram",
      icon: "bi bi-instagram",
      colors: [
        "#515BD4",
        "#8134AF",
        "#DD2A7B",
        "#FEDA77",
        "#F58529"
      ],
      gradient: true,
      deg:"-125deg",
      link: "https://www.instagram.com/zero0dev",
      fontColor:"white",
    },
    {
      name: "Github",
      icon: "bi bi-github",
      link: "https://github.com/wellington0dev",
      fontColor:'var(--text)'
    }
  ])

  getBackground(network: any): string {
    if (network.gradient) {
      return `linear-gradient(${network.deg || 0}, ${network.colors.join(', ')})`;
    }

    return '';
  }
}
