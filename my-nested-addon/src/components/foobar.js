import Component from '@glimmer/component';

export default class extends Component {
  constructor(owner, args) {
    super(owner, args);
    console.log('ctor v2 addon component');
  }
}
