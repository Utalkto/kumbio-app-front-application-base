import List from "@mui/material/List";
import { styled, listClasses } from "@mui/material";

export const NavigationContainer = styled(List)(({ theme }) => ({
  [`.${listClasses.root}`]: {
    display: "flex",
    alignItems: "center",
    backgroundColor: theme.palette.primary.main,
  },
}));
