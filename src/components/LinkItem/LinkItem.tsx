import { Link } from 'react-router-dom';
import { Box } from '@mui/material';
import { barActiveStyle, linkItemStyle } from './styles';
import { GetActiveInfo } from '../../shared/menu-shared';

interface LinkItemProps {
  path: string;
  name: string;
}

const LinkItem: React.FC<LinkItemProps> = ({ path, name }) => {
  const { isActive, finalStyle } = GetActiveInfo(path);

  return (
    <Link to={path} style={{ textDecoration: 'none' }}>
      <Box sx={finalStyle}>
        <Box sx={linkItemStyle}>{name}</Box>
        {isActive && <Box sx={barActiveStyle} />}
      </Box>
    </Link>
  );
};

export default LinkItem;
