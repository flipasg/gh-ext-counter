export default function ResultsCode({
  data,
}: {
  data: Record<string, number>
}) {
  return (
    <div>
      <pre data-testid='resultCode'>{JSON.stringify(data, null, 2)}</pre>
    </div>
  )
}
