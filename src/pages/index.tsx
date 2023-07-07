import * as React from 'react'
import { Link, PageProps, graphql } from 'gatsby'
import Layout from '../components/layout'
import Seo from '../components/Seo'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

const IndexPage = ({ data }: PageProps<Queries.StickersQuery>) => {
	return (
		<Layout title="Welcome to DevStickers ⭐️">
			{data.allContentfulStickerPack.nodes.map((stickers) => (
				<article>
					<GatsbyImage
						image={getImage(stickers.preview?.gatsbyImageData!)!}
						alt={stickers.name!}
					/>
					<Link to={`/products/${stickers.id}`}>
						<h2>{stickers.name}</h2>
						<h4>${stickers.price}</h4>
					</Link>
				</article>
			))}
		</Layout>
	)
}

export const query = graphql`
	query Stickers {
		allContentfulStickerPack {
			nodes {
				id
				name
				price
				preview {
					gatsbyImageData(placeholder: BLURRED, height: 450)
				}
			}
		}
	}
`

export const Head = () => <Seo title="Home" />

export default IndexPage
