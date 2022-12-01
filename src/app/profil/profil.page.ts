import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.page.html',
  styleUrls: ['./profil.page.scss'],
})
export class ProfilPage implements OnInit {

  page: any;
  perPage: any;
  id_anggota: any;
  nik: any;
  nama: any;
  alamat: any;
  peran: any;
  no_telp: any;
  password: any;

  id_peminjaman: any;
  kd_buku: any;
  tanggal_peminjaman: any;
  batas_pengembalian: any;
  tanggal_pengembalian: any;
  status_pengembalian: any;
  denda: any;
  status_denda: any;
  peminjaman: any[] = [];
  lists: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public _apiService: ApiService,
    private authService: AuthenticationService,) {
    this.id_anggota = this.authService.getData('id_anggota');
    console.log(this.id_anggota);
    this.ambilAnggota(this.id_anggota);
  }

  ngOnInit() {
  }

  ionViewDidEnter() {
    console.log('jika selesai loading');
    this.page = 0;
    this.perPage = 10;
    this.getPeminjaman(this.id_anggota);
  }

  paginateArray() {
    this.page++;
    return this.peminjaman.filter(
      x => x.urutan_list > (this.page * this.perPage - this.perPage) && x.urutan_list <= (this.page * this.perPage)
    );
  }

  getPeminjaman(id: any) {
    this._apiService.lihat(id, '/lihatPeminjaman.php?id_anggota=').subscribe({
      next: (res: any) => {
        console.log('sukses', res);
        this.peminjaman = res;
        this.lists = this.paginateArray();
      },
      error: (err: any) => {
        console.log(err);
      },
    })
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
        this._apiService.notif('gagal ambil data');
      }
    })
  }
  ambilPeminjaman(id: any) {
    this._apiService.lihat(id, '/lihatPeminjaman.php?id_peminjaman=').subscribe({
      next: (hasil: any) => {
        console.log('sukses', hasil);
        let peminjaman = hasil;
        this.id_anggota = peminjaman.id_anggota;
        this.kd_buku = peminjaman.kd_buku;
        this.tanggal_peminjaman = peminjaman.tanggal_peminjaman;
        this.batas_pengembalian = peminjaman.batas_pengembalian;
        this.tanggal_pengembalian = peminjaman.tanggal_pengembalian;
        this.status_pengembalian = peminjaman.status_pengembalian;
        this.denda = peminjaman.denda;
        this.status_denda = peminjaman.status_denda;
      },
      error: (error: any) => {
        this._apiService.notif('gagal ambil data');
      }
    })
  }

}
