import React from "react";

import LoginForm from "@/components/forms/login-form";

function Login() {
  return (
    <section className="flex h-screen flex-col items-center justify-center gap-[2.75rem] bg-[url('/backgrounds/login-background.svg')] bg-center">
      <img src="wiicamp-vertical.svg" alt="wiicamp" />
      <LoginForm />
    </section>
  );
}

export default React.memo(Login);
