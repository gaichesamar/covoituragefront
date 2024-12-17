import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutannonceComponent } from './ajoutannonce.component';

describe('AjoutannonceComponent', () => {
  let component: AjoutannonceComponent;
  let fixture: ComponentFixture<AjoutannonceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjoutannonceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutannonceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
