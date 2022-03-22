import { SettingOutlined } from '@ant-design/icons';
import { Button, Dropdown, Menu, Popover } from 'antd';
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

  const content = (
    <ContentStyled>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, veniam
        voluptatibus? Veritatis tenetur, ullam fugiat velit hic ratione quos
        voluptate.
      </div>

      <div className="layout-containerButton">
        <Button type="link"> </Button>
        <Button type="default" danger onClick={handleLogout}>
          Đăng xuất
        </Button>
      </div>
    </ContentStyled>
  );

  const text = <TextStyled>Tài khoản</TextStyled>;

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
          <Popover
            placement="bottomLeft"
            title={text}
            content={content}
            trigger="click"
          >
            <Button
              className="layout-header-setting"
              type="link"
              icon={<SettingOutlined />}
            >
              Account
            </Button>
          </Popover>
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

const TextStyled = styled.div`
  text-align: center;
`;

const ContentStyled = styled.div`
  width: 250px;

  .layout-containerButton {
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;
