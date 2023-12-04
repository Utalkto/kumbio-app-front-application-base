"use client";
import React, { useState, useEffect } from "react";
import clsx from "clsx";
import {
  AppBar,
  CssBaseline,
  Divider,
  Drawer,
  Hidden,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import {
  Menu as MenuIcon,
  ChevronLeft as ChevronLeftIcon,
  ChevronRight as ChevronRightIcon,
  GitHub,
  Favorite,
} from "@mui/icons-material";
import { useRouter } from 'next/navigation';
import { Navigation } from "@/components";
import { DrawerClasses, DrawerContainer, LayoutClasses, LayoutContainer } from "./styles";
import { mainNavigation } from "@/utils";

interface MainLayoutProps {
  children?: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({
  children,
}) => {
  const router = useRouter();
  const [extended, setExtended] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleExtendOpen = () => {
    setExtended(true);
  };

  const handleExtendClose = () => {
    setExtended(false);
  };

  useEffect(() => {
    setMobileOpen(false);
  }, [router]);

  const drawer = (
    <DrawerContainer>
      <div className={DrawerClasses.toolbarIcon}>
        <IconButton
          onClick={handleExtendClose}
          className={DrawerClasses.collapseButton}
        >
          <ChevronLeftIcon />
        </IconButton>
      </div>
      <Divider />
      <Navigation data={mainNavigation} collapsed={!extended} />
      <Divider />
      <Toolbar className={DrawerClasses.drawerFooter}>
      </Toolbar>
    </DrawerContainer>
  );

  return (
    <LayoutContainer className={LayoutClasses.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(LayoutClasses.appBarShift, extended && LayoutClasses.appBar)}
      >
        <Toolbar className={LayoutClasses.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="extend drawer"
            onClick={handleExtendOpen}
            className={clsx(
              LayoutClasses.extendButton,
              extended && LayoutClasses.extendButtonHidden
            )}
          >
            <ChevronRightIcon />
          </IconButton>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={LayoutClasses.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap className={LayoutClasses.appBarTitle}>
            Responsive Sidebar <strong>Starter Layout</strong>
          </Typography>
          <IconButton
            color="inherit"
            onClick={() =>
              window.open(
                "https://github.com/trutoro/react-material-sidebar-starter",
                "_blank"
              )
            }
          >
            <GitHub />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Hidden smUp implementation="css">
        <Drawer
          variant="temporary"
          anchor={"left"}
          open={mobileOpen}
          onClose={handleDrawerToggle}
          classes={{
            paper: LayoutClasses.drawerPaper,
          }}
          ModalProps={{
            keepMounted: true,
          }}
        >
          {drawer}
        </Drawer>
      </Hidden>
      <Hidden xsDown implementation="css">
        <Drawer
          variant="permanent"
          classes={{
            paper: clsx(
              LayoutClasses.drawerPaper,
              !extended && LayoutClasses.drawerPaperClose
            ),
          }}
          open={extended}
        >
          {drawer}
        </Drawer>
      </Hidden>
      <main className={clsx(LayoutClasses.contentShift, extended && LayoutClasses.content)}>
        <div className={LayoutClasses.toolbar} />
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
          }}
        >
          {children}
        </div>
      </main>
    </LayoutContainer>
  );
};

export default MainLayout;