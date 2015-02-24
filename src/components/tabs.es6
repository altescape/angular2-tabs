import * as ng from 'angular2/angular2';

@ng.Template({ url: '/templates/tabs.html', directives: [ng.Foreach] })
@ng.Component({ selector: 'tabs' })
export class Tabs {
  constructor() {

  }
  addPane(pane) {
    this.panes.push(pane);
  }
}
