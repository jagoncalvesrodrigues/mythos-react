import { COLORS } from '../../constants/colors';
import { FONTS } from '../../constants/fonts';
import {
	StyledBoxCard,
	StyledBoxName,
	StyledIcon,
	StyledName
} from './boxMithos.styles';

const BoxMithos = ({ name, photo }) => {
	return (
		<StyledBoxCard $colorbg={COLORS.bgCard} $color={COLORS.primary}>
			<StyledIcon src={photo} />
			<StyledBoxName $color={COLORS.primary}>
				<StyledName to={`/${name}`} $font={FONTS.playfair}>
					{name.toUpperCase()}
				</StyledName>
			</StyledBoxName>
		</StyledBoxCard>
	);
};

export default BoxMithos;
