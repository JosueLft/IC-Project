import { useMatches } from 'react-router-dom';
import { SxProps } from '@mui/material';

export const linkItemContainerStyle: SxProps = {
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  position: 'relative',
  overflow: 'hidden',
};
export const linkItemContainerActiveStyle: SxProps = {
  backgroundImage:
    'radial-gradient(circle at center bottom, rgba(236,184,51,0.1) 15%, transparent 50%)',
};

function GetActiveInfo(path: string) {
  const matches = useMatches();
  const isActive = matches[0].pathname === path;

  const finalStyle = {
    ...linkItemContainerStyle,
    ...(isActive && linkItemContainerActiveStyle),
  };

  return { finalStyle, isActive };
}

export { GetActiveInfo };
