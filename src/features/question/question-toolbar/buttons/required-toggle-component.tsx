import { Text, View } from 'react-native'
import { Switch } from '@react-native-material/core'

const QuestionRequiredToggleComponent = () => {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <Text>필수</Text>
      <Switch />
    </View>
  )
}

export default QuestionRequiredToggleComponent
