import { TestBed } from '@angular/core/testing';

import { SingleBlogService } from './single-blog.service';

describe('SingleBlogService', () => {
  let service: SingleBlogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SingleBlogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
