import { Component } from '@angular/core';

@Component({
    selector: 'app-whoami',
    imports: [],
    templateUrl: './whoami.html',
    styleUrl: './whoami.css',
})
export class Whoami {
    whoamiSubtext: string =
        'I am passionate about solving complex problems at scale and delivering solutions with lasting impact. Since 2017, I have been tackling real-world challenges through software. I focus on building systems that make a meaningful difference.';

    whoamiFootprints = [
        {
            number: 7,
            verbosity: 'Years of experience.'
        },
        {
            number: 3,
            verbosity: 'Projects in progress.'
        },
        {
            number: 12,
            verbosity: 'Business projects delivered.'
        },
    ]
}
