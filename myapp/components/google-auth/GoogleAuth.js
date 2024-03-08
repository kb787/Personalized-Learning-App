
import { GoogleSignin,GoogleSigninButton,statusCodes } from '@react-native-google-signin/google-signin';
import {google_auth_client_id} from '@env'

const GoogleAuth = () => {
   GoogleSignin.configure({
    scopes: ['https://www.googleapis.com/auth/drive.readonly'], 
    webClientId:google_auth_client_id,
     });

    const handleSignInEvent = async () => {
     try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        console.log('Sign in cancelled');
      } else if (error.code === statusCodes.IN_PROGRESS) {
        console.log('Sign in in progress');
      } else {
        console.error('Google sign-in error', error);
      }
    }
  };  

  return (
    <div className = "GoogleAuth">
    <GoogleSigninButton
    style={{ width: 192, height: 48 }}
    size={GoogleSigninButton.Size.Wide}
    color={GoogleSigninButton.Color.Dark}
    onPress={handleSignInEvent}
    disabled={isSigninInProgress}
    />
    </div>
  )
}  

export default GoogleAuth ;

