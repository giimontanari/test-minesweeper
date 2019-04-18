import React, { Component } from "react";
import { Paper, Divider } from "material-ui";
import PropTypes from "prop-types";
/**
 * Componente de layout con encabezado para agrupar campos y otros componentes. Utiliza HTML y Material UI.
 */
class VerticalListFields extends Component {
  render() {
    return (
      <Paper className={this.props.paperClass} zDepth={this.props.zDepth}>
        <div className={this.props.titleClass}>
          <h3>{this.props.titleText}</h3>
        </div>
        {this.props.hideDivider === true ? null : <Divider />}

        <div className={this.props.contentClass}>{this.props.children}</div>
      </Paper>
    );
  }
}
// VerticalListFields.propTypes = {
//   /**
//    * Agrega Título con base en un "h3".
//    */
//   titleText: PropTypes.string,
//   /**
//    * Agrega clase CSS que modifica los estilos de Paper Material UI.
//    */
//   paperClass: PropTypes.string,
//   /**
//    * Cambia el valor numérico de la propiedad zDepth de Paper Material UI.
//    */
//   zDepth: PropTypes.number,
//   /**
//    * Agrega clase CSS a div contenedor del título.
//    */
//   titleClass: PropTypes.string,
//   /**
//    * Oculta o muestra Divider Material UI para separación de título.
//    */
//   hideDivider: PropTypes.bool,
//   /**
//    * Agrega clase CSS a div contenedor de "children". Sobre este contenedor se cargan los componentes / campos.
//    */
//   contentClass: PropTypes.string
// };
VerticalListFields.defaultProps = {
  zDepth: 1,
  hideDivider: false
};

export default VerticalListFields;
