import { StyledImgOption } from './pictureImages.styles';

const PictureImages = ({ mith, buttonSelected, buttonSelectedType }) => {
	return (
		<StyledImgOption>
			<source
				srcSet={mith[0][buttonSelected][buttonSelectedType].img.desktop}
				media='(min-width: 1440px)'
			/>
			<source
				srcSet={mith[0][buttonSelected][buttonSelectedType].img.tablet}
				media='(min-width: 768px)'
			/>
			<source
				srcSet={mith[0][buttonSelected][buttonSelectedType].img.mobile}
				media='(min-width: 375px)'
			/>
			<img
				src={mith[0][buttonSelected][buttonSelectedType].img.mobile}
				alt='img'
			/>
		</StyledImgOption>
	);
};

export default PictureImages;
