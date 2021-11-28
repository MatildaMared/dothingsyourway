import Document, { Html, Head, Main, NextScript } from "next/document";
import { repoName } from "../prismicConfiguration";

class MyDocument extends Document {
	static async getInitialProps(ctx) {
		const initialProps = await Document.getInitialProps(ctx);
		return { ...initialProps };
	}

	render() {
		return (
			<Html>
				<Head>
					<meta charSet="utf-8" />
					<link rel="preconnect" href="https://fonts.googleapis.com" />
					<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
					<link
						href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Open+Sans:wght@300;400;500;600;700;800&display=swap"
						rel="stylesheet"
					></link>
					<link rel="icon" href="/favicon.png" type="image/png" />
					<script
						async
						defer
						src={`//static.cdn.prismic.io/prismic.js?repo=${repoName}&new=true`}
					/>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
