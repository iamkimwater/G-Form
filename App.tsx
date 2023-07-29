import { SafeAreaView } from 'react-native-safe-area-context'
import HeaderComponent from './src/features/ui/header-component'
import InnerApp from './src/features/ui/InnerApp'
import { Provider } from 'react-redux'
import store from './src/store/store'

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Provider store={store}>
        <HeaderComponent />
        <InnerApp />
      </Provider>
    </SafeAreaView>
  )
}

export default App
