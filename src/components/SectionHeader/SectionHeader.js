import React, { Component } from "react";
import Place from "material-ui/svg-icons/maps/place";
import PropTypes from "prop-types";

class SectionHeader extends Component {
	render() {
		return (
			<div className="Section-header bottom20">
				<div>
					<div>
						{this.props.icon}
						<h1 className="Hero-title">{this.props.title}</h1>
					</div>
					<p className="Hero-subtitle">{this.props.subtitle}</p>
				</div>
			</div>
		);
	}
}

export default SectionHeader;
