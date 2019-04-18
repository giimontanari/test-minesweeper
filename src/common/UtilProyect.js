// Utilidades propias de cada proyecto
import React from "react";
import MenuItem from "material-ui/MenuItem";
import { MODE_CRU_UPDATE, MODE_CRU_CREATE } from "../actions/ActionTypes";

export default class UtilProyect {
	static getHttpStatusCode(APIReturnedCode) {
		return Number(APIReturnedCode.toString().substring(0, 3));
	}

	static renderCardTitleCRU(modeCRU, screen) {
		return (
			<div className="Hero-header-light bottom20">
				<h1 className="Hero-title">
					{modeCRU === MODE_CRU_UPDATE
						? `Editar ${screen}`
						: modeCRU === MODE_CRU_CREATE ? `Alta de ${screen}` : screen}
				</h1>
				<h3 className="Hero-subtitle">
					{modeCRU === MODE_CRU_UPDATE
						? `Editar ${screen} existente`
						: modeCRU === MODE_CRU_CREATE ? `Agregar ${screen}` : ""}
				</h3>
			</div>
		);
	}

	static renderSelectFieldItemsArray(itemsArray) {
		return itemsArray.map(itemsArray => (
			<MenuItem
				key={itemsArray.id}
				value={itemsArray.id}
				primaryText={itemsArray.name}
			/>
		));
	}

	static renderSelectFieldItem(itemId, itemText) {
		return <MenuItem key={itemId} value={itemId} primaryText={itemText} />;
	}
}
