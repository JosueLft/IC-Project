import { SxProps } from '@mui/system';
import { colors, spacing, typography } from '../../theme';

export const homePageStyle: SxProps = {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

// Seção de Redes Sociais e Slogan (fundo branco)
export const socialSectionStyle: SxProps = {
  width: '100%',
  backgroundColor: colors.background.bg,
  padding: spacing[8],
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: spacing[3],
};

export const socialMediaContainerStyle: SxProps = {
  display: 'flex',
  alignItems: 'center',
  gap: spacing[3],
  marginBottom: spacing[2],
};

export const socialIconStyle: SxProps = {
  width: '40px',
  height: '40px',
  backgroundColor: colors.primary.main,
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: colors.white.main,
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: colors.primary.dark,
  },
};

export const socialTextStyle: SxProps = {
  fontSize: '2rem',
  fontWeight: typography.fontWeight.Bold,
  color: colors.primary.main,
};

export const sloganStyle: SxProps = {
  fontSize: {
    xs: '2rem',
    md: '2rem',
  },
  fontWeight: typography.fontWeight.Bold,
  color: colors.primary.main,
  textAlign: 'center',
};

export const todayEventSectionStyle: SxProps = {
  width: '100%',
  backgroundColor: colors.background.bg,
  padding: `0 ${spacing[6]} ${spacing[5]}`,
  display: 'flex',
  justifyContent: 'center',
};

export const todayEventPanelStyle: SxProps = {
  width: '100%',
  maxWidth: '1200px',
  padding: spacing[3],
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  flexWrap: 'wrap',
  gap: spacing[3],
};

export const todayEventContentStyle: SxProps = {
  display: 'flex',
  alignItems: 'center',
  gap: spacing[3],
  flex: 1,
};

export const todayEventTextStyle: SxProps = {
  display: 'flex',
  flexDirection: 'column',
  gap: spacing[1],
};

export const todayEventTitleStyle: SxProps = {
  fontSize: '1.2rem',
  fontWeight: typography.fontWeight.Bold,
  color: colors.black.main,
};

export const todayEventDateStyle: SxProps = {
  fontSize: '1rem',
  fontWeight: typography.fontWeight.Regular,
  color: colors.black[70],
};

export const todayEventDetailsStyle: SxProps = {
  fontSize: '1rem',
  fontWeight: typography.fontWeight.Regular,
  color: colors.black[70],
};

export const learnMoreButtonStyle: SxProps = {
  backgroundColor: colors.primary.main,
  color: colors.white.main,
  padding: `${spacing[2]} ${spacing[4]}`,
  borderRadius: '8px',
  border: 'none',
  fontSize: '1rem',
  fontWeight: typography.fontWeight.Bold,
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: colors.primary.dark,
  },
};

// Seção de Eventos da Semana (fundo escuro)
export const eventsWeekSectionStyle: SxProps = {
  width: '100%',
  backgroundColor: colors.background.primary,
  padding: spacing[6],
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: spacing[5],
};

export const eventsTitleStyle: SxProps = {
  fontSize: {
    xs: '1.8rem',
    md: '2.2rem',
  },
  fontWeight: typography.fontWeight.Bold,
  color: colors.primary.light,
  textAlign: 'center',
  marginBottom: spacing[3],
};

export const eventsContainerStyle: SxProps = {
  width: '100%',
  maxWidth: '1200px',
  display: 'flex',
  alignItems: 'stretch',
  gap: spacing[4],
  overflowX: 'auto',
  paddingBottom: spacing[3],
  // Scroll styling
  '&::-webkit-scrollbar': {
    height: '8px',
  },
  '&::-webkit-scrollbar-track': {
    background: colors.background.secondary,
    borderRadius: '4px',
  },
  '&::-webkit-scrollbar-thumb': {
    background: colors.text.quaternary,
    borderRadius: '4px',
  },
  '&::-webkit-scrollbar-thumb:hover': {
    background: colors.text.tertiary,
  },
};

// Seção de Newsletter (fundo branco)
export const newsletterSectionStyle: SxProps = {
  width: '100%',
  backgroundColor: colors.white.main,
  padding: spacing[6],
  display: 'flex',
  justifyContent: 'center',
};

