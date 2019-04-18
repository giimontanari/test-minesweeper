import CrudAction from "../provider/lib/CrudAction";
import RolService from "../provider/rol/RolService";
import service from "../provider/rol/RolService";
import { ACT_APP_CHANGE, ACT_ROL_CHANGE } from "./ActionTypes";

const action = new CrudAction(service, ACT_ROL_CHANGE);

export function actionGetRolsListFilters(
	rolName,
	rolDescription,
	permiso,
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
		asyncGetRolsListFilters(rolName, rolDescription, permiso).then(response => {
			dispatch({
				type: ACT_ROL_CHANGE,
				props: {
					rolsList: response
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
async function asyncGetRolsListFilters(rolName, rolDescription, permiso) {
	try {
		return null;
	} catch (error) {
		return error;
	}
}
export function actionChangeRolProps(props) {
	return dispatch => {
		dispatch({
			type: ACT_ROL_CHANGE,
			props: props
		});
	};
}
export function actionGetRolsList(searchText, offset, limit) {
	return dispatch => {
		dispatch({
			type: ACT_APP_CHANGE,
			props: {
				loading: true
			}
		});
		asyncGetRolList(searchText, offset, limit).then(response => {
			dispatch({
				type: ACT_ROL_CHANGE,
				props: {
					rolsList: response.resulSet ? response.resulSet : [],
					total: response.pagination.total ? response.pagination.total : 0
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
async function asyncGetRolList(searchText, code, offset, limit) {
	try {
		let response = await RolService.getRolList(searchText, code, offset, limit);
		return response;
	} catch (error) {
		return error;
	}
}
/*
 * GET /api/rol
 */
export function actionListRol(params, callback) {
	params = params || {};
	return action.list(params, callback);
}

/*
 * POST /api/rol
 */
export function actionCreateRol(values, callback) {
	return action.create(values, callback);
}

/*
 * PUT /api/rol/:id
 */
export function actionUpdateRol(values, id, callback) {
	return action.update(values, id, callback);
}

/*
 * DELETE /api/rol/:id
 */
export function actionDeleteRol(id, callback) {
	return action.delete(id, callback);
}
