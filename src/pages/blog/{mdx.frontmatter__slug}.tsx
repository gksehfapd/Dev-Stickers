import React from 'react'
import Layout from '../../components/layout'
import { graphql } from 'gatsby'
import Seo from '../../components/Seo'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

interface IBlogPostProps {
	data: Queries.PostDetailQuery
	children: any
}

const BlogPost = ({ data, children }: IBlogPostProps) => {
	const image = getImage(data.mdx?.frontmatter?.headerImage?.childImageSharp?.gatsbyImageData!)

	return (
		<Layout title="Blog Post">
			<GatsbyImage image={image as any} alt={data.mdx?.frontmatter?.title!} />
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
				headerImage {
					childImageSharp {
						gatsbyImageData(height: 450, placeholder: TRACED_SVG)
					}
				}
			}
		}
	}
`

export const Head = ({ data }: IBlogPostProps) => <Seo title={data.mdx?.frontmatter?.title!} />

export default BlogPost
