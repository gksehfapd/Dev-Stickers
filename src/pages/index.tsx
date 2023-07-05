import * as React from 'react'
import { Link, type PageProps } from 'gatsby'
import Layout from '../components/layout'
import { title } from 'process'
import Seo from '../components/Seo'

const IndexPage: React.FC<PageProps> = () => {
	return (
		<Layout title="Welcome to DevStickers ⭐️">
			<div></div>
		</Layout>
	)
}

export const Head = () => <Seo title="Home" />

export default IndexPage
