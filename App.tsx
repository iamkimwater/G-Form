import { SafeAreaView } from 'react-native-safe-area-context'
import HeaderComponent from './src/features/ui/header-component'
import InnerApp from './src/features/ui/InnerApp'
import { Provider } from 'react-redux'
import store from './src/store/store'
import { ActionSheetProvider } from '@expo/react-native-action-sheet'

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ActionSheetProvider>
        <Provider store={store}>
          <HeaderComponent />
          <InnerApp />
        </Provider>
      </ActionSheetProvider>
    </SafeAreaView>
  )
}

export default App
