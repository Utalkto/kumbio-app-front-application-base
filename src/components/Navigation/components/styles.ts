import { lighten } from "@mui/material/styles";
import { styled } from "@mui/material/styles";

const PREFIX = "NavigationItem";
export const classes = {
  root: `${PREFIX}-root`,
  listItem: `${PREFIX}-listItem`,
  listLink: `${PREFIX}-listLink`,
  listLinkCollapsed: `${PREFIX}-listLinkCollapsed`,
  listIcon: `${PREFIX}-listIcon`,
  listItemText: `${PREFIX}-listItemText`,
  expanded: `${PREFIX}-expanded`,
  selected: `${PREFIX}-selected`,
};
export const ListItemContainer = styled("div")(({ theme }) => ({
  [`&.${classes.root}`]: {
    width: "95%",
    margin: "4px auto",
    borderRadius: "8px",
    transition: "all .5s",
    overflow: "hidden",
  },
  [`& .${classes.listItem}`]: {
    transition: "all .5s",
    display: "flex",
    flexDirection: "column",
  },
  [`& .${classes.listLink}`]: {
    padding: "0 15px",
    textDecoration: "none",
    color: "inherit",
    transition: "all .5s",
    display: "flex",
    alignItems: "center",
    width: "100%",
  },
  [`& .${classes.listLinkCollapsed}`]: {
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(7),
      flexDirection: "column",
      justifyContent: "center",
    },
  },
  [`& .${classes.listIcon}`]: {
    color: "inherit",
    justifyContent: "center",
  },
  [`& .${classes.listItemText}`]: {
    [theme.breakpoints.up("sm")]: {
      fontSize: 9,
    },
  },
  [`& .${classes.expanded}`]: {
    backgroundColor: lighten(theme.palette.secondary.main, 0.1),
  },
  [`& .${classes.selected}`]: {
    backgroundColor: lighten(theme.palette.secondary.main, 0.3),
  },
}));
