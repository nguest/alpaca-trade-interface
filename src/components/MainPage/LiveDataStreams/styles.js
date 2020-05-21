/** @jsx jsx */

import colors from '../../../styles/colors';
import spacing from '../../../styles/spacing';
import typography from '../../../styles/typography';


const styles = {
  ...typography,
  container: {
    //alignItems: 'center',
    border: `1px solid ${colors.text}`,
    display: 'flex',
    flexDirection: 'column',
    gridColumn: '2 / span ',
    gridRow: '8 / span 3',
  },
  balance: {
    alignItems: 'center',
    display: 'flex',
    flex: 1,
    fontSize: '1.4rem',
    justifyContent: 'center',
  },
  table: {
    fontSize: '0.8rem',
    '> thead tr': {
      borderBottom: `1px solid ${colors.text}`,

    }
  }
};

export default styles;
