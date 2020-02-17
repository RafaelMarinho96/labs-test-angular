import { Component, Input } from "@angular/core";

@Component({
    selector: 'helper-text',
    template: `
        <span class="helper-text">{{ value }}</span>
    `,
    styleUrls: ['./helper-text.component.scss']
})

export class HelperTextComponent {

    @Input() value: string;
}