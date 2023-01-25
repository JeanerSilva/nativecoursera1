import { View, Text } from 'react-native';

export default function Content(props) {
  return (
    <View style={{ flex: 1 }}>
      <Text
        style={{
          fontSize: props.fontSize,
          padding: 20,
          marginVertical: 8,
          color: '#EDEFEE',
          textAlign: 'center',
        }}>
        {clickProps.content}
      </Text>
    </View>

  );
}
