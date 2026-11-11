type LandingPageProps = {
  name: string
  onNameChange: (name: string) => void
}

export default function LandingPage({
  name,
  onNameChange,
}: LandingPageProps) {
  return (
    <section>
      <h1>1. 랜딩 페이지</h1>
      <p>편지를 받을 사람의 이름을 입력하세요.</p>

      <label htmlFor="recipient-name">받는 사람</label>
      <input
        id="recipient-name"
        type="text"
        value={name}
        onChange={(event) => {
          onNameChange(event.target.value)
        }}
      />
    </section>
  )
}