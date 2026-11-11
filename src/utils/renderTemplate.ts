export function renderTemplate( template: string, values: Record<string, string | number>,): string {
  // 문자열을 메모리상의 HTML 문서로 해석
  const doc = new DOMParser().parseFromString(template, "text/html")

  // 지정된 요소의 텍스트를 변경
  for (const [field, value] of Object.entries(values)) {
    const elements = doc.querySelectorAll(`[data-field="${field}"]`)

    elements.forEach((element) => {
      element.textContent = String(value)
    })
  }

  // 값을 채운 HTML을 문자열로 반환
  return doc.body.innerHTML
}