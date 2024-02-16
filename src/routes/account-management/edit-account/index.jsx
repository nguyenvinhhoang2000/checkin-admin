import React from "react";

import CreateAndEditAccount from "@/components/forms/create-and-edit-account";

import ModalCancel from "../components/modal-cancel";
import ModalDeleteMember from "../components/modal-delete-member";

function EditAccount() {
  return (
    <section className="flex flex-col overflow-auto">
      <CreateAndEditAccount />
      <ModalDeleteMember />
      <ModalCancel />
    </section>
  );
}

export default React.memo(EditAccount);
