import { Navigate } from 'react-router-dom'
import headerStyle from './TheHeader.module.scss'

export default function TheHeader() {
  const toHome = () => {
    return <Navigate to="/" />
  }

  const toAbout = () => {
    return <Navigate to="/TheAbout" />
  }

  // const navigate = useNavigate()

  // const goHome = () => {
  //   navigate('/')
  // }

  // const goAbout = () => {
  //   navigate('/TheAbout')
  // }

  return (
    <>
      <header>
        <div className={headerStyle.inner}>
          <h1
            className={headerStyle.title}
            onClick={toHome}>
            OMDb API
          </h1>
          <div
            className={headerStyle.about}
            onClick={toAbout}>
            MY
          </div>
        </div>
      </header>
    </>
  )
}
