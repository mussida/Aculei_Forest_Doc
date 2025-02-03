import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VertexFragmentComponent } from './vertex-fragment.component';

describe('VertexFragmentComponent', () => {
  let component: VertexFragmentComponent;
  let fixture: ComponentFixture<VertexFragmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VertexFragmentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VertexFragmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
