import React from "react";

import CreateAndEditAccount from "@/components/forms/create-and-edit-account";

import { LOCATIONS } from "@/constants/locations";

import ModalCancel from "../components/modal-cancel";

function CreateAccount() {
  return (
    <section className="flex h-full flex-col overflow-auto">
      <CreateAndEditAccount />
      <ModalCancel
        title="Do you want to cancel?"
        description="The action has not been saved"
        navigatePath={LOCATIONS.ACCOUNT_MANAGEMENT.path}
      />
    </section>
  );
}

export default React.memo(CreateAccount);
