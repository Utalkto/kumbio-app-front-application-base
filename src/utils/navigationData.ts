import {
  Badge,
  CalendarMonth,
  CreditCard,
  Dashboard,
  HomeRepairService,
  LocationCity,
  ManageAccounts,
  PeopleAlt,
  Settings,
} from "@mui/icons-material";

export const mainNavigation = [
  {
    name: "Dashboard",
    icon: Dashboard,
    url: `/dashboard`,
  },
  {
    name: "Calendario",
    icon: CalendarMonth,
    url: `/Calendar`,
  },
  {
    name: "Clientes",
    icon: PeopleAlt,
    url: `/clients`,
  },
  {
    name: "Transacciones",
    icon: CreditCard,
    url: `/transactions`,
  },
  {
    name: "Organizacion",
    icon: Settings,
    url: `/organization`,
    navigationData: [
      {
        name: "General",
        icon: ManageAccounts,
        url: `/organization/general`,
      },
      {
        name: "Sedes",
        icon: LocationCity,
        url: `/organization/locations`,
      },
      {
        name: "Servicios",
        icon: HomeRepairService,
        url: `/organization/locations`,
      },
      {
        name: "Profesionales",
        icon: Badge,
        url: `/organization/locations`,
      },
    ],
  },
];