export const newsletterContainerStyle: SxProps = {
  width: '100%',
  maxWidth: '1200px',
  display: 'flex',
  flexDirection: 'column',
  gap: spacing[4],
  alignItems: 'center',
};

export const newsletterTitleStyle: SxProps = {
  fontSize: {
    xs: '1.8rem',
    md: '2rem',
  },
  fontWeight: typography.fontWeight.Bold,
  color: colors.primary.main,
  textAlign: 'center',
};

export const newsletterSubtitleStyle: SxProps = {
  fontSize: '1.1rem',
  fontWeight: typography.fontWeight.Regular,
  color: colors.black[70],
  textAlign: 'center',
  marginBottom: spacing[3],
};

export const newsletterFormStyle: SxProps = {
  display: 'flex',
  flexDirection: {
    xs: 'column',
    md: 'row',
  },
  gap: spacing[3],
  alignItems: 'center',
  width: '100%',
  maxWidth: '800px',
};

export const newsletterInputStyle: SxProps = {
  flex: 1,
  minWidth: '200px',
  '& .MuiOutlinedInput-root': {
    backgroundColor: colors.white.main,
    borderRadius: '8px',
    '& fieldset': {
      borderColor: colors.primary.light,
    },
    '&:hover fieldset': {
      borderColor: colors.primary.main,
    },
    '&.Mui-focused fieldset': {
      borderColor: colors.primary.main,
    },
  },
  '& .MuiInputLabel-root': {
    color: colors.black[60],
    '&.Mui-focused': {
      color: colors.primary.main,
    },
  },
};

export const newsletterButtonStyle: SxProps = {
  backgroundColor: colors.primary.main,
  color: colors.white.main,
  padding: `${spacing[3]} ${spacing[5]}`,
  borderRadius: '8px',
  border: 'none',
  fontSize: '1rem',
  fontWeight: typography.fontWeight.Bold,
  cursor: 'pointer',
  minWidth: '120px',
  height: '56px',
  '&:hover': {
    backgroundColor: colors.primary.dark,
  },
};

// Seção do Mapa (fundo escuro)
export const mapSectionStyle: SxProps = {
  width: '100%',
  backgroundColor: colors.background.primary,
  padding: spacing[6],
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: spacing[4],
};

export const mapTitleStyle: SxProps = {
  fontSize: {
    xs: '1.8rem',
    md: '2rem',
  },
  fontWeight: typography.fontWeight.Bold,
  color: colors.primary.light,
  textAlign: 'center',
  marginBottom: spacing[3],
};

export const mapContainerStyle: SxProps = {
  width: '100%',
  maxWidth: '1200px',
  height: '400px',
  backgroundColor: colors.backgroundCard.primary,
  border: `1px solid ${colors.borderCard.primary}`,
  borderRadius: '12px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: colors.white[60],
  fontSize: '1.1rem',
};

// Estilos legados mantidos para compatibilidade
export const baseContainerStyle: SxProps = {
  flex: 1,
  maxWidth: '60%',
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  gap: '20px',
  padding: '0 20%',
  margin: '0 23%',
  p: 3,
};

export const baseContainerVerticalStyle: SxProps = {
  maxWidth: '60%',
  width: '100%',
  justifyContent: 'center',
  gap: '20px',
  padding: '0 20%',
  margin: '0 23%',
  p: 3,
};

export const eventContainersStyle: SxProps = {
  padding: `0 ${spacing[1]}`,
  display: 'flex',
  alignItems: 'stretch',
  gap: '16px',
  overflowX: 'auto',
  paddingBottom: spacing[5],
  '&::-webkit-scrollbar': {
    height: '8px',
  },
  '&::-webkit-scrollbar-track': {
    background: colors.background.secondary,
    borderRadius: '4px',
  },
  '&::-webkit-scrollbar-thumb': {
    background: colors.text.quaternary,
    borderRadius: '4px',
  },
  '&::-webkit-scrollbar-thumb:hover': {
    background: colors.text.tertiary,
  },
};
