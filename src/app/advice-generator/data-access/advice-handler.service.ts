import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap, map } from 'rxjs';
import { Slip } from '../models/slip';
import { HttpClient } from '@angular/common/http';
import { Advice } from '../models/advice';

@Injectable({
  providedIn: 'root',
})
export class AdviceHandlerService {
  private advice = new BehaviorSubject<Advice>({ advice: '', id: 0 });
  public advice$ = this.advice.asObservable();
  private apiUrl = 'https://api.adviceslip.com/advice?t=';

  constructor(private http: HttpClient) {}

  public getNewAdvice() {
    return this.http.get<Slip>(this.apiUrl + Math.random()).pipe(
      map((response) => response.slip),
      tap((response) => {
        this.advice.next(response);
      }),
    );
  }
}
