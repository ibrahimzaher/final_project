import { HttpEvent, HttpInterceptorFn, HttpResponse } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { tap, catchError, throwError } from 'rxjs';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  const messageService = inject(MessageService);
  const router = inject(Router);

  return next(req).pipe(
    catchError((error) => {
      let message = 'Something went wrong!';

      if (error.status === 0) {
        message = 'Network error: Please check your internet connection.';
      } else if (error.status === 500) {
        message = 'Server error. Please try again later.';
      } else {
        message =
          error.error?.errors?.msg ||
          error.error?.message ||
          error.message ||
          error.error?.statusMsg ||
          message;
      }

      messageService.add({ severity: 'error', summary: 'Error', detail: message });

      return throwError(() => error);
    })
  );
};
