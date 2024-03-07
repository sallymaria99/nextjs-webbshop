"use client";
import Link from "next/link";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import FolderIcon from "@mui/icons-material/Folder";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { BottomNavigation } from "@mui/material";

function Footer() {
  return (
    <BottomNavigation sx={{ width: "100%", position: "fixed", bottom: 0 }}>
      <Link href="/admin" passHref>
        <BottomNavigationAction label="Admin" icon={<RestoreIcon />} />
      </Link>
      <Link href="/checkout" passHref>
        <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
      </Link>
      <Link href="/product" passHref>
        <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
      </Link>
      <Link href="/" passHref>
        <BottomNavigationAction label="Folder" icon={<FolderIcon />} />
      </Link>
    </BottomNavigation>
  );
}

export default Footer;

/**import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FolderIcon from '@mui/icons-material/Folder';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';

export default function LabelBottomNavigation() {
  const [value, setValue] = React.useState('recents');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation sx={{ width: 500 }} value={value} onChange={handleChange}>
      <BottomNavigationAction
        label="Recents"
        value="recents"
        icon={<RestoreIcon />}
      />
      <BottomNavigationAction
        label="Favorites"
        value="favorites"
        icon={<FavoriteIcon />}
      />
      <BottomNavigationAction
        label="Nearby"
        value="nearby"
        icon={<LocationOnIcon />}
      />
      <BottomNavigationAction label="Folder" value="folder" icon={<FolderIcon />} />
    </BottomNavigation>
  );
} */
