"use client";

import StoreProvider, { useAppSelector } from "@/store";
import { Toaster } from "@/components/ui/toaster";
import { useEffect } from "react";

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  const { isDarkMode } = useAppSelector((state) => state.global);

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDarkMode) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [isDarkMode]);
  return (
    <div className="text-primary-600 flex min-h-screen w-full">
      <main className="dark:bg-dark-primary flex w-full flex-col">
        {children}
      </main>
    </div>
  );
};

const AppProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <StoreProvider>
      <Toaster />
      <AppLayout>{children}</AppLayout>
    </StoreProvider>
  );
};

export default AppProvider;
