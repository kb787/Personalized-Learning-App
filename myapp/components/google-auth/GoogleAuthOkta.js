import {View, StyleSheet, Button, Text} from 'react-native';
import {useAuth0, Auth0Provider} from 'react-native-auth0';

const GoogleAuthOkta = () => {
  const {authorize, clearSession, user, error, isLoading} = useAuth0();

  const handleUserLogin = async () => {
    try {
      await authorize();
    } catch (error) {
      console.log(`Unable to login due to error ${error}`);
    }
  };
  const handleUserLogout = async () => {
    try {
      await clearSession();
    } catch (error) {
      console.log(`Log out cancelled due to error ${error}`);
    }
  };

  const loggedIn = user !== undefined && user !== null;
  return (
    <View style={styles.container}>
      {loggedIn && <Text>You are logged in as {user.name}</Text>}
      {!loggedIn && <Text>You are not logged in</Text>}
      {error && <Text>{error.message}</Text>}

      <Button
        onPress={loggedIn ? handleUserLogout : handleUserLogin}
        title={loggedIn ? 'Log Out' : 'Log In'}
      />
    </View>
  );
};

export default GoogleAuthOkta;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
