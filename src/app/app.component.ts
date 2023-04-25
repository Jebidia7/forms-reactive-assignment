import { Component, OnInit } from '@angular/core';
import { FormGroup } from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  signupForm: FormGroup;

  ngOnInit(): void {
  }


  onSubmit() {
    console.log(this.signupForm);
    this.signupForm.reset();
  }

}
