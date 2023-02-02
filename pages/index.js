import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import Intro from '@/components/Intro'

export default function Home() {
  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <Intro />
    </>
  )
}
