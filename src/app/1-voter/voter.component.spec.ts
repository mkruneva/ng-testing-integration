import { VoterComponent } from './voter.component';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

fdescribe('VoterComponent', () => {
  let component: VoterComponent;
  let fixture: ComponentFixture<VoterComponent>;


  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ VoterComponent ]
    });
    fixture = TestBed.createComponent(VoterComponent);
    component = fixture.componentInstance;
    // fixture.nativeElement
    // fixture.debugElement
  });

  it('should render total votes', () => {
    component.othersVote = 10;
    component.myVote = 1;
    fixture.detectChanges();

    const de = fixture.debugElement.query(By.css('.vote-count'));
    const el: HTMLElement = de.nativeElement;

    expect(el.innerText).toContain(11);

  });

  it('should rhighlight the menu-up icon when upvoted', () => {
    component.myVote = 1;
    // component.upVote();
    fixture.detectChanges();

    const de = fixture.debugElement.query(By.css('.glyphicon-menu-up'));

    expect(de.classes['highlighted']).toBeTruthy;
  });

  it('should rhighlight the menu-down icon when downvoted', () => {
    component.myVote = -1;
    // component.upVote();
    fixture.detectChanges();

    const de = fixture.debugElement.query(By.css('.glyphicon-menu-down'));

    expect(de.classes['highlighted']).toBeTruthy;
  });
});
