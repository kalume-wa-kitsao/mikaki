import { Component, OnInit } from '@angular/core';
import { WorkExperience } from '../../core/models/work-experience.model';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-experience',
    imports: [HttpClientModule, CommonModule],
    templateUrl: './experience.html',
    styleUrl: './experience.css',
})
export class Experience implements OnInit {
    workExperiences: WorkExperience[] = [];

    constructor(private http: HttpClient) {}

    ngOnInit(): void {
        this.fetchWorkExperiences();
    }

    fetchWorkExperiences() {
        this.http
            .get<WorkExperience[]>('assets/data/experience.json')
            .subscribe((workExperiences) => {
                this.workExperiences = workExperiences;
            });
    }
}
