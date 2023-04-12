import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRouteSnapshot,  CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, Subject } from 'rxjs';


export interface CanFormDeactivate
{
  openConfirmDialog: () => void;
  confirmSubject: Subject<boolean>;
  isSaved: boolean;
  form: NgForm;
}

@Injectable({
  providedIn: 'root'
})
export class CanFormDeactivateGuard implements CanDeactivate<CanFormDeactivate> {


  canDeactivate(component: CanFormDeactivate, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot)
    : boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree>
  {

    if (component.isSaved) { return true; }
    if (!component.isSaved && component.form.dirty) {
      let subject = new Subject<boolean>();
      component.openConfirmDialog();
      subject = component.confirmSubject;
      return subject.asObservable();
    }

    return true;
  }
  
}
