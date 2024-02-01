import React from "react";
import { useLocation } from "react-router-dom";
import { Col, Form, Input, Row, Select } from "antd";

import CustomizeFormLabel from "@/components/forms/customize-form-label";
import { RULE_MESSAGE, SCHEMAS } from "@/components/schemas";

import { GENER_TYPES } from "@/constants/gender";

function CreateAndEditAccount() {
  const { state: currentData } = useLocation();

  const [createAndEditForm] = Form.useForm();

  React.useEffect(() => {
    if (currentData) {
      createAndEditForm.setFieldsValue(currentData);
    }

    return () => {
      createAndEditForm.resetFields();
    };
  }, [createAndEditForm, currentData]);

  return (
    <Form
      form={createAndEditForm}
      requiredMark={CustomizeFormLabel}
      className="w-[51.875rem] rounded-md border-b border-t border-b-black/5 border-t-black/5 bg-white px-6 pb-1 pt-4"
      layout="vertical"
    >
      <Row gutter={24}>
        <Col span={12}>
          <Form.Item
            name={RULE_MESSAGE.NAME.name}
            label={RULE_MESSAGE.NAME.label}
            rules={[SCHEMAS.RULE_REQUIRED_INPUT(RULE_MESSAGE.NAME.label)]}
          >
            <Input placeholder={RULE_MESSAGE.NAME.placeholder} allowClear />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            name={RULE_MESSAGE.BRANCH.name}
            label={RULE_MESSAGE.BRANCH.label}
            required
            rules={[[SCHEMAS.RULE_REQUIRED_SELECT(RULE_MESSAGE.BRANCH.label)]]}
          >
            <Select placeholder={RULE_MESSAGE.BRANCH.placeholder} allowClear>
              <Select.Option key={1}>1</Select.Option>
              <Select.Option key={2}>2</Select.Option>
            </Select>
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={24}>
        <Col span={12}>
          <Form.Item
            name={RULE_MESSAGE.EMAIL.name}
            label={RULE_MESSAGE.EMAIL.label}
            rules={[SCHEMAS.RULE_REQUIRED_INPUT(RULE_MESSAGE.EMAIL.label)]}
          >
            <Input placeholder={RULE_MESSAGE.EMAIL.placeholder} allowClear />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            name={RULE_MESSAGE.PASSWORD.name}
            label={RULE_MESSAGE.PASSWORD.label}
            required
          >
            <Input placeholder={RULE_MESSAGE.PASSWORD.placeholder} allowClear />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={24}>
        <Col span={12}>
          <Form.Item
            name={RULE_MESSAGE.GENDER.name}
            label={RULE_MESSAGE.GENDER.label}
            rules={[SCHEMAS.RULE_REQUIRED_INPUT(RULE_MESSAGE.GENDER.label)]}
          >
            <Select placeholder={RULE_MESSAGE.GENDER.placeholder} allowClear>
              {GENER_TYPES.map((item) => (
                <Select.Option key={item.value}>{item.label}</Select.Option>
              ))}
            </Select>
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            name={RULE_MESSAGE.POSITION.name}
            label={RULE_MESSAGE.POSITION.label}
            required
            rules={[
              [SCHEMAS.RULE_REQUIRED_SELECT(RULE_MESSAGE.POSITION.label)],
            ]}
          >
            <Input placeholder={RULE_MESSAGE.POSITION.placeholder} allowClear />
          </Form.Item>
        </Col>
      </Row>
      <Form.Item
        name={RULE_MESSAGE.NOTE.name}
        label={RULE_MESSAGE.NOTE.label}
        required
        rules={[[SCHEMAS.RULE_REQUIRED_SELECT(RULE_MESSAGE.NOTE.label)]]}
      >
        <Input.TextArea
          rows={4}
          maxLength={100}
          showCount
          placeholder={RULE_MESSAGE.NOTE.placeholder}
          allowClear
        />
      </Form.Item>
    </Form>
  );
}

export default React.memo(CreateAndEditAccount);
