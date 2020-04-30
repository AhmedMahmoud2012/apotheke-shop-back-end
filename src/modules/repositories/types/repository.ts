export interface Repository {
    id: number;
    name: string;
    full_name: string;
    description: string;
    url: string;
    owner: {
        avatar_url: string
    },
    html_url: string;
    stargazers_count: number
}

export interface RepositoryResponse {
    total_count: number;
    items: Repository[]
}
