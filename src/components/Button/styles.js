/** @jsx jsx */
import colors from '../../styles/colors';
import spacing from '../../styles/spacing';

const hover = (type) => ({
  backgroundColor: type === 'invisible' ? colors.mg : colors.hilite,
});


const getBackgroundColor = (active, type) => {
  if (type === 'invisible') {
    if (active) return colors.bg;
    return 'transparent';
  }
  return colors.hilite;
};

const styles = {
  button: (active, disabled, type) => ({
    alignItems: 'center',
    backgroundColor: getBackgroundColor(active, type),
    border: 'none',
    borderRadius: 3,
    color: colors.white,
    display: 'flex',
    fontSize: '1rem',
    justifyContent: 'center',
    opacity: disabled ? 0.5 : 1.0,
    padding: spacing.unit,
    width: '100%',
    '> i': {
      fontSize: 20,
    },
    ':hover': hover(type),
  }),
};

export default styles;
