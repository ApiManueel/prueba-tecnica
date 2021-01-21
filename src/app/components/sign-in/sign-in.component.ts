import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  hide: boolean;
  signInForm = new FormGroup({
    user: new FormControl('', [Validators.required, Validators.pattern('^[a-z]+$')]),
    password: new FormControl('',
      [
        Validators.required,
        Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[.#?!@$%^&*-]).{4,}$')
      ]
    )
  });

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() { }

}
