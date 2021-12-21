import Prismic from '@prismicio/client'

export function getPrismicClient() {
	const prismic = Prismic.client(process.env.PRISMIC_API, {
		req,
		accessToken: process.env.PRISMIC_TOKEN
	})

	return prismic
}