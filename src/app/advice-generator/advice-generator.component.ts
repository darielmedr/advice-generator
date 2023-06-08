import { Component, OnDestroy, OnInit } from '@angular/core';
import { AdviceHandlerService } from './data-access/advice-handler.service';
import { Subject, takeUntil } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-advice-generator',
  imports: [HttpClientModule, CommonModule],
  templateUrl: './advice-generator.component.html',
  styleUrls: ['./advice-generator.component.scss'],
})
export class AdviceGeneratorComponent implements OnDestroy, OnInit {
  private destroy = new Subject<void>();
  public currentAdvice$ = this.adviceHandlerService.advice$;

  constructor(private adviceHandlerService: AdviceHandlerService) {}

  public generateAdvice(): void {
    this.adviceHandlerService
      .getNewAdvice()
      .pipe(takeUntil(this.destroy))
      .subscribe();
  }

  ngOnInit(): void {
    this.generateAdvice();
  }

  ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }
}
