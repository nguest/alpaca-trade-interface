/** @jsx jsx */

import colors from '../../../styles/colors';
import spacing from '../../../styles/spacing';
import typography from '../../../styles/typography';


const styles = {
  ...typography,
  container: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    margin: 0,
  },
  input: {
    fontSize: '1.0rem',
    marginRight: spacing.unit,
    padding: spacing.unit,
    height: spacing.unit * 4,
    width: '100%',
    background: 'transparent',
    border: 'none',
    '&:active': {
      background: colors.md,
      border: `1px solid ${colors.text}`,
    },
  },
};

export default styles;
