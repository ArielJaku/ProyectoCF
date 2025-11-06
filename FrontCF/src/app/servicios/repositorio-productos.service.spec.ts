import { TestBed } from '@angular/core/testing';

import { RepositorioProductosService } from './repositorio-productos.service';

describe('RepositorioProductosService', () => {
  let service: RepositorioProductosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RepositorioProductosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
