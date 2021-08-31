import { FormGroup } from "@angular/forms";

export function Match(first: string, second: string) {
    return (formGroup: FormGroup) => {
        const control = formGroup.controls[first];
        const matchingControl = formGroup.controls[second];
        if (matchingControl.errors && !matchingControl.errors.match) { return; }
        if (control.value !== matchingControl.value) { matchingControl.setErrors({ match: true }); }
        else { matchingControl.setErrors(null); }
    }
}