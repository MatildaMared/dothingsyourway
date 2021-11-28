import CSSVariables from "../styles/cssVariables";
import GlobalStyles from "../styles/globalStyles";

function MyApp({ Component, pageProps }) {
	return (
		<>
			<CSSVariables />
			<GlobalStyles />
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
