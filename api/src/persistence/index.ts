import { createConnection, Connection, ConnectionOptions } from 'typeorm';

const configDev: ConnectionOptions = {
  type: 'sqlite',
  database: 'database.sqlite',
const configProd: ConnectionOptions = {
  type: 'sqlite',
  database: 'database.sqlite',
  entities: [__dirname + '/../entity/*.js'],
  migrations: [__dirname + '/../persistence/migration/*.js'],
  logging: true,
  synchronize: false
};

export const openConnection: any = async () => {
  const config = process.env.IS_PROD ? configProd : configDev;
  return await createConnection(config);
};
