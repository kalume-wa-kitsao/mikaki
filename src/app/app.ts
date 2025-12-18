import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MikakiNavbar } from "./shared/components/mikaki-navbar/mikaki-navbar";
import { MikakiFooter } from "./shared/components/mikaki-footer/mikaki-footer";
import { MikakiHero } from "./shared/components/mikaki-hero/mikaki-hero";

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, MikakiNavbar, MikakiFooter, MikakiHero],
    templateUrl: './app.html',
    styleUrl: './app.css'
})
export class App {
    protected readonly title = signal('mikaki');
}
