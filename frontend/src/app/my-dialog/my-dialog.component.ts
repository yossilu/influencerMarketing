import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { IgService } from '../services/ig-service.service';


@Component({
  selector: 'app-my-dialog',
  templateUrl: './my-dialog.component.html',
  styleUrls: ['./my-dialog.component.scss']
})
export class MyDialogComponent implements OnInit {
  videoUrl?: SafeResourceUrl;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any, 
    private sanitizer: DomSanitizer, 
    private igService: IgService
  ) {}

  ngOnInit(): void {
    if(this.data.video)
      this.igService.sanitizeUrls(this.data.video)
      this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
        this.data.video
      );
  }

}
