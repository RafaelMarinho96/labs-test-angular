import { Component, ChangeDetectorRef } from "@angular/core";
import { GeocodeService } from "app/core/services/geocode.service";
import { Location } from "../../../core/models/location";
import { ConsultaCepService } from "@modules/consulta-cep.service";

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
            <h2>Rua Miguel Mentem</h2>
            <p>Vila Guilherme</p>
            <p>São Paulo - SP</p>
            <p>02050-010</p>
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

    address = '09240210';
    location: Location;
    loading: boolean;
  
    constructor(
      private geocodeService: GeocodeService,
      private ref: ChangeDetectorRef,
      private consultaCepService: ConsultaCepService
    ) {}
    
    ngOnInit() {
      this.consultaCepService.currentCep
        .subscribe(cep => {
          console.log(cep);
          this.addressToCoordinates(cep);
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