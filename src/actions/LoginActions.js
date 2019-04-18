import {
	CHANGE_APP_PROPS,
	CHPROPS_LOGIN_REGISTER,
	CHPROPS_LOGIN_RECOVERY_PASSWORD
} from "./ActionTypes";

// Creo una instancia de tipo CrudAction para usarla de forma local
//const action = new CrudAction(service, CHANGE_CONFIG_SETTINGS_PROPS);

export function actionChangeRecoveryPasswordProps(props) {
	return (dispatch, getStore) => {
		dispatch({
			type: CHPROPS_LOGIN_RECOVERY_PASSWORD,
			props: props
		});
	};
}

export function actionSetCompleteRegistration(value) {
	return {
		type: CHPROPS_LOGIN_REGISTER,
		completeRegistration: value
	};
}

export const actionLoginGoogle = () => {
	return dispatch => {
		dispatch({
			type: "ACTION_LOGIN_GOOGLE"
		});
		/*var provider = new firebase.auth.GoogleAuthProvider();
		firebase
			.auth()
			.signInWithPopup(provider)
			.then(function(result) {
				var user = result.user;
				user.socialProvider = result.credential.providerId;
				loginUserSuccess(dispatch, user);
			})
			.catch(function(error) {
				loginUserFail(dispatch, error);
			});*/
	};
};

export const actionLoginFacebook = () => {
	return dispatch => {
		dispatch({
			type: "ACTION_LOGIN_FACEBOOK"
		});
		/*var provider = new firebase.auth.FacebookAuthProvider();
		firebase
			.auth()
			.signInWithPopup(provider)
			.then(function(result) {
				var user = result.user;
				user.socialProvider = result.credential.providerId;
				loginUserSuccess(dispatch, user);
			})
			.catch(function(error) {
				loginUserFail(dispatch, error);
			});*/
	};
};

/* Ejemple de uso del servicio CrudAction
export function actionListConfigSetting(params, callback) {
  params = params || {};
  return (dispatch, getStore) => {
    dispatch({
      type: CHANGE_CONFIG_SETTINGS_PROPS,
      props: { gridFetchingData: true }
    });
    // Llamada al servicio list
    action
      .list(params)
      .then(response => {
        if (response.isSessionExpired()) {
          dispatch(actionLogout);
          return;
        }
    }
*/
