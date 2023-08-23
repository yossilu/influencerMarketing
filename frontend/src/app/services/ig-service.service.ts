import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject, Observable, catchError, throwError } from 'rxjs';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { UserModel } from '../models/user.model';
import { InstagramPostModel } from '../models/instagram-post.model';

const baseUrl = 'http://localhost:3000'

@Injectable({
  providedIn: 'root'
})
export class IgService {
  videoUrl?: SafeResourceUrl;
  currentUser: any = {};
  test: any = '';
  profileUrls: any[] = [];

  constructor(private http: HttpClient, private sanitizer : DomSanitizer) { }

  getProfiles(keyword: string) {
    const queryParams = {
      filter: keyword,
    };
    
    return this.http.get(baseUrl+ '/profiles/instagram?filter='+ queryParams.filter)
  }

  getPosts(item: UserModel){
    const queryParams = {
      user_id: item.user_id,
    };
    const url = baseUrl+ '/profiles/ig_posts?user_id='+ queryParams.user_id;
    
    return this.http.get(url)
    .pipe(
      catchError((error: HttpErrorResponse) => {
        return throwError(() => new Error('getting users failed'));
      })
    )
    .subscribe((posts: any) => {
      this.currentUser = {contacts: {}, user: item, posts: posts.map(
        (post: InstagramPostModel) => { 
          this.profileUrls.push(post.display_url)
          return {...post, display_url: ''}
        })
      };
      this.sanitizeUrls();
      this.getIGContacts(item.user_id);
    });
  }

  getIGContacts(user_id: string){
    const queryParams = {
      user_id: user_id,
    };
    const url = baseUrl+ '/contacts/?url='+ queryParams.user_id;

    return this.http.get(url)
    .pipe(
      catchError((error: HttpErrorResponse) => {
        return throwError(() => new Error('getting contacts failed'));
      })
    )
    .subscribe((contacts: any) => {
      this.currentUser.contacts = contacts.user_profile;
      
    })
  }

  sanitizeUrls(url?: string) {
    const requestBody = { urls: url ? [url] : this.profileUrls };
    const headers = { 'responseType': 'blob'};
    return this.http.post<Blob[]>(baseUrl + '/proxy', requestBody, {headers})
    .pipe(
      catchError((error: HttpErrorResponse) => {
        return throwError(() => new Error('sanitizing url failed'));
      })
    )
    .subscribe((urls: any[]) => {
      const blobArray: Blob[] = urls.map(blobData => {
        const arrayBuffer = new Uint8Array(blobData.data).buffer;
        return new Blob([arrayBuffer], { type: blobData.type });
      });
      
      for (const [index, blob] of blobArray.entries()) {
        if(this.currentUser.posts[index] && !url){
          this.currentUser.posts[index].display_url =  this.sanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(blob));
        }
          if(url){
            this.videoUrl = this.sanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(blob));
          }
            
        
      }
        
    })
  }
}
