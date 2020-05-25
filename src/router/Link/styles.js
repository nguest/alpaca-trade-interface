/** @jsx jsx */

import typography from '../../styles/typography';
import colors from '../../styles/colors';
import buttonStyles from '../../components/Button/styles';

const styles = {
  base: (active, disabled, isButton, styleOverrides, type) => {
    if (isButton) {
      return buttonStyles.button(active, disabled, type);
    }
    return {
      ...typography.base,
      a: {
        ...typography.base,
      },
      //background: active ? colors.mg : 'transparent',
      border: active ? `1px solid ${colors.mg}`: 'none',
      ...styleOverrides,
    };
  },
};

export default styles;
