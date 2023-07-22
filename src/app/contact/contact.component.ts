import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ContactService} from "../contact.service";


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit{

  contactForm!: FormGroup;

  formSubmittedSuccessfully = false;

  constructor(
    private fb: FormBuilder,
    private contactService: ContactService
    ) {

  }

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      message: new FormControl('', Validators.required)
    })
  }

  onSubmit() {
    this.contactService.postMessage({...this.contactForm.value}).subscribe(
      () => this.formSubmittedSuccessfully = true,
      (error) => {
        console.log(error)
      }
    )
  }

}


// Thank you for your message!
//
// A confirmation email was sent to dmytro.kondratenko@sombrainc.com.

