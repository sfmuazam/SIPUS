
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { HttpClient } from '@angular/common/http'
@Component({
  selector: 'app-buku_tambah',
  templateUrl: './buku_tambah.page.html',
  styleUrls: ['./buku_tambah.page.scss'],
})
export class BukuTambahPage implements OnInit {
  kd_buku: any;

  cov: any;
  cover: any;
  judul: any;
  pengarang: any;
  penerbit: any;
  kategori: any;
  lokasi: any;
  ketersediaan: any;
  constructor(
    private router: Router,
    public _apiService: ApiService,
    private http: HttpClient
  ) { }

  ngOnInit() {
  }

  selectedFile(event: any) {
    this.cover = event.target.files[0];
  }

  addBuku() {
    this.addCover();

    let data = {
                 temp:'temp',
								 judul:this.judul,
								 pengarang:this.pengarang,
								 penerbit:this.penerbit,
								 kategori:this.kategori,
								 lokasi:this.lokasi,
								 ketersediaan:this.ketersediaan,
    }
    this._apiService.edit(data, '/tambahBuku.php')
      .subscribe({
        next: (hasil: any) => {
          console.log(hasil);
          this.kd_buku = '';
								 this.judul='';
								 this.pengarang='';
								 this.penerbit='';
								 this.kategori='';
								 this.lokasi='';
								 this.ketersediaan='';
          this._apiService.notif('berhasil tambah Buku');
          this.router.navigateByUrl('/buku');
        },
        error: (err: any) => {
          this._apiService.notif('gagal tambah Buku');
        }
      });



    // let data = {
    //   cover: this.cover,
    //   judul: this.judul,
    //   pengarang: this.pengarang,
    //   penerbit: this.penerbit,
    //   kategori: this.kategori,
    //   lokasi: this.lokasi,
    //   ketersediaan: this.ketersediaan,
    // }
    // this._apiService.tambah(data, '/tambahBuku.php')
    //   .subscribe({
    //     next: (hasil: any) => {
    //       console.log(hasil);
    //       this.kd_buku = '';
    //       this.cover = '';
    //       this.judul = '';
    //       this.pengarang = '';
    //       this.penerbit = '';
    //       this.kategori = '';
    //       this.lokasi = '';
    //       this.ketersediaan = '';
    //       this._apiService.notif('berhasil input Buku');
    //       this.router.navigateByUrl('/buku');
    //     },
    //     error: (err: any) => {
    //       this._apiService.notif('gagal input Buku');
    //     }
    //   })
  }

  addCover(){
    const formData = new FormData();
    formData.append('image', this.cover);
    this.http.post('http://localhost/SIPUS/apiSipus/cover.php', formData).subscribe((response: any) => {
      console.log(formData);
    });
  }

}





/* End of file  */

/* Created at 2022-11-22 23:58:28 */
/* Mohammad Irham Akbar CRUD IONIC 6 Angular */
