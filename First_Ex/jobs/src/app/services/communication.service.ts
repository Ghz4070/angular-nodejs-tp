import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Job } from '../interfaces/job';

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {

  constructor(private httpClient: HttpClient) { }

  getJob() {
    return this.httpClient.get('http://localhost:3000/api/job');
  }

  addJob(jobs: Job) {
    return this.httpClient.post('http://localhost:3000/api/job', jobs);
  }
}
