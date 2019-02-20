import SampleEChart from '../../component/SampleEChart';

import React, { Component } from 'react';
import { Input, message, Button } from 'antd';
import $ from 'jquery'

const { TextArea } = Input;

const graphData = {
  nodes: [
    { name: '公司1', type: 'company' },
    { name: '公司2', type: 'company' },
    { name: '公司3', type: 'company' },
    { name: '公司4', type: 'company' },
    { name: '公司5', type: 'company' },
    { name: '自然人1', type: 'person' },
    { name: '自然人2', type: 'person' },
    { name: '自然人3', type: 'person' },
    { name: '自然人4', type: 'person' },
    { name: '自然人5', type: 'person' },
    { name: '自然人6', type: 'person' },
    { name: '自然人7', type: 'person' },
    { name: '自然人8', type: 'person' },
    { name: '自然人9', type: 'person' },
    { name: '自然人10', type: 'person' }
  ],
  links: [
    {
      source: '自然人1',
      target: '公司1',
      name: '法定代表人'
    },
    {
      source: '自然人2',
      target: '公司2',
      name: '法定代表人'
    },
    {
      source: '自然人3',
      target: '公司3',
      name: '法定代表人'
    },
    {
      source: '自然人4',
      target: '公司4',
      name: '法定代表人'
    },
    {
      source: '自然人5',
      target: '公司5',
      name: '法定代表人'
    },
    {
      source: '自然人6',
      target: '公司1',
      name: '高管'
    },
    {
      source: '自然人7',
      target: '公司2',
      name: '高管'
    },
    {
      source: '自然人8',
      target: '公司3',
      name: '股东'
    },
    {
      source: '自然人9',
      target: '公司4',
      name: '股东'
    },
    {
      source: '自然人10',
      target: '公司5',
      name: '股东'
    },
    {
      source: '自然人1',
      target: '自然人2',
      name: '亲属'
    },
    {
      source: '自然人3',
      target: '自然人4',
      name: '亲属'
    },
    {
      source: '公司1',
      target: '公司2',
      name: '股东'
    },
    {
      source: '公司2',
      target: '公司3',
      name: '股东'
    },
    {
      source: '公司3',
      target: '公司4',
      name: '股东'
    },
    {
      source: '公司1',
      target: '公司5',
      name: '股东'
    }
  ]
}

export default class Network extends Component {

  constructor() {
    super()
    this.state = {
      data: graphData
    }
  }

  onPressEnter = (e) => {
    try {
      let inputValue = e.target.value;
      let data = JSON.parse(inputValue)
      this.setState({ data: data });
    } catch (e) {
      message.error('数据格式错误，请确保为合法JSON！')
    }
  }

  onClick = () => {
    try {
      let inputValue = $('#input').val();
      let data = JSON.parse(inputValue)
      this.setState({ data: data });
    } catch (e) {
      message.error('数据格式错误，请确保为合法JSON！')
    }
  }

  getOption = () => {

    let graphData = this.state.data;
    let legends = ["企业", "自然人"];
    let categories = legends.map(e => { return { name: e } });

    graphData.nodes.forEach(node => {
      node.category = node.type == 'company' ? 0 : 1;
      node.symbolSize = 60
    });

    var option = {
      title: {
        text: "企业知识图谱",
        top: "top",
        left: "left",
        textStyle: {
        }
      },
      tooltip: {
        formatter: function (x) {
          return x.data.name;
        }
      },
      toolbox: {
        show: true,
        feature: {
          restore: {
            show: true
          },
          saveAsImage: {
            show: true
          }
        }
      },
      // backgroundColor: '#00000',
      legend: {
        data: legends,
        icon: 'circle',
        type: 'scroll',
        orient: 'vertical',
        left: 10,
        top: 20,
        bottom: 20,
        itemWidth: 10,
        itemHeight: 10
      },
      animationDuration: 1000,
      animationEasingUpdate: 'quinticInOut',
      series: [{
        name: '企业知识图谱',
        type: 'graph',
        layout: 'force',
        edgeSymbol: ['circle', 'arrow'],
        edgeSymbolSize: [4, 10],
        focusNodeAdjacency: true,
        force: {
          repulsion: 1000,
          gravity: 0.1,
          edgeLength: [10, 50],
          layoutAnimation: true,
        },
        data: graphData.nodes,
        links: graphData.links,
        categories: categories,
        roam: true,
        label: {
          show: true,
          position: 'inside',
          fontSize: 16
        },
        lineStyle: {
          width: 1.5,
          curveness: 0
        }, edgeLabel: {
          show: true,
          fontSize: 20,
          formatter: function (x) {
            return x.data.name;
          }
        }
      }]
    };

    return option;
  }

  render() {

    return (
      <div style={{
        height: '700px',
        width: 'auto'
      }}>
        <div style={{ width: '24%', float: 'left', height: '700px' }}>
          输入JSON格式的数据，然后按回车键(或Command/Control+回车)渲染
          <TextArea id='input' rows={30} onPressEnter={this.onPressEnter} defaultValue={JSON.stringify(graphData, null, 2)} />
          <Button type="primary" icon="caret-right" onClick={this.onClick}>运行</Button>
        </div>
        <div style={{ float: 'right' }}>
          <SampleEChart option={this.getOption()} />
        </div>
      </ div >
    )
  }
}