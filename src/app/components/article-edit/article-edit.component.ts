import { Component, OnInit } from '@angular/core';
import { Article } from '../../models/article';
import { ArticleService } from '../../services/article.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Global } from '../../services/global';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-article-edit',
  templateUrl: './article-edit.component.html',
  styleUrls: ['./article-edit.component.css'],
  providers: [ArticleService]
})
export class ArticleEditComponent implements OnInit {

  public article: Article;
  public status: string;
  public url: string;

  afuConfig = {
    multiple: false,
    formatsAllowed: ".jpg,.png, .gif, .jpeg",
    maxSize: "20",
    uploadAPI:  {
      url: Global.url + 'upload-image',      
    },
    theme: "attachPin",
    hideProgressBar: false,
    hideResetBtn: false,
    hideSelectBtn: true,
    fileNameIndex: true,
    replaceTexts: {
      selectFileBtn: 'Select Files',
      resetBtn: 'Reset',
      uploadBtn: 'Upload',
      dragNDropBox: 'Drag N Drop',
      attachPinBtn: 'Attach image...',
      afterUploadMsg_success: 'Successfully Uploaded !',
      afterUploadMsg_error: 'Upload Failed !',
      sizeLimit: 'Size Limit'
    }
};

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _articleService: ArticleService
  ) {
    this.article = new Article("", "", "", null, null);
    this.url = Global.url;
  }

  ngOnInit(): void {
    this.getArticle();
  }

  onSubmit() {
    this._articleService.update(this.article._id, this.article).subscribe(
      response => {
        if(response.status == 'success') {
          this.status = 'success';
          this.article = response.article;
          Swal.fire(
            'Article Edited',
            'The article has been edited correctly',
            'success'
          )
          console.log(response);
          this._router.navigate(['/blog/article/', this.article._id]);
        } else {
          this.status = 'error';
          Swal.fire({
            icon: 'error',
            title: 'Oops... The article has not been edited',
            text: 'Something went wrong!',            
          })
        }
      },
      error => {
        console.log(error);
        this.status = 'error';
      }
    );
  }

  imageUpload(data) {
    /*console.log(data);
    console.log(data.response);
    console.log(data.body.img);*/
    this.article.img = data.body.img;
    console.log(this.article.img);
  }
  //let imageData = JSON.parse(data.response);
  //this.article.img = imageData.img;
  //console.log(imageData.img);

  getArticle() {
    this._route.params.subscribe((params:Params) => {
      let id = params['id'];
      this._articleService.getArticle(id).subscribe(
        response => {
          if(response.article) {
            this.article = response.article;
            console.log(response);
          } else {
            this._router.navigate(['/home']);
          }
        },
        error => {
          console.log(error);
          this._router.navigate(['/home']);
        }
      );
    });
  }
  
}
