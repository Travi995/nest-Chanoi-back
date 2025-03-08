import { DBModule } from './db.module';
import { Test, TestingModule } from '@nestjs/testing';

describe('Db', () => {
  let provider: DBModule;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DBModule],
    }).compile();

    provider = module.get<DBModule>(DBModule);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
