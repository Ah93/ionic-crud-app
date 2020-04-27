import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditShoppingItemPage } from './edit-shopping-item.page';

describe('EditShoppingItemPage', () => {
  let component: EditShoppingItemPage;
  let fixture: ComponentFixture<EditShoppingItemPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditShoppingItemPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditShoppingItemPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
