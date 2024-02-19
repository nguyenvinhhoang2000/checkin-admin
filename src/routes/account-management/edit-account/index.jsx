import React from "react";

import CreateAndEditAccount from "@/components/forms/create-and-edit-account";

import ModalCancel from "../components/modal-cancel";
import ModalDeleteMember from "../components/modal-delete-member";

function EditAccount() {
  return (
    <section className="flex flex-col overflow-auto">
      <CreateAndEditAccount />
      <ModalDeleteMember
        title="Do you want to delete this account?"
        description="This account will be disabled and cannot log in"
      />
      <ModalCancel
        title="Do you want to cancel?"
        description="The action has not been saved"
      />
    </section>
  );
}

export default React.memo(EditAccount);
