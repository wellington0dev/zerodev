import { Component } from '@angular/core';
import { Topbar } from '../../components/topbar/topbar';
import { Sidebar } from '../../components/sidebar/sidebar';
import { Projects } from '../../components/projects/projects';

@Component({
  selector: 'app-home',
  imports: [
    Topbar,
    Sidebar,
    Projects
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
