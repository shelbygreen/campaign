import '../styles/globals.css'
import { NotificationsProvider } from '@mantine/notifications'
import { MantineProvider } from '@mantine/core'

function App({ Component, pageProps }) {
  return (
  <MantineProvider>
    <NotificationsProvider>
    <Component {...pageProps} />
    </NotificationsProvider>
  </MantineProvider>
  )
}

export default  App