import { Injectable } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { CanActivate, CanLoad, Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad, CanActivate{
  constructor(
    private authService: AuthenticationService,
    private router: Router,
  ) { }
  canLoad(): boolean {
    if (this.authService.getData('token') != 'undefined' &&
      this.authService.getData('token') != null) {
        return true;
    } else {
      this.router.navigateByUrl('/login');
      return true;
    }
  }

  canActivate(): boolean {
    if (this.authService.getData('peran') != 'Anggota') {
        return true;
    } else {
      this.router.navigateByUrl('/buku-agt');
      return true;
    }
  }
}
