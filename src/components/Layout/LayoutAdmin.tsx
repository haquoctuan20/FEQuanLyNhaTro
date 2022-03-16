import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import React, { ReactNode, useState } from 'react';
import styled from 'styled-components';
const { Sider } = Layout;
const { SubMenu } = Menu;

interface Props {
  children: ReactNode;
}

function LayoutAdmin(props: Props) {
  const { children } = props;
  const [collapsed, setCollapsed] = useState(true);

  const onCollapse = (params: any) => {
    setCollapsed(params);
  };

  return (
    <Wrapper>
      <div className="leftMenu">
        <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1" icon={<PieChartOutlined />}>
              Option 1
            </Menu.Item>
            <Menu.Item key="2" icon={<DesktopOutlined />}>
              Option 2
            </Menu.Item>
            <SubMenu key="sub1" icon={<UserOutlined />} title="User">
              <Menu.Item key="3">Tom</Menu.Item>
              <Menu.Item key="4">Bill</Menu.Item>
              <Menu.Item key="5">Alex</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
              <Menu.Item key="6">Team 1</Menu.Item>
              <Menu.Item key="8">Team 2</Menu.Item>
            </SubMenu>
            <Menu.Item key="9" icon={<FileOutlined />}>
              Files
            </Menu.Item>
          </Menu>
        </Sider>
      </div>

      <div className="containerContent">
        <div className="header">header</div>
        <div className="content">{children}</div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;

  .containerContent {
    width: 100%;
    height: 100vh;

    .header {
      width: 100%;
      height: 50px;
      background-color: red;
    }

    .content {
      width: 100%;
      height: calc(100vh - 50px);
    }
  }

  .logo {
    height: 50px;
    background: rgba(255, 255, 255, 0.3);
  }

  .site-layout .site-layout-background {
    background: #fff;
  }
`;

export default LayoutAdmin;