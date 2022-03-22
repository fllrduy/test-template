import { useState } from 'react'
import logo from '@app/assets/images/logo.svg'
import './App.css'
import { useTranslation } from 'react-i18next'

export const App: React.FC = () => {
  const { t } = useTranslation()
  const [count, setCount] = useState(0)

  return (
    <div className='app'>
      <header className='app__header'>
        <img src={logo} className='app__logo' alt='logo' />
        <p>{t('app.hello-world')}</p>
        <p>
          <button type='button' onClick={() => setCount((count) => count + 1)}>
            {t('app.countFormat', { count: count })}
          </button>
        </p>
        <p>
          <a
            className='app__link'
            href='https://reactjs.org'
            target='_blank'
            rel='noopener noreferrer'
          >
            {t('app.learn-react')}
          </a>
        </p>
      </header>
    </div>
  )
}
