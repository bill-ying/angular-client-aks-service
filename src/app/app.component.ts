import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Store, select } from '@ngrx/store'
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

import { PocState } from './store/poc.reducer';
import { getServerStatus } from './store/poc.actions'


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    CommonModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
   status$: Observable<string>;

  constructor(private store: Store<{ poc: PocState}>) {
    this.status$ = store.pipe(select(state => state.poc.message))   
  }

  ngOnInit(): void {
    this.store.dispatch(getServerStatus());
  }
}

