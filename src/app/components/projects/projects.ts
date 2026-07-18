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
      description: "Agente de IA que roda localmente baseada na API Gemini e Ollama. Com funções de automação com niveis de acesso e permissões de execução de comandos.",
      git: "https://github.com/wellington0dev/helena-mob.git",
      images: ["helena/helena1.png","helena/helena.png"],
      orientation: "desktop",
      cover: "",
      created: "12/07/2026",
      updated: "13/07/2026",
      version: "1.0",
      colors: {
        primary: "#11daf5",
        secondary: "#12a7f0",
        background: "#08203f66",
      }
    },
    {
      name: "Mix Songs",
      description: "Aplicativo para baixar e reproduzir musicas gratuitamente.",
      git: "https://github.com/wellington0dev/mixsongs.git",
      images: ["mixsongs/mixsongs1.png","mixsongs/mixsongs.png"],
      orientation: "mobile",
      cover: "",
      created: "12/07/2026",
      updated: "13/07/2026",
      version: "1.0",
      colors: {
        primary: "#ec4899",
        secondary: "#8b5cf6",
        background: "#1a123375",
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
