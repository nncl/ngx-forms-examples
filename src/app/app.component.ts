import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { updateFormErrors } from 'ngx-forms-handle-errors';

const errors = {
  "fields": {
    "username": [
      "Username has already been taken"
    ],
    "email": [
      "E-mail address already exists"
    ]
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  item: any = {};

  loading = false;

  async save(form: NgForm) {
    if (form.valid) {
      this.loading = true;
      setTimeout(() => {
        updateFormErrors(form, errors);
        this.loading = false;
      }, 2000);
    }
  }
}
