import { FormControl } from "@angular/forms";
import { Observable } from "rxjs";

export class CustomValidators {

  static invalidProjectName(control: FormControl): {[s: string]: boolean} {
    if(control.value === 'Test') {
      return {'invalidProjectName': true};
    }
    return null;
  }

  static invalidProjectNameAsync(formControl: FormControl): Promise<any> | Observable<any> {

    const invalidProjectNames = ['Test'];

    return new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (invalidProjectNames.filter(invalidName =>
          invalidName.toUpperCase() === formControl.value?.toUpperCase()).length > 0) {
          resolve({'nameIsForbidden': true});
        } else {
          resolve(null);
        }
      }, 1500);
    });
  }
}
