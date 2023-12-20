import { Component } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {CommonServiceService} from "../common-service.service";
import {DialogRef} from "@angular/cdk/dialog";
@Component({
  selector: 'app-create-post-dialog',
  templateUrl: './create-post-dialog.component.html',
  styleUrls: ['./create-post-dialog.component.css']
})
export class CreatePostDialogComponent {

  postForm!: FormGroup;
  constructor(private _dialogRef: DialogRef<CreatePostDialogComponent>) {
    this.postForm = new FormGroup({
      id: new FormControl(CommonServiceService.generateRandomId(6)),
      postImage: new FormControl(''),
      postDetails: new FormControl(''),
      likes: new FormControl(0),
      dislikes: new FormControl(0),
      comments:new FormControl([])
    })
  }

  postSubmit(){
    CommonServiceService.posts.push(this.postForm.value);
    this._dialogRef.close();
  }

  onFileUpload(ev: any){
    const filereader: FileReader = new FileReader();
    filereader.readAsDataURL(ev.target.files[0]);
    filereader.onloadend = (ev)=>{
      this.postForm.get('postImage')?.setValue(ev.target?.result);
    }
  }
}
