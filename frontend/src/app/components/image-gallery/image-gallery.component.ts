import { Component, OnInit } from '@angular/core';
import { IgService } from '../../services/ig-service.service';
import { MyDialogComponent } from 'src/app/my-dialog/my-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-image-gallery',
  templateUrl: './image-gallery.component.html',
  styleUrls: ['./image-gallery.component.scss']
})
export class ImageGalleryComponent implements OnInit {

  constructor(public igService: IgService, private dialog: MatDialog) { }
  isVideo = false;

  ngOnInit(): void {
  }

  trackByFunction(index: number, item: any): number {
    return item.code;
  }

  imageClick(event: MouseEvent, item: any): void {
    if(item.video_url) {
      const dialogRef = this.dialog.open(MyDialogComponent, {
        width: 'fit-content',
        height: 'fit-content',
        data: { video: item.video_url }
      });
      dialogRef.afterClosed().subscribe(result => {
        // Handle dialog close events or returned data here
        console.log('Dialog was closed', result);
      });
    }
    
  }

  openVideoModal() {
    
  }
}
