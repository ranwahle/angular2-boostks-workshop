/**
 * Created by ranwahle on 20/03/2016.
 */
import {bootstrap}    from 'angular2/platform/browser';
import {AppComponent} from './components/app.component';
import {upgradeAdapter} from './upgradeAdapter';
import 'rxjs/Rx';

bootstrap(AppComponent);

//upgradeAdapter.bootstrap(document.body, ['angular1Module'], {strictDi: true});