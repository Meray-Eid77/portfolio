import { DOCUMENT } from '@angular/common';
import { Injectable, effect, inject, signal } from '@angular/core';
import { Lang, Localized } from '../data/portfolio-data';

const STORAGE_KEY = 'lang';

@Injectable({ providedIn: 'root' })
export class LanguageService {
  private readonly document = inject(DOCUMENT);
  readonly lang = signal<Lang>(this.initialLang());

  constructor() {
    // Keep <html lang/dir> in sync so the whole page flips to RTL in Arabic.
    effect(() => {
      const lang = this.lang();
      const html = this.document.documentElement;
      html.lang = lang;
      html.dir = lang === 'ar' ? 'rtl' : 'ltr';
      try {
        localStorage.setItem(STORAGE_KEY, lang);
      } catch {}
    });
  }

  toggle(): void {
    this.lang.update((lang) => (lang === 'en' ? 'ar' : 'en'));
  }

  t(text: Localized): string {
    return text[this.lang()];
  }

  private initialLang(): Lang {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved === 'en' || saved === 'ar') return saved;
    } catch {}
    return navigator.language.startsWith('ar') ? 'ar' : 'en';
  }
}
