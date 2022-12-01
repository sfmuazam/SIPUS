
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-peminjaman_tambah',
  templateUrl: './peminjaman_tambah.page.html',
  styleUrls: ['./peminjaman_tambah.page.scss'],
})
export class PeminjamanTambahPage implements OnInit {
  id_peminjaman: any;
  id_anggota: any;
  kd_buku: any;
  tanggal_peminjaman: any = new Date();
  batas_pengembalian: any;
  tanggal_pengembalian: any;
  status_pengembalian: any;
  denda: any;
  status_denda: any;
  anggota: any[] = [];
  buku: any[] = [];
  constructor(
    private router: Router,
    public _apiService: ApiService,

  ) { this.getAnggota(), this.getBuku()}

  ngOnInit() {
  }
  getAnggota() {
    this._apiService.tampil('tampilAnggota.php').subscribe({
      next: (res: any) => {
        console.log('sukses', res);
        this.anggota = res;
      },
      error: (err:any) => {
        console.log(err);
      },
    })
  }
  getBuku() {
    this._apiService.tampil('tampilBuku.php').subscribe({
      next: (res: any) => {
        console.log('sukses', res);
        this.buku = res;
      },
      error: (err: any) => {
        console.log(err);
      },
    })
  }

  addPeminjaman() {
    let data = {
      id_anggota: this.id_anggota,
      kd_buku: this.kd_buku,
      tanggal_peminjaman: this.tanggal_peminjaman,
      status_pengembalian: 'Masih dipinjam',
    }
    this._apiService.tambah(data, '/tambahPeminjaman.php')
      .subscribe({
        next: (hasil: any) => {
          console.log(hasil);
          this.id_peminjaman = '';
          this.id_anggota = '';
          this.kd_buku = '';
          this.tanggal_peminjaman = '';
          this.batas_pengembalian = '';
          this.tanggal_pengembalian = '';
          this.status_pengembalian = '';
          this.denda = '';
          this.status_denda = '';
          this._apiService.notif('berhasil input Peminjaman');
          this.router.navigateByUrl('/peminjaman');
        },
        error: (err: any) => {
          console.log(err)
          this._apiService.notif('gagal input Peminjaman');
        }
      })
  }

}





/* End of file  */

/* Created at 2022-11-22 23:58:34 */
/* Mohammad Irham Akbar CRUD IONIC 6 Angular */
