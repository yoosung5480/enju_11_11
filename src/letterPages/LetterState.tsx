import { createContext, useContext, useState } from "react"
import type { Dispatch, ReactNode, SetStateAction } from "react"

type LetterDraft = {
  name: string
  message: string
}

type LetterState = {
  page: number
  setPage: Dispatch<SetStateAction<number>>
  draft: LetterDraft
  setDraft: Dispatch<SetStateAction<LetterDraft>>
}

const LetterContext = createContext<LetterState | null>(null)

// 이 컴포넌트가 유지되는 동안 편지 상태도 유지된다.
export function LetterProvider({ children }: { children: ReactNode }) {
  const [page, setPage] = useState(0)

  const [draft, setDraft] = useState<LetterDraft>({
    name: "",
    message: "",
  })

  return (
    <LetterContext.Provider value={{ page, setPage, draft, setDraft }}>
      {children}
    </LetterContext.Provider>
  )
}

// 다른 컴포넌트가 편지 상태를 가져올 때 사용하는 함수
export function useLetterState() {
  const state = useContext(LetterContext)

  if (state === null) {
    throw new Error("LetterProvider 안에서 사용해야 합니다.")
  }

  return state
}