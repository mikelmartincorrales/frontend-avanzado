import { ValidatorFn, ValidationErrors, FormGroup } from "@angular/forms";

export const dniValidator: ValidatorFn = (
  control: FormGroup
): ValidationErrors | null => {
  var validChars = "TRWAGMYFPDXBNJZSQVHLCKET";
  var nifRexp = /^[0-9]{8}[TRWAGMYFPDXBNJZSQVHLCKET]{1}$/i;
  var nieRexp = /^[XYZ]{1}[0-9]{7}[TRWAGMYFPDXBNJZSQVHLCKET]{1}$/i;
  var str = control.value.toString().toUpperCase();

  if (!nifRexp.test(str) && !nieRexp.test(str))
    return { docError: { value: "Número NIF/NIE incorrecto" } };

  var nie = str
    .replace(/^[X]/, "0")
    .replace(/^[Y]/, "1")
    .replace(/^[Z]/, "2");

  var letter = str.substr(-1);
  var charIndex = parseInt(nie.substr(0, 8)) % 23;

  if (validChars.charAt(charIndex) === letter) return null;

  return { docError: { value: "Número NIF/NIE incorrecto" } };
};

export const passportValidator: ValidatorFn = (
  control: FormGroup
): ValidationErrors | null => {
  if (/^[a-z]{3}[0-9]{6}[a-z]?$/i.test(control.value)) {
    return null;
  } else return { docError: { value: "Número Pasaporte incorrecto" } };
};