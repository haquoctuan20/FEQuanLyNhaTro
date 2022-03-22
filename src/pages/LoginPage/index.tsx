import { Button, Form, Input } from 'antd';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import HelmetComponent from '../../components/HelmetComponent';
import {
  NotificationError,
  NotificationSuccess,
} from '../../components/Notification';
import { LoginService } from '../../service/LoginService';

const layout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 18 },
};

function LoginPage() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const onFinish = (values: any) => {
    setLoading(true);
    LoginService.loginAPI(values.username, values.password)
      .then(res => {
        console.log('💙TuanHQ💖 ~> onFinish ~> res', res);
        if (res.data.code !== 0) {
          NotificationError('Lỗi đăng nhập', res.data.message);
          return;
        }
        LoginService.setDataLocalStorage(res.data.data);
        navigate('/admin/bang-dieu-khien');
        NotificationSuccess('Đăng nhập thành công', res.data.message);
      })
      .catch(err => {
        NotificationError('Đăng nhập không thành công', '');
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <Wrapper>
      <HelmetComponent title="Login" />

      <div className="loginContainer">
        <div className="loginTitle">QUẢN LÝ NHÀ TRỌ</div>
        <Form onFinish={onFinish} autoComplete="off" {...layout}>
          <Form.Item
            label="Tên đăng nhập"
            name="username"
            labelAlign="left"
            rules={[{ required: true, message: 'Chưa nhập tên đăng nhập!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Mật khẩu"
            name="password"
            labelAlign="left"
            rules={[{ required: true, message: 'Chưa nhập mật khẩu' }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 6, span: 18 }}>
            <Button type="primary" htmlType="submit" loading={loading}>
              Đăng nhập
            </Button>
          </Form.Item>
        </Form>
      </div>
    </Wrapper>
  );
}

export default LoginPage;

const Wrapper = styled.div`
  background-color: #ebebeb;
  height: 100vh;
  display: flex;
  align-items: flex-start;
  justify-content: center;

  .loginContainer {
    background-color: #fff;
    width: 620px;
    padding: 20px;
    box-shadow: ${({ theme }) => theme.shadowContainer};
    margin-top: 10%;
  }

  .loginTitle {
    font-size: 30px;
    font-weight: bold;
    text-align: center;
    padding: 20px 0px;
  }
`;
