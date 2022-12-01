
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { AuthenticationService } from '../services/authentication.service';
@Component({
  selector: 'app-anggota_tambah',
  templateUrl: './anggota_tambah.page.html',
  styleUrls: ['./anggota_tambah.page.scss'],
})
export class AnggotaTambahPage implements OnInit {
  id_anggota: any;
  nik: any;
  nama: any;
  alamat: any;
  peran: any;
  no_telp: any;
  password: any;
  role: any = this.authService.getData('peran');
  constructor(
    private router: Router,
    public _apiService: ApiService,
    private authService: AuthenticationService,
  ) { }

  ngOnInit() {
  }

  addAnggota() {
    let data = {
      nik: this.nik,
      nama: this.nama,
      alamat: this.alamat,
      peran: this.peran,
      no_telp: this.no_telp,
      password: this.password,
    }
    this._apiService.tambah(data, '/tambahAnggota.php')
      .subscribe({
        next: (hasil: any) => {
          console.log(hasil);
          this.id_anggota = '';
          this.nik = '';
          this.nama = '';
          this.alamat = '';
          this.peran = '';
          this.no_telp = '';
          this.password = '';
          this._apiService.notif('berhasil input Anggota');
          this.router.navigateByUrl('/anggota');
        },
        error: (err: any) => {
          this._apiService.notif('gagal input Anggota');
        }
      })
  }

}





/* End of file  */

/* Created at 2022-11-22 23:58:23 */
/* Mohammad Irham Akbar CRUD IONIC 6 Angular */
