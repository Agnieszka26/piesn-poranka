import NewsPage from "./NewsPage"


export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
console.log('slug', id)
  return (
    <NewsPage id={id} />
  )
}

