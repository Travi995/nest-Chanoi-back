import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { Auth } from './auth.service';

@Module({
  controllers: [AuthController],
  providers: [Auth]
})
export class AuthModule {}
