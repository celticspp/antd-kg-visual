import SampleEChart from '../../component/SampleEChart';

import React, { Component } from 'react';

var graphData = {
  nodes: [
    { id: 'c#1', name: '公司1', type: 'company' },
    { id: 'c#2', name: '公司2', type: 'company' },
    { id: 'c#3', name: '公司3', type: 'company' },
    { id: 'c#4', name: '公司4', type: 'company' },
    { id: 'c#5', name: '公司5', type: 'company' },
    { id: 'p#1', name: '自然人1', type: 'person' },
    { id: 'p#2', name: '自然人2', type: 'person' },
    { id: 'p#3', name: '自然人3', type: 'person' },
    { id: 'p#4', name: '自然人4', type: 'person' },
    { id: 'p#5', name: '自然人5', type: 'person' },
    { id: 'p#6', name: '自然人6', type: 'person' },
    { id: 'p#7', name: '自然人7', type: 'person' },
    { id: 'p#8', name: '自然人8', type: 'person' },
    { id: 'p#9', name: '自然人9', type: 'person' },
    { id: 'p#10', name: '自然人10', type: 'person' }
  ],
  links: [
    {
      source: '自然人1',
      target: '公司1',
      // name: '法定代表人'
    },
    {
      source: '自然人2',
      target: '公司2',
      // name: '法定代表人'
    },
    {
      source: '自然人3',
      target: '公司3',
      // name: '法定代表人'
    },
    {
      source: '自然人4',
      target: '公司4',
      // name: '法定代表人'
    },
    {
      source: '自然人5',
      target: '公司5',
      // name: '法定代表人'
    },
    {
      source: '自然人6',
      target: '公司1',
      // name: '高管'
    },
    {
      source: '自然人7',
      target: '公司2',
      // name: '高管'
    },
    {
      source: '自然人8',
      target: '公司3',
      // name: '股东'
    },
    {
      source: '自然人9',
      target: '公司4',
      // name: '股东'
    },
    {
      source: '自然人10',
      target: '公司5',
      // name: '股东'
    },
    {
      source: '自然人1',
      target: '自然人2',
      // name: '亲属'
    },
    {
      source: '自然人3',
      target: '自然人4',
      // name: '亲属'
    },
    {
      source: '公司1',
      target: '公司2',
      // name: '股东'
    },
    {
      source: '公司2',
      target: '公司3',
      // name: '股东'
    },
    {
      source: '公司3',
      target: '公司4',
      // name: '股东'
    },
    {
      source: '公司1',
      target: '公司5',
      // name: '股东'
    }
  ]
}

var legends = ["企业", "自然人"];

var categories = legends.map(e => { return { name: e } });

graphData.nodes.forEach(node => {
  node.category = node.type == 'company' ? 0 : 1;
  node.draggable = true
  node.symbolSize = 60
});

graphData.links.forEach(link => {
  link.lineStyle = {
    width: 2,
    curveness: 0.1
  };
  link.label = {
    show: true
  }
}
);

export default class Network extends Component {

  componentDidMount() {
  }

  render() {

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
        textStyle: {
          // color: '#fff'
        },
        icon: 'circle',
        type: 'scroll',
        orient: 'horizontal',
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
          repulsion: 500,
          gravity: 0.1,
          edgeLength: 15,
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

    return (
      <div>
        <SampleEChart option={option} />
      </ div>
    )
  }
}