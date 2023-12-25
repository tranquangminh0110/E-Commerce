import Footer from 'src/components/Footer'
import RegisterHeader from 'src/components/RegisterHeader'

interface IProps {
  children?: React.ReactNode
}

export default function RegisterLayout({ children }: IProps) {
  return (
    <div>
      <RegisterHeader />
      {children}
      <Footer />
    </div>
  )
}
