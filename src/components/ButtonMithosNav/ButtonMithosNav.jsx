import { COLORS } from '../../constants/colors';
import { StyledBoxButton, StyledOption } from './ButtonMithosNav.styles';

const ButtonMithosNav = ({ name, toggleMenu }) => {
	return (
		<StyledBoxButton onClick={toggleMenu} $color={COLORS.primary}>
			<StyledOption to={`/${name}`} $color={COLORS.primary}>
				{name.toUpperCase()}
			</StyledOption>
		</StyledBoxButton>
	);
};

export default ButtonMithosNav;
