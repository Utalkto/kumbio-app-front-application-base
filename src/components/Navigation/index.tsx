import React from "react";
import NavigationItem from "./components/NavigationItem";
import List from "@mui/material/List";


interface INavigationProps {
  data: any[];
  collapsed: boolean;
}

export const Navigation = ({ data, collapsed }: INavigationProps) => {

  if (!Array.isArray(data)) return null;

  let renderData = data?.map((item, index) => {
    return <NavigationItem key={index} item={item} collapsed={collapsed} />;
  });

  return (
    <List component="nav">
      {renderData}
    </List>
  );
};

