import { Component, OnInit } from '@angular/core';
import { IgService } from '../../services/ig-service.service';
import { MyDialogComponent } from 'src/app/my-dialog/my-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-profile-header',
  templateUrl: './profile-header.component.html',
  styleUrls: ['./profile-header.component.scss']
})
export class ProfileHeaderComponent implements OnInit {

  constructor(public igService: IgService, private dialog: MatDialog) {
    
  }

  ngOnInit(): void {
  }

  openContactModal() {
    const dialogRef = this.dialog.open(MyDialogComponent, {
      width: '450px',
      height: '450px',
      data: { contacts: this.igService.currentUser.contacts }
    });

    dialogRef.afterClosed().subscribe(result => {
      // Handle dialog close events or returned data here
      console.log('Dialog was closed', result);
    });
  }


}
