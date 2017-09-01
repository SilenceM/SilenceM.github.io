import React from 'react';
import {
  Table,
  Icon,
  Progress
} from 'antd';
require('./Suite.less');

export default class File extends React.Component {

  constructor(props) {
    super(props);
    
  }

  getCaseState(state) {
    if (state.pass) {
      return <span style={{color:'#a5d86e'}}><Icon type="check" />passed</span>;
    } else if (state.fail) {
      return <span style={{color:'#df5869'}}><Icon type="close" />failed</span>;
    } else if (state.pending) {
      return <span style={{color:'rgb(234, 187, 56)'}}><Icon type="pause" />pending</span>;
    } else if (state.skipped) {
      return <span style={{color:'#898989'}}><Icon type="inbox" />skipped</span>;
    }
  }

  render() {
    // let allTest = [];
    // let failKeys = [];
    // let allStats = {
    //   totalFailures: 0,
    //   totalPasses: 0,
    //   totalPending: 0,
    //   totalSkipped: 0,
    //   totalTests: 0,
    //   duration: 0,
    //   title: this.props.suite.title,
    //   file: this.props.suite.file
    // };

    // const getTest = suites => {
    //   console.log(suites)
    //   suites.forEach(suite => {
    //     suite.tests.forEach(test => {
    //       test.key = this._guid();
    //       test.state = this.getCaseState(test);
    //       test.duration += 'ms';

    //       if (!test.pass) {
    //         failKeys.push(test.key);
    //       }
    //       allTest.push(test);
    //     });
    //     allStats.totalFailures += suite.totalFailures;
    //     allStats.totalPasses += suite.totalPasses;
    //     allStats.totalPending += suite.totalPending;
    //     allStats.totalSkipped += suite.totalSkipped;
    //     allStats.totalTests += suite.totalTests;
    //     allStats.duration += suite.duration;
    //     getTest(suite.suites);
    //   });
    // }
    // getTest(this.props.suite.suites);
    const file = this.props.file;
    const testCase = this.props.file.testCase;
    console.log(file)
    console.log(testCase)
    const columns = [
      {
        title: 'case',
        dataIndex: 'caseName',
        key: 'caseName'
      },
      {
        title: 'state',
        dataIndex: 'isPass',
        key: 'isPass',
        width: 100,
        render: record => <span>{record === 1 ? <span style={{color:'#a5d86e'}}><Icon type="check" />passed</span> : <span style={{color:'#df5869'}}><Icon type="close" />failed</span>}</span>
      }
    ];
    const getTotalCount = (state, testCase) => {
      let passCount = 0;
      testCase.map((caseDetail) => {
        if(caseDetail.isPass) {
            passCount += 1;
        } 
      })
      return state === 1 ? passCount : testCase.length - passCount
    }
    const percent = getTotalCount(1, testCase) / testCase.length * 100;

    return (
      <div className="suite">
        <div className="file-head">
          <div className="file-head-top">
            <h1>{file.fileName}</h1>
          </div>
          <ul>
            <li><Icon type="inbox" /><span>Tests: {testCase.length} </span></li>
            <li style={{color: '#a5d86e'}}><Icon type="check" /><span>Passes: {getTotalCount(1, testCase)} </span></li>
            <li style={{color: '#df5869'}}><Icon type="close" /><span>Failures: {getTotalCount(2, testCase)} </span></li>
            { percent >= 90
              ? <li style={{color: '#39a854'}}><Icon type="pie-chart" /><span>rate:  {percent}% </span></li>
              : <li style={{color: '#df5869'}}><Icon type="pie-chart" /><span>rate:  {percent}% </span></li>
            }
          </ul>
        </div>
        <Table
          columns={ columns }
          rowKey = {record => record.id}
          expandedRowRender={ record =>
            <div className="caseContent" style={{ color: record.isPass === 1 ? '#a5d86e' : '#df5869'}}>
            <p>路径：{record.path}</p>
            <p>参数：{record.parmas}</p>
            <p>期望结果：{record.expoectResult}</p>
            <p>实际结果：{record.realReault}</p>
            </div>
          }
          dataSource={ testCase }
        />
      </div>
    );
  }
}
