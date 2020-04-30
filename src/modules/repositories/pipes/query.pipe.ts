import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform, Logger } from '@nestjs/common';
import { QueryDTO } from '../dtos';


@Injectable()
export class QueryPipe implements PipeTransform<QueryDTO, any> {
  async transform(query: QueryDTO, metadata: ArgumentMetadata) {
    try {
      if (query.created) {
        query.created = new Date(query.created.toString().trim());
      }
      if (query.per_page) {
        query.per_page = +query.per_page;
      }
      if (query.language) {
        Logger.log(query.language)
        query.language = query.language.toString().trim().toLowerCase();
      }

      return query;
    } catch (err) {
      throw new BadRequestException(err.message);
    }
  }
}
