import { Component, ɵbypassSanitizationTrustResourceUrl } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from './services/authentication.service';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Profil', url: '/profil', icon: 'person' },
    { title: 'Peminjaman', url: '/peminjaman', icon: 'newspaper' },
    { title: 'Buku', url: '/buku', icon: 'book' },
    { title: 'Anggota', url: '/anggota', icon: 'people' }
  ];
  public appAnggotaPages = [
    { title: 'Profil', url: '/profil', icon: 'person' },
    { title: 'Buku', url: '/buku-agt', icon: 'book' },
  ];
  constructor(
    private router: Router,
    private authService: AuthenticationService) { }

  isAdmin() {
    if (this.authService.getData('peran') == 'Anggota')
      return false;
    else
      return true;
  }

  logout() {
    this.authService.logout(); // lempar ke authService lalu cari fungsi logout
    this.router.navigateByUrl('/', { replaceUrl: true }); // alihkan ke halama
  }
}


