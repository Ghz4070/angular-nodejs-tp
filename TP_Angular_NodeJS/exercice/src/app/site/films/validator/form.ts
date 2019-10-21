import { AbstractControl, ValidatorFn } from '@angular/forms';

export class FormValidators {
    static integerBetween(min: number, max: number): ValidatorFn {
        return (c: AbstractControl) => {
            // si la valeur n'est pas un entier return
            if (!Number.isInteger(c.value)) {
                return {
                    integer: {
                        valid: false
                    }
                };

            } else if ((c.value < min) || (c.value > max)) { // si la valeur est en dehors des limites return {
                return {
                    limit: {
                        valid: false
                    }
                };
            }
            // si tout va bien
            return null;
        };
    }
}
