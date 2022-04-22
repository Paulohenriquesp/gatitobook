import { FormGroup } from "@angular/forms";

export function usuarioSenhaIguaisValidator(FormGroup: FormGroup) {
    const username = FormGroup.get('userName')?.value ?? '';
    const password = FormGroup.get('password')?.value ?? '';

    if (username.trim() + password.trim()) {  
        return username !== password ? null : {senhaIgualUsuario: true}     
    } else {
        return null;
    }
}