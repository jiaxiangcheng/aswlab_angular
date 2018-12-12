import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { SubmissionsService } from '../../services/submissions/submissions.service';

@Component({
    selector: 'app-submission-details',
    templateUrl: './submission-details.component.html',
    styleUrls: ['./submission-details.component.css']
})
export class SubmissionDetailsComponent implements OnInit {
    id: number;
    private sub: any;
    selectedSubmission;
    selectedSubmissionComments;

    constructor(
        private activatedRoute: ActivatedRoute,
        private router: Router,
        private submissionService: SubmissionsService
    ) {}

    ngOnInit() {
        this.sub = this.activatedRoute.params.subscribe(params => {
            this.id = params['id'];
            this.submissionService.getSubmissionById(this.id).subscribe(res => {
              this.selectedSubmission = res;
            });
            this.submissionService.getSubmissionCommentsById(this.id).subscribe(res => {
              this.selectedSubmissionComments = res;
            });
        });
    }
}
