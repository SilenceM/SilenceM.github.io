'use strict';

import React from 'react';
import {
  Progress
} from 'antd';

require('./NavBar.less');

export default class NavBar extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const stats = this.props.stats;
    const files = this.props.files;
    const getCount = (state, files) => {
      var passCount = 0;
      var totalTestCount = 0;
      files.map((file) => {
        const testCase = file.testCase;
        totalTestCount += testCase.length;
        testCase.map(caseDetail => {
          if(caseDetail.isPass) {
            passCount += 1;
        } 
        })
      })
      console.log(totalTestCount)
      return state === 1 ? passCount : totalTestCount - passCount
    }
    return (
      <ul className="head">
        <li>
          <img className="page-logo" src="https://static.mobiapp.cn/static/img/main_logo.png?v=ec99f93051993819fded1673fc950cec" />
        </li>
        <li>
          <h5>passes</h5>
          <p style={{color: '#a5d86e'}}>{ getCount(1, files) }</p>
        </li>
        <li>
          <h5>failures</h5>
          <p style={{color: '#df5869'}}>{ getCount(2, files) }</p>
        </li>
        <li>
          <div className="head-circle">
            <Progress
              type="circle"
              percent={ (getCount(1, files) / (getCount(1, files) + getCount(2, files))) * 100 }
              format={ percent => `${percent}%` }
              status={ (getCount(1, files) / (getCount(1, files) + getCount(2, files))) * 100 >= 90 ? 'success' : 'exception' }
              width={ 50 } />
          </div>
        </li>
      </ul>
    );
  }
}
