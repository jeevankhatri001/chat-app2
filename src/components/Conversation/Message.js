import { Box, Stack } from "@mui/material";
import React from "react";
import { Chat_History } from "../../data";
import { MediaMsg, TextMsg, Timeline } from "./MsgTypes";

const Message = () => {
  return (
    <Box p={3}>
      <Stack spacing={3}>
        {Chat_History.map((el) => {
          switch (el.type) {
            case "divider":
              // Timeline
             return <Timeline el={el}/>;
              
            case "msg":
              switch (el.subtype) {
                case "img":
                  // img msg
                 return <MediaMsg el = {el}/>
                case "doc":
                  // Doc msg
                  break;
                case "link":
                  // Link msg
                  break;
                case "relpy":
                  // reply msg
                  break;
                default:
                  //text msg
                return <TextMsg el = {el}/>
                
              }
              break;

            default:
              return <></>;
          }
        })}
      </Stack>
    </Box>
  );
};

export default Message;
