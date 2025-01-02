import { COLORS } from '../../constants/colors';
import { FONTS } from '../../constants/fonts';
import { StyledBox, StyledPhrase, StyledSocialMedia } from './footer.styles';

const Footer = () => {
	return (
		<StyledBox $bg={COLORS.darken}>
			<StyledSocialMedia>
				<img src='assets/images/common/play-store.png' alt='' />
				<img src='assets/images/common/app-store.png' alt='' />
			</StyledSocialMedia>
			<StyledPhrase $font={FONTS.playfair} $color={COLORS.primary}>
				© 2024 Mythos. Todos los derechos reservados.
			</StyledPhrase>
		</StyledBox>
	);
};

export default Footer;
