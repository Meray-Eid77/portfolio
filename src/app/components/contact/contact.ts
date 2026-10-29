import { Component, inject } from '@angular/core';
import { profile } from '../../data/portfolio-data';
import { uiText } from '../../data/ui-text';
import { Reveal } from '../../directives/reveal';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-contact',
  imports: [Reveal],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  protected readonly i18n = inject(LanguageService);
  protected readonly profile = profile;
  protected readonly text = uiText.contact;
}
