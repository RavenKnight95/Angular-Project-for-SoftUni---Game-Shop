import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameListItemDetailsComponent } from './game-list-item-details.component';

describe('GameListItemDetailsComponent', () => {
  let component: GameListItemDetailsComponent;
  let fixture: ComponentFixture<GameListItemDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GameListItemDetailsComponent]
    });
    fixture = TestBed.createComponent(GameListItemDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
