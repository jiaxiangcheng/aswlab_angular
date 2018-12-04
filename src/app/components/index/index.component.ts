import { Component, OnInit } from '@angular/core';
import { SubmissionsService } from '../../services/submissions/submissions.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  submissions;

  constructor(
    private submissionsService: SubmissionsService
  ) { }

  getSubmissions() {
    this.submissionsService.getAllSubmissions().subscribe(submissions => {
      this.submissions = submissions;
    });
  }

  ngOnInit() {

  }

}
