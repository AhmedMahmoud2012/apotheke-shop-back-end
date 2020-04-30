import { Test, TestingModule } from '@nestjs/testing';
import { RepositoriesController } from './repositories.controller';
import { RepositoriesService } from '../services';
import { ConfigModule } from '@nestjs/config';
import { RepositoryResponse } from '../types';

describe('Repositories Controller', () => {
  let controller: RepositoriesController;
  let service: RepositoriesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [ConfigModule.forRoot()],
      controllers: [RepositoriesController],
      providers: [RepositoriesService]
    }).compile();

    controller = module.get<RepositoriesController>(RepositoriesController);
    service = module.get<RepositoriesService>(RepositoriesService);

  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('search function', async () => {
    const result: RepositoryResponse = {
      items: [{
        id: 1,
        name: 'test',
        full_name: 'test',
        description: 'test',
        url: 'test',
        owner: {
          avatar_url: 'test'
        },
        html_url: 'test',
        stargazers_count: 1
      }],
      total_count: 1
    }
    jest.spyOn(service, 'search').mockImplementation(() => Promise.resolve(result));
    expect(await controller.search(null)).toBe(result);
  });
});
