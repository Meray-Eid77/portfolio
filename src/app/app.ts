import { Component, inject } from '@angular/core';
import { About } from './components/about/about';
import { Contact } from './components/contact/contact';
import { Hero } from './components/hero/hero';
import { Navbar } from './components/navbar/navbar';
import { Projects } from './components/projects/projects';
import { profile } from './data/portfolio-data';
import { uiText } from './data/ui-text';
import { LanguageService } from './services/language.service';

@Component({
  selector: 'app-root',
  imports: [Navbar, Hero, About, Projects, Contact],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly i18n = inject(LanguageService);
  protected readonly profile = profile;
  protected readonly text = uiText.footer;
  protected readonly year = new Date().getFullYear();
}
