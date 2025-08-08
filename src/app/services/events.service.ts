import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FestivalEvent } from '../event.interface';

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  private apiUrl = 'http://localhost:3000/events'
  constructor(private http: HttpClient) { }

  getAllEvents():Observable<FestivalEvent[]>{
    return this.http.get<FestivalEvent[]>(this.apiUrl)
  }

  createEvent(eventData: FestivalEvent):Observable<void>{
    return this.http.post<void>(this.apiUrl, eventData);
  }
}

