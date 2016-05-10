import {bootstrap} from '@angular/platform-browser-dynamic';
import {AppHeroes} from './app.heroes';
import {HTTP_PROVIDERS} from '@angular/http';

bootstrap(AppHeroes, [HTTP_PROVIDERS]);