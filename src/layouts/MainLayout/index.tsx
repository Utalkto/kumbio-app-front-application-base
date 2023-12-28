"use client";

import React from "react";
import { Props } from "./interfaces";
import { FC } from "react";
import { BottomMenu, Navbar, Sidebar } from "./components";
import { Stack } from "@mui/material";
import { StyledDesktopContainer, StyledMobileContainer } from "./styles";

export const MainLayout: FC<Props> = ({ children }) => {
  return (
    <>
      <Navbar />

      <StyledDesktopContainer direction={"row"}>
        <Sidebar />
        <Stack width={"100%"} padding="8px">
          {children}
        </Stack>
      </StyledDesktopContainer>

      <StyledMobileContainer>
        <Stack width={"100%"} padding="8px" marginBottom={"56px"}>
          {children}
        </Stack>
        <BottomMenu />
      </StyledMobileContainer>
    </>
  );
};
