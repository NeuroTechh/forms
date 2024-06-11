import * as React from "react";
import { Tailwind, Button } from "@react-email/components";

export const EmailTemplate = ({ firstName }) => (
  <Tailwind>
    <div className="p-4 bg-black">
      <h1 className="text-2xl font-bold mb-4 text-red-500">
        Welcome, {firstName}!
      </h1>
      <div>
        Thank you for applying to neurotechh. You will soon receive an interview
        link from our side.
      </div>
    </div>
  </Tailwind>
);
