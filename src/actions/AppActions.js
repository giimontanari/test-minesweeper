import { ACT_APP_CHANGE } from "./ActionTypes";

// Creo una instancia de tipo CrudAction para usarla de forma local
//const action = new CrudAction(service, CHANGE_CONFIG_SETTINGS_PROPS);

export function actionChangeAppProps(props) {
	return (dispatch, getStore) => {
		dispatch({
			type: ACT_APP_CHANGE,
			props: props
		});
	};
}

export function actionLogin(values, success) {
	return (dispatch, getStore) => {
		dispatch({
			type: ACT_APP_CHANGE,
			props: {
				loading: true
			}
		});
		//Promesa que simula la espera de respuesta de un servicio
		espera()
			.then(response => {
				dispatch({
					type: ACT_APP_CHANGE,
					props: {
						login: true,
						username: values.username,
						loading: false
					}
				});
				if (success) {
					success();
				}
			})
			.catch(error => {
				console.log("error en Promesa", error);
			});
	};
}

// Promesa que debe ser implementada con el servicio elegido
function espera() {
	return new Promise(async (resolve, reject) => {
		setTimeout(() => resolve("Resuelve la promesa"), 4000);
	});
}

export function actionLogout(values, success) {
	return (dispatch, getStore) => {
		dispatch({
			type: ACT_APP_CHANGE,
			props: {
				login: false,
				username: ""
			}
		});
		if (success) {
			success();
		}
	};
}

export function actionLoading(value) {
	return (dispatch, getStore) => {
		dispatch({
			type: ACT_APP_CHANGE,
			props: { loading: value }
		});
		var timeoutId = setTimeout(console.log("ya paso el tiempo"), 7000);
		dispatch({
			type: ACT_APP_CHANGE,
			props: { loading: false }
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

async function asyncGetSponsorsList(name, page, size) {
		 try {
			 let response = await SponsorService.getSponsorsList(name, page, size);
			 return response;
		 } catch (error) {
			 return error;
	 }
}

async function asyncCreateSponsor(values) {
		 try {
			 let response = await SponsorService.createSponsor(values);
			 return response;
		 } catch (error) {
			 return error;
		}
}

export function actionUpdateSponsor(idSponsor, values, callback) {
		 return (dispatch, getStore) => {
			 dispatch({
				 type: ACT_APP_CHANGE,
				 props: {
					 loading: true
				 }
			 });
			 asyncUpdateSponsor(idSponsor, values)
				 .then(response => {
					 if (
						 response.code &&
						 (response.code === 42215104 || response.code === 42215105)
					 ) {
						 callback(WARNING);
					 } else {
						 callback(SUCCESS);
					 }
					 dispatch({
						 type: ACT_APP_CHANGE,
						 props: {
							 loading: false
						 }
					 });
				 })
				 .catch(error => callback(ERROR));
		};
}

async function asyncUpdateSponsor(idSponsor, values) {
		 try {
			 let response = await SponsorService.updateSponsor(idSponsor, values);
			 return response;
		 } catch (error) {
			 return error;
	}
}

export function actionDeleteSponsor(idSponsor, callback) {
		 return (dispatch, getStore) => {
			 dispatch({
			 type: ACT_APP_CHANGE,
				 props: {
					 loading: true
				 }
			 });
			 asyncDeleteSponsor(idSponsor)
				 .then(response => {
				 if (
						 response.code &&
						 UtilProyect.getHttpStatusCode(response.code) === 41215103
					 ) {
						 callback(WARNING);
					 } else {
						 callback(SUCCESS);
					 }
				 })
				 .catch(error => {
					 callback(ERROR);
				 })
				 .then(() => {
					 dispatch({
						 type: ACT_APP_CHANGE,
						 props: {
							 loading: false
						 }
				 });
			 });
	 };
}

async function asyncDeleteSponsor(idSponsor) {
		 let response = await SponsorService.deleteSponsor(idSponsor);
		 return response;
}


export function actionGetSponsorsList(name, page, size) {
 return (dispatch, getStore) => {
	 dispatch({
		 type: ACT_APP_CHANGE,
		 props: {
			 loading: true
		 }
	 });
	 asyncGetSponsorsList(name, page, size).then(response => {
		 dispatch({
			 type: "CHANGE_PROPS_SPONSOR",
			 props: {
				 sponsorsList: response
			 }
		 });
		 dispatch({
			 type: ACT_APP_CHANGE,
			 props: {
				 loading: false
			 }
		 });
	 });
 };
}

export function actionCreateSponsor(values, callback) {
 return (dispatch, getStore) => {
	 dispatch({
		 type: ACT_APP_CHANGE,
		 props: {
			 loading: true
		 }
	 });
	 asyncCreateSponsor(values)
		 .then(response => {
			 if (
				 response.code &&
				 (response.code === 42215104 || response.code === 42215105)
			 ) {
				 callback(WARNING);
			 } else {
				 callback(SUCCESS);
			 }
			 dispatch({
				 type: ACT_APP_CHANGE,
				 props: {
					 loading: false
				 }
			 });
		 })
		 .catch(error => callback(ERROR));
	};
}
*/
