import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AntiforgeryComponent } from './antiforgery.component';

describe('AntiforgeryComponent', () => {
  let component: AntiforgeryComponent;
  let fixture: ComponentFixture<AntiforgeryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AntiforgeryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AntiforgeryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
