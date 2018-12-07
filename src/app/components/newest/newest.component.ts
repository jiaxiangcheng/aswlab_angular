import { Component, OnInit } from '@angular/core';
import { SubmissionsService } from '../../services/submissions/submissions.service';

@Component({
  selector: 'app-newest',
  templateUrl: './newest.component.html',
  styleUrls: ['./newest.component.css']
})
export class NewestComponent implements OnInit {

  newest;

  constructor(
    private submissionsService: SubmissionsService
  ) { }

  ngOnInit() {
    this.submissionsService.getNewestSubmissions().subscribe(res => {
      this.newest = res;
    });
  }

}
