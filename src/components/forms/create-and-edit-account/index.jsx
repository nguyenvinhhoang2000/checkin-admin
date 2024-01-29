import React from "react";
import { Col, Form, Input, Row, Select } from "antd";

import { ACCOUNT_FORM, RULES } from "./config";

function CreateAndEditAccount() {
  return (
    <Form
      className="w-[51.875rem] rounded-md border-b border-t border-b-black/5 border-t-black/5 bg-white px-6 pb-1 pt-4"
      layout="vertical"
    >
      <Row gutter={24}>
        <Col span={12}>
          <Form.Item
            name={ACCOUNT_FORM.NAME.name}
            label={ACCOUNT_FORM.NAME.label}
            rules={RULES.RULE_NAME}
          >
            <Input placeholder={ACCOUNT_FORM.NAME.placeholder} allowClear />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            name={ACCOUNT_FORM.BRANCH.name}
            label={ACCOUNT_FORM.BRANCH.label}
            required
            rules={RULES.RULE_BRANCH}
          >
            <Select placeholder={ACCOUNT_FORM.BRANCH.placeholder} allowClear>
              <Select.Option key={1}>1</Select.Option>
              <Select.Option key={2}>2</Select.Option>
            </Select>
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
}

export default CreateAndEditAccount;
