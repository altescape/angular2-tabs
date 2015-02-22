import * as ng from 'angular2/angular2';

// TODO: Why do we need the default object?
var Component = ng.default.Component;
var Template = ng.default.Template;

@Component({ selector: 'app' })
@Template({ inline: `<h1>App!</h1>`})
export class App {
  hi() {
    return 'hi';
  }
}
