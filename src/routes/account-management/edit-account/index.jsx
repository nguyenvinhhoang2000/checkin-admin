import React from "react";

import CreateAndEditAccount from "@/components/forms/create-and-edit-account";

import ModalDeleteMember from "../components/modal-delete-member";

function EditAccount() {
  return (
    <section className="flex flex-col overflow-auto">
      <CreateAndEditAccount />
      <ModalDeleteMember />
    </section>
  );
}

export default React.memo(EditAccount);
