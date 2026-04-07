import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { MainService } from './service/main.service';

export const authGuard: CanActivateFn = (route, state) => {
  const MainSer = inject(MainService);
  const router = inject(Router)
  if(MainSer.isAuthenticated()){
    return true
  }
  router.navigate(['/login'])
  return false;
};
