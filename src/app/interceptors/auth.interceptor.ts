import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth.service';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const bearerToken = inject(AuthService).getToken();

  if (bearerToken) {
    const authorization = `Bearer ${bearerToken}`;

    const modifiedReq = req.clone({
      setHeaders: {
        Authorization: authorization,
        'Content-Type': 'application/json',
      },
    });

    return next(modifiedReq);
  }

  return next(req);
};
