import * as firebase from 'firebase/app';
import 'firebase/auth';
import { Dispatch } from 'redux';
import { createNotification } from '../createNotification/index.ts';
import { historyPush } from '../../../router';

export const REQUEST_LOGOUT_ERRORED = 'REQUEST_LOGOUT_ERRORED';
export const REQUEST_LOGOUT_SUCCEEDED = 'REQUEST_LOGOUT_SUCCEEDED';

interface RequestLogoutErroredAction {
  type: typeof REQUEST_LOGOUT_ERRORED,
  error: Error,
}

interface RequestLogoutSucceededAction {
  type: typeof REQUEST_LOGOUT_SUCCEEDED,
}

export const requestLogoutErrored = (error: Error):RequestLogoutErroredAction => ({
  type: REQUEST_LOGOUT_ERRORED,
  error,
});

export const requestLogoutSucceeded = ():RequestLogoutSucceededAction => ({
  type: REQUEST_LOGOUT_SUCCEEDED,
});

export const requestLogout = () => (dispatch: Dispatch<any>) => {
  firebase.auth().signOut()
    .then(() => {
      historyPush('/login');
      dispatch(requestLogoutSucceeded());
      return dispatch(createNotification({ noteType: 'OK', message: 'Logout Succesful' }));
    })
    .catch((e: Error) => {
      dispatch(requestLogoutErrored(e));
      return dispatch(createNotification({ noteType: 'ERROR', message: e.message }));
    });
};
