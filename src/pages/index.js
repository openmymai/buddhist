import React, { useEffect, useRef } from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { Helmet } from 'react-helmet'
import Typed from 'typed.js'
import bgvdo from '../videos/background-vdo.mp4'
import '../scss/main.scss'

// markup
const IndexPage = () => {

  const el = useRef(null)
  const typed = useRef(null)
  useEffect(() => {
    const options = {
      strings: [
          `ตาเห็นรูป รูปไม่เที่ยงเกิดดับ ตัวฉันไม่เที่ยงเกิดดับ`,
          `หูได้ยินเสียง เสียงไม่เที่ยงเกิดดับ ตัวฉันไม่เที่ยงเกิดดับ`,
          `จมูกได้กลิ่น กลิ่นไม่เที่ยงเกิดดับ ตัวฉันไม่เที่ยงเกิดดับ`,
          `ลิ้นได้รส รสไม่เที่ยงเกิดดับ ตัวฉันไม่เที่ยงเกิดดับ`,
          `กายสัมผัส ไม่เที่ยงเกิดดับ ตัวฉันไม่เที่ยงเกิดดับ`,
          `ใจคิดนึก ไม่เที่ยงเกิดดับ ตัวฉันไม่เที่ยงเกิดดับ`,
          `ตาเห็นรูป รูปไม่เที่ยงเกิดดับ ตัวฉันไม่เที่ยงเกิดดับ`,
          `รูปเป็นธรรมชาติชนิดหนึ่ง`,
          `เกิดจากเหตุปัจจัยมาประชุมปรุงแต่งชั่วคราว แล้วแตกสลาย`,
          `ไม่เที่ยง เป็นทุกข์ เป็นอนัตตา`,
          `ไม่มีตัวตนเป็นของตนเอง`,
          `ไม่ควรไปยึดมั่นถือมั่นว่าสิ่งนั้นเป็นของเรา เป็นเรา เป็นตัวตนของเรา ไม่เที่ยงเกิดดับ`,
          `หูได้ยินเสียง เสียงไม่เที่ยงเกิดดับ ตัวฉันไม่เที่ยงเกิดดับ`,
          `เสียงเป็นธรรมชาติชนิดหนึ่ง`,
          `เกิดจากเหตุปัจจัยมาประชุมปรุงแต่งชั่วคราว แล้วแตกสลาย`,
          `ไม่เที่ยง เป็นทุกข์ เป็นอนัตตา`,
          `ไม่มีตัวตนเป็นของตนเอง`,
          `ไม่ควรไปยึดมั่นถือมั่นว่าสิ่งนั้นเป็นของเรา เป็นเรา เป็นตัวตนของเรา ไม่เที่ยงเกิดดับ`,
          `จมูกได้กลิ่น กลิ่นไม่เที่ยงเกิดดับ ตัวฉันไม่เที่ยงเกิดดับ`,
          `กลิ่นเป็นธรรมชาติชนิดหนึ่ง`,
          `เกิดจากเหตุปัจจัยมาประชุมปรุงแต่งชั่วคราว แล้วแตกสลาย`,
          `ไม่เที่ยง เป็นทุกข์ เป็นอนัตตา`,
          `ไม่มีตัวตนเป็นของตนเอง`,
          `ไม่ควรไปยึดมั่นถือมั่นว่าสิ่งนั้นเป็นของเรา เป็นเรา เป็นตัวตนของเรา ไม่เที่ยงเกิดดับ`,
          `ลิ้นได้รส รสไม่เที่ยงเกิดดับ ตัวฉันไม่เที่ยงเกิดดับ`,
          `รสเป็นธรรมชาติชนิดหนึ่ง`,
          `เกิดจากเหตุปัจจัยมาประชุมปรุงแต่งชั่วคราว แล้วแตกสลาย`,
          `ไม่เที่ยง เป็นทุกข์ เป็นอนัตตา`,
          `ไม่มีตัวตนเป็นของตนเอง`,
          `ไม่ควรไปยึดมั่นถือมั่นว่าสิ่งนั้นเป็นของเรา เป็นเรา เป็นตัวตนของเรา ไม่เที่ยงเกิดดับ`,
          `กายสัมผัส ไม่เที่ยงเกิดดับ ตัวฉันไม่เที่ยงเกิดดับ`,
          `สัมผัสเป็นธรรมชาติชนิดหนึ่ง`,
          `เกิดจากเหตุปัจจัยมาประชุมปรุงแต่งชั่วคราว แล้วแตกสลาย`,
          `ไม่เที่ยง เป็นทุกข์ เป็นอนัตตา`,
          `ไม่มีตัวตนเป็นของตนเอง`,
          `ไม่ควรไปยึดมั่นถือมั่นว่าสิ่งนั้นเป็นของเรา เป็นเรา เป็นตัวตนของเรา ไม่เที่ยงเกิดดับ`,
          `ใจคิดนึก ไม่เที่ยงเกิดดับ ตัวฉันไม่เที่ยงเกิดดับ`,
          `ความคิดเป็นธรรมชาติชนิดหนึ่ง`,
          `เกิดจากเหตุปัจจัยมาประชุมปรุงแต่งชั่วคราว แล้วแตกสลาย`,
          `ไม่เที่ยง เป็นทุกข์ เป็นอนัตตา`,
          `ไม่มีตัวตนเป็นของตนเอง`,
          `ไม่ควรไปยึดมั่นถือมั่นว่าสิ่งนั้นเป็นของเรา เป็นเรา เป็นตัวตนของเรา ไม่เที่ยงเกิดดับ`,
          `รูป ร่างกาย อย่างใดอย่างหนึ่งที่เป็นอดีต อนาคต และปัจจุบัน`,
          `ภายในหรือภายนอก หยาบหรือละเอียด เลวหรือประณีต ไกลหรือใกล้`,
          `ทั้งหมดเป็นธรรมชาติชนิดหนึ่ง เกิดจากเหตุปัจจัยมาประชุมปรุงแต่งชั่วคราว แล้วแตกสลาย`,
          `ไม่มีตัวตนเป็นของตนเอง ไม่ควรไปยึดมั่นถือมั่นว่าสิ่งนั้นเป็นของเรา เป็นเรา เป็นตัวตนของเรา`,
          `ไม่เที่ยงเกิดดับ`,
          `เวทนา ความพอใจไม่พอใจ อย่างใดอย่างหนึ่งที่เป็นอดีต อนาคต และปัจจุบัน`,
          `ภายในหรือภายนอก หยาบหรือละเอียด เลวหรือประณีต ไกลหรือใกล้`,
          `ทั้งหมดเป็นธรรมชาติชนิดหนึ่ง เกิดจากเหตุปัจจัยมาประชุมปรุงแต่งชั่วคราว แล้วแตกสลาย`,
          `ไม่มีตัวตนเป็นของตนเอง ไม่ควรไปยึดมั่นถือมั่นว่าสิ่งนั้นเป็นของเรา เป็นเรา เป็นตัวตนของเรา`,
          `ไม่เที่ยงเกิดดับ`,
          `สัญญา ความจำ อย่างใดอย่างหนึ่งที่เป็นอดีต อนาคต และปัจจุบัน`,
          `ภายในหรือภายนอก หยาบหรือละเอียด เลวหรือประณีต ไกลหรือใกล้`,
          `ทั้งหมดเป็นธรรมชาติชนิดหนึ่ง เกิดจากเหตุปัจจัยมาประชุมปรุงแต่งชั่วคราว แล้วแตกสลาย`,
          `ไม่มีตัวตนเป็นของตนเอง ไม่ควรไปยึดมั่นถือมั่นว่าสิ่งนั้นเป็นของเรา เป็นเรา เป็นตัวตนของเรา`,
          `ไม่เที่ยงเกิดดับ`,
          `สังขาร ความคิด อย่างใดอย่างหนึ่งที่เป็นอดีต อนาคต และปัจจุบัน`,
          `ภายในหรือภายนอก หยาบหรือละเอียด เลวหรือประณีต ไกลหรือใกล้`,
          `ทั้งหมดเป็นธรรมชาติชนิดหนึ่ง เกิดจากเหตุปัจจัยมาประชุมปรุงแต่งชั่วคราว แล้วแตกสลาย`,
          `ไม่มีตัวตนเป็นของตนเอง ไม่ควรไปยึดมั่นถือมั่นว่าสิ่งนั้นเป็นของเรา เป็นเรา เป็นตัวตนของเรา`,
          `ไม่เที่ยงเกิดดับ`,
          `วิญญาณ ความรู้ อย่างใดอย่างหนึ่งที่เป็นอดีต อนาคต และปัจจุบัน`,
          `ภายในหรือภายนอก หยาบหรือละเอียด เลวหรือประณีต ไกลหรือใกล้`,
          `ทั้งหมดเป็นธรรมชาติชนิดหนึ่ง เกิดจากเหตุปัจจัยมาประชุมปรุงแต่งชั่วคราว แล้วแตกสลาย`,
          `ไม่มีตัวตนเป็นของตนเอง ไม่ควรไปยึดมั่นถือมั่นว่าสิ่งนั้นเป็นของเรา เป็นเรา เป็นตัวตนของเรา`,
          `ไม่เที่ยงเกิดดับ`,
          `อุปทานขันธ์ 5 เป็นธรรมชาติชนิดหนึ่ง`,
          `เกิดจากเหตุปัจจัยมาประชุมปรุงแต่งชั่วคราว แล้วแตกสลาย`,
          `ไม่มีตัวตนเป็นของตนเอง ไม่ควรไปยึดมั่นถือมั่นว่าสิ่งนั้นเป็นของเรา เป็นเรา เป็นตัวตนของเรา`,
          `ไม่เที่ยงเกิดดับ`,
          `รูป ร่างกาย อย่างใดอย่างหนึ่งที่เป็นอดีต อนาคต และปัจจุบัน`,
          `ภายในหรือภายนอก หยาบหรือละเอียด เลวหรือประณีต ไกลหรือใกล้`,
          `ทั้งหมดเป็นธรรมชาติชนิดหนึ่ง เกิดจากเหตุปัจจัยมาประชุมปรุงแต่งชั่วคราว กำลังจะแตกสลาย`,
          `ไม่มีตัวตนเป็นของตนเอง ไม่ควรไปยึดมั่นถือมั่นว่าสิ่งนั้นเป็นของเรา เป็นเรา เป็นตัวตนของเรา`,
          `ไม่เที่ยงเกิดดับ`
        ],
      typeSpeed: 50,
      loop: true,
    };
    typed.current = new Typed(el.current, options)

    return () => {
      typed.current.destroy()
    }
  }, [])
  return (
    <>
    <Helmet>
      <title>I am Sirisak Chantanate</title>
      <meta itemprop="name" content="Sirisak Chantanate" />
      <meta name="Description"
            content="Nutrigenomics lover, I really love share the health knowledge." />

      <meta name="twitter:title" content="Sirisak Chantanate" />
      <meta name="twitter:description"
            content="Nutrigenomics lover, I really love share the health knowledge." />
      <meta property="og:title" />
      <meta property="og:url" content="https://openmymai.github.io/" />
      <meta property="og:description"
            content="Nutrigenomics lover, I really love share the health knowledge." />
    </Helmet>
    <div className="overflow-wrap">
    <section id="home" className="flex section--dark">
        <div className="bg-video">
        <video className="bg-video__content" autoPlay={true} loop muted playsInline>
                <source src={bgvdo} type="video/mp4" />
            </video>
        </div>
        <div className="flex">
            <div className="profile">
              <a 
                data-a11y="false"
                aria-label="Link to https://openmymai.github.io/nutrigenomics"
                href="https://openmymai.github.io/nutrigenomics"
                className="">
              <StaticImage className="profile__image" src="../images/me.jpeg" />
              </a>
                <div className="profile__social-group">
                    <span className="profile__social-network">
                        <a 
                           data-a11y="false"
                           aria-label="Link to https://www.instagram.com/neutronix/"
                           href="https://www.instagram.com/neutronix/"
                           className="">
                            <i className="fab fa-instagram"></i>
                        </a>
                    </span>
                    <span className="profile__social-network">
                        <a 
                           data-a11y="false"
                           aria-label="Link to https://www.linkedin.com/in/sirisak-chantanate-b0b786111/"
                           href="https://www.linkedin.com/in/sirisak-chantanate-b0b786111/"
                           className="">
                            <i className="fab fa-linkedin"></i>
                        </a>
                    </span>
                    <span className="profile__social-network">
                        <a 
                           data-a11y="false"
                           aria-label="Link to https://github.com/openmymai"
                           href="https://github.com/openmymai"
                           className="">
                            <i className="fab fa-github"></i>
                        </a>
                    </span>
                    <span className="profile__social-network">
                        <a 
                           data-a11y="false"
                           aria-label="Link to https://openmymai.github.io/nutrigenomics"
                           href="https://openmymai.github.io/nutrigenomics"
                           className="">
                            <i className="fas fa-globe-asia"></i>
                        </a>
                    </span>
                </div>
            </div>
            
            <h1><div className="text">วิปัสสนาภาวนา พิจารณาขันธ์ 5 อินทรีย์ 6</div></h1>
            
            <h1>
              <div className="text">
                <span style={{ whiteSpace: 'pre' }} ref={el} />
              </div>
            </h1>
            
            
        </div>
    </section>
    </div>
    </>
  )
}

export default IndexPage
