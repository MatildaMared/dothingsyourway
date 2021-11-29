import React from "react";
import styled from "styled-components";
import Link from "next/link";

function Header() {
	return (
		<Wrapper>
			<Heading>Do things your way</Heading>
			<nav>
				<List>
					<Item>
						<Link href="/">
							<a>Hem</a>
						</Link>
					</Item>
					<Item>
						<Link href="/">
							<a>Nå dina mål</a>
						</Link>
					</Item>
					<Item>
						<Link href="/">
							<a>Om Markus</a>
						</Link>
					</Item>
					<Item>
						<Link href="/blog">
							<a>Blogg</a>
						</Link>
					</Item>
				</List>
			</nav>
		</Wrapper>
	);
}

const Wrapper = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 1rem;
`;

const Heading = styled.h1`
	color: var(--color-text);
	font-weight: 900;
	font-size: 2rem;
	padding: 0;
	margin: 0;
`;

const List = styled.ul`
	list-style: none;
	display: flex;
`;

const Item = styled.li`
	&:not(:last-of-type) {
		margin-right: 1rem;
	}
`;

export default Header;
