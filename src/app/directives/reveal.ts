import { Directive, ElementRef, OnDestroy, OnInit, inject, input, numberAttribute } from '@angular/core';

/** Fades the element in when it scrolls into view. Optional delay in ms: appReveal="200". */
@Directive({
  selector: '[appReveal]',
  host: {
    class: 'reveal',
    '[style.transition-delay.ms]': 'delay()',
  },
})
export class Reveal implements OnInit, OnDestroy {
  readonly delay = input(0, { alias: 'appReveal', transform: (v: unknown) => numberAttribute(v, 0) });

  private readonly el = inject<ElementRef<HTMLElement>>(ElementRef);
  private observer?: IntersectionObserver;

  ngOnInit(): void {
    this.observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          this.el.nativeElement.classList.add('visible');
          this.observer?.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    this.observer.observe(this.el.nativeElement);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
