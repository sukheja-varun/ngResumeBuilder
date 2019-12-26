import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AchievementsFormComponent } from './achievements-form.component';

describe('AchievementsFormComponent', () => {
  let component: AchievementsFormComponent;
  let fixture: ComponentFixture<AchievementsFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AchievementsFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AchievementsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
