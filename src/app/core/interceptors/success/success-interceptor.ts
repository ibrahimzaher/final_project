import { HttpEvent, HttpInterceptorFn, HttpResponse } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { tap } from 'rxjs';

export const successInterceptor: HttpInterceptorFn = (req, next) => {
  const messageService = inject(MessageService);
  const router = inject(Router);

  return next(req).pipe(
    tap((event: HttpEvent<any>) => {
      if (['POST', 'PUT', 'DELETE'].includes(req.method) && event instanceof HttpResponse) {
        const message = event.body?.message || event.body?.status || 'Operation successful!';
        messageService.add({ severity: 'success', summary: 'Success', detail: message });
      }
    })
  );
};
