import React from 'react'
import Layout from '../components/layout'
import Seo from '../components/Seo'

const Blog = () => {
	return (
		<Layout title="Welcome to DevStickers ⭐️">
			<p>the most Recent News from my shop</p>
		</Layout>
	)
}

export const Head = () => <Seo title="Blog" />

export default Blog
