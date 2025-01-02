import BoxMithos from '../../components/BoxMithos/BoxMithos';
import { COLORS } from '../../constants/colors';
import { FONTS } from '../../constants/fonts';
import { MITOLOGY } from '../../constants/mitology';
import {
	StyledBoxMythologies,
	StyledBoxParagraphDesk,
	StyledImg,
	StyledImgBanner,
	StyledMain,
	StyledParagraph,
	StyledParagraphDesk,
	StyledPhrase,
	StyledSeparator,
	StyledSeparatorDesktop,
	StyledTitle
} from './home.styles';

const Home = () => {
	return (
		<>
			<StyledImgBanner>
				<source
					srcSet='assets/images/home/banner-desktop.jpg'
					media='(min-width: 1440px)'
				/>
				<source
					srcSet='assets/images/home/banner-tablet.jpg'
					media='(min-width: 768px)'
				/>
				<source
					srcSet='assets/images/home/banner-mobile.jpg'
					media='(min-width: 375px)'
				/>
				<StyledImg src='assets/images/home/banner-mobile.jpg' alt='banner' />
			</StyledImgBanner>
			<StyledMain $color={COLORS.primary}>
				<StyledTitle $font={FONTS.cinzel}>discover mythologies</StyledTitle>
				<StyledParagraph>
					Tempor porta porta placerat lobortis, ex. gravida placerat convallis.
					sodales. diam Cras gravida Lorem maximus luctus maximus placerat est.
					faucibus maximus elit. elit. ipsum risus nec quam nisi nisi maximus Ut
					risus cursus sollicitudin. placerat quam Lorem tincidunt eu lacus ex
					fringilla lobortis, Donec quis quis
				</StyledParagraph>
				<StyledSeparator
					src='public/assets/images/common/separator-h.png'
					alt=''
				/>
				<StyledBoxMythologies>
					{MITOLOGY.map(mith => (
						<BoxMithos
							key={mith.id}
							mith={mith}
							{...mith}
							name={mith.name}
							photo={mith.img.icon}
						/>
					))}
				</StyledBoxMythologies>
				<StyledSeparatorDesktop
					src='public/assets/images/common/separator-h.png'
					alt=''
				/>
				<StyledBoxParagraphDesk>
					<StyledParagraphDesk>
						Tempor porta porta placerat lobortis, ex. gravida placerat
						convallis. sodales. diam Cras gravida Lorem maximus luctus maximus
						placerat est. faucibus maximus elit. elit. ipsum risus nec quam nisi
						nisi maximus Ut risus cursus sollicitudin. placerat quam Lorem
						tincidunt eu lacus ex fringilla lobortis, Donec quis quis
					</StyledParagraphDesk>
					<StyledParagraphDesk>
						Tempor porta porta placerat lobortis, ex. gravida placerat
						convallis. sodales. diam Cras gravida Lorem maximus luctus maximus
						placerat est. faucibus maximus elit. elit. ipsum risus nec quam nisi
						nisi maximus Ut risus cursus sollicitudin. placerat quam Lorem
						tincidunt eu lacus ex fringilla lobortis, Donec quis quis
					</StyledParagraphDesk>
				</StyledBoxParagraphDesk>
				<StyledPhrase $font={FONTS.playfair}>
					"Incluso el Olimpo tembló ante el poder del trueno de Zeus."
				</StyledPhrase>
				<StyledSeparator
					src='public/assets/images/common/separator-h.png'
					alt=''
				/>
			</StyledMain>
		</>
	);
};
export default Home;
