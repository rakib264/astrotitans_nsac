"use client";
import MainLayout from "@/components/AppSpace/Root/Layout/MainLayout";
import App from "@/components/components/App/App";

export default function Home() {
  return (
    <MainLayout>
      <div className="w-full h-full">
        <App />
      </div>
    </MainLayout>
  );
}
