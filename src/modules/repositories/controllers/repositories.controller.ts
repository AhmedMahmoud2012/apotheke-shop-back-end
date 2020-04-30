import { Controller, Get, Param, Query, ValidationPipe } from '@nestjs/common';
import { RepositoriesService } from '../services';
import { QueryDTO } from '../dtos';
import { QueryPipe } from '../pipes';
import { RepositoryResponse } from '../types';

@Controller('repositories')
export class RepositoriesController {

    constructor(private readonly service: RepositoriesService) {

    }

    @Get("/search/:top?")
    async search(@Query(QueryPipe, ValidationPipe) query: QueryDTO): Promise<RepositoryResponse> {
        return await this.service.search(query);
    }
}
