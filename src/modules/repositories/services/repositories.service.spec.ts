import { Test, TestingModule } from '@nestjs/testing';
import { RepositoriesService } from './repositories.service';
import { ConfigModule } from '@nestjs/config';
import { RepositoryResponse } from '../types';

describe('RepositoriesService', () => {
  let service: RepositoriesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [ConfigModule.forRoot()],
      providers: [RepositoriesService],
    }).compile();

    service = module.get<RepositoriesService>(RepositoriesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
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
    expect(await service.search(null)).toBe(result);
  });
});
