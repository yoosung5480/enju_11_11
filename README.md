# 은주에게, 달콤한 마음 ♡

빼빼로데이 선물용 React + TypeScript + Vite 정적 웹사이트입니다.

표지에서 **선물 열어보기** → 사귄 날짜 질문에 **130** 입력 → 편지와 기프티콘이 표시됩니다. 다른 답이나 빈 입력은 선물을 열지 않습니다. 기프티콘 저장과 처음부터 다시 보기를 지원합니다. 새로고침하면 표지로 돌아갑니다.

## 실행

Node.js 22.12 이상을 사용합니다.

```sh
npm ci
npm run dev
```

```sh
npm run lint
npm run build
npm run preview
```

`build`는 TypeScript 검사 후 `dist/`에 정적 파일을 만듭니다.

## 편지와 이미지 수정

- 편지: `src/pages/GiftReveal.tsx`의 `letterParagraphs` 배열. 현재 문구는 수정 가능한 초안입니다.
- 질문과 정답: `src/pages/HomePage.tsx`의 질문 문구와 `checkAnswer` 함수.
- 선물: `src/assets/응주빼빼로선물.png`. 원본 비율과 바코드를 유지합니다.
- 디자인: `DESIGN.md`, `src/index.css`, `src/App.css`.

## GitHub Pages 배포

이 `frontend` 폴더 자체가 Git 저장소 루트입니다. `.github/workflows/deploy.yml`은 `master` 또는 `main` 푸시 시 검사, 빌드, Pages 배포를 실행합니다.

1. 이 저장소를 GitHub에 올립니다. 선물 이미지 파일도 포함해야 합니다.
2. 저장소 **Settings → Pages → Build and deployment → Source**에서 **GitHub Actions**를 선택합니다.
3. `master`/`main`에 푸시하거나 **Actions → Deploy gift to GitHub Pages → Run workflow**를 실행합니다.
4. 배포가 끝나면 Pages 설정 또는 Actions의 배포 결과에 사이트 주소가 표시됩니다.

Vite `base: './'`와 단일 페이지 상태 전환을 사용하므로 저장소 이름 아래의 경로에서도 이미지와 스크립트가 작동합니다. 서버·API·환경변수는 필요 없습니다. 실제 배포는 아직 실행하지 않았습니다.

퀴즈는 화면 연출용입니다. 정적 사이트의 소스와 이미지 URL은 열람 가능하므로 기프티콘 접근을 보안상 차단하는 장치는 아닙니다.

공식 참고: [Vite 정적 배포](https://vite.dev/guide/static-deploy.html#github-pages), [GitHub Pages 워크플로](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages).
