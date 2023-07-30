import { JSX } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

const Draggable = (props: {
  options: {
    drag
    isActive
  }
}) => {
  const {
    options: { drag, isActive },
  } = props
  return (Component: JSX.Element) => (
    <View>
      <TouchableOpacity
        onLongPress={drag}
        disabled={isActive}
        style={{ backgroundColor: isActive ? '#b9b9b9' : 'white' }}
      >
        <View
          style={{
            backgroundColor: 'grey',
            height: 20,
            marginLeft: 10,
            marginRight: 10,
          }}
        >
          <Text>드래그 아이콘</Text>
        </View>
      </TouchableOpacity>
      {Component}
    </View>
  )
}
export default Draggable
