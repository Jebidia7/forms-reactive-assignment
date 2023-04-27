import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { CustomValidators } from "./custom-validators";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  projectStatuses = [
    {value: 'stable', name: 'Stable'},
    {value: 'critical', name: 'Critical'},
    {value: 'finished', name: 'Finished'}
  ];
  signupForm: FormGroup;

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      'projectData': new FormGroup({
        'projectName': new FormControl(null,
          [Validators.required, CustomValidators.invalidProjectName],
          [CustomValidators.invalidProjectNameAsync.bind(this)]),
        'email': new FormControl(null,
          [Validators.required, Validators.email]),
        'projectStatus': new FormControl("", [Validators.required])
      })
    });
  }

  onSubmit() {
    console.log(this.signupForm.value);
    this.signupForm.reset();
  }
}
