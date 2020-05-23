import createNotification from '../createNotification';
import { historyPush } from '../../../router';
import { getPersistedUser } from '../../../utils';

export const requestLoginErrored = (error) => ({
  type: 'REQUEST_LOGIN_ERRORED',
  error,
});

export const requestLoginSucceeded = ({ email }) => ({
  type: 'REQUEST_LOGIN_SUCCEEDED',
  email,
});

export const requestLogin = (params) => (dispatch) => {
  const user = getPersistedUser();
  if (user) {
    historyPush('/');
    dispatch(requestLoginSucceeded({ email: user.email }));
    return dispatch(createNotification({ noteType: 'OK', message: 'Login Succesful' }));
  }

  if (!params.user || !params.password || !params.password) return false;

  params.firebase.auth().setPersistence(params.firebase.auth.Auth.Persistence.SESSION)
    .then(() => {
      params.firebase.auth().signInWithEmailAndPassword(params.user, params.password)
        .then((response) => {
          historyPush('/');
          dispatch(requestLoginSucceeded({ email: response.user.email }));
          return dispatch(createNotification({ noteType: 'OK', message: 'Login Succesful' }));
        })
        .catch((e) => {
          dispatch(requestLoginErrored({ error: e }));
          return dispatch(createNotification({ noteType: 'ERROR', message: e.message }));
        });
    })
    .catch((e) => {
      console.error('persistence login error', e);
    });
  return false;
};
