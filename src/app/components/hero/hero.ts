import { Component, DestroyRef, inject, signal } from '@angular/core';
import { profile } from '../../data/portfolio-data';
import { uiText } from '../../data/ui-text';
import { Reveal } from '../../directives/reveal';
import { Spotlight } from '../../directives/spotlight';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-hero',
  imports: [Reveal, Spotlight],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {
  protected readonly i18n = inject(LanguageService);
  protected readonly profile = profile;
  protected readonly text = uiText.hero;
  protected readonly topSkills = profile.skills.slice(0, 4);
  protected readonly typed = signal('');

  constructor() {
    const full = profile.role;
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) {
      this.typed.set(full);
      return;
    }

    // Typewriter loop: type the role, pause, delete it, repeat.
    let timer: ReturnType<typeof setTimeout>;
    const step = (length: number, deleting: boolean) => {
      this.typed.set(full.slice(0, length));
      if (!deleting && length === full.length) {
        timer = setTimeout(() => step(length, true), 2200);
      } else if (deleting && length === 0) {
        timer = setTimeout(() => step(0, false), 400);
      } else {
        timer = setTimeout(() => step(deleting ? length - 1 : length + 1, deleting), deleting ? 40 : 90);
      }
    };
    step(0, false);
    inject(DestroyRef).onDestroy(() => clearTimeout(timer));
  }
}
