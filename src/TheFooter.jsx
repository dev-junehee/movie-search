import footerStyle from './TheFooter.module.scss'

export default function TheHeader() {
  return (
    <>
      <footer>
        <div className={footerStyle.inner}>
          <div className={footerStyle.copyright}>
            copyright ©<span className={footerStyle.thisyear}> 2023 </span>
            KIMJUNEHEE. All Rights Rreserved
          </div>
        </div>
      </footer>
    </>
  )
}
