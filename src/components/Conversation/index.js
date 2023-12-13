import React from "react";
import {
  Box,
  Stack,
} from "@mui/material";
import {  useTheme } from "@mui/material/styles";
import Header from "./Header";
import Footer from "./Footer";
import Message from "./Message";



const Conversation = () => {
  const theme = useTheme();
  return (
    <Stack height={"100%"} maxHeight={"100vh"} width={"auto"}>
      {/*Chat Header*/}
     <Header/>
      {/*Chat*/}
      <Box width={"100%"} sx={{ flexGrow: 1 }}>
        <Message/>
      </Box>
      {/*Chat Footer*/}
      <Footer/>
     
    </Stack>
  );
};

export default Conversation;
