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
      description: "",
      git: "https://github.com/wellington0dev/helenai_server.git",
      images: [],
      cover: "",
      created: "12/07/2026",
      updated: "13/07/2026",
      version: "1.0",
      colors: {
        primary: "#11daf5",
        secondary: "#12a7f0",
        tertiary: "#003e46",
        background: "#08203f",
      }
    }
  ])
  currentProject = this.projects()[0];
}
