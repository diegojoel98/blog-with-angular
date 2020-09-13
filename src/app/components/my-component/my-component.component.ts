import { Component } from '@angular/core';

@Component({
    selector: 'my-component',
    templateUrl: './my-component.component.html' 
})

export class MyComponent {
    public title: string;
    public comment: string;
    public year: number;

    constructor() {
        this.title = 'This is my title of "my-component"';
        this.comment = 'This is a comment of "my-component"';
        this.year = 2020;
        console.log("The component 'my-component' is loaded");
        console.log(this.title, this.comment, this.year);
    }
}