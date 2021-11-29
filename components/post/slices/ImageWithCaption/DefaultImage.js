import React from "react";
import Image from "next/image";
import Caption from "./Caption";
import styled from "styled-components";

/**
 * Default image component
 */
const DefaultImage = ({ slice }) => {
	const imageUrl = slice.primary.image.url;
	const imageAlt = slice.primary.image.alt;
	const caption = slice.primary.caption;

	return (
		<Wrapper>
			<Image src={imageUrl} alt={imageAlt} layout="fill" objectFit="cover" />
			<Caption caption={caption} />
		</Wrapper>
	);
};

const Wrapper = styled.div`
	position: relative;
	width: 100%;
	height: 300px;
`;

export default DefaultImage;
