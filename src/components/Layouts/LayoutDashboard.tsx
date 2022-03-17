import { SettingOutlined } from '@ant-design/icons';
import { Button, Dropdown, Menu } from 'antd';
import React, { ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { LoginService } from '../../service/LoginService';
import LeftMenu from '../LeftMenu';

interface Props {
  children: ReactNode;
}

function LayoutDashboard(props: Props) {
  const { children } = props;
  const navigate = useNavigate();

  const handleLogout = () => {
    LoginService.logoutAPI();
    navigate('/');
  };

  return (
    <Wrapper>
      <div className="layout-header">
        <div className="layout-header-logo">
          <img
            src="https://i.pinimg.com/originals/e5/93/ab/e593ab0589d5f1b389e4dfbcce2bce20.gif"
            alt="logo"
          />
          <img
            src="https://i.pinimg.com/originals/e5/93/ab/e593ab0589d5f1b389e4dfbcce2bce20.gif"
            alt="logo"
          />
          <img
            src="https://i.pinimg.com/originals/e5/93/ab/e593ab0589d5f1b389e4dfbcce2bce20.gif"
            alt="logo"
          />
        </div>
        <div className="layout-header-account">
          <Dropdown
            overlay={
              <>
                <Menu>
                  <Menu.Item key="0">
                    <p>1st menu item</p>
                  </Menu.Item>
                  <Menu.Item key="1">
                    <p>2nd menu item</p>
                  </Menu.Item>
                  <Menu.Divider />
                  <Button type="link" onClick={handleLogout}>
                    Logout
                  </Button>
                </Menu>
              </>
            }
            placement="bottomRight"
          >
            <Button
              className="layout-header-setting"
              type="link"
              icon={<SettingOutlined />}
            >
              Account
            </Button>
          </Dropdown>
        </div>
      </div>
      <div className="layout-container">
        {/* <div className="layout-leftMenu"></div> */}
        <LeftMenu />

        <div className="layout-content">{children}</div>
      </div>
    </Wrapper>
  );
}

export default LayoutDashboard;

const Wrapper = styled.div`
  .layout {
    &-header {
      width: 100%;
      height: 60px;
      background-color: ${({ theme }) => theme.background2};
      padding: 0px 16px;

      display: flex;
      align-items: center;
      justify-content: space-between;

      &-logo {
        & > img {
          height: 55px;
        }
      }

      &-setting {
        color: ${({ theme }) => theme.text2};
        font-size: 16px;
        font-weight: 500;
      }
    }

    &-container {
      display: flex;
    }

    &-leftMenu {
      min-height: calc(100vh - 60px);
      background-color: ${({ theme }) => theme.background3};
      /* border-top: 1px solid ${({ theme }) => theme.border}; */

      color: ${({ theme }) => theme.text2};
    }

    &-content {
      padding: 16px;
      width: 100%;
      background-color: ${({ theme }) => theme.background5};

      height: calc(100vh - 60px);
      overflow-y: auto;
    }
  }
`;
