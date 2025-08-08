import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FestivalEvent } from '../event.interface';

@Component({
  selector: 'app-event-form',
  templateUrl: './event-form.component.html',
  styleUrls: ['./event-form.component.css']
})
export class EventFormComponent {
  event!: FestivalEvent

  constructor(public dialogRef: MatDialogRef<EventFormComponent>){}

  onSubmit():void{

    this.dialogRef.close({
      ...this.event, 'date' : new Date(this.event.date).toDateString()
    })
  }
  onCancel(){
    this.dialogRef.close();
  }
}