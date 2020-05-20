/** @jsx jsx */

import colors from '../../styles/colors';
import spacing from '../../styles/spacing';

const styles = {
  container: {
    border: `1px solid ${colors.text}`,
    gridColumn: '2 / span 3',
    gridRow: '1 / span 10',
    left: spacing.unit,
  },
  header: {
    alignItems: 'center',
    borderBottom: `1px solid ${colors.text}`,
    display: 'flex',
    height: spacing.unit * 6,
    justifyContent: 'space-between',
    width: '100%',
    padding: `0 ${spacing.unit}`,
  },
  buttonContainer: {
    display: 'flex',
  },
  graphContainer: {
    height: `calc(100% - ${spacing.unit * 6}px)`,
  },
  svg: {
    backgroundColor: 'rgba(0,0,0,0.1)',
    color: colors.text,
    overflow: 'visible',
  },
};

export default styles;
