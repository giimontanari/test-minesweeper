import { ACT_ABM_CHANGE } from "./ActionTypes";

/*
import SponsorService from "../provider/sponsor/lib/services/SponsorService";
import { SUCCESS, ERROR, WARNING } from "../common/Util";
import UtilProyect from "../common/UtilProyect";
*/

export function uploadImage(doc, success) {
	var formData = new FormData();
	formData.append("type", "file");
	formData.append("file", doc);
	fetch("/upload", {
		method: "POST",
		body: formData
	})
		.then(response => response.json())
		.then(value => {
			if (success) {
				success(value);
			}
		})
		.catch(error => {
			console.log("Error editTemplate", error);
		});
}

export function actionChangeABMProps(props) {
	return (dispatch, getStore) => {
		dispatch({
			type: ACT_ABM_CHANGE,
			props: props
		});
	};
}
