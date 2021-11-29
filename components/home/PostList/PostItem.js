import React from "react";
import Link from "next/link";
import { RichText } from "prismic-reactjs";

import PostDate from "./PostDate";
import FirstParagraph from "./FirstParagraph";
import { linkResolver } from "prismicConfiguration";

/**
 * Post list item component
 */
const PostItem = ({ post }) => {
	const title = RichText.asText(post.data.title)
		? RichText.asText(post.data.title)
		: "Untitled";

	return (
		<div>
			<Link href={linkResolver(post)}>
				<a>
					<h2>{title}</h2>
				</a>
			</Link>

			<PostDate date={post.data.date} />

			<FirstParagraph sliceZone={post.data.body} textLimit={300} />
		</div>
	);
};

export default PostItem;
