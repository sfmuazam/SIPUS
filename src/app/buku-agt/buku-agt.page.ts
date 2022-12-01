
import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ApiService } from '../api.service';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-buku-agt',
  templateUrl: './buku-agt.page.html',
  styleUrls: ['./buku-agt.page.scss'],
})
export class BukuAgtPage implements OnInit {
  page = 0;
  id_anggota: any;
  token: any;
  perPage = 10;
  buku: any[] = [];
  lists: any[] = [];
  constructor(
    public _apiService: ApiService,
    private alertController: AlertController,
    private authService: AuthenticationService,
    private router: Router) { }

  ngOnInit() {
    this.loadToken();
    console.log('cek fungsi halaman event init jalan');
  }

  ionViewDidEnter() {
    console.log('jika selesai loading');
    this.page = 0;
    this.perPage = 10;
    this.getBuku();
  }

  paginateArray() {
    this.page++;
    return this.buku.filter(
      x => x.urutan_list > (this.page * this.perPage - this.perPage) && x.urutan_list <= (this.page * this.perPage)
    );
  }

  getBuku() {
    this._apiService.tampil('tampilBuku.php').subscribe({
      next: (res: any) => {
        console.log('sukses', res);
        this.buku = res;
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
      this.getBuku();
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

  //ceksesi untuk mengambil id_anggota user
  loadToken() {
    this.token = this.authService.getData('token');
    if (this.token != null) {
      this.id_anggota = this.authService.getData('id_anggota');
    } else {
      this.router.navigateByUrl('/login');
    }
  }
  //membuat fungsi logout
  logout() {
    this.authService.logout(); // lempar ke authService lalu cari fungsi logout
    this.router.navigateByUrl('/', { replaceUrl: true }); // alihkan ke halama
  }
}




/* End of file  */

/* Created at 2022-11-22 23:58:28 */
/* Mohammad Irham Akbar CRUD IONIC 6 Angular */
