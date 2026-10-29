import { Component, inject } from '@angular/core';
import { projects } from '../../data/portfolio-data';
import { uiText } from '../../data/ui-text';
import { Reveal } from '../../directives/reveal';
import { Spotlight } from '../../directives/spotlight';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-projects',
  imports: [Reveal, Spotlight],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  protected readonly i18n = inject(LanguageService);
  protected readonly projects = projects;
  protected readonly text = uiText.projects;
  // Bar heights for the placeholder dashboard drawn when a project has no image.
  protected readonly bars = [40, 65, 50, 80, 60, 95, 72];

  protected number(index: number): string {
    return String(index + 1).padStart(2, '0');
  }
}
