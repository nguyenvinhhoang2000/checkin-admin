/* eslint-disable no-unused-vars */
import React from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { Col, Form, Input, Row, Select, Spin } from "antd";

import AppFooterForm from "@/components/apps/app-footer-form";
import CustomizeFormLabel from "@/components/forms/customize-form-label";
import { RULE_MESSAGE, SCHEMAS } from "@/components/schemas";

import { GENDER_TYPES } from "@/constants/gender";
import useAccountManagementStore from "@/store/use-account-management-store";

function CreateAndEditAccount() {
  const onGetMemberDetail = useAccountManagementStore().onGetMemberDetail;
  const onClearMemberDetail = useAccountManagementStore().onClearMemberDetail;
  const infoMemberPicked = useAccountManagementStore().infoMemberPicked;
  const isLoadingForm = useAccountManagementStore().isLoadingForm;
  const onShowModalDeleted = useAccountManagementStore().onShowModalDeleted;
  const onShowModalCancel = useAccountManagementStore().onShowModalCancel;
  const onShowModalActive = useAccountManagementStore().onShowModalActive;
  const onEditMemberAccount = useAccountManagementStore().onEditMemberAccount;
  const onCreateMemberAccount =
    useAccountManagementStore().onCreateMemberAccount;

  const [createAndEditForm] = Form.useForm();

  const [searchParams] = useSearchParams();

  const navigate = useNavigate();

  const params = useParams();

  const isActiveAccount = searchParams.get("status") === "ACTIVE";

  const onClickDeleteButton = () => {
    onShowModalDeleted(infoMemberPicked);
  };

  const onClickActiveButton = () => {
    onShowModalActive();
  };

  const onClickCancelButton = () => {
    onShowModalCancel();
  };

  React.useEffect(() => {
    if (params.id) {
      onGetMemberDetail(params.id);
    }

    return () => {
      onClearMemberDetail();
    };
  }, []);

  React.useEffect(() => {
    if (params.id) {
      createAndEditForm.setFieldsValue({
        ...infoMemberPicked,
        password: "",
      });
    }

    return () => {
      createAndEditForm.resetFields();
    };
  }, [createAndEditForm, infoMemberPicked, params.id]);

  const onSubmit = () => {
    const data = createAndEditForm.getFieldsValue();

    if (params.id) {
      onEditMemberAccount(params.id, data, navigate);
    } else {
      onCreateMemberAccount(data, navigate);
    }
  };

  return (
    <Form
      form={createAndEditForm}
      requiredMark={CustomizeFormLabel}
      className="flex w-full flex-col items-center justify-between"
      layout="vertical"
      onFinish={onSubmit}
    >
      <Spin spinning={isLoadingForm}>
        <div className="rounded-md border-b border-t border-b-black/5 border-t-black/5 bg-white px-6 pb-1 pt-4 xl:min-w-[51.875rem]">
          <Row gutter={24}>
            <Col xs={24} xl={12}>
              <Form.Item
                name={RULE_MESSAGE.NAME.name}
                label={RULE_MESSAGE.NAME.label}
                rules={[SCHEMAS.RULE_REQUIRED_INPUT(RULE_MESSAGE.NAME.label)]}
              >
                <Input placeholder={RULE_MESSAGE.NAME.placeholder} allowClear />
              </Form.Item>
            </Col>
            <Col xs={24} xl={12}>
              <Form.Item
                name={RULE_MESSAGE.PHONE_NUMBER.name}
                label={RULE_MESSAGE.PHONE_NUMBER.label}
                rules={[SCHEMAS.RULE_PHONE_NUMBER]}
              >
                <Input
                  placeholder={RULE_MESSAGE.PHONE_NUMBER.placeholder}
                  allowClear
                />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={24}>
            <Col xs={24} xl={12}>
              <Form.Item
                name={RULE_MESSAGE.EMAIL.name}
                label={RULE_MESSAGE.EMAIL.label}
                required
                rules={[
                  SCHEMAS.RULE_EMAIL,
                  SCHEMAS.RULE_REQUIRED_INPUT(RULE_MESSAGE.EMAIL.label),
                ]}
              >
                <Input
                  placeholder={RULE_MESSAGE.EMAIL.placeholder}
                  allowClear
                />
              </Form.Item>
            </Col>
            <Col xs={24} xl={12}>
              <Form.Item
                name={RULE_MESSAGE.PASSWORD.name}
                label={RULE_MESSAGE.PASSWORD.label}
                required
                rules={[
                  SCHEMAS.RULE_REQUIRED_INPUT(RULE_MESSAGE.PASSWORD.label),
                ]}
              >
                <Input
                  placeholder={RULE_MESSAGE.PASSWORD.placeholder}
                  allowClear
                />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={24}>
            <Col xs={24} xl={12}>
              <Form.Item
                name={RULE_MESSAGE.GENDER.name}
                label={RULE_MESSAGE.GENDER.label}
                rules={[
                  SCHEMAS.RULE_REQUIRED_SELECT(RULE_MESSAGE.GENDER.label),
                ]}
              >
                <Select placeholder={RULE_MESSAGE.GENDER.placeholder}>
                  {GENDER_TYPES.map((item) => (
                    <Select.Option key={item.value} value={item.value}>
                      {item.label}
                    </Select.Option>
                  ))}
                </Select>
              </Form.Item>
            </Col>
            <Col xs={24} xl={12}>
              <Form.Item
                name={RULE_MESSAGE.POSITION.name}
                label={RULE_MESSAGE.POSITION.label}
                required
                rules={[
                  SCHEMAS.RULE_REQUIRED_INPUT(RULE_MESSAGE.POSITION.label),
                ]}
              >
                <Input
                  placeholder={RULE_MESSAGE.POSITION.placeholder}
                  allowClear
                />
              </Form.Item>
            </Col>
          </Row>
          <Form.Item
            name={RULE_MESSAGE.NOTE.name}
            label={RULE_MESSAGE.NOTE.label}
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
        </div>
      </Spin>

      <AppFooterForm
        cancelText="Hủy"
        deleteText={params.id && isActiveAccount ? "Dừng hoạt động" : null}
        activeText={params.id && !isActiveAccount ? "Kích hoạt" : null}
        classNames={`mt-[6rem] w-full min-h-[3.75rem] flex flex-row ${
          params.id ? "justify-between" : ""
        } bg-white px-5 py-3 rounded-md`}
        onCancel={onClickCancelButton}
        onDelete={onClickDeleteButton}
        onActive={onClickActiveButton}
      />
    </Form>
  );
}

export default React.memo(CreateAndEditAccount);
