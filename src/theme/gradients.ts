import colors from './colors';
import darken from './utils';

const gradients = {
  vale: {
    horizontal: 'linear-gradient(90deg, #00939a 0%, #ecb833 100%)',
  },
  loading: `linear-gradient(270deg, 
    ${darken(colors.primary.main, 20)}, 
    ${colors.primary.main}, 
    ${darken(colors.primary.main, -50)}, 
    ${colors.primary.main},
    ${darken(colors.primary.main, 20)}
  )`,
  loading2: `linear-gradient(270deg, 
    ${colors.white[20]},
    ${colors.white[50]},
    ${colors.white[20]}
  )`,
  background:
    'linear-gradient(360deg, #0E0E10 -18.06%, rgba(17, 17, 19, 0) 50%)',
  table: 'linear-gradient(180deg, rgba(14,14,16,0) 0%, rgba(14,14,16,0.8) 45%)',
};

export default gradients;
