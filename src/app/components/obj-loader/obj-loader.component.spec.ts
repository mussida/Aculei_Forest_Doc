import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjLoaderComponent } from './obj-loader.component';

describe('ObjLoaderComponent', () => {
  let component: ObjLoaderComponent;
  let fixture: ComponentFixture<ObjLoaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ObjLoaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObjLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
