/** @jsx jsx */

import colors from '../../styles/colors';
import typography from '../../styles/typography';
import spacing from '../../styles/spacing';

const styles = {
  app: {
    ...typography.base,
    background: `linear-gradient(45deg, ${colors.bg[0]},${colors.bg[1]})`,
    boxSizing: 'border-box',
    color: colors.text,
   // display: 'grid',
    fontFamily: '"Be Vietnam", monospace',
    fontSize: 12,
    height: '100%',
    overflow: 'hidden',
    width: '100%',
    display: 'grid',
    gridTemplateColumns: '80px 1fr',
    gridTemplateRows: '1fr 1fr',
    gridAutoRows: '1fr',
  },
  sidebar: {
    borderRight: `1px solid ${colors.text}`,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    padding: `${spacing.unit * 4} 0`,
    a: {
      display: 'flex',
      width: '100%',
      justifyContent: 'center',
      height: spacing.unit * 6,
    }
  },
  global: {
    a: {
      color: colors.text,
      textDecoration: 'none',
    },
    ...typography.base,
    '*': { boxSizing: 'border-box' },
    'html, body': {
      backgroundColor: colors.bg,
      height: '100%',
      margin: 0,
      padding: 0,
    },
    'ion-icon': {
      fontSize: 24,
    }
  },
};

export default styles;
