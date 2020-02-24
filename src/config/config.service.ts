import { Injectable } from '@nestjs/common';
import { SequelizeOptionsFactory, SequelizeModuleOptions } from '@nestjs/sequelize';
import { DIALECT, DBHOST, DBPORT, DBUSER, DBPASS, DBSCHEMA } from 'src/constants';
import { Dialect } from 'sequelize/types';

@Injectable()
export class SequelizeConfigService implements SequelizeOptionsFactory {
  createSequelizeOptions(): SequelizeModuleOptions {
    return {
      dialect: DIALECT as Dialect,
      host: DBHOST,
      port: DBPORT,
      username: DBUSER,
      password: DBPASS,
      database: DBSCHEMA,
      autoLoadModels: true,
      synchronize: true
    };
  }
}
