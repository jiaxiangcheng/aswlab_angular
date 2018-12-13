import { Component, OnInit } from '@angular/core';
import { SubmissionsService } from '../../services/submissions/submissions.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-newest',
  templateUrl: './newest.component.html',
  styleUrls: ['./newest.component.css']
})
export class NewestComponent implements OnInit {

  newests;

  constructor(
    private submissionsService: SubmissionsService,
    private router: Router
  ) { }

  ngOnInit() {
    this.submissionsService.getNewestSubmissions().subscribe(res => {
      this.newests = res;
    });
  }

  showNewest(id) {
    this.router.navigate(['/submission', id]);
  }

}
