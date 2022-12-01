import { AuthenticationService } from '../services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  id_anggota: any;
  password: any;
  constructor(
    private authService: AuthenticationService,
    private router: Router,
    public menuCtrl: MenuController
  ) { }
  ngOnInit() {
  }
  ionViewDidEnter() {
    this.menuCtrl.enable(false);
  }
  ionViewWillLeave() {
    this.menuCtrl.enable(true);
  }
  prosesLogin(): void {
    if (this.id_anggota != null && this.password != null) {
      const data = {
        id_anggota: this.id_anggota,
        password: this.password,
      };
      this.authService.postMethod(data, 'proses_login.php')
        .subscribe({
          next: (hasil) => {
            if (hasil.status_login == 'berhasil') {
              this.authService.saveData('token', hasil.token);
              this.authService.saveData('peran', hasil.peran);
              this.authService.saveData('id_anggota', hasil.id_anggota);
              this.id_anggota = null;
              this.password = null;
              this.router.navigateByUrl('/buku');
            } else {
              this.authService.notifikasi('id_anggota dan Password Salah');
            }
          },
          error: (e) => {
            this.authService.notifikasi('Gagal Login, periksa koneksi internet');
          }
        });
    } else {
      this.authService.notifikasi('id_anggota dan Password Tidak Boleh Kosong');
    }
  }
}
