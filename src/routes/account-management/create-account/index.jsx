import React from "react";

import AppFooterForm from "@/components/apps/app-footer-form";
import CreateAndEditAccount from "@/components/forms/create-and-edit-account";

function CreateAccount() {
  return (
    <section className="flex h-full flex-col justify-between overflow-auto">
      <div className="flex justify-center">
        <CreateAndEditAccount />
      </div>
      <AppFooterForm
        cancelText="Cancel"
        deleteText="Delete"
        classNames="flex flex-row justify-between bg-white px-5 py-3 rounded-md"
      />
    </section>
  );
}

export default React.memo(CreateAccount);
