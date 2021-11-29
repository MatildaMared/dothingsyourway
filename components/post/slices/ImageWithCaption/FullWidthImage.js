import React from "react";
import Image from "next/image";
import Caption from "./Caption";

/**
 * Full width image component
 */
const FullWidthImage = ({ slice }) => {
	const imageUrl = slice.primary.image.url;
	const imageAlt = slice.primary.image.imageAlt;
	const caption = slice.primary.caption;

	return (
		<div>
			<Image
				src={imageUrl}
				alt={imageAlt}
				layout="fill"
				objectPosition="top"
				objectFit="cover"
			/>
			<div>
				<Caption caption={caption} />
			</div>
		</div>
	);
};

export default FullWidthImage;
