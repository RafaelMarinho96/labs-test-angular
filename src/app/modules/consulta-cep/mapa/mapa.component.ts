import { Component, ChangeDetectorRef } from "@angular/core";
import { GeocodeService } from "app/core/services/geocode.service";
import { Location } from "../../../core/models/location";
import { ConsultaCepService } from "@modules/consulta-cep.service";
import { Address } from "app/core/models/address";

@Component({
    selector: 'app-mapa',
    template: `
    <!--form (ngSubmit)="showLocation()">
      <input type="text" [(ngModel)]="address" required [ngModelOptions]="{standalone: true}">
      <button type="submit">Show Location</button>
    </form-->
    <div class="map">
      <div class="map__header">
          <div class="map__address">
            <h2>{{ address?.logradouro }}</h2>
            <p>{{ address?.bairro }}</p>
            <p>{{ address?.localidade }} - {{ address?.uf }}</p>
            <p>{{ address?.cep }}</p>
          </div>
          <div class="map__close">X</div>
      </div>

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
    </div>
    `,
    styleUrls: ['./mapa.component.scss']
})

export class MapaComponent {

    address: Address;
    location: Location;
    loading: boolean;
  
    constructor(
      private geocodeService: GeocodeService,
      private ref: ChangeDetectorRef,
      private consultaCepService: ConsultaCepService
    ) {}
    
    ngOnInit() {
      this.consultaCepService.currentAddress
        .subscribe((address: Address) => {
          console.log(address);
          this.address = address;
          this.addressToCoordinates(address.cep);
        })
    }
  
    addressToCoordinates(cep: string) {
      this.loading = true;
      this.geocodeService.geocodeAddress(cep)
      .subscribe((location: Location) => {
          console.log(location);
          this.location = location;
          this.loading = false;
          this.ref.detectChanges();  
        }      
      );     
    }
}