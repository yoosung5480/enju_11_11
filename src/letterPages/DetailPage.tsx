type DetailPageProps = {
  message: string
  onMessageChange: (message: string) => void
}

export default function DetailPage({
  message,
  onMessageChange,
}: DetailPageProps) {
  return (
    <section>
      <h1>2. 세부 입력 페이지</h1>

      <label htmlFor="letter-message">편지 내용</label>
      <textarea
        id="letter-message"
        rows={5}
        value={message}
        onChange={(event) => {
          onMessageChange(event.target.value)
        }}
      />
    </section>
  )
}