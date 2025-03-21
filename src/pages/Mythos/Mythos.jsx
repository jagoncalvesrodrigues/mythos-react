import { useState } from 'react';
import { COLORS } from '../../constants/colors';
import { FONTS } from '../../constants/fonts';
import {
	StyledImg,
	StyledImgBanner,
	StyledMain,
	StyledTitle
} from '../home/home.styles';
import {
	StyeldBoxButtons,
	StyeldBoxButtonsChangeType,
	StyledButtonTypes,
	StyledButtonTypesBottom,
	StyledDivDesktop,
	StyledDivTablet,
	StyledDivText,
	StyledDivTextDesktop,
	StyledNameType,
	StyledSeparatorMythos,
	StyledTextType,
	StyledTextTypeTablet,
	StyledVerticalSeparator
} from './mythos.styles';
import PictureImages from '../../components/PictureImages/PictureImages';

const Mythos = ({ img, mith, name }) => {
	const [buttonSelected, setButtonSelected] = useState('GODS');
	const [buttonSelectedType, setButtonSelectedType] = useState(0);
	console.log(buttonSelected);
	return (
		<>
			<StyledImgBanner>
				<source srcSet={img.desktop} media='(min-width: 1440px)' />
				<source srcSet={img.tablet} media='(min-width: 768px)' />
				<source srcSet={img.mobile} media='(min-width: 375px)' />
				<StyledImg src={img.mobile} alt='banner' />
			</StyledImgBanner>
			<StyledMain $color={COLORS.primary}>
				<StyledTitle $font={FONTS.cinzel}>{name} mithology</StyledTitle>
				<StyeldBoxButtons $font={FONTS.playfair}>
					<StyledButtonTypes
						$colorLetter={COLORS.white}
						onClick={() => {
							setButtonSelected('GODS');
						}}
					>
						GODS
					</StyledButtonTypes>
					<StyledButtonTypes
						$colorLetter={COLORS.white}
						onClick={() => {
							setButtonSelected('CREATURES');
						}}
					>
						CREATURES
					</StyledButtonTypes>
					<StyledButtonTypes
						$colorLetter={COLORS.white}
						onClick={() => {
							setButtonSelected('MYTHS');
						}}
					>
						MYTHS
					</StyledButtonTypes>
				</StyeldBoxButtons>
				<StyledDivTablet>
					<StyledDivText>
						<StyledNameType $font={FONTS.cinzel}>
							{mith[0][buttonSelected][buttonSelectedType].name}
						</StyledNameType>
						<StyledTextTypeTablet $colorLetter={COLORS.white}>
							{mith[0][buttonSelected][buttonSelectedType].pragraph}
						</StyledTextTypeTablet>
					</StyledDivText>
					<StyledVerticalSeparator
						src='/assets/images/common/separator-v.png'
						alt=''
					/>
					<PictureImages
						mith={mith}
						buttonSelected={buttonSelected}
						buttonSelectedType={buttonSelectedType}
					/>
				</StyledDivTablet>
				<StyledSeparatorMythos
					src='/assets/images/common/separator-h.png'
					alt=''
				/>
				<StyledTextType $colorLetter={COLORS.white}>
					{mith[0][buttonSelected][buttonSelectedType].pragraph}
				</StyledTextType>
				<StyledDivDesktop>
					<StyledDivTextDesktop>
						<StyledNameType $font={FONTS.cinzel}>
							{mith[0][buttonSelected][buttonSelectedType].name}
						</StyledNameType>
						<StyledTextTypeTablet $colorLetter={COLORS.white}>
							{mith[0][buttonSelected][buttonSelectedType].pragraph}
						</StyledTextTypeTablet>
					</StyledDivTextDesktop>
					<StyeldBoxButtonsChangeType $font={FONTS.playfair}>
						<StyledButtonTypesBottom
							$colorLetter={COLORS.white}
							onClick={() => {
								setButtonSelectedType(0);
							}}
						>
							{mith[0][buttonSelected][0].name}
						</StyledButtonTypesBottom>
						<StyledButtonTypesBottom
							$colorLetter={COLORS.white}
							onClick={() => {
								setButtonSelectedType(1);
							}}
						>
							{mith[0][buttonSelected][1].name}
						</StyledButtonTypesBottom>
						<StyledButtonTypesBottom
							$colorLetter={COLORS.white}
							onClick={() => {
								setButtonSelectedType(2);
							}}
						>
							{mith[0][buttonSelected][2].name}
						</StyledButtonTypesBottom>
					</StyeldBoxButtonsChangeType>
				</StyledDivDesktop>
			</StyledMain>
		</>
	);
};

export default Mythos;
