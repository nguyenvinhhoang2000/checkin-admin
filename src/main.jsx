import React from "react";
import ReactDOM from "react-dom/client";
import { ConfigProvider } from "antd";

import App from "./App.jsx";
import { fullConfig } from "./theme.js";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ConfigProvider
      theme={{
        token: {
          fontFamily: fullConfig.theme.fontFamily.roboto[0],
          colorPrimary: fullConfig.theme.colors.primary[1],
        },
        components: {
          Button: {
            primaryColor: fullConfig.theme.colors.primary[4],
            paddingInline: fullConfig.theme.padding.primary.x,
            borderRadius: fullConfig.theme.borderRadius.button,
            textHoverBg: fullConfig.theme.colors.primary[3],
            colorLinkActive: fullConfig.theme.colors.primary[3],
            colorLink: fullConfig.theme.colors.primary[1],
            colorLinkHover: fullConfig.theme.colors.primary[2],
          },
          Pagination: {
            colorPrimary: fullConfig.theme.colors.primary[4],
            borderRadius: fullConfig.theme.borderRadius.circleNumber,
            itemActiveBg: fullConfig.theme.colors.secondary[1],
            colorPrimaryHover: fullConfig.theme.colors.primary[4],
          },
          Table: {
            cellPaddingInline: fullConfig.theme.antdTable.cellPaddingInline,
            cellPaddingBlock: fullConfig.theme.antdTable.cellPaddingBlock,
            headerSplitColor: fullConfig.theme.antdTable.headerSplitColor,
          },
          Dropdown: {
            controlItemBgHover: fullConfig.theme.colors.primary[3],
            paddingXXS: fullConfig.theme.padding.dropdownOverlay,
            borderRadiusSM: fullConfig.theme.borderRadius.dropdownOverlay,
          },
          Menu: {
            subMenuItemBg: fullConfig.theme.colors.sideBar,
            itemSelectedBg: null,
            itemHoverColor: fullConfig.theme.colors.primary[2],
            itemHoverBg: fullConfig.theme.colors.primary[5],
            itemActiveBg: fullConfig.theme.colors.primary[2],
            itemColor: fullConfig.theme.colors.secondary[4],
            itemSelectedColor: fullConfig.theme.colors.primary[1],
          },
          Select: {
            borderRadius: fullConfig.theme.borderRadius.select,
            colorIcon: fullConfig.theme.colors.character.title,
          },
        },
      }}
    >
      <App />
    </ConfigProvider>
  </React.StrictMode>,
);
