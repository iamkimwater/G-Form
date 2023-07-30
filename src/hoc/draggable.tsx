import { JSX } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

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
    <View style={{ flex: 1 }}>
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <TouchableOpacity
          onLongPress={drag}
          disabled={isActive}
          style={{
            backgroundColor: isActive ? '#c9c8c8' : '#e3e2e2',
            width: 70,
            borderRadius: 5,
          }}
        >
          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <MaterialIcons name="drag-handle" size={24} color="grey" />
          </View>
        </TouchableOpacity>
      </View>
      <View>{Component}</View>
    </View>
  )
}
export default Draggable
