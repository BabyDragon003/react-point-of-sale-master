import 'reflect-metadata';
import { verify } from 'jsonwebtoken';
import { openConnection } from './persistence';
import { createExpressServer, useContainer, Action } from 'routing-controllers';
import { Container } from 'typedi';
import { Application } from 'express';
import { config } from './config';
import { Role } from './entity/User';
import { Claim } from './dtos/authTypes';

async function authorizationChecker(
  action: Action,
  roles: Role[]
): Promise<boolean> {
  return new Promise<boolean>(resolve => {
    const token = (action.request.headers['authorization'] || '').replace(
      'Bearer ',
      ''
    );

    if (!token) {
      throw new Error('Invalid token');
    }

    verify(token, config.jwtSecret, (err, decoeded) => {

    const app: Application = createExpressServer({
      authorizationChecker: authorizationChecker,
      cors: true,
      routePrefix: '/api',
      defaultErrorHandler: false,
      middlewares: [__dirname + '/middlewares/**/*{.ts,.js}'],
      controllers: [__dirname + '/controllers/**/*{.ts,.js}']
    });

    const port = process.env.PORT || 3500;

    app.listen(port, () => {
      console.log(`server started at ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
}

createServer();
