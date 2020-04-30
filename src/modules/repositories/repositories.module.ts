import { Module, CacheModule } from '@nestjs/common';
import { RepositoriesController } from './controllers';
import { RepositoriesService } from './services';
import { ConfigModule } from '@nestjs/config';
import { QueryPipe } from './pipes';

@Module({
  imports: [
    ConfigModule.forRoot(),
    CacheModule.register({
      ttl: 60 * 30, // seconds
      max: 10, // maximum number of items in cache
    })
  ],
  controllers: [RepositoriesController],
  providers: [RepositoriesService, QueryPipe],
})
export class RepositoriesModule { }
