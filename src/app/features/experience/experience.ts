import { Component, OnInit } from '@angular/core';
import { WorkExperience } from '../../core/models/work-experience.model';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Common } from '../../core/services/common';

@Component({
    selector: 'app-experience',
    imports: [HttpClientModule, CommonModule],
    templateUrl: './experience.html',
    styleUrl: './experience.css',
    providers: [Common]
})
export class Experience implements OnInit {
    workExperiences: WorkExperience[] = [];

    constructor(private http: HttpClient, public commonService: Common) {}

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
