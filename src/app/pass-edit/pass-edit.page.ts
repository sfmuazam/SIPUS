import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-pass-edit',
  templateUrl: './pass-edit.page.html',
  styleUrls: ['./pass-edit.page.scss'],
})
export class PassEditPage implements OnInit {

  id_anggota: any;
  pass: any;
  password_lama: any;
  password_baru: any;
  konfirmasi_password_baru: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public _apiService: ApiService,
    private authService: AuthenticationService,) {
    this.route.params.subscribe((param: any) => {
      this.id_anggota = param.id;
      console.log(this.id_anggota);
      this.ambilPasswordLama(this.id_anggota);
    })
  }

  ngOnInit() {
  }
  ambilPasswordLama(id: any) {
    this._apiService.lihat(id, '/lihatAnggota.php?id_anggota=').subscribe({
      next: (hasil: any) => {
        console.log('sukses', hasil);
        let anggota = hasil;
        this.pass = anggota.password;
      },
      error: (error: any) => {
        this._apiService.notif('gagal ambil data');
      }
    })
  }
  editPassword() {
    let data = {
      id_anggota: this.id_anggota,
      password_lama: this.password_lama,
      password_baru: this.password_baru,
      konfirmasi_password_baru: this.konfirmasi_password_baru,
    }
    this._apiService.edit(data, '/editPassword.php')
      .subscribe({
        next: (hasil: any) => {
          if (hasil.status == 'Password lama salah')
            this._apiService.notif('Password lama salah');
          else if (hasil.status == 'Konfirmasi password baru berbeda')
            this._apiService.notif('Konfirmasi password baru tidak sama');
          else if (hasil.status == 'Berhasil') {
            console.log(hasil);
            this.id_anggota = '';
            this.password_lama = '';
            this.password_baru = '';
            this.konfirmasi_password_baru = '';
            this._apiService.notif('berhasil ubah password');
            this.router.navigateByUrl('/profil');
          }
        },
        error: (err: any) => {
          console.log(err);
          console.log(data);
          this._apiService.notif('gagal edit password');
        }
      })
  }
}
