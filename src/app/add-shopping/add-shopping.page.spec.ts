import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddShoppingPage } from './add-shopping.page';

describe('AddShoppingPage', () => {
  let component: AddShoppingPage;
  let fixture: ComponentFixture<AddShoppingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddShoppingPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddShoppingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
