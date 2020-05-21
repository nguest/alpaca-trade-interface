/** @jsx jsx */

import colors from '../../styles/colors';
import spacing from '../../styles/spacing';
import typography from '../../styles/typography';
import tables from '../../styles/tables';


const styles = {
  ...typography,
  container: (type) => ({
    border: `1px solid ${colors.text}`,
    display: 'flex',
    flexDirection: 'column',
    gridColumn: type === 'compact' ? '3 / span 3' : '1 / span 1',
    gridRow: type === 'compact' ? '8 / span 3' : '2 / span 1',
    overflowY: 'scroll',
  }),
  header: {
    borderBottom: `1px solid ${colors.text}`,
    display: 'flex',
    height: spacing.unit * 6,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  noOrders: {
    display: 'flex',
    alignSelf: 'center',
    padding: spacing.unit,
  },
  table: {
    ...tables,
    fontSize: '1em',
  },
  coloredSpan: (val) => ({
    color: val ? colors.error : colors.ok,
  }),
};

export default styles;
