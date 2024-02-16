import { fullConfig } from "@/theme";

const theme = {
  token: {
    colorPrimary: fullConfig.theme.colors.secondary[3],
  },
  components: {
    Tabs: {
      margin: "0 0",
      // colorBorderSecondary: "rgba(0,0,0,0)",
    },
  },
};

export { theme };
