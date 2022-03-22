import { PieChartOutlined } from '@ant-design/icons';
import { Image, Layout, Menu } from 'antd';
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { LoginService } from '../../service/LoginService';

const { Sider } = Layout;

function LeftMenu() {
  const location = useLocation();
  const activeKey = location.pathname.split('/')[1];

  const data = LoginService.getDataLocalStorage();

  const MENU = [
    {
      key: 'bangdieukhien',
      icon: <PieChartOutlined />,
      path: '/bangdieukhien',
      title: 'Bảng điều khiển',
    },
  ];

  const [collapsed, setCollapsed] = useState(false);

  const onCollapse = (params: any) => {
    setCollapsed(params);
  };

  return (
    <Wrapper>
      <Sider
        className="sider-container"
        collapsible
        collapsed={collapsed}
        onCollapse={onCollapse}
      >
        <Menu theme="dark" defaultSelectedKeys={[activeKey]} mode="inline">
          <Menu.Item
            key="null"
            className="sider-account"
            icon={
              <Image
                width={52}
                src="https://64.media.tumblr.com/a5bfe552de953fc66a964b84efd160a3/4c508677959fdec3-91/s1280x1920/4d144b48ded0b9d259df7f08bfb37a13152115a6.jpg"
                className="sider-img"
              />
            }
          >
            <div>
              <div className="sider-account-name">{data.username}</div>
            </div>
          </Menu.Item>
          {MENU.map((link: any, index: any) => (
            <Menu.Item key={link.key} icon={link.icon}>
              <Link key={index} to={link.path}>
                {link.title}
              </Link>
            </Menu.Item>
          ))}

          {/* <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
            <Menu.Item key="6">Team 1asdfasdfasdfasdfadsf</Menu.Item>
            <Menu.Item key="8">Team 2</Menu.Item>
          </SubMenu> */}
        </Menu>
      </Sider>
    </Wrapper>
  );
}

export default LeftMenu;

const Wrapper = styled.div`
  .sider {
    &-container {
      overflow-y: auto;
      height: calc(100vh - 60px);

      /* width */
      ::-webkit-scrollbar {
        width: 5px;
      }

      /* Track */
      ::-webkit-scrollbar-track {
        background: #f1f1f1;
      }

      /* Handle */
      ::-webkit-scrollbar-thumb {
        background: #001529;
      }

      /* Handle on hover */
      ::-webkit-scrollbar-thumb:hover {
        background: #555;
      }
    }

    &-account {
      height: 60px;
      padding-left: 14px !important;

      &-name {
        margin-left: 10px;
        font-weight: bold;
        color: #fff;
        font-size: 16px;
      }
    }

    &-img {
      height: 52px;
      width: 52px;
      border: 1px solid #ccc;
      border-radius: 30px;
    }
  }
`;
