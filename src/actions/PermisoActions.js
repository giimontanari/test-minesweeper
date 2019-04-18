import PermisoService from "../provider/permission/PermisoService";
import { SUCCESS, ERROR, WARNING } from "../common/Util";
import Util from "../common/Util";
import { ACT_APP_CHANGE, ACT_PERMISO_CHANGE } from "./ActionTypes";

export function actionGetPermisosListFilters(
	permisoName,
	permisoDescription,
	folder,
	page,
	size
) {
	return dispatch => {
		dispatch({
			type: ACT_APP_CHANGE,
			props: {
				loading: true
			}
		});
		asyncGetPermisosListFilters(permisoName, permisoDescription, folder).then(
			response => {
				dispatch({
					type: ACT_PERMISO_CHANGE,
					props: {
						permisosList: response
					}
				});
				dispatch({
					type: ACT_APP_CHANGE,
					props: {
						loading: false
					}
				});
			}
		);
	};
}

async function asyncGetPermisosListFilters(
	permisoName,
	permisoDescription,
	folder
) {
	try {
		return null;
	} catch (error) {
		return error;
	}
}

export function actionGetPermisosList(searchText, offset, limit, callback) {
	return dispatch => {
		dispatch({
			type: ACT_APP_CHANGE,
			props: {
				loading: true
			}
		});
		asyncGetPermisoList(searchText, offset, limit)
			.then(response => {
				dispatch({
					type: ACT_PERMISO_CHANGE,
					props: {
						permisosList: response.resulSet ? response.resulSet : [],
						total: response.pagination.total ? response.pagination.total : 0
					}
				});
				dispatch({
					type: ACT_APP_CHANGE,
					props: {
						loading: false
					}
				});
			})
			.catch(error => {
				callback(ERROR);
			});
	};
}

async function asyncGetPermisoList(searchText, code, offset, limit) {
	try {
		let response = await PermisoService.getPermisoList(
			searchText,
			code,
			offset,
			limit
		);
		return response;
	} catch (error) {
		return error;
	}
}

export function actionCreatePermiso(values, callback) {
	return (dispatch, store) => {
		dispatch({
			type: ACT_APP_CHANGE,
			props: {
				loading: true
			}
		});
		asyncCreatePermiso(values)
			.then(response => {
				dispatch({
					type: ACT_APP_CHANGE,
					props: {
						loading: false
					}
				});
				callback(SUCCESS);
			})
			.catch(error => {
				dispatch({
					type: ACT_APP_CHANGE,
					props: {
						loading: false
					}
				});
				callback(ERROR);
			});
	};
}

async function asyncCreatePermiso(values) {
	let response = await PermisoService.setPermiso(values);
	return response;
}

export function actionUpdatePermiso(permisoId, values, callback) {
	return (dispatch, store) => {
		dispatch({
			type: ACT_APP_CHANGE,
			props: { loading: true }
		});
		asyncUpdatePermiso(permisoId, values)
			.then(response => {
				let permisoList = store().permiso.permisosList;
				const permisoIndex = permisoList.findIndex(e => {
					return e.id === response.id;
				});
				permisoList[permisoIndex] = response;
				dispatch({
					type: ACT_PERMISO_CHANGE,
					props: {
						permiso: response,
						permisosList: permisoList
					}
				});
				callback(SUCCESS);
			})
			.catch(error => {
				dispatch({
					type: ACT_APP_CHANGE,
					props: { loading: false }
				});
				callback(ERROR);
			});
	};
}

async function asyncUpdatePermiso(permisoId, values) {
	let response = await PermisoService.updatePermiso(permisoId, values);
	return response;
}

export function actionDeletePermiso(permisoId, callback) {
	return dispatch => {
		dispatch({
			type: ACT_APP_CHANGE,
			props: {
				loading: true
			}
		});
		asyncDeletePermiso(permisoId)
			.then(response => {
				dispatch({
					type: ACT_APP_CHANGE,
					props: {
						loading: false
					}
				});
				callback(SUCCESS);
			})
			.catch(error => {
				dispatch({
					type: ACT_APP_CHANGE,
					props: {
						loading: false
					}
				});
				callback(ERROR);
			});
	};
}

async function asyncDeletePermiso(permisoId) {
	let response = await PermisoService.deletePermiso(permisoId);
	return response;
}

export function actionChangePermisoProps(props) {
	return dispatch => {
		dispatch({
			type: ACT_PERMISO_CHANGE,
			props: props
		});
	};
}
