import { Component, ChangeDetectorRef } from "@angular/core";
import { GeocodeService } from "app/core/services/geocode.service";
import { Location } from "../../../core/models/location";
import { ConsultaCepService } from "@modules/consulta-cep.service";
import { Address } from "app/core/models/address";

@Component({
    selector: 'app-mapa',
    template: `
    <div class="map" [ngClass]="showHide">
      <div class="map__header">
          <!--div class="map__address">
            <p class="map__address--title">{{ address?.logradouro }}</p>
            <p>{{ address?.bairro }}</p>
            <p>{{ address?.localidade }} - {{ address?.uf }}</p>
            <p>{{ address?.cep }}</p>
          </div-->

          <div class="map__address">
            <p class="map__address--title">Rua Guilherme Melhem</p>
            <p>Jardim Santos</p>
            <p>São Paulo - SP</p>
            <p>09240-210</p>
          </div>

          <div class="map__close">
            <button class="map__button--close" (click)="hideMap()">
              <i class="fas fa-times"></i>
            </button>
          </div>
      </div>

      <agm-map
        [latitude]="location?.lat"
        [longitude]="location?.lng"
        [zoom]="15"
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

    showHide: string = '';
  
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
      if (cep !== undefined) {
        this.geocodeService.geocodeAddress(cep)
          .subscribe((location: Location) => {
              console.log(location);
              this.location = location;
              this.showHide = '';
              this.ref.detectChanges();  
            });   
      } 
    }

    hideMap(){
      this.showHide = 'map--hide';
    }
}