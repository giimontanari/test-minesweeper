import { CHPROPS_AUTH_USER } from "./ActionTypes";
import AuthService from "../provider/auth/AuthService";

// Creo una instancia de tipo CrudAction para usarla de forma local
//const action = new CrudAction(service, CHANGE_CONFIG_SETTINGS_PROPS);

export function login(user, pass, successCalback, errorCallback) {
	return (dispatch, getStore) => {
		AuthService.login(
			user,
			pass,
			res => {
				dispatch({
					type: CHPROPS_AUTH_USER,
					props: res
				});
				successCalback();
			},
			errorCallback
		);
	};
}

export function createAccount(user, successCalback, errorCallback) {
	return (dispatch, getStore) => {
		AuthService.createAccount(
			user,
			res => {
				dispatch({
					type: "CREATE_USER",
					props: res
				});
				successCalback();
			},
			errorCallback
		);
	};
}

export function forgotPassword(email, callback) {
	return (dispatch, getStore) => {
		AuthService.forgotPassword(email)
			.then(function(resp) {
				callback(true);
			})
			.catch(function(error) {
				callback(false);
			});
	};
}

export function confirmPasswordReset(code, password, callback) {
	return (dispatch, getStore) => {
		AuthService.confirmPasswordReset(code, password)
			.then(function(resp) {
				callback(true, resp);
			})
			.catch(function(error) {
				callback(false, error);
			});
	};
}

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
