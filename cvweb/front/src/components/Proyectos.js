import React, { Component } from 'react';

class Proyectos extends Component {

    constructor(props) {
        super(props)
        this.state = { proyectos: [] }
    }

    componentWillMount() {
        fetch('https://mycvbackapp.herokuapp.com/api/proyectos')
            .then((response) => {
                return response.json;
            })
            .then((proyectos) => {
                this.setState({ proyectos: proyectos })
            })
    }

    render() {
        if (this.setState.proyectos.length > 0) {
            return (
                <div className="proyectos">
                    <proyectos listado={this.state.proyectos} />
                </div>
            )
        } else {
            return <p className="texto">Cargando proyectos...</p>
        }
    }
}

export default Proyectos;