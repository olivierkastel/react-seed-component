import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Playground from 'component-playground';
import Hello from '../src';
const HelloExample = require('raw!../src/Hello.example');
const Index = () => (<div className="component-documentation">
    <Playground codeText={HelloExample} scope={{ React, Hello }}/>
  </div>);
ReactDOM.render(<Index />, document.getElementById('root'));
