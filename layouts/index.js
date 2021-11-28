import Footer from "components/Footer";
import Header from "../components/Header";

/**
 * Default layout component
 */
const DefaultLayout = ({ children }) => (
	<div>
		<Header />
		<main>{children}</main>
		<Footer />
	</div>
);

export default DefaultLayout;
