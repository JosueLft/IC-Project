import { SxProps, Theme } from '@mui/material';
import { colors, typography, spacing, shadows } from '../../theme';
import lidershipmentImage from '../../assets/images/lidershipment.png';

export const aboutPageStyle: SxProps<Theme> = {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

export const sectionStyle: SxProps<Theme> = {
  width: '100%',
  maxWidth: '1200px',
  display: 'flex',
  flexDirection: 'column',
  gap: spacing[5],
};

// Seções com fundo branco e imagem abstrata
export const whiteSectionStyle: SxProps<Theme> = {
  width: '100%',
  backgroundColor: colors.background.bg,
  padding: `${spacing[9]} ${spacing[4]}`,
  display: 'flex',
  justifyContent: 'center'
};

export const whiteSectionStyle2: SxProps<Theme> = {
  width: '100%',
  backgroundColor: colors.background.bg,
  padding: `0 ${spacing[4]}`,
  display: 'flex',
  justifyContent: 'center'
};

// Seções com fundo escuro e imagem abstrata
export const darkSectionStyle: SxProps<Theme> = {
  width: '100%',
  backgroundColor: colors.background.secondary,
  padding: `0 ${spacing[8]}`,
  display: 'flex',
  justifyContent: 'center',
  position: 'relative',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(23, 23, 24, 1)', // Película escura transparente
    zIndex: 1,
  },
  '& > *': {
    position: 'relative',
    zIndex: 2,
  },
};

// Container interno para conteúdo com largura máxima
export const sectionContentStyle: SxProps<Theme> = {
  width: '100%',
  maxWidth: '1200px',
  display: 'flex',
  flexDirection: 'column',
  gap: spacing[5],
};

// Títulos para seções brancas (texto escuro)
export const whiteSectionTitleStyle: SxProps<Theme> = {
  fontSize: {
    xs: '2rem',
    md: '2.5rem',
  },
  fontWeight: typography.fontWeight.Bold,
  color: colors.primary.main,
  textAlign: 'center',
  paddingTop: spacing[8]
};

// Títulos para seções escuras (texto claro)
export const darkSectionTitleStyle: SxProps<Theme> = {
  fontSize: {
    xs: '2rem',
    md: '2.5rem',
  },
  fontWeight: typography.fontWeight.Bold,
  color: colors.primary.light,
  textAlign: 'center',
};

// Textos para seções brancas
export const whiteDescriptionTextStyle: SxProps<Theme> = {
  fontSize: {
    xs: '1rem',
    md: '1.1rem',
  },
  fontWeight: typography.fontWeight.Regular,
  color: colors.black[60],
  lineHeight: 1.6,
  textAlign: 'center',
};

// Call to action para seção branca
export const whiteCallToActionStyle: SxProps<Theme> = {
  fontSize: {
    xs: '1.1rem',
    md: '1.2rem',
  },
  fontWeight: typography.fontWeight.Bold,
  color: colors.primary.main,
  fontStyle: 'italic',
  textAlign: 'center',
};

export const descriptionSectionStyle: SxProps<Theme> = {
  ...sectionStyle,
  textAlign: 'center',
  padding: spacing[5],
  backgroundColor: colors.backgroundCard.primary,
  border: `1px solid ${colors.borderCard.primary}`,
  boxShadow: shadows.medium,
};

export const sectionTitleStyle: SxProps<Theme> = {
  fontSize: {
    xs: '2rem',
    md: '2.5rem',
  },
  fontWeight: typography.fontWeight.Bold,
  color: colors.primary.light,
  textAlign: 'center',
};

export const sectionSubtitleStyle: SxProps<Theme> = {
  fontSize: {
    xs: '1.5rem',
    md: '1.8rem',
  },
  fontWeight: typography.fontWeight.Bold,
  color: colors.white.main,
  textAlign: 'center',
};

export const descriptionTextStyle: SxProps<Theme> = {
  fontSize: {
    xs: '1rem',
    md: '1.1rem',
  },
  fontWeight: typography.fontWeight.Regular,
  color: colors.white[80],
  lineHeight: 1.6,
};

export const callToActionStyle: SxProps<Theme> = {
  fontSize: {
    xs: '1.1rem',
    md: '1.2rem',
  },
  fontWeight: typography.fontWeight.Bold,
  color: colors.primary.light,
  fontStyle: 'italic',
};

export const leadershipSectionStyle: SxProps<Theme> = {
  ...sectionContentStyle,
};

export const leadershipCardStyle: SxProps<Theme> = {
  position: 'relative',
  padding: `${spacing[6]} ${spacing[5]} ${spacing[5]}`,
  backgroundImage: `
    url(${lidershipmentImage})
  `,
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    backdropFilter: 'blur(2px)',
    zIndex: 1,
  },
  '& > *': {
    position: 'relative',
    zIndex: 2,
  },
};

