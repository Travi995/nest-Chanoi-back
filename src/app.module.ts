import { Module } from '@nestjs/common';
import { DBModule } from './db/db.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';


@Module({
  imports: [DBModule, UserModule, AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
