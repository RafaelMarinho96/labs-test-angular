import { Component, ChangeDetectorRef } from "@angular/core";
import { GeocodeService } from "app/core/services/geocode.service";
import { Location } from "../../../core/models/location";

@Component({
    selector: 'app-mapa',
    template: `
    <form (ngSubmit)="showLocation()">
  <input type="text" [(ngModel)]="address" required [ngModelOptions]="{standalone: true}">
  <button type="submit">Show Location</button>
</form>

<agm-map
  [latitude]="location?.lat"
  [longitude]="location?.lng"
  [zoom]="8"
  [disableDefaultUI]="false"
  [zoomControl]="false">
  <agm-marker 
      [latitude]="location?.lat"
      [longitude]="location?.lng">   
  </agm-marker>
</agm-map>
    `,
    styleUrls: ['./mapa.component.scss']
})

export class MapaComponent {

    address = 'London';
    location: Location;
    loading: boolean;
  
    constructor(
      private geocodeService: GeocodeService,
      private ref: ChangeDetectorRef,
    ) {}
    
    ngOnInit() {
      this.showLocation();
    }
  
    showLocation() {
      this.addressToCoordinates();
    }
  
    addressToCoordinates() {
      this.loading = true;
      this.geocodeService.geocodeAddress(this.address)
      .subscribe((location: Location) => {
          this.location = location;
          this.loading = false;
          this.ref.detectChanges();  
        }      
      );     
    }
}