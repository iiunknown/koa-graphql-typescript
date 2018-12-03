import * as Koa from 'koa'
import Auth from './auth'
import KoaBody from '../core/postData'
import Cors from './cors';
import Request from './request';
import Response from './response';
import Routes from '../routes';
import JWT from './jwt'

const Middlewares = (App: Koa) => {
  App.use(KoaBody)
  App.use(Auth)
  App.use(JWT)
  App.use(Cors);
  App.use(Request);
  App.use(Response);

  App.use(Routes.routes());//inject routes
};

export default Middlewares;
