"use client";
import {
  Box,
  Drawer,
  Link,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  Toolbar,
} from "@mui/material";
import PersonIcon from '@mui/icons-material/Person';
import DescriptionIcon from '@mui/icons-material/Description';
import React from "react";
import { usePathname } from "next/navigation";

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
  const pathname = usePathname();
  const isSelected = (url: string) => {
    if (pathname === url || pathname.startsWith(url + "/")) {
      return true;
    }
    return false;
  };
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
              <ListItemButton selected={isSelected(url)}>
                <ListItemIcon>{icon}</ListItemIcon>
                <Link href={url} underline="none" color="inherit">
                  {name}
                </Link>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
};

export default SideBar;
