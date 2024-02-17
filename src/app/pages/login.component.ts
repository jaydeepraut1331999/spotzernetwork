import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth-service';
import { SnackbarService } from '../services/snackbar-service';


@Component({ templateUrl: './login.component.html' })
export class LoginComponent implements OnInit {
    form!: FormGroup;
    loading = false;
    submitted = false;
    hide = true;

    constructor(
        private formBuilder: FormBuilder,
        private router: Router,
        private authService: AuthService,
        private snackbarService: SnackbarService
    ) { }

    ngOnInit() {

        this.form = this.formBuilder.group({
            username: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(6)]]
        });


    }

    get formcontrols() { return this.form.controls; }

    onSubmit() {
        this.submitted = true;
        if (this.form.invalid) {
            return;
        }
        this.loading = true;
        const isLogginSuccessfull = this.authService.verifyLogin(this.formcontrols.username.value,
            this.formcontrols.password.value);
        if (isLogginSuccessfull) {
            this.snackbarService.openSnackBar("User Successfully Logged In")
            this.router.navigate(['/page/home']);
        } else {
            this.snackbarService.openSnackBar("Invalid User", 'error');
        }
        return;

    }
}