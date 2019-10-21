import { Component, OnInit } from '@angular/core';
import { CommunicationService } from '../services/communication.service';
import { Job } from '../interfaces/job';

@Component({
  selector: 'app-communication',
  templateUrl: './communication.component.html',
  styleUrls: ['./communication.component.css']
})
export class CommunicationComponent implements OnInit {

  jobs: Job[];

  constructor(private communicationService: CommunicationService) { }

  ngOnInit() {
    this.communicationService.getJob().subscribe((jobs: Job[]) => this.jobs = jobs);
  }

  addJob(...value: any) {
    const [title, description, location] = value;

    const newJob = {
      title,
      description,
      location,
    };

    this.communicationService.addJob(newJob).subscribe(res => { this.jobs.push(newJob); });

  }
}
