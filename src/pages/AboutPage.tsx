import aboutTemplate from "../templates/about.html?raw"
import { renderTemplate } from "../utils/renderTemplate"

export default function AboutPage() {
  const html = renderTemplate(aboutTemplate, {
    title: "서비스 소개",
    description: "편지를 작성하고 확인할 수 있는 서비스입니다.",
    year: new Date().getFullYear(),
  })

  return (
    <main>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </main>
  )
}