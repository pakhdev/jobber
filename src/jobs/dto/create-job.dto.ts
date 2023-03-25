export class CreateJobDto {
    remoteId: string;
    title: string;
    url: string;
    location: string;
    published_at: Date;
    description?: string;
    points?: number;
    salary?: string;
}
