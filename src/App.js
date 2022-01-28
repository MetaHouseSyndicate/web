import * as React from "react";
import background from "./images/bg-blurred.jpg";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import { Box, Divider, Typography } from "@mui/material";
import moment from "moment";

const App = () => {
  return (
    <Box
      style={{ backgroundImage: `url(${background})`, backgroundSize: "cover" }}
    >
      <Box
        minHeight="100vh"
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Navbar sx={{ flexGrow: 1 }} />

        <Box sx={{ flexGrow: 1, maxWidth: "800px" }}>
          <Outlet />
        </Box>

        <Box width={1} sx={{ flexGrow: 0, m: 2 }}>
          <Divider variant="fullWidth">
            <Typography fontFamily="Lato" fontWeight="400">
              {"Copyright © " +
                moment().year() +
                " Meta House Syndicate. All rights reserved."}
            </Typography>
          </Divider>
        </Box>
      </Box>
    </Box>
  );
};

export default App;
