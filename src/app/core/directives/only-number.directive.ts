import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
    selector: '[numeric]'
})

export class NumericDirective {

    @Input('decimals') decimals: number = 0;

    private check(value: string, decimals: number)
    {
      if (decimals <= 0) {
        return String(value).match(new RegExp(/^\d+$/));
      } else {
          var regExpString = "^\\s*((\\d+(\\.\\d{0," + decimals + "})?)|((\\d*(\\.\\d{1," + decimals + "}))))\\s*$"
          return String(value).match(new RegExp(regExpString));
      }
    }

    private specialKeys = [ 
      'Backspace', 'Tab', 'End', 'Home', 'ArrowLeft', 'ArrowRight', 'Delete'
    ];

    constructor(private el: ElementRef) {
    }

    @HostListener('keydown', [ '$event' ])
    onKeyDown(event: KeyboardEvent) {
        if (this.specialKeys.indexOf(event.key) !== -1) {
            return;
        }
        let current: string = this.el.nativeElement.value;
        let next: string = current.concat(event.key);
        if ( next && !this.check(next, this.decimals) ) {
           event.preventDefault();
        }
    }
}