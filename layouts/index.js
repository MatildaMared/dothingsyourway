import Footer from "components/Footer";
import Header from "../components/Header";
import styled from "styled-components";

/**
 * Default layout component
 */
const DefaultLayout = ({ children }) => (
	<Wrapper>
		<Header />
		<main>{children}</main>
		<Footer />
	</Wrapper>
);

const Wrapper = styled.div`
	display: grid;
	grid-template-rows: auto 1fr auto;
	min-height: 100vh;
`;

export default DefaultLayout;
