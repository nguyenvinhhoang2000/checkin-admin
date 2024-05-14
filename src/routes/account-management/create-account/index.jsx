import React from "react";

import CreateAndEditAccount from "@/components/forms/create-and-edit-account";

import { LOCATIONS } from "@/constants/locations";

import ModalCancel from "../components/modal-cancel";

function CreateAccount() {
  return (
    <section className="flex h-full flex-col overflow-auto">
      <CreateAndEditAccount />
      <ModalCancel
        title="Bạn có muốn hủy bỏ?"
        description="Các thay đổi của bạn có thể không được lưu"
        navigatePath={LOCATIONS.ACCOUNT_MANAGEMENT.path}
      />
    </section>
  );
}

export default React.memo(CreateAccount);
