import { Component, inject } from '@angular/core';
import { profile, services } from '../../data/portfolio-data';
import { uiText } from '../../data/ui-text';
import { Reveal } from '../../directives/reveal';
import { Spotlight } from '../../directives/spotlight';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-about',
  imports: [Reveal, Spotlight],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {
  protected readonly i18n = inject(LanguageService);
  protected readonly profile = profile;
  protected readonly services = services;
  protected readonly text = uiText.about;
}
