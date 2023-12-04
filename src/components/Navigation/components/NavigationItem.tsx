import React from "react";
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import {
  Box,
  Collapse,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import clsx from "clsx";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { ListItemContainer, classes } from "./styles";
import { INavigationItem } from "@/interfaces";

interface INavegationItemProps {
  item: INavigationItem,
  collapsed: boolean
}

const NavigationItem = ({ item, collapsed }: INavegationItemProps) => {
  const pathname = usePathname();
  const isSelected = pathname.search(new RegExp(item.url, "g")) !== -1;
  debugger

  // If navigation is nested
  const [open, setOpen] = React.useState(false);
  const nested = typeof item.navigationData == "object" ? true : false;

  const handleClick = () => {
    setOpen(!open);
  };

  // Persisting the nested navigation open state on page refresh
  React.useEffect(() => {
    if (pathname.search(new RegExp(item.url, "g")) !== -1) {
      setOpen(true);
    }
  }, [pathname, item.url]);

  return (
    <ListItemContainer
      className={clsx(
        classes.root,
        nested && open && classes.expanded,
        isSelected && !nested && classes.selected
      )}>
      <ListItem
        className={clsx(classes.listItem)}
        onClick={handleClick}
        disableGutters>
        <Box
          component={!nested ? Link : "div"}
          href={`${item.url}`}
          className={clsx(
            classes.listLink,
            collapsed && classes.listLinkCollapsed
          )}>
          <ListItemIcon className={classes.listIcon}>
            {(item.icon && <item.icon />) || ""}
          </ListItemIcon>
          <ListItemText
            classes={{ primary: collapsed ? classes.listItemText : "" }}>
            {item.name}
          </ListItemText>
          {nested &&
            (open ? (
              <ExpandLess />
            ) : (
              <ExpandMore />
            ))}
        </Box>
      </ListItem>

      {nested && (
        <Collapse in={open} timeout='auto' unmountOnExit>
          <List disablePadding className={clsx(classes.collapselist)}>
            {item.navigationData && item.navigationData.map((nestedItem, i) => {
              return (
                <NavigationItem
                  key={i}
                  item={nestedItem}
                  collapsed={collapsed}
                />
              );
            })}
          </List>
        </Collapse>
      )}
    </ListItemContainer>
  );
};

export default NavigationItem;
