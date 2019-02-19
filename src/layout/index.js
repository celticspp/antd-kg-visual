import { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
import Link from 'umi/link';


const { Header, Footer, Sider, Content } = Layout;

// 引入子菜单组件
const SubMenu = Menu.SubMenu;

export default class BasicLayout extends Component {
  render() {
    return (
      <Layout>
        <Sider width={256} style={{ minHeight: '100vh', color: 'white' }}>
          <div style={{ height: '32px', background: 'rgba(255,255,255,.2)', margin: '16px' }} />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['2']} defaultOpenKeys={['sub1', 'sub2', 'sub3']}>
            <Menu.Item key="1">
              <Link to="/helloworld">
                <Icon type="pie-chart" />
                <span>Helloworld</span>
              </Link>
            </Menu.Item>
            <SubMenu
              key="sub1"
              title={<span><Icon type="dashboard" /><span>Echarts</span></span>}

            >
              <Menu.Item key="2"><Link to="/echarts/path">关联风险</Link></Menu.Item>
              <Menu.Item key="3"><Link to="/echarts/network">N度关系</Link></Menu.Item>
              <Menu.Item key="4"><Link to="/echarts/test">graph test</Link></Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub2"
              title={<span><Icon type="dashboard" /><span>G6</span></span>}
            >
              <Menu.Item key="5"><Link to="/g6/network">关系图谱</Link></Menu.Item>
              <Menu.Item key="6"><Link to="/g6/editor">G6-Editor</Link></Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub3"
              title={<span><Icon type="dashboard" /><span>BizCharts</span></span>}
            >
              <Menu.Item key="7"><Link to="/bizcharts/test">graph test</Link></Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout >
          <Header style={{ background: '#fff', textAlign: 'center', padding: 0 }}>知识图谱可视化Demo
          </Header>
          <Content style={{ margin: '24px 16px 0' }}>
            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
              {this.props.children}
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>KG Demo ©2019 Created by QiruiLi</Footer>
        </Layout>
      </Layout>
    )
  }
}
