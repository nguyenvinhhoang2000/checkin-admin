import React from "react";

import CreateAndEditAccount from "@/components/forms/create-and-edit-account";

import ModalCancel from "../components/modal-cancel";

function CreateAccount() {
  return (
    <section className="flex h-full flex-col overflow-auto">
      <CreateAndEditAccount />
      <ModalCancel />
    </section>
  );
}

export default React.memo(CreateAccount);
