import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';
import { AuthenticationService } from '../services/authentication.service';
@Component({
  selector: 'app-anggota_edit',
  templateUrl: './anggota_edit.page.html',
  styleUrls: ['./anggota_edit.page.scss'],
})
export class AnggotaEditPage implements OnInit {
  id_anggota: any;
  nik: any;
  nama: any;
  alamat: any;
  peran: any;
  no_telp: any;
  password: any;
  role: any = this.authService.getData('peran');

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public _apiService: ApiService,
    private authService: AuthenticationService,
  ) {
    this.route.params.subscribe((param: any) => {
      this.id_anggota = param.id;
      console.log(this.id_anggota);
      this.ambilAnggota(this.id_anggota);
    })
  }

  ngOnInit() {
  }

  ambilAnggota(id: any) {
    this._apiService.lihat(id, '/lihatAnggota.php?id_anggota=').subscribe({
      next: (hasil: any) => {
        console.log('sukses', hasil);
        let anggota = hasil;
        this.nik = anggota.nik;
        this.nama = anggota.nama;
        this.alamat = anggota.alamat;
        this.peran = anggota.peran;
        this.no_telp = anggota.no_telp;
        this.password = anggota.password;
      },
      error: (error: any) => {
        console.log(error);
        this._apiService.notif('gagal ambil data');
      }
    })
  }

  editAnggota() {
    let data = {
      id_anggota: this.id_anggota,
      nik: this.nik,
      nama: this.nama,
      alamat: this.alamat,
      peran: this.peran,
      no_telp: this.no_telp,
      password: this.password,
    }
    console.log(data['id_anggota']);
    console.log(data['password']);
    this._apiService.edit(data, '/editAnggota.php')
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
          this._apiService.notif('berhasil edit Anggota');
          this.router.navigateByUrl('/anggota');
        },
        error: (err: any) => {
          console.log(err);
          console.log(data);
          this._apiService.notif('gagal edit Anggota');
        }
      })
  }



}




/* End of file  */

/* Created at 2022-11-22 23:58:23 */
/* Mohammad Irham Akbar CRUD IONIC 6 Angular */
