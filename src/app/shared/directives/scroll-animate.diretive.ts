import { Directive, ElementRef, Renderer2, AfterViewInit, Input } from '@angular/core';

@Directive({
  selector: '[scrollAnimate]',
  standalone: true
})
export class ScrollAnimateDirective implements AfterViewInit {

  @Input() animationClass = 'animate';

  constructor(
    private el: ElementRef,
    private renderer: Renderer2
  ) {}

  ngAfterViewInit() {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          this.renderer.addClass(this.el.nativeElement, this.animationClass);
          observer.unobserve(this.el.nativeElement);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(this.el.nativeElement);
  }
}
