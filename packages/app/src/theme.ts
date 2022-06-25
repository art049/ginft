import { createBreakpoints } from ".pnpm/@chakra-ui+theme-tools@1.3.1_@chakra-ui+system@1.9.0/node_modules/@chakra-ui/theme-tools";
import { ComponentStyleConfig, extendTheme } from "@chakra-ui/react";
import { StepsStyleConfig } from "chakra-ui-steps";

const breakpoints = createBreakpoints({
  xs: "360px", // Smartphones
  sm: "480px", // Small tablets
  md: "768px", // Medium tablets
  lg: "1024px", // Large tablets
  xl: "1350px", // Desktops
  "2xl": "1536px", // Large Desktops
});

const Stat: ComponentStyleConfig = {
  variants: {
    "stat-card": {
      label: {
        color: "gray.500",
        fontSize: "sm",
      },
    },
  },
};

export const theme = extendTheme({
  breakpoints,
  colors: {
    background: {
      layout: "#f7fafc",
      card: "#FFFFFF",
    },
    demos: {
      primary: "#8c30f5",
      mint: "#59baa7",
      gradient: {
        default: "linear-gradient(180deg, #8C30F5 0%, #B831CE 100%)",
        hover: "linear-gradient(180deg, #7426CE 0%, #9127A3 100%)",
      },
    },
    text: {
      light: "#FFFFFF",
      dark: "#1A202C",
    },
  },
  shadows: {
    outline: "none",
    card: "0px 3.5px 5.5px rgba(0, 0, 0, 0.02)",
  },
  components: {
    Stat,
    Steps: {
      ...StepsStyleConfig,
      variants: {
        wizzard: {
          stepIconContainer: {
            width: "24px",
            height: "24px",
            "& > *": {
              fontSize: "12px",
            },
          },
        },
      },
    },
    Skeleton: {
      baseStyle: {
        borderRadius: "8px",
      },
    },
    Badge: {
      variants: {
        subtleGreen: {
          bg: "green.50",
          borderRadius: 4,
          color: "green.900",
          textTransform: "none",
          fontWeight: "semibold",
        },
        subtleRed: {
          bg: "red.50",
          borderRadius: 4,
          color: "red.900",
          textTransform: "none",
          fontWeight: "semibold",
        },
        subtleGray: {
          bg: "gray.50",
          borderRadius: 4,
          color: "gray.700",
          textTransform: "none",
          fontWeight: "semibold",
        },
      },
    },
    Link: {
      variants: {
        unstyled: {
          textDecoration: "none !important",
        },
      },
    },
    Text: {
      baseStyle: {
        display: "inline",
      },
      defaultProps: {
        as: "span",
      },
    },
    Progress: {
      variants: {
        demos: {
          filledTrack: {
            backgroundColor: "demos.primary",
          },
        },
      },
    },
  },
});
