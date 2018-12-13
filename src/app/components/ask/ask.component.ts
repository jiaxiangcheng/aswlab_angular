import { Component, OnInit } from '@angular/core';
import { SubmissionsService } from '../../services/submissions/submissions.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-ask',
    templateUrl: './ask.component.html',
    styleUrls: ['./ask.component.css']
})
export class AskComponent implements OnInit {
    asks;

    constructor(
        private submissionsService: SubmissionsService,
        private router: Router
    ) {}

    ngOnInit() {
        this.submissionsService.getAskSubmissions().subscribe(res => {
            this.asks = res;
        });
    }

    showAsk(id) {
        this.router.navigate(['/submission', id]);
    }
}
