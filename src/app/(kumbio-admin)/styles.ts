import { styled } from "@mui/material";

const drawerWidth = 210;

export const DrawerClasses = {
  root: `DrawerContainer-root`,
  collapseButton: `DrawerContainer-collapseButton`,
  toolbarIcon: `DrawerContainer-toolbarIcon`,
  drawerFooter: `DrawerContainer-drawerFooter`,
  copyrightText: `DrawerContainer-copyrightText`,
};

export const DrawerContainer = styled("div")(({ theme }) => ({
  [`&.${DrawerClasses.root}`]: {
    
  },
  [`& .${DrawerClasses.collapseButton}`]: {
    color: "inherit",
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  [`& .${DrawerClasses.toolbarIcon}`]: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar,
  },
  [`& .${DrawerClasses.drawerFooter}`]: {
    flex: 1,
    alignItems: "flex-end",
    justifyContent: "center",
    padding: theme.spacing(2),
  },
  [`& .${DrawerClasses.copyrightText}`]: {
    fontSize: 11,
    transition: "all .3s",
    [theme.breakpoints.up("sm")]: {
      opacity: (extend: boolean) => (extend ? 1 : 0),
    },
    display: "flex",
    alignItems: "center",
    textDecoration: "none",
    color: "inherit",
  },
}));

export const LayoutClasses = {
  root: `LayoutClasses-root`,
  appBarShift: `LayoutClasses-appBarShift`,
  appBar: `LayoutClasses-appBar`,
  menuButton: `LayoutClasses-menuButton`,
  extendButton: `LayoutClasses-extendButton`,
  extendButtonHidden: `LayoutClasses-extendButtonHidden`,
  toolbar: `LayoutClasses-toolbar`,
  appBarTitle: `LayoutClasses-appBarTitle`,
  contentShift: `LayoutClasses-contentShift`,
  content: `LayoutClasses-content`,
	drawerPaper: `LayoutClasses-drawerPaper`,
  drawerPaperClose: `LayoutClasses-drawerPaperClose`,
};

export const LayoutContainer = styled("div")(({ theme }) => ({
  [`&.${LayoutClasses.root}`]: {
		display: "flex",
    height: "100vh",
  },
  [`& .${LayoutClasses.appBarShift}`]: {
    [theme.breakpoints.up("sm")]: {
      zIndex: theme.zIndex.drawer + 2,
      transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
  },
  [`& .${LayoutClasses.appBar}`]: {
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: `${drawerWidth}px`,
      zIndex: theme.zIndex.drawer + 2,
      transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
  },
  [`& .${LayoutClasses.menuButton}`]: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  [`& .${LayoutClasses.extendButton}`]: {
    marginRight: 36,
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  [`& .${LayoutClasses.extendButtonHidden}`]: {
    display: "none",
  },
  [`& .${LayoutClasses.toolbar}`]: {
    paddingRight: 24,
    ...theme.mixins.toolbar,
  },

  [`& .${LayoutClasses.appBarTitle}`]: {
    flex: 1,
    fontWeight: 200,
  },
  [`& .${LayoutClasses.contentShift}`]: {
    flexGrow: 1,
    overflow: "auto",
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(7),
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
  },
  [`& .${LayoutClasses.content}`]: {
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: `${drawerWidth}px`,
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
  },
	[`.${LayoutClasses.drawerPaper}`]: {
    width: `${drawerWidth}px`,
    display: "flex",
    position: "fixed",
    height: "100vh",
    whiteSpace: "nowrap",
    transition: theme.transitions.create(["width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),

    color: theme.palette.grey[100],
    backgroundColor: theme.palette.secondary.main,
  },
  [`.${LayoutClasses.drawerPaperClose}`]: {
    [theme.breakpoints.up("sm")]: {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
    },
  },
}));
