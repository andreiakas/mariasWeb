import React, { useState } from "react";
import { AppBar, Tab, Tabs, Typography } from "@material-ui/core"
import { TabContext, TabPanel } from "@material-ui/lab";
import ListaPostagem from "../listapostagem/ListaPostagem";
import { Box } from "@mui/material";
import "./TabPostagem.css";

function TabPostagem() {
  const [value, setValue] = useState("1");
  function handleChange(event: React.ChangeEvent<{}>, newValue: string) {
    setValue(newValue);
  }
  return (
    <>
      <TabContext value={value}>
        <AppBar position="static" className="tab-barra">
          <Tabs centered indicatorColor="secondary" onChange={handleChange}>
            <Tab label="" value="1" className="titulo" />
            {/* <Tab label="Sobre-nós" value="2" className="titulo" /> */}
          </Tabs>
        </AppBar>
        <TabPanel value="1" >
          <Box display="flex" flexWrap="wrap" justifyContent="center">
            {/* <ListaPostagem /> */}
          </Box>
        </TabPanel>
        <TabPanel value="2">
          <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" className="titulo">Sobre-nós</Typography>
          <Typography variant="body1" gutterBottom color="textPrimary" align="justify"></Typography>
        </TabPanel>
      </TabContext>
    </>
  );
}

export default TabPostagem;