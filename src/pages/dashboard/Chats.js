// Chats.js
import { Box, Typography } from '@mui/material';
import { Stack } from 'phosphor-react';
import React from 'react';

const Chats = () => {
  return (
    <Box
      sx={{
        position: "relative",
        height: "100vh",
        width: 320,
        backgroundColor: "#F8FAFF",
        boxShadow: "0px 0px 2px rgba(0,0,0,0.25)",
      }}
    >
      <Stack>
        <Typography>
          Chats
        </Typography>
      </Stack>
    </Box>
  );
}

export default Chats;
