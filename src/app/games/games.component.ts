import { Component, OnInit } from "@angular/core";
import { Title } from "@angular/platform-browser";

@Component({
    selector: 'app-games',
    templateUrl: './games.component.html',
    styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {

    constructor (private titleService: Title) {}


    ngOnInit() {
        this.titleService.setTitle("Games - EM|EX Machina");
    }

}