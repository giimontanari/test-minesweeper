import CrudAction from "../common/CrudAction";
import { CHANGE_USER_PROPS } from "./ActionTypes";
import service from "../provider/UserService";

const action = new CrudAction(service, CHANGE_USER_PROPS);

export function actionChangeUserProps(props) {
	return dispatch => {
		dispatch({
			type: CHANGE_USER_PROPS,
			props: props
		});
	};
}

/*
 * GET /api/users
 */
export function actionListUser(params, callback) {
	params = params || {};
	return action.list(params, callback);
}

/*
 * POST /api/users
 */
export function actionCreateUser(values, callback) {
	return action.create(values, callback);
}

/*
 * PUT /api/users/:id
 */
export function actionUpdateUser(values, id, callback) {
	return action.update(values, id, callback);
}

/*
 * DELETE /api/users/:id
 */
export function actionDeleteUser(id, callback) {
	return action.delete(id, callback);
}
