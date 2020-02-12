import { Component, Input } from "@angular/core";

@Component({
    selector: 'helper-text',
    template: `
        <p>{{ value }}</p>
    `
})

export class HelperTextComponent {

    @Input() value: string;
}