/**
 *  Copyright (C) by BHM services, April 2019
 *  Purpose of this service open model in projects.
 */
import {MatDialogRef, MatDialog, MatDialogConfig} from '@angular/material';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/index';
import {ProfileComponent} from "../profile/profile.component";
@Injectable({
  providedIn: 'root'
})
export class DialogsService {
  constructor(private dialog: MatDialog) {
  }



  /**
   *add new doctor from admin panel and edit profile of user
   * @returns {Observable<boolean>}
   */
  public editUser(): Observable<string> {
    let dialogRef: MatDialogRef<ProfileComponent>;
    const dialogConfig = new MatDialogConfig();
    dialogRef = this.dialog.open(ProfileComponent, dialogConfig);
    dialogRef.updateSize('30%');
    dialogRef.disableClose = true;
    return dialogRef.afterClosed();
  }


}
