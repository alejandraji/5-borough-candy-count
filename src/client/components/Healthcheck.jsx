import { useEffect, useState } from "react";

import { Alert, Typography } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ErrorIcon from "@mui/icons-material/Error";

export function Healthcheck() {
  const [isServerRunning, setIsServerRunning] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/healthcheck");
        if (!res.ok) {
          throw new Error("Could not fetch");
        }
        setIsServerRunning(true);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, []);

  return (
    <Alert
      color={isServerRunning ? "success" : "error"}
      icon={isServerRunning ? <CheckCircleIcon /> : <ErrorIcon />}
    >
      <Typography>
        {isServerRunning
          ? "The server is up and running!"
          : "The server is not running."}
      </Typography>
    </Alert>
  );
}
