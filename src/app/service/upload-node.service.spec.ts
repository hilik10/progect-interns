import { TestBed } from '@angular/core/testing';

import { UploadNodeService } from './upload-node.service';

describe('UploadNodeService', () => {
  let service: UploadNodeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UploadNodeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
