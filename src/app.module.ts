import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RepositoriesModule } from './modules';

@Module({
  imports: [RepositoriesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
