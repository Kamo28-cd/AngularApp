import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreeComponentComponent } from './tree-component.component';

describe('TreeComponentComponent', () => {
  let component: TreeComponentComponent;
  let fixture: ComponentFixture<TreeComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TreeComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TreeComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
