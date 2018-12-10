import { Component, OnInit } from '@angular/core';
import { SubmissionsService } from '../../services/submissions/submissions.service';
import {TimeAgoPipe} from 'time-ago-pipe';

@Component({
    selector: 'app-index',
    templateUrl: './index.component.html',
    styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
    submissions;

    constructor(private submissionsService: SubmissionsService) {}

    ngOnInit() {
        this.submissionsService.getAllSubmissions().subscribe(submissions => {
            this.submissions = submissions;
        });
    }
}
