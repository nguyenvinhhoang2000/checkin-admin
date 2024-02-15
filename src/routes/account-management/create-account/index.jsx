import React from "react";
import { useNavigate } from "react-router-dom";

import AppFooterForm from "@/components/apps/app-footer-form";
import CreateAndEditAccount from "@/components/forms/create-and-edit-account";

import { LOCATIONS } from "@/constants/locations";

function CreateAccount() {
  const navigate = useNavigate();
  return (
    <section className="flex h-full flex-col overflow-auto">
      <div className="flex justify-center">
        <CreateAndEditAccount />
      </div>
      <AppFooterForm
        cancelText="Cancel"
        deleteText="Delete"
        classNames="mt-[6.25rem] flex flex-row justify-between bg-white px-5 py-3 rounded-md"
        onCancel={() => navigate(LOCATIONS.ACCOUNT_MANAGEMENT.path)}
      />
    </section>
  );
}

export default React.memo(CreateAccount);
