import React, { FC, ReactElement } from 'react'
import { render, RenderOptions } from '@testing-library/react'
import '@app/localization'
import '@testing-library/jest-dom/extend-expect'

const AllTheProviders: FC = ({ children }) => {
  return (
    <>
      {/* <ThemeProvider theme="light"> */}
      <div id='dialog-container' />
      {children}
      {/* </ThemeProvider> */}
    </>
  )
}

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, 'queries'>) =>
  render(ui, { wrapper: AllTheProviders, ...options })

export * from '@testing-library/react'

export { customRender as render }
