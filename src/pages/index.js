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
          `...`,
          `<span class="highlight">ตาเห็นรูป รูปไม่เที่ยงเกิดดับ ตัวฉันไม่เที่ยงเกิดดับ</span>`,
          `<span class="highlight">หูได้ยินเสียง เสียงไม่เที่ยงเกิดดับ ตัวฉันไม่เที่ยงเกิดดับ</span>`,
          `<span class="highlight">จมูกได้กลิ่น กลิ่นไม่เที่ยงเกิดดับ ตัวฉันไม่เที่ยงเกิดดับ</span>`,
          `<span class="highlight">ลิ้นได้รส รสไม่เที่ยงเกิดดับ ตัวฉันไม่เที่ยงเกิดดับ</span>`,
          `<span class="highlight">กายสัมผัส ไม่เที่ยงเกิดดับ ตัวฉันไม่เที่ยงเกิดดับ</span>`,
          `<span class="highlight">ใจคิดนึก ไม่เที่ยงเกิดดับ ตัวฉันไม่เที่ยงเกิดดับ</span>`],
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
            <video className="bg-video__content" autoPlay={true} loop muted>
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
            
            <div className="text">
            <h1><span style={{ whiteSpace: 'pre' }} ref={el} /></h1>
            </div>
            
            
            
        </div>
    </section>
    </div>
    </>
  )
}

export default IndexPage