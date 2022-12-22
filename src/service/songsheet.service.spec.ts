import { TestBed } from '@angular/core/testing';

import { SongsheetService } from './songsheet.service';

describe('SongsheetService', () => {
  let service: SongsheetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SongsheetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
