import React from "react";

import { makeStyles } from "@mui/styles";
import { AppBar, Toolbar, Grid, InputBase, IconButton } from "@mui/material";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import SearchIcon from "@mui/icons-material/Search";
import "./styles/header.css";

function Header() {

    return (
        <AppBar position="static">
            <Toolbar className='header-root' >
                <Grid container alignItems="center" justifyContent="center">
                    <Grid item>
                        <InputBase
                            placeholder="Search topics"
                            
                            startAdornment={<SearchIcon fontSize="small" />}
                        />
                    </Grid>
                    <Grid item sm></Grid>
                    <Grid item>
                        <IconButton>
                            <PowerSettingsNewIcon fontSize="small" />
                        </IconButton>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    );
}

export default Header;