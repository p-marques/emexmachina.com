import { Component, OnInit } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { Router } from '@angular/router';

@Component({
    selector: 'not-found',
    templateUrl: './not-found.component.html',
    styleUrls: [ './not-found.component.css' ]
})
export class NotFoundComponent implements OnInit {

    currentUrl: string = "";

    constructor(private router: Router, private titleService: Title) { }

    ngOnInit() {
        this.currentUrl = this.router.url;
        this.titleService.setTitle("404 - EM|EX Machina");
    }
}