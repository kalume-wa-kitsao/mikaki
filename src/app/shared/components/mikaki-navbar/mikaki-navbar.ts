import { CommonModule, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavItem } from '../../../core/models/nav-item.model';

@Component({
    selector: 'app-mikaki-navbar',
    imports: [CommonModule, RouterModule],
    templateUrl: './mikaki-navbar.html',
    styleUrl: './mikaki-navbar.css',
})
export class MikakiNavbar {
    menuOpen: boolean = false;

    navbarMenus: NavItem[] = [
        {
            id: 'nyumbani',
            label: 'Home',
            icon: 'images/svgs/home.svg',
            title: 'Go to my home page.',
            path: '',
        },
        {
            id: 'kazi',
            label: 'Projects',
            icon: 'images/svgs/projects.svg',
            title: 'View my projects, both ongoing and completed.',
            path: '/projects',
        },
        {
            id: 'weledi',
            label: 'Experience',
            icon: 'images/svgs/experience.svg',
            title: 'See why you should hire me.',
            path: '/experience',
        },
        {
            id: 'nifikie',
            label: 'Contact',
            icon: 'images/svgs/contact.svg',
            title: 'Please, reach out, I am available.',
            path: '/contact',
        },
    ];

    trackNavItemsByFn(index: number, item: NavItem): string {
        return item.id; // use a unique property
    }

    toggleMenu() {
        this.menuOpen = !this.menuOpen;
    }
}
