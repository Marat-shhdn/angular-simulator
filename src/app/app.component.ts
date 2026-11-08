import { Component } from '@angular/core';
import './traning';
import './collection';
import { Colors } from '../enums/color';
import { IOffer } from '../interfaces/IOffer';
import { ILocation } from '../interfaces/ILocation';
import { IMember } from '../interfaces/IMember';
import { NgModel } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { DatePipe } from '@angular/common';
import { timer } from 'rxjs';

const today = new Date();
const month = today.getMonth();
const year = today.getFullYear();

@Component({
  selector: 'app-root',
  imports: [
    DatePipe,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [DatePipe],
})
export class AppComponent {
  readonly minDate = new Date();
  readonly campaignOne = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });

  companyLabelUrl: string = '/images/label-icon.svg';
  companyName: string = 'румтибет';
  status: string = 'loading';
  selectedOfferId!: number;
  formLocation: string = '';
  formMember: string = '';
  clicker: number = 0;
  dateDisplay: string = '';
  nameButton: string = 'Показать дату';
  timer: any = null;
  liveInput!: string;
  waitingTime: boolean = true;
  offers: IOffer[] = [
    {
      id: 1,
      img: '/images/offer-people-icon.svg',
      title: 'Опытный гид',
      description:
        'Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активизации.',
    },
    {
      id: 2,
      img: '/images/offer-sheild-icon.svg',
      title: 'Безопасный поход',
      description:
        'Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активизации.',
    },
    {
      id: 3,
      img: '/images/offer-price-icon.svg',
      title: 'Лояльные цены',
      description:
        'Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активизации.',
    },
  ];
  locations: ILocation[] = [
    { id: 1, name: 'caucas', meaning: 'Кавказские горы' },
    { id: 2, name: 'altay', meaning: 'Алтайский край' },
    { id: 3, name: 'camchatka', meaning: 'Камчатка' },
    { id: 4, name: 'elbrus', meaning: 'Горы Эльбрус' },
    { id: 5, name: 'elbrus', meaning: 'Красная Поляна' },
  ];
  members: IMember[] = [
    { id: 1, name: 'four', meaning: '4 персоны' },
    { id: 2, name: 'five', meaning: '5 персон' },
    { id: 3, name: 'six', meaning: '6 персон' },
    { id: 4, name: 'seven', meaning: '7 персон' },
    { id: 5, name: 'eigth', meaning: '8 персон' },
  ];

  constructor(private datePipe: DatePipe) {
    this.storagedDateLastVisit();
    this.getCountVisits();
    console.log(this.formLocation);
    setTimeout(() => {
      this.waitingTime = false;
    }, 5000);
  }

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

  selectOffer(offerId: number): void {
    this.selectedOfferId = offerId;
  }

  changeString(): void {
    if (!this.timer) {
      this.nameButton = 'Показать кликер';
      this.dateDisplay = this.datePipe.transform(new Date(), 'dd.MM.yyyy HH:mm:ss') || '';
      this.timer = setInterval(() => {
        this.dateDisplay = this.datePipe.transform(new Date(), 'dd.MM.yyyy HH:mm:ss') || '';
      }, 1000);
    } else {
      clearInterval(this.timer);
      this.timer = null;
      this.dateDisplay = '';
      this.nameButton = 'Показать дату';
    }
  }
  substractOne(): void {
    if (this.timer) return;
    this.clicker--;
  }

  addOne(): void {
    if (this.timer) return;
    this.clicker++;
  }
}
