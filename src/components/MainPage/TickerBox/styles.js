/** @jsx jsx */

import colors from '../../../styles/colors';
import spacing from '../../../styles/spacing';
import typography from '../../../styles/typography';


const styles = {
  ...typography,
  container: {
    alignItems: 'center',
    border: `1px solid ${colors.text}`,
    display: 'flex',
    flexDirection: 'row',
    gridColumn: '1 / span 1',
    gridRow: '1 / span 1',
    margin: 0,
  },
  input: {
    fontSize: '1.0rem',
    marginBottom: spacing.unit,
    marginTop: spacing.unit,
    padding: spacing.unit,
    width: '100%',
  },
};

export default styles;
