import { Module } from '@nestjs/common';
import { SequelizeConfigService } from './config.service';

@Module({
  providers: [SequelizeConfigService],
  exports: [SequelizeConfigService]
})
export class ConfigModule {}
