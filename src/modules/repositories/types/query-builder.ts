export interface QueryOptions {
    q: string;
    order?: ORDER_OPTIONS,
    sort?: SORT_OPTIONS,
    page?: number,
    per_page?: number

}

export enum ORDER_OPTIONS {
    DESC = 'desc',
    ASC = 'asc'
}

export enum SORT_OPTIONS {
    STARS = 'stars'
}