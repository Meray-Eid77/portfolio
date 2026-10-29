import { Component, inject, signal } from '@angular/core';
import { profile } from '../../data/portfolio-data';
import { uiText } from '../../data/ui-text';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
  host: { '(window:scroll)': 'onScroll()' },
})
export class Navbar {
  protected readonly i18n = inject(LanguageService);
  protected readonly profile = profile;
  protected readonly text = uiText.nav;
  protected readonly scrolled = signal(false);

  protected onScroll(): void {
    this.scrolled.set(window.scrollY > 20);
  }
}
