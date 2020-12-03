import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetupgroupsComponent } from './meetupgroups.component';

describe('MeetupgroupsComponent', () => {
  let component: MeetupgroupsComponent;
  let fixture: ComponentFixture<MeetupgroupsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeetupgroupsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeetupgroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
