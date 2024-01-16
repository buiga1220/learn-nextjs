export default function Page({ params }: { params: { slug: string } }) {
  return (
    <>
    <div className="w-auto border-2 border-red-500 rounded-full">
      1
    </div>
    <div>My Post: {params.slug}</div>
    </>
  )

}
