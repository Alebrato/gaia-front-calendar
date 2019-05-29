import { Component, ChangeDetectionStrategy, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { CalendarEvent, CalendarEventAction, CalendarEventTimesChangedEvent, CalendarView } from 'angular-calendar';
import {
  isSameMonth,
  isSameDay,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  startOfDay,
  endOfDay,
  format,
  subDays,
  addDays,
  addHours
} from 'date-fns';
import { Subject, Observer } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { colors } from '../../../../demo-utils/colors';
import { Observable, BehaviorSubject, of } from 'rxjs';
import { take } from 'rxjs/operators';

interface Film {
  id: number;
  title: string;
  release_date: string;
}

function getTimezoneOffsetString(date: Date): string {
  const timezoneOffset = date.getTimezoneOffset();
  const hoursOffset = String(
    Math.floor(Math.abs(timezoneOffset / 60))
  ).padStart(2, '0');
  const minutesOffset = String(Math.abs(timezoneOffset % 60)).padEnd(2, '0');
  const direction = timezoneOffset > 0 ? '-' : '+';

  return `T00:00:00${direction}${hoursOffset}:${minutesOffset}`;
}

@Component({
  selector: 'mwl-demo-component',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './demo.component.html',
})
export class DemoComponent implements OnInit {
// export class DemoComponent {
  @ViewChild('modalContent') modalContent: TemplateRef<any>;

  subject: BehaviorSubject<any[]> = new BehaviorSubject<any>([]);
  view: CalendarView = CalendarView.Month;
  CalendarView = CalendarView;

  viewDate: Date = new Date();

  modalData: {
    action: string;
    event: CalendarEvent;
  };

  // actions: CalendarEventAction[] = [
  //   {
  //     label: '<i class="fa fa-fw fa-pencil"></i>',
  //     onClick: ({ event }: { event: CalendarEvent }): void => {
  //       this.handleEvent('Edited', event);
  //     }
  //   },
  //   {
  //     label: '<i class="fa fa-fw fa-times"></i>',
  //     onClick: ({ event }: { event: CalendarEvent }): void => {
  //       this.events = this.events.filter(iEvent => iEvent !== event);
  //       this.handleEvent('Deleted', event);
  //     }
  //   }
  // ];
  refresh: Subject<any> = new Subject();

  events$: Observable<Array<CalendarEvent<{ film: Film }>>> = this.subject.asObservable();
  // array$: Observable<any> =  this.subject.asObservable();
  // events: CalendarEvent[] = [
  //   {
  //     start: subDays(startOfDay(new Date()), 1),
  //     end: addDays(new Date(), 1),
  //     title: 'A 3 day event',
  //     color: colors.red,
  //     actions: this.actions,
  //     allDay: true,
  //     resizable: {
  //       beforeStart: true,
  //       afterEnd: true
  //     },
  //     draggable: true
  //   },
  //   {
  //     start: startOfDay(new Date()),
  //     title: 'An event with no end date',
  //     color: colors.yellow,
  //     actions: this.actions
  //   },
  //   {
  //     start: subDays(endOfMonth(new Date()), 3),
  //     end: addDays(endOfMonth(new Date()), 3),
  //     title: 'A long event that spans 2 months',
  //     color: colors.blue,
  //     allDay: true
  //   },
  //   {
  //     start: addHours(startOfDay(new Date()), 2),
  //     end: new Date(),
  //     title: 'A draggable and resizable event',
  //     color: colors.yellow,
  //     actions: this.actions,
  //     resizable: {
  //       beforeStart: true,
  //       afterEnd: true
  //     },
  //     draggable: true
  //   }
  // ];

  // activeDayIsOpen: boolean = false;
  activeDayIsOpen = true;


  constructor(private modal: NgbModal, private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchEvents();
  }

  fetchEvents(): void {
    const getStart: any = {
      month: startOfMonth,
      week: startOfWeek,
      day: startOfDay
    }[this.view];

    const getEnd: any = {
      month: endOfMonth,
      week: endOfWeek,
      day: endOfDay
    }[this.view];

    const params = new HttpParams()
      .set(
        'primary_release_date.gte',
        format(getStart(this.viewDate), 'YYYY-MM-DD')
      )
      .set(
        'primary_release_date.lte',
        format(getEnd(this.viewDate), 'YYYY-MM-DD')
      )
      .set('api_key', '0ec33936a68018857d727958dca1424f');

    this.events$ = this.http
      .get('https://api.themoviedb.org/3/discover/movie', { params })
      .pipe(
        map(({ results }: { results: Film[] }) => {
          // console.log(JSON.stringify(results.map((film: Film) => {
          //   return {
          //     title: film.title,
          //     start: new Date(
          //       film.release_date + getTimezoneOffsetString(this.viewDate)
          //     ),
          //     color: colors.yellow,
          //     allDay: true,
          //     meta: {
          //       film
          //     }
          //   };
          // })));
          return results.map((film: Film) => {
            return {
              title: film.title,
              start: new Date(
                film.release_date + getTimezoneOffsetString(this.viewDate)
              ),
              color: colors.yellow,
              allDay: true,
              meta: {
                film
              }
            };
          });
        })
      );
  }

  dayClicked({
    date,
    events
  }: {
    date: Date;
    events: Array<CalendarEvent<{ film: Film }>>;
  }): void {
    if (isSameMonth(date, this.viewDate)) {
      if (
        (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
        events.length === 0
      ) {
        this.activeDayIsOpen = false;
      } else {
        this.activeDayIsOpen = true;
        this.viewDate = date;
      }
    }
  }

  eventClicked(event: CalendarEvent<{ film: Film }>): void {
    window.open(
      `https://www.themoviedb.org/movie/${event.meta.film.id}`,
      '_blank'
    );
  }

  // dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
  //   if (isSameMonth(date, this.viewDate)) {
  //     this.viewDate = date;
  //     if (
  //       (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
  //       events.length === 0
  //     ) {
  //       this.activeDayIsOpen = false;
  //     } else {
  //       this.activeDayIsOpen = true;
  //     }
  //   }
  // }

  // eventTimesChanged({
  //   event,
  //   newStart,
  //   newEnd
  // }: CalendarEventTimesChangedEvent): void {
  //   this.events = this.events.map(iEvent => {
  //     if (iEvent === event) {
  //       return {
  //         ...event,
  //         start: newStart,
  //         end: newEnd
  //       };
  //     }
  //     return iEvent;
  //   });
  //   this.handleEvent('Dropped or resized', event);
  // }

  // handleEvent(action: string, event: CalendarEvent): void {
  //   this.modalData = { event, action };
  //   this.modal.open(this.modalContent, { size: 'lg' });
  // }

  // addEvent(): void {
  //   this.events = [
  //     ...this.events,
  //     {
  //       title: 'New event',
  //       start: startOfDay(new Date()),
  //       end: endOfDay(new Date()),
  //       color: colors.red,
  //       draggable: true,
  //       resizable: {
  //         beforeStart: true,
  //         afterEnd: true
  //       }
  //     }
  //   ];
  // }

  /*
  {"title":"Aladdin","start":"2019-05-21T22:00:00.000Z","color":{"primary":"#e3bc08","secondary":"#FDF1BA"},"allDay":true,
  "meta":{"film":{"vote_count":562,"id":420817,"video":false,"vote_average":7.2,"title":"Aladdin","popularity":630.556,
  "poster_path":"/3iYQTLGoy7QnjcUYRJy4YrAgGvp.jpg","original_language":"en","original_title":"Aladdin",
  "genre_ids":[12,14,10402,10749,35,10751],"backdrop_path":"/v4yVTbbl8dE1UP2dWu5CLyaXOku.jpg","adult":false,
  "overview":"A kindhearted street urchin named Aladdin embarks on a magical adventure after finding a lamp that releases a
  wisecracking genie
  while a power-hungry Grand Vizier vies for the same lamp that has the power to make their deepest wishes come true.","release
  _date":"2019-05-22"}}}
   */
  addEvent() {
    this.events$.pipe(take(1)).subscribe(val => {
      const newArr = [...val, {"title":"Alasdfddaaddin2","start": new Date('Fri May 31 2019 00:00:00 GMT+0200 (hora de verano de Europa central)'),
      "color":{"primary":"#e3bc08","secondary":"#FDF1BA"},
      "allDay":true,"meta":{"film":{"vote_count":562,"id":420817,"video":false,
      'vote_average':7.2,"title":"Aladdin","popularity":630.556,"poster_path":"/3iYQTLGoy7QnjcUYRJy4YrAgGvp.jpg",
      "original_language":"en","original_title":"Aladdin","genre_ids":[12,14,10402,10749,35,10751],
      "backdrop_path":"/v4yVTbbl8dE1UP2dWu5CLyaXOku.jpg","adult":false,
      "overview":"A kindhearted street urchin named Aladdin embarks on a magical adventure after finding a lamp that releases a wisecracking genie while a power-hungry Grand Vizier vies for the same lamp that has the power to make their deepest wishes come true.","release_date":"2019-05-22"}}}];

      console.warn('val es: ');
      console.warn(newArr);
      this.subject.next(newArr);
    });
    }

    time = new Observable<string>((observer: Observer<string>) => {
      setInterval(() => observer.next("title : Alasdfddaaddin2 " + new Date().toString()), 1000);
    });

    // addElementToObservableArray(item) {
    //   console.log("el item es: ", item)
    //   this.array$.pipe(take(1)).subscribe(val => {
    //     console.log(val)
    //     const newArr = [...val, item];
    //     this.subject.next(newArr);
    //   })
    // }

      //   usersList.push({
      //     title: 'New event',
      //     start: startOfDay(new Date()),
      //     end: endOfDay(new Date()),
      //     color: colors.red,
      //     draggable: true,
      //     resizable: {
      //       beforeStart: true,
      //       afterEnd: true
      //     }
      //   });
      // return usersList;

    // }

  // deleteEvent(eventToDelete: CalendarEvent) {
  //   this.events = this.events.filter(event => event !== eventToDelete);
  // }

  // setView(view: CalendarView) {
  //   this.view = view;
  // }

  // closeOpenMonthViewDay() {
  //   this.activeDayIsOpen = false;
  // }
}
