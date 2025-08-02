import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Button, Menu, Grid, styled } from '@mui/material';

import {
  barActiveStyle,
  buttonItemStyle,
  dropdownMenuStyle,
  dropdownMenuDivideStyle,
  dropdownMenuCloseStyle,
  dropdownMenuTitleStyle,
  dropdownMenuGridContainerStyle,
} from './styles';

import { DropdownMenuProps } from '../MenuItem/types';
import { GetActiveInfo } from '../../shared/menu-shared';
import Icon, { IconName } from '../ui/Icon';

const StyledDropdownMenu = styled(Menu)(dropdownMenuStyle);

const DropdownMenu: React.FC<DropdownMenuProps> = ({
  children,
  name,
  path,
  icon,
}) => {
  const { isActive, finalStyle } = GetActiveInfo(path);

  const [dropdownEl, setDropdownEl] = React.useState<HTMLButtonElement | null>(
    null
  );
  const handleDropdownClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setDropdownEl(event.currentTarget);
  };

  const handleCloseDropdown = () => {
    setDropdownEl(null);
  };

  const getLinkChevronDirection = (): IconName =>
    dropdownEl ? 'ChevronUp' : 'ChevronDown';

  return (
    <Box className="dropdown-item">
      <Box sx={finalStyle}>
        <Button
          sx={buttonItemStyle}
          onClick={(event: React.MouseEvent<HTMLButtonElement>) =>
            handleDropdownClick(event)
          }
        >
          {name}
          <Icon name={getLinkChevronDirection()} />
        </Button>
        {isActive && (
          <>
            <Box sx={barActiveStyle} />
          </>
        )}
      </Box>
      <StyledDropdownMenu
        anchorEl={dropdownEl}
        open={Boolean(dropdownEl)}
        onClose={handleCloseDropdown}
        sx={{ left: 0 }}
      >
        <Box>
          <Box sx={dropdownMenuTitleStyle}>
            {icon && <Icon name={icon} />}
            <h1>{name}</h1>
          </Box>
          <Box sx={dropdownMenuCloseStyle} onClick={handleCloseDropdown}>
            <Icon name={'X'} />
          </Box>
          <Box sx={dropdownMenuDivideStyle} />
          <Grid container sx={dropdownMenuGridContainerStyle} spacing={2}>
            {children &&
              children
                .filter((x) => x.isVisibleInNavbar)
                .map((child) => (
                  <Box key={child.name} className="grid-item">
                    <Link to={child.path} className="link-item">
                      <Box className="menu-name">{child.name}</Box>
                      <p className="description">{child.description}</p>
                    </Link>
                  </Box>
                ))}
          </Grid>
        </Box>
      </StyledDropdownMenu>
    </Box>
  );
};

export default DropdownMenu;