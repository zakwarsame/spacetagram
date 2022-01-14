import * as React from "react";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
import { Card } from "@mui/material";

export default function LoadItem({ length }) {
  return (
    <>
      {[...Array(length)].map((item, i) => (
        <Card
          key={i}
          sx={{ padding: "20px", margin: "20px", borderRadius: "10px" }}
        >
          <Stack spacing={1}>
            <Skeleton variant="text" />
            <Skeleton variant="text" width="30%" />
            <Skeleton variant="rectangular" height={300} />
            <Skeleton variant="text" />
            <Skeleton variant="text" />
          </Stack>
        </Card>
      ))}
    </>
  );
}
