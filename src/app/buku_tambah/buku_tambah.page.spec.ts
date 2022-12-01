
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BukuTambahPage } from './buku_tambah.page';

describe('BukuTambahPage', () => {
  let component: BukuTambahPage;
  let fixture: ComponentFixture<BukuTambahPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BukuTambahPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BukuTambahPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});





/* End of file  */

/* Created at 2022-11-22 23:58:28 */
/* Mohammad Irham Akbar CRUD IONIC 6 Angular */