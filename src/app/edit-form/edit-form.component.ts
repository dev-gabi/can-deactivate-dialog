import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { CanFormDeactivate } from '../can-form-deactivate.guard';
import { PersonService } from '../person.service';

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.css']
})
export class EditFormComponent implements CanFormDeactivate, OnInit
{

  constructor(private personService: PersonService) { }

  person$!: Observable<{ id: number, name: string, age: number }>;
  isSaved = false;
  displayConfirmDialog = false;
  @ViewChild('f') form!: NgForm;
  confirmSubject = new Subject<boolean>();


  ngOnInit()
  {
    this.person$ = this.personService.getPerson();
  }
  onSubmit(editedPerson: { id: number, name: string, age: number })
  {
    this.personService.update(editedPerson);
    this.isSaved = true;
    alert("Saved successfuly")
  }
  openConfirmDialog()
  {
    this.displayConfirmDialog  = true;
  }

  onConfirmAnswer(isConfirmed: boolean)
  {
    this.confirmSubject.next(isConfirmed);
    this.displayConfirmDialog  = false; 
  }

}
