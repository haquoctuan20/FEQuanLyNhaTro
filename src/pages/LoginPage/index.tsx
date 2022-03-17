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
  const [loading, setloading] = useState(false);

  const onFinish = (values: any) => {
    LoginService.setDataLocalStorage({ email: values.email });
    navigate('/');
    NotificationSuccess('Success', '');
    // setloading(true);
    // LoginService.loginAPI(values.email, values.password)
    //   .then((res) => {
    //     if (res.data.code !== 200) {
    //       NotificationError('Error', res.data.message);
    //       return;
    //     }
    //     LoginService.setDataLocalStorage(res.data);
    //     navigate('/');
    //     NotificationSuccess('Success', res.data.message);
    //   })
    //   .catch((err) => {
    //     NotificationError('Error', 'Login failed');
    //   })
    //   .finally(() => {
    //     setloading(false);
    //   });
  };

  return (
    <Wrapper>
      <HelmetComponent title="Login" />

      <div className="loginContainer">
        <div className="loginTitle">CMS</div>
        <Form onFinish={onFinish} autoComplete="off" {...layout}>
          <Form.Item
            label="Email"
            name="email"
            labelAlign="left"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            labelAlign="left"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 6, span: 18 }}>
            <Button type="primary" htmlType="submit" loading={loading}>
              Login
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
    width: 420px;
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
