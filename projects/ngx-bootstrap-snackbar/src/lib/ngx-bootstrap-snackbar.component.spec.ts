import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxBootstrapSnackbarComponent } from './ngx-bootstrap-snackbar.component';

describe('NgxBootstrapSnackbarComponent', () => {
  let component: NgxBootstrapSnackbarComponent;
  let fixture: ComponentFixture<NgxBootstrapSnackbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxBootstrapSnackbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxBootstrapSnackbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
