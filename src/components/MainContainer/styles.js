/** @jsx jsx */

import colors from '../../styles/colors';
import typography from '../../styles/typography';

const styles = {
  app: {
    ...typography.base,
    background: `linear-gradient(45deg, ${colors.bg[0]},${colors.bg[1]})`,
    boxSizing: 'border-box',
    color: colors.text,
    display: 'grid',
    fontFamily: '"Be Vietnam", monospace',
    fontSize: 12,
    height: '100%',
    overflow: 'hidden',
    width: '100%',
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
  },
};

export default styles;
