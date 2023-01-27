import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  Image,
  useColorScheme,
} from 'react-native';

export default function WelcomeScreen({ route }) {
  const colorScheme = useColorScheme();

  const thereisparams = route.params ? true : false

  const { itemqualquer } = {}
  const { itemaserpassado } = {}
  const { email } = {}
  const { password } = {}

  if (thereisparams) {
    itemqualquer = route.params
    itemaserpassado = route.params
    email = route.params
    password = route.params
  }


  return (
    <ScrollView
      style={[
        styles.container,
        colorScheme === 'light'
          ? { backgroundColor: '#fff' }
          : { backgroundColor: '#333333' },
      ]}>
      <View style={styles.headerWrapper}>
        <Image
          style={styles.image}
          source={require('../img/logo.png')}
          resizeMode="cover"
          accessible={true}
          accessibilityLabel={'Little Lemon Logo'}
        />

        <Text
          style={[
            styles.headerText,
            colorScheme === 'light'
              ? { color: '#333333' }
              : { color: '#EDEFEE' },
          ]}>
          Little Lemon
        </Text>
      </View>
      <Text
        style={[
          styles.regularText,
          colorScheme === 'light' ? { color: '#333333' } : { color: '#EDEFEE' },
        ]}>
        Little Lemon is a charming neighborhood bistro that serves simple food
        and classic cocktails in a lively but casual environment. We would love
        to hear your experience with us!
      </Text>
      {thereisparams &&
        <>
          <Text>itemqualquer: {JSON.stringify(itemqualquer)}</Text>
          <Text>itemaserpassado: {JSON.stringify(itemaserpassado)}</Text>
          <Text>email: {JSON.stringify(email)}</Text>
          <Text>password: {JSON.stringify(password)}</Text></>}

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    margin: 10,
  },
  headerText: {
    paddingRight: 10,
    paddingLeft: 20,
    paddingTop: 30,
    paddingBottom: 10,
    fontSize: 30,
    color: '#EDEFEE',
    textAlign: 'center',
  },
  regularText: {
    fontSize: 24,
    padding: 20,
    marginVertical: 8,
    color: '#EDEFEE',
    textAlign: 'center',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 20,
  },
});
