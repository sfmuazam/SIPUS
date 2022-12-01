
import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-peminjaman',
  templateUrl: './peminjaman.page.html',
  styleUrls: ['./peminjaman.page.scss'],
})
export class PeminjamanPage {
  page = 0;
  perPage = 10;
  id_peminjaman: any;
  id_anggota: any;
  kd_buku: any;
  tanggal_peminjaman: any = new Date();
  batas_pengembalian: any;
  tanggal_pengembalian: any;
  status_pengembalian: any;
  denda: any;
  status_denda: any;
  peminjaman: any[] = [];
  lists: any[] = [];
  constructor(
    public _apiService: ApiService,
    private alertController: AlertController,
  ) {

  }

  ngOnInit() {
    console.log('cek fungsi halaman event init jalan');
  }

  ionViewDidEnter() {
    console.log('jika selesai loading');
    this.page = 0;
    this.perPage = 10;
    this.getPeminjaman();
  }

  paginateArray() {
    this.page++;
    return this.peminjaman.filter(
      x => x.urutan_list > (this.page * this.perPage - this.perPage) && x.urutan_list <= (this.page * this.perPage)
    );
  }

  getPeminjaman() {
    this._apiService.tampil('tampilPeminjaman.php').subscribe({
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

  doRefresh(event: any) {
    console.log('Mulai Refresh Konten');
    setTimeout(() => {
      console.log('Selesai Refresh Konten');
      event.target.complete();
      this.page = 0;
      this.perPage = 10;
      this.getPeminjaman();
    }, 2000);
  }

  loadMore(event: any) {
    console.log(event);
    setTimeout(() => {
      const array = this.paginateArray();
      console.log('new data: ', array);
      this.lists = this.lists.concat(array);
      console.log('list data: ', this.lists);
      event.target.complete();
      if (array?.length < this.perPage) {
        event.target.disabled = true;
      };
    }, 1000);
  }
  kembalikanPeminjaman(id: any) {
    this.alertController.create({
      header: 'perhatian',
      subHeader: 'Yakin meengembalikan buku?',
      buttons: [
        {
          text: 'Batal',
          handler: (data: any) => {
            console.log('dibatalkan', data);
          }
        },
        {
          text: 'Yakin',
          handler: (data: any) => {
            //jika tekan yakin
            this._apiService.kembalikan(id, '/kembalikanPeminjaman.php?id_peminjaman=').subscribe({
              next: (res: any) => {
                console.log('sukses', res);
                this.id_peminjaman = '';
                this.id_anggota = '';
                this.kd_buku = '';
                this.tanggal_peminjaman = '';
                this.batas_pengembalian = '';
                this.tanggal_pengembalian = '';
                this.status_pengembalian = '';
                this.denda = '';
                this.status_denda = '';
                this._apiService.notif('berhasil mengembalikan buku');
                this.page = 0;
                this.perPage = 10;
                this.getPeminjaman();
              },
              error: (error: any) => {
                console.log(error);
                this._apiService.notif('gagal');
              }
            })
          }
        }
      ]
    }).then(res => {
      res.present();
    })
  }
  bayarkanDenda(id: any) {
    this.alertController.create({
      header: 'perhatian',
      subHeader: 'Yakin membayarkan denda',
      buttons: [
        {
          text: 'Batal',
          handler: (data: any) => {
            console.log('dibatalkan', data);
          }
        },
        {
          text: 'Yakin',
          handler: (data: any) => {
            //jika tekan yakin
            this._apiService.bayarDenda(id, '/bayarDenda.php?id_peminjaman=').subscribe({
              next: (res: any) => {
                console.log('sukses', res);
                this.id_peminjaman = '';
                this.id_anggota = '';
                this.kd_buku = '';
                this.tanggal_peminjaman = '';
                this.batas_pengembalian = '';
                this.tanggal_pengembalian = '';
                this.status_pengembalian = '';
                this.denda = '';
                this.status_denda = '';
                this._apiService.notif('berhasil membayar denda');
                this.page = 0;
                this.perPage = 10;
                this.getPeminjaman();
              },
              error: (error: any) => {
                console.log(error);
                this._apiService.notif('gagal');
              }
            })
          }
        }
      ]
    }).then(res => {
      res.present();
    })
  }
  deletePeminjaman(id: any) {
    this.alertController.create({
      header: 'perhatian',
      subHeader: 'Yakin menghapus data ini?',
      buttons: [
        {
          text: 'Batal',
          handler: (data: any) => {
            console.log('dibatalkan', data);
          }
        },
        {
          text: 'Yakin',
          handler: (data: any) => {
            //jika tekan yakin
            this._apiService.hapus(id, '/hapusPeminjaman.php?id_peminjaman=').subscribe({
              next: (res: any) => {
                console.log('sukses', res);
                this.page = 0;
                this.perPage = 10;
                this.getPeminjaman();
              },
              error: (error: any) => {
                this._apiService.notif('gagal');
              }
            })
          }
        }
      ]
    }).then(res => {
      res.present();
    })
  }

}




/* End of file  */

/* Created at 2022-11-22 23:58:34 */
/* Mohammad Irham Akbar CRUD IONIC 6 Angular */
