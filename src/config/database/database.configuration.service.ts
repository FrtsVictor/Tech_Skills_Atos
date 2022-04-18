import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';
import { ConfigEnum } from '../configuration.enum';

@Injectable()
export class OrmConfigService implements TypeOrmOptionsFactory {
  constructor(private configService: ConfigService) {}

  #name = ConfigEnum.DATABASE;

  createTypeOrmOptions(): TypeOrmModuleOptions {
    const config: TypeOrmModuleOptions = {
      type: 'postgres',
      port: this.configService.get<number>(`${this.#name}.port`),
      host: this.configService.get<string>(`${this.#name}.host`),
      username: this.configService.get<string>(`${this.#name}.username`),
      password: this.configService.get<string>(`${this.#name}.password`),
      entities: this.configService.get<Array<string>>(`${this.#name}.entities`),
      logging: this.configService.get<boolean>(`${this.#name}.logging`),
      synchronize: false, //this.configService.get<boolean>(`${this.#name}.synchronize`),
      migrations: [],
      cli: {
        migrationsDir: '',
      },
    };

    console.log(config);
    return config;
  }
}
