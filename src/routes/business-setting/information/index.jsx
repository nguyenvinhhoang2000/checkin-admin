import React from "react";
import { Button, Col, Collapse, Form, Input, Row, Spin } from "antd";

import AppFooterForm from "@/components/apps/app-footer-form";
import AppIcon from "@/components/apps/app-icon";
import CustomizeFormLabel from "@/components/forms/customize-form-label";
import { RULE_MESSAGE, SCHEMAS } from "@/components/schemas";

import { LOCATIONS } from "@/constants/locations";
import ModalCancel from "@/routes/account-management/components/modal-cancel";
import useAccountManagementStore from "@/store/use-account-management-store";

function Information() {
  const onShowModalCancel = useAccountManagementStore().onShowModalCancel;
  const branches = useAccountManagementStore().branches;
  const onGetBranches = useAccountManagementStore().onGetBranches;

  const [businessSettingInformationForm] = Form.useForm();

  const onClickCancelButton = () => {
    onShowModalCancel();
  };

  const onRenderExpandIcon = React.useCallback(({ isActive }) => {
    return (
      <AppIcon
        src="/icons/arrow-collapse-dropdown.svg#id"
        width={14}
        height={14}
        className={`transition-all ${isActive && "rotate-180"}`}
      />
    );
  }, []);

  const items = branches.map((branch) => {
    return {
      key: branch._id,
      label: "Branch",
      children: (
        <Spin spinning={false}>
          <div className="rounded-b-md border-b border-t border-b-black/5 border-t-black/5 bg-white px-6 pb-1 pt-4 xl:min-w-[51.875rem]">
            <Row gutter={24}>
              <Col span={24}>
                <Form.Item
                  name={RULE_MESSAGE.BRANCH.name}
                  label={RULE_MESSAGE.BRANCH.label}
                >
                  <Input
                    placeholder={RULE_MESSAGE.ADDRESS.placeholder}
                    allowClear
                  />
                </Form.Item>
              </Col>
              <Col span={24}>
                <Form.Item
                  name={RULE_MESSAGE.BRANCH_ADDRESS.name}
                  label={RULE_MESSAGE.BRANCH_ADDRESS.label}
                >
                  <Input
                    placeholder={RULE_MESSAGE.BRANCH_ADDRESS.placeholder}
                    allowClear
                  />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={24}>
              <Col xs={24} xl={12}>
                <Form.Item
                  name={RULE_MESSAGE.WORK_TIME_START.name}
                  label={RULE_MESSAGE.WORK_TIME_START.label}
                  required
                  rules={[
                    SCHEMAS.RULE_REQUIRED_INPUT(
                      RULE_MESSAGE.WORK_TIME_START.label,
                    ),
                  ]}
                >
                  <Input
                    placeholder={RULE_MESSAGE.WORK_TIME_START.placeholder}
                    allowClear
                  />
                </Form.Item>
              </Col>
              <Col xs={24} xl={12}>
                <Form.Item
                  name={RULE_MESSAGE.WORK_TIME_END.name}
                  label={RULE_MESSAGE.WORK_TIME_END.label}
                  required
                  rules={[
                    SCHEMAS.RULE_REQUIRED_INPUT(
                      RULE_MESSAGE.WORK_TIME_END.label,
                    ),
                  ]}
                >
                  <Input
                    placeholder={RULE_MESSAGE.WORK_TIME_END.placeholder}
                    allowClear
                  />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={24}>
              <Col span={24}>
                <Form.Item
                  name={RULE_MESSAGE.IPS.name}
                  label={RULE_MESSAGE.IPS.label}
                  rules={[SCHEMAS.RULE_REQUIRED_INPUT(RULE_MESSAGE.IPS.label)]}
                >
                  <Input
                    placeholder={RULE_MESSAGE.IPS.placeholder}
                    allowClear
                  />
                </Form.Item>
              </Col>
              <Button
                type="dashed"
                className="group mx-3 mb-6 flex w-full flex-row items-center justify-center gap-[0.625rem]"
              >
                <AppIcon
                  src="/icons/plus-icon.svg#id"
                  width={14}
                  height={14}
                  className="text-black transition-all group-hover:text-primary-1"
                />
                <span>Add Branch</span>
              </Button>
            </Row>
          </div>
        </Spin>
      ),
    };
  });

  React.useEffect(() => {
    onGetBranches();
  }, [onGetBranches]);

  React.useEffect(() => {
    businessSettingInformationForm.setFieldsValue({
      branches,
    });
  });
  return (
    <Form
      form={businessSettingInformationForm}
      requiredMark={CustomizeFormLabel}
      className="flex w-full flex-col items-center justify-between gap-6"
      layout="vertical"
      // onFinish={onSubmit}
    >
      <Spin spinning={false}>
        <div className="rounded-md border-b border-t border-b-black/5 border-t-black/5 bg-white px-6 pb-1 pt-4 xl:min-w-[51.875rem]">
          <Row gutter={24}>
            <Col span={24}>
              <Form.Item
                name={RULE_MESSAGE.BUSINESS_NAME.name}
                label={RULE_MESSAGE.BUSINESS_NAME.label}
                rules={[
                  SCHEMAS.RULE_REQUIRED_INPUT(RULE_MESSAGE.BUSINESS_NAME.label),
                ]}
              >
                <Input
                  placeholder={RULE_MESSAGE.BUSINESS_NAME.placeholder}
                  allowClear
                />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item
                name={RULE_MESSAGE.ADDRESS.name}
                label={RULE_MESSAGE.ADDRESS.label}
                rules={[
                  SCHEMAS.RULE_REQUIRED_INPUT(RULE_MESSAGE.ADDRESS.label),
                ]}
              >
                <Input
                  placeholder={RULE_MESSAGE.ADDRESS.placeholder}
                  allowClear
                />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={24}>
            <Col xs={24} xl={12}>
              <Form.Item
                name={RULE_MESSAGE.WORK_TIME_START.name}
                label={RULE_MESSAGE.WORK_TIME_START.label}
                required
                rules={[
                  SCHEMAS.RULE_REQUIRED_INPUT(
                    RULE_MESSAGE.WORK_TIME_START.label,
                  ),
                ]}
              >
                <Input
                  placeholder={RULE_MESSAGE.WORK_TIME_START.placeholder}
                  allowClear
                />
              </Form.Item>
            </Col>
            <Col xs={24} xl={12}>
              <Form.Item
                name={RULE_MESSAGE.WORK_TIME_END.name}
                label={RULE_MESSAGE.WORK_TIME_END.label}
                required
                rules={[
                  SCHEMAS.RULE_REQUIRED_INPUT(RULE_MESSAGE.WORK_TIME_END.label),
                ]}
              >
                <Input
                  placeholder={RULE_MESSAGE.WORK_TIME_END.placeholder}
                  allowClear
                />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={24}>
            <Col span={24}>
              <Form.Item
                name={RULE_MESSAGE.NUMBER_OF_WORKING_DAYS.name}
                label={RULE_MESSAGE.NUMBER_OF_WORKING_DAYS.label}
                rules={[
                  SCHEMAS.RULE_REQUIRED_SELECT(
                    RULE_MESSAGE.NUMBER_OF_WORKING_DAYS.label,
                  ),
                ]}
              >
                <Input
                  placeholder={RULE_MESSAGE.NUMBER_OF_WORKING_DAYS.placeholder}
                  allowClear
                />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={24}>
            <Col span={24}>
              <Form.Item
                name={RULE_MESSAGE.IPS.name}
                label={RULE_MESSAGE.IPS.label}
                rules={[SCHEMAS.RULE_REQUIRED_INPUT(RULE_MESSAGE.IPS.label)]}
              >
                <Input placeholder={RULE_MESSAGE.IPS.placeholder} allowClear />
              </Form.Item>
            </Col>
          </Row>
        </div>
      </Spin>

      <Collapse
        items={items}
        defaultActiveKey={["1"]}
        bordered={false}
        className="flex flex-col gap-6 bg-transparent xl:w-full xl:max-w-[51.875rem]"
        expandIcon={onRenderExpandIcon}
      />

      <AppFooterForm
        cancelText="Cancel"
        classNames="w-full min-h-[3.75rem] flex flex-row bg-white px-5 py-3 rounded-md"
        onCancel={onClickCancelButton}
      />

      <ModalCancel
        title="Do you want to cancel?"
        description="The action has not been saved"
        navigatePath={LOCATIONS.HOME.path}
      />
    </Form>
  );
}

export default React.memo(Information);
