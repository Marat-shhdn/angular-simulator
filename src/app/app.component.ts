import { Component } from '@angular/core';
import './traning';
import './collection';
import { Colors } from '../enums/color';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  constructor() {
    this.storagedDateLastVisit();
    this.getCountVisits();
  }
  companyLabelUrl: string = '/images/label-icon.svg';
  companyName: string = 'румтибет';

  isPrimaryColor(color: Colors): boolean {
    return color === Colors.RED || color === Colors.GREEN || color === Colors.BLUE ? true : false;
  }
  // Автоматический вызов при старте через ngOnInit
  ngOnInit(): void {
    const result = this.isPrimaryColor(Colors.BLUE);
    console.log(`Colors.BLUE ${result}`);
  }

  storagedDateLastVisit(): void {
    const lastTimeVisit: string = new Date().toISOString();
    localStorage.setItem(`lastTimeVisit`, lastTimeVisit);
  }

  getCountVisits(): void {
    // Читаем прошлые входы из памяти. Если их нет (первый раз), берем '0'
    const savedCount: string = localStorage.getItem('countOfEntrances') || '0';
    // Переводим строку в число для математики
    let countEntrances: number = parseInt(savedCount, 10);
    // Прибавляем новый вход
    countEntrances = countEntrances + 1;
    // Сохраняем обратно в localStorage, через метод .toString()
    localStorage.setItem('countOfEntrances', countEntrances.toString());
  }
}
