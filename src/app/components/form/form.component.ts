import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  public user: any;
  constructor() { 
    this.user = {
      name: '',
      lastname: '',
      comment: '',
      gender: ''
    };
  }

  ngOnInit(): void {
  }

  onSubmit() {
    let conf = confirm("Are you sure?");
    if (conf) {
    alert("Form send");
    console.log(this.user);
    } else {
      event.preventDefault();
    }
  }

}
