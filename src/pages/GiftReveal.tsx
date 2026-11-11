import { useState } from 'react'
import giftImage from '../assets/응주빼빼로선물.png'
import letterPhoto from '../assets/내가네옆으로갈테니깐.jpg'

// 편지를 바꾸려면 이 문단들을 수정하세요.
const letterParagraphs = [
  '은주야, 우리 벌써 130일이네!! 애기 빼빼로 좋아하는거 아는데 못줘서 너무 마음에 걸렸어..',
  '그래서 사실 오늘은 공부하는 겸사겸사 이거 개발하구 있었어 ㅋㅋㅋㅋㅋㅋ ㅎㅎㅎ',
  '서울에서 두달동안 고생 너무 많았어 애기야. 많이 춥고, 씁쓸했을거 같어',
  '몸도 마음도 힘든 타지에서 마음 아프게해서 미안했어. 그래두 우리 사이는 분명 앞으로 나아가고 있다는 확신이 들어.',
  '우리의 불안을 처음으로 직시하고 나서, 그리고 이번이 마지막으로 남아있던 얽힌 실뭉치를 이번에 푼거라고 생각하구 있어..',
  '따뜻한 부산와서 언능 힐링하자. 언능 집으루와!',
  '내가 행복하구 따뜻한 집이 되어줄게!!! 멋지고 당찬 우리 애기! 잘하고 있구 잘해왔어!',
  '사랑해 은주야 아주많이!!!!!',
]

export default function GiftReveal() {
  const [imageError, setImageError] = useState(false)
  const [retry, setRetry] = useState(0)

  return (
    <div className="reveal-grid">
      <article className="letter-paper" aria-labelledby="letter-title">
        <div className="letter-topline"><span>A LETTER TO YOU</span><span>11. 11.</span></div>
        <h2 id="letter-title">사랑하는 은주에게,</h2>
        <figure className="photo-print letter-photo">
          <img src={letterPhoto} width="400" height="225" alt="내가 네 옆으로 갈 테니까라는 자막이 담긴 예능 장면" />
        </figure>
        <div className="letter-body">{letterParagraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
        <p className="letter-signature">존잘테토,<br /><span>유성이가</span><span className="signature-heart" aria-hidden="true">♡</span></p>
        <span className="letter-postscript">p.s. 하..보구싶어 죽겠어 너 진짜 너무이쁘다야</span>
      </article>
      <article className="coupon-paper" aria-labelledby="coupon-title">
        <span className="eyebrow">SOMETHING SWEET</span>
        <h2 id="coupon-title">은주 몫의 달콤함</h2>
        <p className="coupon-description">맛있게 먹고, 오늘도 행복하기!</p>
        <div className="coupon-image-wrap">
          <img key={retry} src={retry ? `${giftImage}?retry=${retry}` : giftImage} width="800" height="1670" alt="은주를 위한 빼빼로 기프티콘. 교환용 바코드와 사용 안내가 포함된 원본 이미지" onError={() => setImageError(true)} hidden={imageError} />
          {imageError && <div className="image-error" role="alert"><p>이미지를 불러오지 못했어.<br />한 번 더 열어볼까?</p><button className="text-button" onClick={() => { setImageError(false); setRetry(retry + 1) }}>다시 불러오기 ↻</button></div>}
        </div>
        <a className="primary-button download-button" href={giftImage} download="응쥬빼빼로.png"><svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 3v12m-5-5 5 5 5-5M5 16v5h14v-5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>기프티콘 저장하기</a>
        <p className="save-note">저장이 안 되면 이미지를 꾹 눌러 저장해줘.</p>
      </article>
    </div>
  )
}
