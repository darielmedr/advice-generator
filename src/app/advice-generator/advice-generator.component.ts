import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-advice-generator',
  templateUrl: './advice-generator.component.html',
  styleUrls: ['./advice-generator.component.scss'],
})
export class AdviceGeneratorComponent {
  public generateAdvice(): void {
    console.log('generate new advice');
  }
}
