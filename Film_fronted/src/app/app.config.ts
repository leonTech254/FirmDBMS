import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, provideHttpClient, withFetch, withInterceptorsFromDi } from '@angular/common/http';
import { HttpInterceptorService } from './http-interceptor.service';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),
     provideClientHydration(),
    //  add the Inteceptor here
    provideAnimationsAsync(), provideAnimationsAsync(),
    provideHttpClient(withFetch(),withInterceptorsFromDi(),),
    { provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorService, multi: true },
     
    ]
};
