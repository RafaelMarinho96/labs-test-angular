import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { filter, map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit{
  
  constructor(
    private router: Router,
    private activateRoute: ActivatedRoute,
    private titleService: Title
  ){}

  ngOnInit(): void {
    this.router.events
        .pipe(filter(event => event instanceof NavigationEnd))
        .pipe(map(() => this.activateRoute))
        .pipe(map(route => {
          while(route.firstChild) route = route.firstChild;
          return route;
        }))
        .pipe(switchMap(route => route.data))
        .subscribe(event => this.titleService.setTitle(event.title))
  }
}
