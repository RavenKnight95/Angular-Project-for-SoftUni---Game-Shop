import { AbstractControl, FormGroup, ValidationErrors } from "@angular/forms";


export function emailValidator(control: AbstractControl): ValidationErrors | null {
    const value = control.value;


    if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(value)) {
        return {
            email: true
        }
    }

    return null;
}


export function passwordMatch(passwordFormControl: AbstractControl) {
    return (rePassFormControl: AbstractControl) => {
        if (passwordFormControl.value !== rePassFormControl.value) {
            return {
                passwordMissmatch: true
            }
        }
    }
}