import { Box } from '@mui/material';
import { PropsWithChildren } from 'react';
import secondaryCardStyles from './styles';

const SecondaryCard: React.FC<PropsWithChildren> = ({ children }) => (
  <Box sx={secondaryCardStyles}>{children}</Box>
);
export default SecondaryCard;
