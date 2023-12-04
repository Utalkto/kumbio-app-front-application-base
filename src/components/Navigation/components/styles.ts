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
  collapselist: `${PREFIX}-collapselist`,
};
export const ListItemContainer = styled("div")(({ theme }) => ({
  [`&.${classes.root}`]: {
    width: "100%",
    margin: "4px auto",
    transition: "all .5s",
    overflow: "hidden",
    position: "relative",
  },
  [`& .${classes.listItem}`]: {
    transition: "all .5s",
    display: "flex",
    flexDirection: "column",
  },
  [`.${classes.listLink}`]: {
    padding: "0 15px",
    textDecoration: "none",
    color: "inherit",
    transition: "all .2s",
    display: "flex",
    alignItems: "center",
    width: "100%",
  },

  [`.${classes.listLink}:hover`]: {
    color: theme.palette.primary.main,
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
  [`&.${classes.expanded}`]: {
    backgroundColor: lighten(theme.palette.secondary.main, 0.9),
  },
  [`&.${classes.selected}`]: {
    backgroundColor: lighten(theme.palette.secondary.main, 0.8),
    color: theme.palette.primary.main,
  },
  [`&.${classes.selected}:after`]: {
    [theme.breakpoints.up("sm")]: {
      display: "block",
      content: '""',
      width: "4px",
      height: "100%",
      backgroundColor: theme.palette.primary.main,
      position: "absolute",
      right: "0px",
      top: "0px",
    },
  },
  [`&.${classes.selected} .${classes.listLink}`]: {
    color: theme.palette.primary.main,
  },
  [`.${classes.collapselist}`]: {
    paddingLeft: "20px",
  },
}));
