import { Box, Typography } from "@mui/material";
import Wrapper from "./Wrapper";

function Line() {
  return(
    <>
    <Wrapper>
    <Box sx={{width: '70%', height: '2px', backgroundColor: 'white', marginTop: '100px'}}>
    </Box>
    </Wrapper>
   
    </>
  );
}

export default Line;