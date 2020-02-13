import { Component } from "@angular/core";

@Component({
    selector: 'app-mapa',
    template: `
    <agm-map [latitude]="lat" [zoom]="zoom" [longitude]="lng">
        <agm-marker  [latitude]="lat" [longitude]="lng"></agm-marker>
    </agm-map>
    `,
    styleUrls: ['./mapa.component.scss']
})

export class MapaComponent {

    lat: number = -23.8779431;
    lng: number = -10.8046873;
    zoom: number = 15;
}