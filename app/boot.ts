import {bootstrap} from 'angular2/platform/browser';
import {AppHeroes} from './app.heroes';
import {HTTP_PROVIDERS} from 'angular2/http';

bootstrap(AppHeroes, [HTTP_PROVIDERS]);