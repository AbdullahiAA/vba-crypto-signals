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
import { AllRoutes } from "utils/routes";

export const menuList: Array<IMenu | "divider"> = [
  {
    name: "Dashboard",
    icon: DashboardIcon,
    href: AllRoutes.dashboard,
  },

  {
    name: "Analytics",
    icon: AnalyticsIcon,
    href: AllRoutes.analytics,
  },

  {
    name: "Positions",
    icon: PositionsIcon,
    href: AllRoutes.positions,
  },

  {
    name: "Notifications",
    icon: NotificationsIcon,
    href: AllRoutes.notifications,
  },

  "divider",

  {
    name: "Bots",
    icon: BotsIcon,
    href: AllRoutes.bots,
  },

  {
    name: "Signal Groups",
    icon: SignalIcon,
    href: AllRoutes.signalGroups,
    isAutoActive: true,
  },

  "divider",

  {
    name: "Dark Mode",
    icon: DarkModeIcon,
    href: "#",
  },
];
