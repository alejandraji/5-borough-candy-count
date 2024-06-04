import React, { useEffect, useState } from "react";
import { Paper, Container, Stack, Table, TableBody, TableContainer, TableCell, TableHead, TableRow } from "@mui/material";
import { Healthcheck } from "./components/Healthcheck";

export function Home() {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/stats');
        const data = await response.json();
        setRows(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

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
            <TableContainer component={Paper}>
              <Table aria-label="table">
                <TableHead>
                  <TableRow class="leaderBoard">
                    <TableCell>NYC Borough</TableCell>
                    <TableCell align="right">Total Borough Candy</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                {rows.map((row) => (
                  <TableRow key={row}>
                    <TableCell component="th" scope="row">{row.name}</TableCell>
                    <TableCell align="center">{row.total_candy_collected}</TableCell>
                  </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Stack>
          <Healthcheck />
        </Stack>
      </Paper>
    </Container>
  );
}
