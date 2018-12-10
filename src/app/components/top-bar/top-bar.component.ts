import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionsService } from 'src/app/services/sessions/sessions.service';

@Component({
    selector: 'app-top-bar',
    templateUrl: './top-bar.component.html',
    styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {
    logged;
    email;

    constructor(
        private router: Router,
        private sessionsService: SessionsService
    ) {}

    logout() {
        this.sessionsService.logout();
        this.logged = null;
    }

    ngOnInit() {
        this.sessionsService.user$.subscribe(r => {
            if (r === 'loginSuccess') {
                this.logged = localStorage.getItem('token');
                this.email = localStorage.getItem('email');
            }
        });
    }
}
