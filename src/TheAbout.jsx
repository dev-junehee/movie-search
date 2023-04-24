import aboutStyle from '~/TheAbout.module.scss'

export default function TheAbout() {
  return (
    <>
      <div className={aboutStyle.about}>
        <div className={aboutStyle.inner}>hello! about page</div>
      </div>
    </>
  )
}
