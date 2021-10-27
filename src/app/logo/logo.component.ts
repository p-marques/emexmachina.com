import { Component, Input } from "@angular/core";

@Component({
    selector: 'ex-logo',
    templateUrl: './logo.component.html',
    styleUrls: ['./logo.component.css']
})
export class LogoComponent {
    @Input() type = 'default-dark';
}