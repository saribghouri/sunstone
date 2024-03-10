"use client";

import React, { useEffect, useState } from "react";

import CommonHeader from "../header";
import { useRouter, useSearchParams } from "next/navigation";
import { Tabs } from "antd";
import Credentials from "./credentials";
import Analytics from "./analytics";

const Pages = () => {
  const router = useRouter();
  const params = useSearchParams();
  const [activeTab, setActiveTab] = useState<any>("credentials");

  const handleTabChange = (key: any) => {
    setActiveTab(key);
    router.push(`/application?tab=${key}`);
  };

  useEffect(() => {
    if (params.get("tab")) {
      setActiveTab(params.get("tab"));
    }
  }, [params]);

  return (
    <div>
      <CommonHeader />
      <Tabs
        activeKey={activeTab}
        onChange={handleTabChange}
        items={[
          {
            label: "Credentials",
            key: "credentials",
          },
          {
            label: "Analytics",
            key: "analytics",
          },
        ]}
      />

      {activeTab === "credentials" && <Credentials />}
      {activeTab === "analytics" && <Analytics />}
    </div>
  );
};

export default Pages;
