import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetailsUserPage } from './details-user.page';

describe('DetailsUserPage', () => {
  let component: DetailsUserPage;
  let fixture: ComponentFixture<DetailsUserPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsUserPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetailsUserPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
