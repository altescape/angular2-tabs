import * as ng from 'angular2/angular2';
import {App} from 'components/app';

// TODO: Why do we need the default object?
var bootstrap = ng.default.bootstrap;

export function main() {
  bootstrap(App);
}
