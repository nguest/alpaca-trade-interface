/** @jsx jsx */

import colors from '../../styles/colors';
import spacing from '../../styles/spacing';
import typography from '../../styles/typography';

const styles = {
  ...typography,
  footer: {
    alignItems: 'center',
    borderTop: `1px solid ${colors.text}`,
    display: 'flex',
    padding: spacing.unit * 2,
    justifyContent: 'space-between',
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    //flex: 1,
  },
  statusBlock: {
    marginRight: spacing.unit,
  },
  link: {
    display: 'inline-flex',
    alignItems: 'center',
    color: colors.hilite,
    marginLeft: spacing.unit,
  },
};

export default styles;
