/** @jsx jsx */

import colors from '../../../styles/colors';
import spacing from '../../../styles/spacing';
import typography from '../../../styles/typography';


const styles = {
  ...typography,
  container: {
    border: `1px solid ${colors.text}`,
    display: 'flex',
    flexDirection: 'column',
    gridColumn: '3 / span 3',
    gridRow: '8 / span 3',
    overflowY: 'scroll',
  },
  header: {
    borderBottom: `1px solid ${colors.text}`,
    display: 'flex',
    height: spacing.unit * 6,
    justifyContent: 'center',
    width: '100%',
  },
  table: {
    fontSize: '1em',
  }

};

export default styles;
