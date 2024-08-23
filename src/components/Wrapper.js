import { styled } from '@mui/system';
import Box from '@mui/material/Box';

const Wrapper = styled(Box)(({ theme, sx }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  ...sx,
}));

export default Wrapper;