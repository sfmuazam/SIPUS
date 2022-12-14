
import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ApiService } from '../api.service';
import { AuthenticationService } from '../services/authentication.service';
@Component({
  selector: 'app-anggota',
  templateUrl: './anggota.page.html',
  styleUrls: ['./anggota.page.scss'],
})
export class AnggotaPage {
  page = 0;
  perPage = 10;
  anggota: any[] = [];
  lists: any[] = [];
  role: any = this.authService.getData('peran');
  constructor(
    public _apiService: ApiService,
    private alertController: AlertController,
    private authService: AuthenticationService,
  ) {

  }

  ngOnInit() {
    console.log('cek fungsi halaman event init jalan');
  }

  ionViewDidEnter() {
    console.log('jika selesai loading');
    this.page = 0;
    this.perPage = 10;
    this.getAnggota();
  }

  paginateArray() {
    this.page++;
    return this.anggota.filter(
      x => x.urutan_list > (this.page * this.perPage - this.perPage) && x.urutan_list <= (this.page * this.perPage)
    );
  }

  getAnggota() {
    this._apiService.tampil('tampilAnggota.php').subscribe({
      next: (res: any) => {
        console.log('sukses', res);
        this.anggota = res;
        this.lists = this.paginateArray();
      },
      error: (err:any) => {
        console.log(err);
      },
    })
  }

  doRefresh(event:any) {
    console.log('Mulai Refresh Konten');
    setTimeout(() => {
      console.log('Selesai Refresh Konten');
      event.target.complete();
      this.page = 0;
      this.perPage = 10;
      this.getAnggota();
    }, 2000);
  }

  loadMore(event:any) {
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

  deleteAnggota(id: any) {
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
            this._apiService.hapus(id, '/hapusAnggota.php?id_anggota=').subscribe({
              next: (res: any) => {
                console.log('sukses', res);
                this.page = 0;
                this.perPage = 10;
                this.getAnggota();
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

/* Created at 2022-11-22 23:58:23 */
/* Mohammad Irham Akbar CRUD IONIC 6 Angular */
