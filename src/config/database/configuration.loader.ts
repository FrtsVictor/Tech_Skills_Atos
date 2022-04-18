import { registerAs } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ConfigEnum } from '../configuration.enum';

const CONNECTION_TYPE = 'postgres';

export default registerAs(
  ConfigEnum.DATABASE,
  (): TypeOrmModuleOptions => ({
    type: CONNECTION_TYPE,
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT, 10),
    database: process.env.DB_NAME,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    logging: parseBoolean(process.env.DB_LOGGING),
    synchronize: getSyncronizeOption(),
    entities,
    migrations: [process.env.DB_MIGRATIONS],
    cli: {
      migrationsDir: process.env.DB_MIGRATION_DIR,
    },
  }),
);

const parseBoolean = (input: string) => /true/i.test(input ?? 'false');

const getSyncronizeOption = (): boolean => {
  const environment = process.env.NODE_ENV;
  const isTestEnv: boolean = environment === 'test';

  return (
    parseBoolean(process.env.DB_SYNC) &&
    isTestEnv &&
    process.env.DB_HOST === 'localhost'
  );
};

const entities = [__dirname.concat('/../../**/*.entity{.ts,.js}')];
