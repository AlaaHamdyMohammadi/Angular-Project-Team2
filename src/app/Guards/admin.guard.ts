import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { LoginService } from '../Services/login.service';
import { ToastrService } from 'ngx-toastr';

export const adminGuard: CanActivateFn = (route, state) => {
  const service = inject(LoginService);
  const toaster = inject(ToastrService);
  const router = inject(Router);


  if(service.isLogin){
    return true;
  }else{
    toaster.error('You Must Be Login First!');
    router.navigate(['/login']);
    return false;
  }
};
