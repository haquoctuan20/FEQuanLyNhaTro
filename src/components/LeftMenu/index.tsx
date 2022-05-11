import {
  AuditOutlined,
  BoxPlotOutlined,
  CodeOutlined,
  FileDoneOutlined,
  PieChartOutlined,
} from "@ant-design/icons";
import { Grid, Layout, Menu } from "antd";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

const { Sider } = Layout;
const { useBreakpoint } = Grid;

function LeftMenu() {
  const location = useLocation();
  const activeKey = location.pathname.split("/")[2];

  // const data = LoginService.getDataLocalStorage();

  const MENU = [
    {
      key: "phong-tro",
      icon: <PieChartOutlined style={{ fontSize: "22px" }} />,
      path: "/admin/phong-tro",
      title: "Quản lý phòng trọ",
    },
    {
      key: "chi-so-dien",
      icon: <BoxPlotOutlined style={{ fontSize: "22px" }} />,
      path: "/admin/chi-so-dien",
      title: "Nhập chỉ số diện",
    },
    {
      key: "tinh-tien",
      icon: <AuditOutlined style={{ fontSize: "22px" }} />,
      path: "/admin/tinh-tien",
      title: "Tính tiền phòng",
    },
    {
      key: "quan-ly-lien-he",
      icon: <CodeOutlined style={{ fontSize: "22px" }} />,
      path: "/admin/quan-ly-lien-he",
      title: "Quản lý liên hệ",
    },
    {
      key: "quan-ly-bai-viet",
      icon: <FileDoneOutlined style={{ fontSize: "22px" }} />,
      path: "/admin/quan-ly-bai-viet",
      title: "Quản lý bài viết",
    },
  ];

  const [collapsed, setCollapsed] = useState(false);

  const onCollapse = (params: any) => {
    setCollapsed(params);
  };

  const screens = useBreakpoint();

  useEffect(() => {
    if (!screens.lg) {
      setCollapsed(true);
    } else {
      setCollapsed(false);
    }
  }, [screens]);

  return (
    <Wrapper>
      <Sider
        className="sider-container"
        collapsible
        collapsed={collapsed}
        onCollapse={onCollapse}
      >
        <Menu theme="dark" defaultSelectedKeys={[activeKey]} mode="inline">
          {/* <Menu.Item key="null" className="sider-account"> */}
          {/* <div><div className="sider-account-name">{data.username}</div></div> */}
          {/* </Menu.Item> */}
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

      a {
        text-decoration: none;
      }

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
