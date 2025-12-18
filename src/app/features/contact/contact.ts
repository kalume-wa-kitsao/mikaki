import emailjs from '@emailjs/browser';

import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { environment } from '../../../environments/environment';

@Component({
    selector: 'app-contact',
    imports: [CommonModule, ReactiveFormsModule],
    templateUrl: './contact.html',
    styleUrl: './contact.css',
})
export class Contact implements OnInit {
    contactForm!: FormGroup;

    submitting!: boolean;
    successMessage!: string;
    errorMessage!: string;

    ngOnInit(): void {
        this.contactForm = new FormGroup({
            name: new FormControl('', [Validators.required, Validators.minLength(8)]),
            email: new FormControl('', [Validators.required, Validators.email]),
            subject: new FormControl(''),
            message: new FormControl('', [Validators.required, Validators.minLength(10)]),
        });
    }

    onFormSubmit() {
        if (this.contactForm.valid) {
            console.log('mikaki >> our form data is: ', this.contactForm.value);

            // send email via email.js
            this.submitting = true;
            this.successMessage = '';
            this.errorMessage = '';

            const templateParams = {
                name: this.contactForm.value.name,
                email: this.contactForm.value.email,
                subject: this.contactForm.value.subject || 'No Subject',
                message: this.contactForm.value.message,
                time: new Date().toLocaleString(),
            };

            emailjs
                .send(
                    environment.emailJs.serviceId, // replace with your EmailJS Service ID
                    environment.emailJs.templateId, // replace with your EmailJS Template ID
                    templateParams,
                    environment.emailJs.publicKey // replace with your EmailJS Public Key
                )
                .then(
                    (response) => {
                        console.log('SUCCESS!', response.status, response.text);
                        this.successMessage = 'Message sent successfully!';
                        this.contactForm.reset();
                        this.submitting = false;
                    },
                    (error) => {
                        console.error('FAILED...', error);
                        this.errorMessage = 'Failed to send message. Please try again.';
                        this.submitting = false;
                    }
                );

            this.contactForm.reset();
        } else {
            this.contactForm.markAllAsTouched();
        }
    }
}
