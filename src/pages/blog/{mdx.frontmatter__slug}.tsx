import React from 'react'
import Layout from '../../components/layout'
import { graphql } from 'gatsby'
import Seo from '../../components/Seo'

interface IBlogPostProps {
	data: Queries.PostDetailQuery
	children: any
}

const BlogPost = ({ data, children }: IBlogPostProps) => {
	console.log(children)
	return (
		<Layout title="Blog Post">
			<div>{children}</div>
		</Layout>
	)
}

export const query = graphql`
	query PostDetail($frontmatter__slug: String) {
		mdx(frontmatter: { slug: { eq: $frontmatter__slug } }) {
			body
			frontmatter {
				author
				category
				date
				title
				slug
			}
		}
	}
`

export const Head = ({ data }: IBlogPostProps) => <Seo title={data.mdx?.frontmatter?.title!} />

export default BlogPost