export const leadershipContentStyle: SxProps<Theme> = {
  display: 'flex',
  flexDirection: {
    xs: 'column',
    md: 'row',
  },
  gap: spacing[5],
  alignItems: 'center',
};

export const leadershipImageContainerStyle: SxProps<Theme> = {
  flex: '0 0 300px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

// Variação para lado esquerdo
export const leadershipImageLeftStyle: SxProps<Theme> = {
  flex: '0 0 300px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

// Variação para lado direito
export const leadershipImageRightStyle: SxProps<Theme> = {
  flex: '0 0 300px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

// Container com posição relativa para imagem do representante
export const ministryContainerWithImageStyle: SxProps<Theme> = {
  position: 'relative',
  padding: `${spacing[6]} ${spacing[4]} ${spacing[4]}`,
  display: 'flex',
  flexDirection: {
    xs: 'column',
    md: 'row',
  },
  alignItems: 'center',
  backgroundImage: `
    url(${lidershipmentImage})
  `,
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    backdropFilter: 'blur(1px)',
    zIndex: 1,
  },
  '& > *': {
    position: 'relative',
    zIndex: 2,
  },
};

export const leadershipImageStyle: SxProps<Theme> = {
  width: '100%',
  maxWidth: '300px',
  height: 'auto',
  borderRadius: '12px',
  boxShadow: shadows.medium,
};

export const leadershipTextContainerStyle: SxProps<Theme> = {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  gap: spacing[3],
};

export const ministriesSectionStyle: SxProps<Theme> = {
  ...sectionContentStyle,
  paddingTop: spacing[5],
};

export const ministryImageContainerStyle: SxProps<Theme> = {
  flex: '0 0 200px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

export const ministryImageStyle: SxProps<Theme> = {
  width: '100%',
  maxWidth: '200px',
  height: '150px',
  borderRadius: '8px',
  objectFit: 'cover',
  backgroundColor: colors.gray.light,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: colors.black[60],
  fontSize: '0.9rem',
  border: `1px solid ${colors.borderCard.primary}`,
};

export const ministryContentStyle: SxProps<Theme> = {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  gap: spacing[2],
};

export const ministryTitleStyle: SxProps<Theme> = {
  fontSize: {
    xs: '1.3rem',
    md: '1.5rem',
  },
  fontWeight: typography.fontWeight.Bold,
  color: colors.primary.light,
};

export const ministryLeaderStyle: SxProps<Theme> = {
  fontSize: {
    xs: '1rem',
    md: '1.1rem',
  },
  fontWeight: typography.fontWeight.Bold,
  color: colors.white.main,
  marginBottom: spacing[2],
};

export const ministryDescriptionStyle: SxProps<Theme> = {
  fontSize: '1rem',
  fontWeight: typography.fontWeight.Regular,
  color: colors.white[90],
  lineHeight: 1.5,
};

export const detailedMinistriesSectionStyle: SxProps<Theme> = {
  ...sectionContentStyle,
};

export const detailedMinistriesCardStyle: SxProps<Theme> = {
  padding: spacing[5],
};

export const detailedMinistryItemStyle: SxProps<Theme> = {
  position: 'relative',
  marginBottom: spacing[5],
  paddingBottom: spacing[4],
  borderBottom: `1px solid ${colors.white.main}`,
  padding: spacing[4],
  borderRadius: '12px',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(23, 23, 24, 0.75)',
    borderRadius: '12px',
    backdropFilter: 'blur(2px)',
  },
  '& > *': {
    position: 'relative',
  },
};

export const detailedMinistryTitleStyle: SxProps<Theme> = {
  fontSize: {
    xs: '1.4rem',
    md: '1.6rem',
  },
  fontWeight: typography.fontWeight.Bold,
  color: colors.primary.light,
};

export const detailedMinistryDescriptionStyle: SxProps<Theme> = {
  fontSize: '1rem',
  fontWeight: typography.fontWeight.Regular,
  color: colors.white[80],
  lineHeight: 1.6,
};

// Estilos para ministério com imagem à direita (padrão)
export const ministryItemRightStyle: SxProps<Theme> = {
  ...ministryContainerWithImageStyle,
  flexDirection: {
    xs: 'column',
    md: 'row',
  },
  '& .representative-image': {
    right: '20px',
  },
  // Texto alinhado à esquerda quando imagem está à direita
  '& .ministry-content': {
    textAlign: {
      xs: 'center',
      md: 'left',
    },
  },
};

// Estilos para ministério com imagem à esquerda (alternado)
export const ministryItemLeftStyle: SxProps<Theme> = {
  ...ministryContainerWithImageStyle,
  flexDirection: {
    xs: 'column',
    md: 'row-reverse',
  },
  '& .representative-image': {
    left: '20px',
    right: 'auto',
  },
  // Texto alinhado à direita quando imagem está à esquerda
  '& .ministry-content': {
    textAlign: {
      xs: 'center',
      md: 'right',
    },
  },
};