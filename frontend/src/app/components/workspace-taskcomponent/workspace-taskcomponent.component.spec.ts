import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkspaceTaskcomponentComponent } from './workspace-taskcomponent.component';

describe('WorkspaceTaskcomponentComponent', () => {
  let component: WorkspaceTaskcomponentComponent;
  let fixture: ComponentFixture<WorkspaceTaskcomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkspaceTaskcomponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkspaceTaskcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
