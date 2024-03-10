"use client";

import CommonButton from "@/components/Shared/Button/button";
import Heading from "@/components/Shared/Typography/headings";
import Paragraph from "@/components/Shared/Typography/paragraph";
import { ButtonType } from "@/shared/enums";
import { Layout, Menu, Spin } from "antd";
import { Provider } from "react-redux";
import "../styles/index.scss";

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { LoadingOutlined } from "@ant-design/icons";
import { store } from "./redux/store";

interface MenuItem {
  key: string;
  icon: string;
  label: string;
  onClick?: () => void;
  path: string;
}

const { Content, Sider } = Layout;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();

  const menuItems = [
    {
      key: "1",
      icon: "/assets/icons/home.svg",
      label: "Home",
      onClick: () => router.push("/home"),
      path: "/home",
    },
    {
      key: "2",
      icon: "/assets/icons/book-bookmark-bold.svg",
      label: "API Docs",
      onClick: () => router.push("/api-docs"),
      path: "/api-docs",
    },
    {
      key: "3",
      icon: "/assets/icons/app.svg",
      label: "Applications",
      onClick: () => router.push("/applications"),
      path: "/applications",
    },
    {
      key: "4",
      icon: "/assets/icons/school.svg",
      label: "Blogs",
      onClick: () => router.push("/blogs"),
      path: "/blogs",
    },
    {
      key: "5",
      icon: "/assets/icons/trophy-bold.svg",
      label: "Hackathon",
      onClick: () => router.push("/hackathon"),
      path: "/hackathon",
    },
  ];
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timeout);
  }, [pathname]);
  const isMenuItemActive = (path: string): boolean => {
    return pathname === path;
  };

  return (
    <html lang="en">
      <body>
        {loading ? (
          <Spin
            style={{
              fontSize: 34,
              height: "100vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "#7662ea",
            }}
            indicator={
              <LoadingOutlined
                style={{
                  fontSize: 34,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              />
            }
          />
        ) : (
          <>
            {pathname === "/" ||
            pathname === "/create-applications" ||
            pathname === "/application-delete" ? (
              <div>{children}</div>
            ) : (
              <Layout>
                <Sider breakpoint="lg" collapsedWidth="0" width={260}>
                  <div className="sider-top-container">
                    <div
                      onClick={() => router.push("/")}
                      className="demo-logo-vertical cp"
                    >
                      <img src="/assets/images/sunstone_logo.png" alt="logo" />
                      <img src="/assets/images/sunstone_text.png" alt="text" />
                    </div>
                    <Menu
                      // defaultSelectedKeys={["1"]}
                      items={(menuItems || []).map((item: MenuItem) => ({
                        key: item.key,
                        icon: <img src={item.icon} alt="menu-icon" />,
                        label: item.label,
                        onClick: item.onClick,
                        className: isMenuItemActive(item.path)
                          ? "active"
                          : "inactive",
                      }))}
                    />
                  </div>
                  <div className="pro-member-card">
                    <div className="pro-member-card-icon">
                      <img
                        src="/assets/icons/pro-member-card-icon.svg"
                        alt="pro-member"
                      />
                    </div>
                    <div className="pro-member-card-content">
                      <Heading level={5}>
                        Upgrade to Sunstone Pro member
                      </Heading>
                      <Paragraph type="secondary">
                        Get full access to all course for 1 month.
                      </Paragraph>
                    </div>
                    <div className="pro-member-card-button">
                      <CommonButton
                        onClick={() => {
                          router.push("/pricing");
                        }}
                        type={ButtonType.primary}
                      >
                        Upgrade to Pro
                      </CommonButton>
                    </div>
                  </div>
                </Sider>
                <Provider store={store}>
                  <Layout>
                    <Content style={{ margin: "24px 16px 24px 0" }}>
                      <div>{children}</div>
                    </Content>
                  </Layout>
                </Provider>
              </Layout>
            )}
          </>
        )}
      </body>
    </html>
  );
}
