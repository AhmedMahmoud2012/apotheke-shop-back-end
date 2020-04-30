import { Injectable, Logger, BadRequestException, InternalServerErrorException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Repository, RepositoryResponse } from '../types';
import { QueryDTO } from '../dtos';
import { QueryBuilderHelper } from '../helpers';
import * as fetch from 'node-fetch';

@Injectable()
export class RepositoriesService {

    constructor(private readonly configService: ConfigService) {

    }

    public async search(query: QueryDTO): Promise<RepositoryResponse> {
        try {
            const url = [this.configService.get<string>("GITHUB_API"), QueryBuilderHelper.buildQueryUrl(query)].join('?');
            return await this._getDate(url);
        } catch (err) {
            throw new InternalServerErrorException(err.message);
        }
    }


    private async _getDate(url: string): Promise<RepositoryResponse> {
        try {
            const response = await fetch(url)
            const result = await response.json();
            if ((result.errors && result.errors.length) || result.message) {
                throw new BadRequestException(result.errors || result.message);
            }
            return result;
        } catch (err) {
            throw new BadRequestException(err.message);
        }
    }
}
