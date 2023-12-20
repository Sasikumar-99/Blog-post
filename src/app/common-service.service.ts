import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonServiceService {

  static posts: Posts[] = [];
  static generateRandomId(characterRequired: number): string {
    let randomId = '';
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for( let i=0; i<=characterRequired; i++){
      const randomNumber = Math.floor(Math.random() * characters.length);
      randomId = randomId + characters[randomNumber];
    }
    return `ID${randomId}`;
  }

}

export interface Posts{
  id: string,
  postImage: string,
  postDetails: string,
  likes: number,
  dislikes: number,
  comments: [Comments]
}
export interface Comments {
  commentText: string,
  likes: number,
  dislikes: number
}
