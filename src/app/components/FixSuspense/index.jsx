"use clinet";
import React, { Suspense } from "react";

function FixSuspence({ children }) {
  return <Suspense>{children}</Suspense>;
  return <div>{children}</div>;
}

export default FixSuspence;
