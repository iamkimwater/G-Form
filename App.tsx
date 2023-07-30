import { SafeAreaView } from 'react-native-safe-area-context'
import { ActionSheetProvider } from '@expo/react-native-action-sheet'
import { Provider } from 'react-redux'
import store from './src/store'
import HeaderComponent from './src/features/ui/header-component'
import InnerApp from './src/features/ui/InnerApp'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <ActionSheetProvider>
          <Provider store={store}>
            <HeaderComponent />
            <InnerApp />
          </Provider>
        </ActionSheetProvider>
      </GestureHandlerRootView>
    </SafeAreaView>
  )
}

export default App
