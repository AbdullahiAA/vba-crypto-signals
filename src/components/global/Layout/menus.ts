import { IMenu } from "types/global";
import {
  DashboardIcon,
  AnalyticsIcon,
  PositionsIcon,
  NotificationsIcon,
  BotsIcon,
  SignalIcon,
  DarkModeIcon,
} from "utils/customIcons";

export const menuList: Array<IMenu | "divider"> = [
  {
    name: "Dashboard",
    icon: DashboardIcon,
    href: "Routes.dashboard",
  },

  {
    name: "Analytics",
    icon: AnalyticsIcon,
    href: "Routes.dashboard",
  },

  {
    name: "Positions",
    icon: PositionsIcon,
    href: "Routes.dashboard",
  },

  {
    name: "Notifications",
    icon: NotificationsIcon,
    href: "Routes.dashboard",
  },

  "divider",

  {
    name: "Bots",
    icon: BotsIcon,
    href: "Routes.dashboard",
  },

  {
    name: "Signal Groups",
    icon: SignalIcon,
    href: "Routes.dashboard",
    isAutoActive: true,
  },

  "divider",

  {
    name: "Dark Mode",
    icon: DarkModeIcon,
    href: "Routes.dashboard",
  },
];
