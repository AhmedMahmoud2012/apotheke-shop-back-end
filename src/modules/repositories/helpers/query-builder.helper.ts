import { QueryDTO } from "../dtos";
import { QueryOptions, SORT_OPTIONS, ORDER_OPTIONS } from "../types";
import { format } from 'date-fns';
export class QueryBuilderHelper {


    static buildQueryUrl(query: QueryDTO): string {
        const queryOptions: QueryOptions = {
            q: QueryBuilderHelper._buildQuery(query),
            order: ORDER_OPTIONS.DESC,
            sort: SORT_OPTIONS.STARS,
            per_page: query.per_page || 10
        }
        return Object.keys(queryOptions)
            .filter(key => queryOptions[key])
            .map(key => `${key}=${queryOptions[key]}`).join('&')
    }

    private static _buildQuery(query: QueryDTO): string {
        let queryArr = [];
        query.created ?
            queryArr.push(`created:>${format(query.created, 'yyyy-MM-dd')}`) : queryArr.push(`created:>2019-01-10`);
        if (query.language) {
            queryArr.push(`language:${query.language}`);
        }
        return queryArr.join("+");
    }

}