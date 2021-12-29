import { TestBed } from '@angular/core/testing';

import { NgxBootstrapSnackbarService } from './ngx-bootstrap-snackbar.service';

describe('NgxBootstrapSnackbarService', () => {
  let service: NgxBootstrapSnackbarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxBootstrapSnackbarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
