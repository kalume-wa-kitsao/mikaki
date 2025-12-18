import { Component } from '@angular/core';
import { Whoami } from '../../shared/components/whoami/whoami';
import { Projects } from "../projects/projects";
import { Experience } from "../experience/experience";
import { Contact } from "../contact/contact";

@Component({
  selector: 'app-home',
  imports: [Whoami, Projects, Experience, Contact],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
