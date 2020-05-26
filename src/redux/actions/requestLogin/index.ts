import createNotification from '../createNotification';
import { Dispatch } from 'redux';
// import 'firebase/auth';
import { FirebaseAuth } from '@firebase/auth-types';

import * as firebase from 'firebase/app';
import { historyPush } from '../../../router';
import { getPersistedUser } from '../../../utils';

export const REQUEST_LOGIN_ERRORED = 'REQUEST_LOGIN_ERRORED';
export const REQUEST_LOGIN_SUCCEEDED = 'REQUEST_LOGIN_SUCCEEDED';

interface RequestLoginErroredAction {
  type: typeof REQUEST_LOGIN_ERRORED,
  error: Error,
};

interface RequestLoginSucceededAction {
  type: typeof REQUEST_LOGIN_SUCCEEDED,
  user: {},
};

interface Params {
  firebase: { auth: FirebaseAuth },
  user: string,
  password: string,
}

export const requestLoginErrored = (error: Error):RequestLoginErroredAction => ({
  type: REQUEST_LOGIN_ERRORED,
  error,
});

export const requestLoginSucceeded = (user: {}):RequestLoginSucceededAction => ({
  type: REQUEST_LOGIN_SUCCEEDED,
  user,
});

export const requestLogin = (params: Params) => (dispatch: Dispatch<any>) => {
  const user = getPersistedUser();

  if (user) {
    historyPush('/');
    dispatch(requestLoginSucceeded(user));
    return dispatch(createNotification({ noteType: 'OK', message: 'Login Succesful' }));
  }


  if (!params.user || !params.password || !params.password) return false;

  params.firebase.auth().setPersistence(params.firebase.auth.Auth.Persistence.SESSION)
    .then(() => {
      params.firebase.auth().signInWithEmailAndPassword(params.user, params.password)
        .then((response) => {
          historyPush('/');
          dispatch(requestLoginSucceeded(response.user));
          return dispatch(createNotification({ noteType: 'OK', message: 'Login Succesful' }));
        })
        .catch((e: Error) => {
          dispatch(requestLoginErrored(e));
          return dispatch(createNotification({ noteType: 'ERROR', message: e.message }));
        });
    })
    .catch((e: Error) => {
      console.error('persistence login error', e);
    });
  return false;
};
