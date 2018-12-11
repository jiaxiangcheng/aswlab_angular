import { Component, OnInit } from '@angular/core';
import {
    FormGroup,
    FormControl,
    FormBuilder,
    Validators
} from '@angular/forms';
import { SubmissionsService } from '../../services/submissions/submissions.service';

@Component({
    selector: 'app-submit',
    templateUrl: './submit.component.html',
    styleUrls: ['./submit.component.css']
})
export class SubmitComponent implements OnInit {
    submissionForm: FormGroup;

    constructor(
        private submissionService: SubmissionsService,
        private fb: FormBuilder
    ) {
        this.submissionForm = fb.group(
            {
                title: new FormControl(''),
                url: new FormControl('', Validators.pattern('(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?')),
                body: new FormControl('', Validators.required)
            },
            { validator: this.titleOrUrlValidator }
        );
    }

    titleOrUrlValidator(g: FormGroup) {
        return (g.get('title').value !== '' && g.get('url').value !== '') || (g.get('title').value === '' && g.get('url').value === '')
            ? { notValid: true }
            : null;
    }

    addSubmission() {
        const newSubmission = {
            title: this.submissionForm.value.title,
            url: this.submissionForm.value.url,
            body: this.submissionForm.value.body
        };
        console.log('nre submission: ', newSubmission);
        this.submissionService
            .addSubmission(newSubmission)
            .subscribe(res => {

            });
    }

    ngOnInit() {}
}
