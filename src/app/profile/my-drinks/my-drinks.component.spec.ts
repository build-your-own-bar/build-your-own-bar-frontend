import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyDrinksComponent } from './my-drinks.component';

describe('MyDrinksComponent', () => {
  let component: MyDrinksComponent;
  let fixture: ComponentFixture<MyDrinksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyDrinksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyDrinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
