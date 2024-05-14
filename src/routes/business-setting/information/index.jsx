import React from "react";
import { Col, Form, Input, Row, Spin } from "antd";

import AppFooterForm from "@/components/apps/app-footer-form";
import CustomizeFormLabel from "@/components/forms/customize-form-label";
import { RULE_MESSAGE, SCHEMAS } from "@/components/schemas";

import { LOCATIONS } from "@/constants/locations";
import ModalCancel from "@/routes/account-management/components/modal-cancel";
import useAccountManagementStore from "@/store/use-account-management-store";

function Information() {
  const onShowModalCancel = useAccountManagementStore().onShowModalCancel;

  const onGetInfoBusiness = useAccountManagementStore().onGetInfoBusiness;
  const onUpdateInfoBusiness = useAccountManagementStore().onUpdateInfoBusiness;
  const infoBusiness = useAccountManagementStore().infoBusiness;

  const [businessSettingInformationForm] = Form.useForm();

  const onClickCancelButton = () => {
    onShowModalCancel();
  };

  const onSubmit = React.useCallback((data) => {
    onUpdateInfoBusiness(data);
  }, []);

  React.useEffect(() => {
    onGetInfoBusiness();
  }, []);

  React.useEffect(() => {
    if (infoBusiness) {
      businessSettingInformationForm.setFieldsValue(infoBusiness);
    }

    return () => {
      businessSettingInformationForm.resetFields();
    };
  }, [infoBusiness, businessSettingInformationForm]);
  return (
    <Form
      form={businessSettingInformationForm}
      requiredMark={CustomizeFormLabel}
      className="flex w-full flex-col items-center justify-between gap-6"
      layout="vertical"
      onFinish={onSubmit}
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
          {/* <Row gutter={24}>
            <Col span={24}>
              <Form.Item
                name={RULE_MESSAGE.IPS.name}
                label={RULE_MESSAGE.IPS.label}
                rules={[SCHEMAS.RULE_REQUIRED_INPUT(RULE_MESSAGE.IPS.label)]}
              >
                <Input placeholder={RULE_MESSAGE.IPS.placeholder} allowClear />
              </Form.Item>
            </Col>
          </Row> */}
        </div>
      </Spin>

      <AppFooterForm
        cancelText="Hủy"
        classNames="w-full min-h-[3.75rem] flex flex-row bg-white px-5 py-3 rounded-md"
        onCancel={onClickCancelButton}
        okText="Lưu"
      />

      <ModalCancel
        title="Bạn có muốn hủy?"
        description="Những thay đổi của bạn có thể không được lưu"
        navigatePath={LOCATIONS.HOME.path}
      />
    </Form>
  );
}

export default React.memo(Information);
