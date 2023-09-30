import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { LoginService } from '../Services/login.service';

export const adminGuard: CanActivateFn = (route, state) => {
  const service = inject(LoginService);
    const router = inject(Router);

  if(service.isLogin){
    return true;
  }else{
    alert('please login');
    router.navigate(['/login']);
    return false;
  }
};
