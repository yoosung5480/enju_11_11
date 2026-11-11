import LandingPage from "./LandingPage"
import DetailPage from "./DetailPage"
import ResultPage from "./ResultPage"
import { useLetterState } from "./LetterState"

export default function App() {
  // 현재 보여줄 페이지: 0, 1, 2
  const { page, setPage, draft, setDraft } = useLetterState()
  
  return (
    <div>
      {/* 사이드바 영역: 원하는 페이지로 바로 이동 */}
      <aside>
        <nav aria-label="페이지 바로가기">
          <ul>
            <li>
              <button onClick={() => setPage(0)}>랜딩</button>
            </li>
            <li>
              <button onClick={() => setPage(1)}>세부 입력</button>
            </li>
            <li>
              <button onClick={() => setPage(2)}>결과 확인</button>
            </li>
          </ul>
        </nav>
      </aside>

      <main>
        {/* 현재 페이지에 해당하는 컴포넌트만 표시 */}
        {page === 0 && (
          <LandingPage
            name={draft.name}
            onNameChange={(name) => {
              setDraft((previous) => ({
                ...previous,
                name: name,
              }))
            }}
          />
        )}

        {page === 1 && (
          <DetailPage
            message={draft.message}
            onMessageChange={(message) => {
              setDraft((previous) => ({
                ...previous,
                message: message,
              }))
            }}
          />
        )}

        {page === 2 && (
          <ResultPage
            name={draft.name}
            message={draft.message}
          />
        )}

        {/* 모든 페이지가 공유하는 이동 버튼 */}
        <nav aria-label="이전 다음 이동">
          <button
            disabled={page === 0}
            onClick={() => setPage(page - 1)}
          >
            이전
          </button>

          <span> {page + 1} / 3 </span>

          <button
            disabled={page === 2}
            onClick={() => setPage(page + 1)}
          >
            다음
          </button>
        </nav>
      </main>
    </div>
  )
}