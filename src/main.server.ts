import 'zone.js/node';
import '@angular/platform-server/init';
import { render } from '@analogjs/router/server';

import { AppComponent } from './app/app';
import { config } from './app/app.config.server';

export default render(AppComponent, config);
