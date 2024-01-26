import React from "react";
import { LockOutlined, MailOutlined } from "@ant-design/icons";
import { Button, Form, Input, message } from "antd";
import { useBoolean } from "usehooks-ts";

import useAuthStore from "@/store/use-auth-store";

import {
  errorCode,
  errorLoginFailMessage,
  loadingLoginMessage,
  rulesEmail,
  rulesPassword,
} from "./config";

function LoginForm() {
  const onLogin = useAuthStore().onLogin;

  const [loginForm] = Form.useForm();

  const {
    value: isDisabledLoginForm,
    setTrue: onDisabledLoginForm,
    setFalse: onEnabledLoginForm,
  } = useBoolean(false);

  const onSubmitForm = async (record) => {
    const onCancelLoadingMessage = message.loading(loadingLoginMessage);

    onDisabledLoginForm();

    const { message: messResult, status, messArr } = await onLogin(record);

    if (messArr && messArr.code === errorCode.UNAUTHORIZED) {
      loginForm.setFields(errorLoginFailMessage);

      onEnabledLoginForm();

      onCancelLoadingMessage();

      return;
    }

    onCancelLoadingMessage();

    onEnabledLoginForm();

    message[status](messResult, 1);
  };

  return (
    <Form
      disabled={isDisabledLoginForm}
      form={loginForm}
      onFinish={onSubmitForm}
      name="normal_login"
      className="shadow-dropShadow flex max-w-[29rem] flex-col justify-center rounded-xl bg-white p-[2rem]"
    >
      <div className="mb-[1.5rem]">
        <h2 className="text-character-1 mb-[0.25rem] px-[2.37rem] text-center font-roboto text-3xl font-medium leading-10">
          Welcome Back
        </h2>
        <p className="text-character-2 font-roboto text-sm font-normal leading-[1.375rem] sm:px-[2.37rem]">
          Enter the account provided to access the dashboard
        </p>
      </div>
      <Form.Item name="email" rules={rulesEmail}>
        <Input
          prefix={<MailOutlined className="text-primary-0 my-[0.4375rem]" />}
          placeholder="Enter your Email"
        />
      </Form.Item>
      <Form.Item name="password" rules={rulesPassword} hasFeedback>
        <Input.Password
          prefix={<LockOutlined className="text-primary-0 my-[0.5rem]" />}
          placeholder="Enter your Password"
        />
      </Form.Item>
      <Form.Item className="mb-0">
        <Button type="primary" htmlType="submit" className="h-[2.5rem] w-full">
          Sign in
        </Button>
      </Form.Item>
    </Form>
  );
}

export default LoginForm;
