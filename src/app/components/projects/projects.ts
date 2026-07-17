import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  projects = signal([
    {
      name: "Helena AI",
      description: "abagalakbnfdkajbgf ouawhfoeafb çauo aow bfaeu fgawuf gpwa gfv9apw gpa pag ẃfgwa8 ghf8awhf8 h08áeh",
      git: "https://github.com/wellington0dev/helena-mob.git",
      images: ["helena/helena.png","helena/helena1.png"],
      cover: "",
      created: "12/07/2026",
      updated: "13/07/2026",
      version: "1.0",
      colors: {
        primary: "#11daf5",
        secondary: "#12a7f0",
        background: "#08203f",
      }
    }
  ])

  activeSlide = signal<number[]>(this.projects().map(() => 0));

  prevSlide(i: number) {
    this.activeSlide.update(arr => {
      const copy = [...arr];
      const len = this.projects()[i].images.length;
      copy[i] = (copy[i] - 1 + len) % len;
      return copy;
    });
  }

  nextSlide(i: number) {
    this.activeSlide.update(arr => {
      const copy = [...arr];
      const len = this.projects()[i].images.length;
      copy[i] = (copy[i] + 1) % len;
      return copy;
    });
  }

  goToSlide(i: number, slide: number) {
    this.activeSlide.update(arr => {
      const copy = [...arr];
      copy[i] = slide;
      return copy;
    });
  }
}
