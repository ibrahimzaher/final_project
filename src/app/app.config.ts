import {
  ApplicationConfig,
  importProvidersFrom,
  provideBrowserGlobalErrorListeners,
  provideZonelessChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeuix/themes/aura';
import { routes } from './app.routes';
import { provideTranslateService } from '@ngx-translate/core';
import { provideTranslateHttpLoader } from '@ngx-translate/http-loader';
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { headerInterceptor } from './core/interceptors/header/header-interceptor';
import { loadingInterceptor } from './core/interceptors/loading/loading-interceptor';
import { errorInterceptor } from './core/interceptors/error/error-interceptor';
import { successInterceptor } from './core/interceptors/success/success-interceptor';
import { MessageService } from 'primeng/api';
import { NgxSpinnerModule } from 'ngx-spinner';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideAnimationsAsync(),

    importProvidersFrom(NgxSpinnerModule.forRoot({ type: 'ball-scale-multiple' })),

    provideHttpClient(
      withFetch(),
      withInterceptors([
        headerInterceptor,
        loadingInterceptor,
        successInterceptor,
        errorInterceptor,
      ])
    ),

    MessageService,

    provideTranslateService({
      loader: provideTranslateHttpLoader({
        prefix: './i18n/',
        suffix: '.json',
      }),
      fallbackLang: 'en',
      lang: 'en',
    }),

    providePrimeNG({
      theme: {
        preset: Aura,
        options: {
          darkModeSelector: '.dark',
          cssLayer: {
            name: 'primeng',
            order: 'theme, base, primeng',
          },
        },
      },
    }),

    provideRouter(routes),
  ],
};
