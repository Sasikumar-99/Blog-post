import { Component } from '@angular/core';
import {Comments, CommonServiceService, Posts} from "../common-service.service";
import {CreatePostDialogComponent} from "../create-post-dialog/create-post-dialog.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-dashboard-post',
  templateUrl: './dashboard-post.component.html',
  styleUrls: ['./dashboard-post.component.css']
})
export class DashboardPostComponent {
  constructor(private _dialog: MatDialog) {
  }
  openPostComponent(){
    this._dialog.open(CreatePostDialogComponent);
  }
  get posts(): Posts[]{
    return CommonServiceService.posts;
  }

  postLiked(postIndex: number){
    CommonServiceService.posts[postIndex].likes++;
  }
  postDisliked(postIndex: number){
    CommonServiceService.posts[postIndex].dislikes++;
  }

  commentOnPost(postIndex: number, commentString: string){
    const comments: Comments = {
      commentText: commentString,
      likes: 0,
      dislikes: 0
    }
    CommonServiceService.posts[postIndex].comments.push(comments)
    console.log(CommonServiceService.posts)
  }

  commentLike(postIndex: number, commentIndex: number){
    CommonServiceService.posts[postIndex].comments[commentIndex].likes++;
  }

  commentDislike(postIndex: number, commentIndex: number){
    CommonServiceService.posts[postIndex].comments[commentIndex].dislikes++;
  }
}
