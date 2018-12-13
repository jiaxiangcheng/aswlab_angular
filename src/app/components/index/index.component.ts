import { Component, OnInit } from '@angular/core';
import { SubmissionsService } from '../../services/submissions/submissions.service';
import { TimeAgoPipe } from 'time-ago-pipe';
import { Router } from '@angular/router';
import { UsersService } from '../../services/users/users.service';

@Component({
    selector: 'app-index',
    templateUrl: './index.component.html',
    styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
    submissions;

    constructor(private submissionsService: SubmissionsService, private router: Router, private usersService: UsersService) {}

    ngOnInit() {
        this.submissionsService.getAllSubmissions().subscribe(submissions => {
            this.submissions = submissions;
        });
    }

    showSubmission(id) {
        this.router.navigate(['/submission', id]);
    }

    upVote(subID) {

    }

    downVote(subID) {

    }
}
