import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';

export const headerInterceptor: HttpInterceptorFn = (req, next) => {
  const token = localStorage.getItem('token');
  if (
    ['auth', 'wishlist', 'addresses', 'cart', 'orders', 'users'].some((key) =>
      req.url.includes(key)
    )
  ) {
    if (token) {
      req = req.clone({
        setHeaders: {
          token: token,
        },
      });
    }
  }
  return next(req);
};
