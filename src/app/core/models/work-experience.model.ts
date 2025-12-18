export interface WorkExperience {
    id: string;
    jobTitle: string;
    from: string; // could also use Date if you want to parse it
    to: string; // could also use Date if you want to parse it
    company: string;
    verbose: string;
}
