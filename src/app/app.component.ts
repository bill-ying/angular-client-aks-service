import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Store, select } from '@ngrx/store'
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

import * as fromPoc from './store/poc.reducer';
import * as PocActions from './store/poc.actions'


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

  constructor(private store: Store<{ poc: fromPoc.PocState }>) {
    this.status$ = store.pipe(select(state => state.poc.message))   
  }

  ngOnInit(): void {
    this.store.dispatch(PocActions.getServerStatus());
  }
}

