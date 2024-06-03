import React from "react";
import { Paper, Container, Typography, Stack } from "@mui/material";
import WavingHandIcon from "@mui/icons-material/WavingHand";
import { Healthcheck } from "./components/Healthcheck";

export function Home() {
  return (
    <Container
      maxWidth="lg"
      sx={{ flexGrow: 1, display: "flex", padding: "30px" }}
    >
      <Paper elevation={1} sx={{ display: "flex", flexGrow: 1 }}>
        <Stack
          alignItems={"center"}
          justifyContent={"space-between"}
          width={"100%"}
          mt={3}
        >
          <Stack direction={"column"} alignItems={"center"}>
            <WavingHandIcon style={{ transform: "scale(2)" }} />
            <Typography variant="h4" mt={3}>
              Welcome to the Candy App!
            </Typography>
            <Typography variant="h6" mt={3} p={2}>
              {`In this exercise you will create a new client-side route and
             component to display candy data that the server returns.`}
            </Typography>
          </Stack>
          <Healthcheck />
        </Stack>
      </Paper>
    </Container>
  );
}
