import { Component, OnInit } from "@angular/core";
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'game-runner',
    templateUrl: './project-runner.component.html',
    styleUrls: ['./project-runner.component.css']
})
export class ProjectRunnerGameComponent implements OnInit {

    constructor (private titleService: Title) {}


    ngOnInit() {
        this.titleService.setTitle("Project RUNNER - EM|EX Machina");
    }
}