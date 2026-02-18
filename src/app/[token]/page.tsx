import TokenPageClient from './TokenPageClient'

export async function generateStaticParams() {
     return []
}

export default function Page() {
     return <TokenPageClient />
}
