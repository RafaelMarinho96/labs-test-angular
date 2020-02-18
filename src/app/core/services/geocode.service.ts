import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { fromPromise } from 'rxjs/internal/observable/fromPromise';
import { tap, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

// Models
import { Location } from '../models/location';

// Vendors
import { MapsAPILoader } from '@agm/core';

declare var google: any;

@Injectable({
  providedIn: 'root'
})

export class GeocodeService {
  private geocoder: any;

  constructor(private mapLoader: MapsAPILoader) {}

  private initGeocoder() {
    this.geocoder = new google.maps.Geocoder();
  }

  private waitForMapsToLoad(): Observable<boolean> {
    if(!this.geocoder) {
      return fromPromise(this.mapLoader.load())
      .pipe(
        tap(() => this.initGeocoder()),
        map(() => true)
      );
    }
    return of(true);
  }

  geocodeAddress(location: string): Observable<Location> {
    return this.waitForMapsToLoad().pipe(
      switchMap(() => {
        return new Observable(observer => {
          this.geocoder.geocode({'address': location}, (results, status) => {
            if (status == google.maps.GeocoderStatus.OK) {
              observer.next({
                lat: results[0].geometry.location.lat(), 
                lng: results[0].geometry.location.lng()
              });
            } else {
                observer.next({ lat: 0, lng: 0 });
            }
            observer.complete();
          });
        })        
      })
    )
  }
  
}