import { Component, OnInit } from '@angular/core';
import { SubmissionsService } from '../../services/submissions/submissions.service';

@Component({
  selector: 'app-ask',
  templateUrl: './ask.component.html',
  styleUrls: ['./ask.component.css']
})
export class AskComponent implements OnInit {

  asks;

  constructor(
    private submissionsService: SubmissionsService
  ) { }

  ngOnInit() {
    this.submissionsService.getAskSubmissions().subscribe(res => {
      this.asks = res;
    });
  }

}
