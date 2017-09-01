'use strict';

import React from 'react';
import ReactDom from 'react-dom';

import {
  Affix,
  Layout
} from 'antd';

const {
  Header,
  Footer,
  Content
} = Layout;

// import Suite from './components/Suite';
import File from './components/file';
import NavBar from './components/NavBar';
import Screen from './components/Screen';
import data from '../test/mock.js';
const pkg = require('../package.json');

require('./app.less');

const dataAttr = 'data-output';
const configAttr = 'config-output';

class App extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    const stats = data.stats;
    const current = data.current;
    const files = data.files;
    console.log(data.files);
    return (
      <Layout>
        <Affix>
          <Header>
            <NavBar files = {files}/>
          </Header>
        </Affix>
        <Content>
          {files.map((file, index) => {
            return <File file={ file } key={ index } />
          })}
        </Content>
        <Footer>
          &copy;&nbsp;<a target="_blank" href={ pkg.homepage }>BTCC</a> { new Date().getFullYear() }
        </Footer>
      </Layout>
     )
  }
}

ReactDom.render(<App />, document.querySelector('#root'))
