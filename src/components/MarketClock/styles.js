/** @jsx jsx */
import spacing from '../../styles/spacing';

const styles = {
  marketClock: {
    ///padding: `0 0 ${spacing.unit * 8} 0`,
    display: 'grid',
    gridTemplateColumns: '1fr 2fr',
    gridTemplateRows: '1fr 1fr',
    gridGap: spacing.unit * 0.5,
  },
};

export default styles;
