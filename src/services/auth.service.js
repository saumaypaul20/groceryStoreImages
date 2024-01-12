import auth from '@react-native-firebase/auth';

export const AuthService = {
  login: (username, password) => {
    return auth()
      .signInWithEmailAndPassword(username, password)
      .then(() => {
        console.log('User account created & signed in!');
        return true;
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }
      });
  },

  logout: () => {
    return auth()
      .signOut()
      .then(() => {
        console.log('User signed out!');
        return true;
      })
      .catch(error => {
        console.log(error);
      });
  },
};
