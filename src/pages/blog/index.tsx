import React, { useState } from 'react'
import Layout from '../../components/layout'
import Seo from '../../components/Seo'
import { Link, PageProps, graphql } from 'gatsby'

const Blog = ({ data }: PageProps<Queries.BlogPostsQuery>) => {
	console.log(data)
	const [blogPosts, setBlogPosts] = useState()

	return (
		<Layout title="Welcome to DevStickers ⭐️">
			<section>
				{data.allMdx.nodes.map((file, index) => (
					<article key={index}>
						<Link to={`/blog/${file.frontmatter?.slug}`}>
							<h3>{file.frontmatter?.title}</h3>
							<h5>
								{file.frontmatter?.author} in : {file.frontmatter?.category}
							</h5>
							<h6>{file.frontmatter?.date}</h6>
							<hr />
							<p>{file.excerpt}</p>
						</Link>
					</article>
				))}
			</section>
		</Layout>
	)
}

export const query = graphql`
	query BlogPosts {
		allMdx {
			nodes {
				frontmatter {
					title
					date(formatString: "YYYY.MM.DD")
					category
					author
					slug
				}
				excerpt
			}
		}
	}
`

export const Head = () => <Seo title="Blog" />

export default Blog
