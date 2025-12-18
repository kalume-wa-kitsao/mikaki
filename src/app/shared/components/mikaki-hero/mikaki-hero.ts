import { CommonModule, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { environment } from '../../../../environments/environment';

@Component({
    selector: 'app-mikaki-hero',
    imports: [
        CommonModule,
        RouterModule,
        NgFor
    ],
    templateUrl: './mikaki-hero.html',
    styleUrl: './mikaki-hero.css',
})
export class MikakiHero {
    socialMenus = [
        {
            name: 'whatsapp',
            icon: 'images/svgs/whatsapp.svg',
            link: `https://wa.me/${environment.phoneNumber}?text=${encodeURIComponent(environment.defaultWhatsappMessage)}`,
            verbose: 'Click to contact me on WhatsApp.'
        },
        {
            name: 'linkedin',
            icon: 'images/svgs/linkedin.svg',
            link: 'https://ke.linkedin.com/in/michael-kalume-kitsao-711b08366',
            verbose: 'Click to view my LinkedIn profile, you will be impressed.'
        },
        {
            name: 'github',
            icon: 'images/svgs/github.svg',
            link: 'https://github.com/kalumewakitsao',
            verbose: 'Click to check my public work on Github.'
        },
        {
            name: 'email',
            icon: 'images/svgs/email.svg',
            link: 'mailto:kalumewakitsao@gmail.com',
            verbose: 'Reach me via mail? Yes please!'
        },
        {
            name: 'twitter',
            icon: 'images/svgs/twitter.svg',
            link: 'https://x.com/kalumekitsao',
            verbose: 'I can be fun, checkout my X.'
        }
    ]

    developerName: string = environment.developerName;
    developerTagText: string = 'A Software Engineer who has developed countless innovative solutions.'

    goToExternalSite(link: string) {
        window.open(link, '_blank', 'noopener,noreferrer');
    }
}
