import React from "react";
import styled from "styled-components";

function Header() {
	return (
		<Wrapper>
			<Heading>Do things your way</Heading>
		</Wrapper>
	);
}

const Wrapper = styled.header`
	display: flex;
`;
const Heading = styled.h1`
	font-weight: 900;
	font-size: 2rem;
	padding: 0;
	margin: 0;
`;

export default Header;
