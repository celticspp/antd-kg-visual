import React from 'react';

var echarts = require('echarts');

class SampleEChart extends React.Component {
  constructor(props) {
    super(props);
    this.containerRef = React.createRef();
    // this.resize.bind(this);
  }

  //用于使chart自适应高度和宽度,通过窗体高宽计算容器高宽
  // resize = () => {
  //   var mountDom = this.containerRef.current;
  //   mountDom.style.width = window.innerWidth - 200 + 'px'
  //   // mountDom.style.height = window.innerHeight + 'px';
  // };

  // screenChange() {
  //   window.addEventListener('resize', this.resize);
  // }

  componentDidMount() {
    //设置容器高宽
    var mountDom = this.containerRef.current
    // 基于准备好的dom，初始化echarts实例
    this.chart = echarts.init(mountDom);
    // 减去侧边栏宽度
    this.chart.resize({ width: this.chart.getWidth() - 200, height: 'auto' })
    this.refreshChart();
    // this.screenChange();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.option !== this.props.option) {
      this.refreshChart();
    }
  }

  componentWillUnmount() {
    if (this.chart && !this.chart.isDisposed()) {
      this.chart.dispose();
    }
    // window.removeEventListener('resize', this.resize);
  }

  refreshChart = () => {
    // 绘制图表
    this.chart.setOption(this.props.option);
  };

  render() {
    const style = {
      height: '600px',
      width: 'auto'
    };
    return (
      <div ref={this.containerRef} style={style} >
      </div>
    );
  }
}

export default SampleEChart;
