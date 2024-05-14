import React from "react";

import CreateAndEditAccount from "@/components/forms/create-and-edit-account";

import { LOCATIONS } from "@/constants/locations";

import ModalActiveMember from "../components/modal-active-member";
import ModalCancel from "../components/modal-cancel";
import ModalDeleteMember from "../components/modal-delete-member";

function EditAccount() {
  return (
    <section className="flex flex-col overflow-auto">
      <CreateAndEditAccount />
      <ModalDeleteMember
        title="Bạn có muốn dừng tài khoản này không?"
        description="Tài khoản này sẽ bị vô hiệu hóa và không thể đăng nhập"
      />
      <ModalActiveMember
        title="Bạn có muốn kích hoạt tài khoản này?"
        description="Tài khoản này sẽ có thể đăng nhập trở lại"
      />
      <ModalCancel
        title="Bạn có muốn hủy bỏ không?"
        description="Thao tác của bạn có thể sẽ không được lưu"
        navigatePath={LOCATIONS.ACCOUNT_MANAGEMENT.path}
      />
    </section>
  );
}

export default React.memo(EditAccount);
