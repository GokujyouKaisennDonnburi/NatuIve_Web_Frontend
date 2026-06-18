"use client";

import { useEffect } from "react";

type MSWProviderProps = {
  children: React.ReactNode;
};

export function MSWProvider({ children }: Readonly<MSWProviderProps>) {
  useEffect(() => {
    if (process.env.NODE_ENV !== "development") {
      return;
    }

    void import("./browser").then(({ worker }) => {
      void worker.start({
        onUnhandledRequest: "bypass",
      });
    });
  }, []);

  return children;
}
