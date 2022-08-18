export default function ResultsCode({
  data,
}: {
  data: Record<string, number>
}) {
  return (
    <div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  )
}
