import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { AdviceGeneratorComponent } from './advice-generator.component';

describe('AdviceGeneratorComponent', () => {
  let component: AdviceGeneratorComponent;
  let fixture: ComponentFixture<AdviceGeneratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdviceGeneratorComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AdviceGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call #generateAdvice when "generate-advice" button is clicked', () => {
    const spy = spyOn(component, 'generateAdvice');
    const element = fixture.debugElement.query(
      By.css('button[data-testid="generate-advice"]'),
    );
    const button = element.nativeElement as HTMLButtonElement;

    button.click();
    fixture.detectChanges();

    expect(spy).toHaveBeenCalled();
  });
});
