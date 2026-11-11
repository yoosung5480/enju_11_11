type ResultPageProps = {
  name: string
  message: string
}

export default function ResultPage({
  name,
  message,
}: ResultPageProps) {
  return (
    <section>
      <h1>3. 결과 확인 페이지</h1>

      <h2>{name || "이름 없음"}에게</h2>
      <pre>{message || "아직 작성한 내용이 없습니다."}</pre>
    </section>
  )
}