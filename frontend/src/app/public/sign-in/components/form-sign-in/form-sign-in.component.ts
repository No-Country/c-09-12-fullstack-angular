import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/shared/services/user/user.service';
import { ValidationsService } from 'src/app/shared/services/validations/validations.service';

@Component({
  selector: 'app-form-sign-in',
  templateUrl: './form-sign-in.component.html',
  styleUrls: ['./form-sign-in.component.scss']
})
export class FormSignInComponent {

  hide = true;
  hide2 = true;

  signInForm!:FormGroup;

  returnUrl = '';

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router,
    private toastrService:ToastrService,
    private validatorService:ValidationsService
    ) {

    this.signInForm = this.formBuilder.group({
      firstName: ['', ],
      lastName: ['', ],
      phoneNumber: ['', ],
      email: ['', ],
      password: ['', ],

      },
    );

  }

  registerNewUser(){

    if (this.signInForm.valid){
      const userValue = this.signInForm.value;
      this.userService.newUser(userValue).subscribe((res) => {
        this.toastrService.success('Inicie Sesion con su cuenta', 'Registro Exitoso');
        this.router.navigate(['/login']);
        this.signInForm.reset();
      }, (error) => {
        this.toastrService.error('No se pudo registrar su usuario, compruebe los datos ingresados', 'Sign-In Failed');
      }
    );
    }
  }

  get formControls() {
    return this.signInForm.controls;
  }

  getErrorMessage(field:string): string{
    return this.validatorService.getErrorMessage(field, this.signInForm);
  }

  isValidField(field:string): boolean{
    return this.validatorService.isValidField(field, this.signInForm);
  }

}
