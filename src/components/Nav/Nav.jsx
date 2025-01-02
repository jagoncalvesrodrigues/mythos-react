import { useState } from 'react';
import { COLORS } from '../../constants/colors';
import { FONTS } from '../../constants/fonts';
import {
	StyledButtonsNav,
	StyledClose,
	StyledHamburguer,
	StyledNav,
	StyledNavTitle
} from './nav.styles';
import { MITOLOGY } from '../../constants/mitology';
import ButtonMithosNav from '../ButtonMithosNav/ButtonMithosNav';
import { Link } from 'react-router-dom';

const Nav = () => {
	const [menu, setMenu] = useState(false);
	console.log(menu);
	return (
		<StyledNav $color={COLORS.primary} $font={FONTS.cinzel}>
			<Link to='/'>
				<StyledNavTitle $color={COLORS.primary}>MYTHOS</StyledNavTitle>
			</Link>
			<StyledHamburguer
				$isVisible={menu}
				onClick={() => toggleMenu(setMenu)}
				src='assets/images/common/hamburger.png'
			></StyledHamburguer>
			<StyledClose
				$isVisible={menu}
				onClick={() => toggleMenu(setMenu)}
				src='assets/images/common/close.png'
			></StyledClose>
			<StyledButtonsNav $color={COLORS.darken} $isVisible={menu}>
				{MITOLOGY.map(mith => (
					<ButtonMithosNav
						toggleMenu={() => toggleMenu(setMenu)}
						key={mith.id}
						{...mith}
						name={mith.name}
					/>
				))}
			</StyledButtonsNav>
		</StyledNav>
	);
};
const toggleMenu = setMenu => {
	setMenu(estado => !estado);
};
export default Nav;
