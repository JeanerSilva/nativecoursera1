import { View, Text } from 'react-native';

export default function Title(props) {
  return (
    <View style={{ flex: 0.1 }}>
      <Text
        style={{
          padding: 20,
          fontSize: props.fontSize,
          color: 'white',
          textAlign: 'center',
        }} numberOfLines={3}>
        {props.title}
      </Text>
    </View>
  );
}
