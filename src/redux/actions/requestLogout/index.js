import createNotification from '../createNotification';
import { historyPush } from '../../../router';

export const requestLogoutErrored = (error) => ({
  type: 'REQUEST_LOGOUT_ERRORED',
  error,
});

export const requestLogoutSucceeded = () => ({
  type: 'REQUEST_LOGOUT_SUCCEEDED',
});

export const requestLogout = ({ firebase }) => (dispatch) => {

  firebase.auth().signOut()
    .then(() => {
      historyPush('/login');
      dispatch(requestLogoutSucceeded());
      return dispatch(createNotification({ noteType: 'OK', message: 'Logout Succesful' }));
    })
    .catch((e) => {
      dispatch(requestLogoutErrored({ error: e }));
      return dispatch(createNotification({ noteType: 'ERROR', message: e.message }));
    });
};
