import React from 'react';
import { useState } from 'react';
import { ProSidebar, Menu, MenuItem } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import { Box, IconButton, Typography, useTheme, Badge} from '@mui/material';
import { Link } from 'react-router-dom';
import { tokens } from '../theme';
import './SideBar.css';
//(pending) import data from database for icon badgecontent number

import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import DashboardIcon from '@mui/icons-material/Dashboard';
import EmailIcon from '@mui/icons-material/Email';
import SendIcon from '@mui/icons-material/Send';
import StarIcon from '@mui/icons-material/Star';
import SnoozeIcon from '@mui/icons-material/Snooze';
import DeleteIcon from '@mui/icons-material/Delete';
import LabelIcon from '@mui/icons-material/Label';

//OOP Template for Menu
const Item = ({ title, to, icon, selected, setSelected }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
        <MenuItem
            active={selected === title}
            style={{ color: colors.grey }}
            onClick={() => setSelected(title)}
            icon = {icon}
        >
            <Typography>{title}</Typography>
            <Link to={to} />
        </MenuItem>
    );
};

const SideBar = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [selected, setSelected] = useState("Dashboard");

    return (
        <ProSidebar collapsed={isCollapsed} style={{
            height: '100vh',
        }}>
            <Menu iconShape="square">
                {/* LOGO AND MENU ICON */}
                <MenuItem
                    onClick={() => setIsCollapsed(!isCollapsed)}
                    icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
                    style={{
                        margin: "0px 0 20px 0",
                        color: colors.grey[100],
                    }}
                >
                    {!isCollapsed && (
                        <Box
                            display="flex"
                            justifyContent="space-between"
                            alignItems="center"
                            ml="15px"
                        >
                            <Typography variant="h3" color={colors.grey[100]}>
                                EMAILS.COM
                            </Typography>
                            <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                                <MenuOutlinedIcon />
                            </IconButton>
                        </Box>
                    )}
                </MenuItem>
                
                {/*Dashboard Icon*/}
                <Box paddingLeft={isCollapsed ? undefined : "10%"} paddingTop={"20px"}>
                    <Item
                        title="Dashboard"
                        to="/"
                        icon={<DashboardIcon />}
                        selected={selected}
                        setSelected={setSelected}
                    />
                </Box>
                {/*} Inbox Icon */}
                <Box paddingLeft={isCollapsed ? undefined : "10%"} paddingTop={"20px"}>
                    <Item
                        title="Inbox"
                        to="/inbox"
                        icon={<Badge badgeContent={10} color="primary"><EmailIcon /></Badge>}
                        selected={selected}
                        setSelected={setSelected}
                    />
                </Box>
                {/*} Send Icon */}
                <Box paddingLeft={isCollapsed ? undefined : "10%"} paddingTop={"20px"}>
                    <Item
                        title="Send"
                        to=""
                        icon={<SendIcon />}
                        selected={selected}
                        setSelected={setSelected}
                    />
                </Box>
                {/*} Favourite Icon */}
                <Box paddingLeft={isCollapsed ? undefined : "10%"} paddingTop={"20px"}>
                    <Item
                        title="Favourites"
                        to=""
                        icon={<StarIcon />}
                        selected={selected}
                        setSelected={setSelected}
                    />
                </Box>
                {/*} Snooze Icon */}
                <Box paddingLeft={isCollapsed ? undefined : "10%"} paddingTop={"20px"}>
                    <Item
                        title="Snooze"
                        to=""
                        icon={<SnoozeIcon />}
                        selected={selected}
                        setSelected={setSelected}
                    />
                </Box>
                {/*} Trash Icon */}
                <Box paddingLeft={isCollapsed ? undefined : "10%"} paddingTop={"20px"}>
                    <Item
                        title="Trash"
                        to=""
                        icon={<DeleteIcon />}
                        selected={selected}
                        setSelected={setSelected}
                    />
                </Box>
                <Box paddingLeft={"20%"} paddingTop={"50px"}>
                    <h3>Labels</h3>
                </Box>
                <Box paddingLeft={isCollapsed ? undefined : "10%"} paddingTop={"20px"}>
                    <Item
                        title="Personal"
                        to=""
                        icon={<LabelIcon />}
                        selected={selected}
                        setSelected={setSelected}
                    />
                </Box>
                <Box paddingLeft={isCollapsed ? undefined : "10%"} paddingTop={"20px"}>
                    <Item
                        title="School"
                        to=""
                        icon={<LabelIcon />}
                        selected={selected}
                        setSelected={setSelected}
                    />
                </Box>
                <Box paddingLeft={isCollapsed ? undefined : "10%"} paddingTop={"20px"}>
                    <Item
                        title="Office"
                        to=""
                        icon={<LabelIcon />}
                        selected={selected}
                        setSelected={setSelected}
                    />
                </Box>
                <Box paddingLeft={isCollapsed ? undefined : "10%"} paddingTop={"20px"} paddingBottom={"100%"}>
                    <Item
                        title="Social"
                        to=""
                        icon={<LabelIcon />}
                        selected={selected}
                        setSelected={setSelected}
                    />
                </Box>
            </Menu>
        </ProSidebar>
    );
};
export default SideBar;

//Reference from https://www.youtube.com/watch?v=wYpCWwD1oz0
//Reference from https://github.com/ed-roh/react-admin-dashboard/blob/master/src/scenes/global/Sidebar.jsx