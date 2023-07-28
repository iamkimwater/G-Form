import { SafeAreaView } from 'react-native-safe-area-context'
import HeaderComponent from './src/features/ui/header-component'
import InnerApp from './src/features/ui/InnerApp'

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <HeaderComponent />
      <InnerApp />
    </SafeAreaView>
  )
}

export default App
