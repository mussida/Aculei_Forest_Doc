import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IlluminazioneComponent } from './illuminazione.component';

describe('IlluminazioneComponent', () => {
  let component: IlluminazioneComponent;
  let fixture: ComponentFixture<IlluminazioneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IlluminazioneComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IlluminazioneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
