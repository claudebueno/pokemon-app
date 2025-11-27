import { provideZoneChangeDetection } from "@angular/core";
// main.ts
import {bootstrapApplication} from '@angular/platform-browser';
import {provideHttpClient} from '@angular/common/http';
import {AppComponent} from './app/app.component';

bootstrapApplication(AppComponent, {
  providers: [
    provideZoneChangeDetection(),provideHttpClient()
  ]
}).catch(err => console.error(err));
