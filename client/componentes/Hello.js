import React from 'react';
import estilos from'./Hello.scss';
export default class Hello extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
        	<div className={estilos.hello}>
        		Hola
        	</div>
        );
    }
}