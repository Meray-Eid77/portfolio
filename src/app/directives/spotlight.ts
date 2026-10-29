import { Directive, ElementRef, inject } from '@angular/core';

/** Soft glow that follows the mouse across the element (styled by .spotlight in styles.scss). */
@Directive({
  selector: '[appSpotlight]',
  host: {
    class: 'spotlight',
    '(mousemove)': 'move($event)',
    '(mouseleave)': 'reset()',
  },
})
export class Spotlight {
  private readonly el = inject<ElementRef<HTMLElement>>(ElementRef);

  move(event: MouseEvent): void {
    const rect = this.el.nativeElement.getBoundingClientRect();
    this.set(`${event.clientX - rect.left}px`, `${event.clientY - rect.top}px`);
  }

  reset(): void {
    this.set('-1000px', '-1000px');
  }

  private set(x: string, y: string): void {
    this.el.nativeElement.style.setProperty('--x', x);
    this.el.nativeElement.style.setProperty('--y', y);
  }
}
