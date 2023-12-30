import React from 'react'
import Footer from 'src/components/Footer'
import RegisterHeader from 'src/components/RegisterHeader'

interface IProps {
  children?: React.ReactNode
}

export default function RegisterLayout({ children }: IProps) {
  return (
    <React.Fragment>
      <RegisterHeader />
      {children}
      <Footer />
    </React.Fragment>
  )
}
