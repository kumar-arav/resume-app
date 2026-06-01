import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { EducationComponent } from './components/education/education.component';
import { HobbiesComponent } from './components/hobbies/hobbies.component';
import { AboutComponent } from "./components/about/about.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    SkillsComponent,
    ExperienceComponent,
    ProjectsComponent,
    EducationComponent,
    HobbiesComponent,
    AboutComponent
],
  templateUrl: './app.component.html',
})
export class AppComponent {}
