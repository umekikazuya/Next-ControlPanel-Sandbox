"use client";
import {
  Box,
  Drawer,
  Link as MuiLink,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  Toolbar,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import DescriptionIcon from "@mui/icons-material/Description";
import React from "react";
import Link from "next/link";

type MenuItem = {
  name: string;
  url: string;
  icon: React.ReactNode;
};
const menuList: MenuItem[] = [
  { name: "Profile", url: "/profile", icon: <PersonIcon /> },
  { name: "記事一覧", url: "/article", icon: <DescriptionIcon /> },
];

const drawerWidth = 240;

const SideBar = () => {

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
    >
      <Toolbar />
      <Box sx={{ overflow: "auto" }}>
        <List>
          {menuList.map(({ name, url, icon }: MenuItem) => (
            <ListItem key={name} disablePadding>
              <MuiLink
                href={url}
                component={Link}
                underline="none"
                color="inherit"
                sx={{ width: "100%" }}
              >
                <ListItemButton>
                  <ListItemIcon>{icon}</ListItemIcon>
                  {name}
                </ListItemButton>
              </MuiLink>
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
};

export default SideBar;
