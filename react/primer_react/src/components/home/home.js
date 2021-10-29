import { Component } from 'react';

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            nombre: this.props.data.nombre,
            apellido: this.props.data.apellido,
            curso: this.props.data.curso
        }
    }

    changeForm = (e) => {
        const {name, value} = e.target;
        this.setState({
            ...this.state,
            [name]: value 
        });
    }
    

    clickButton(e, variable) {
        e.preventDefault();
        console.log(this.state);
        alert(e.target.type);
    }

    render() {
        return <>
            {this.props.children.filter(c => c.type=='p')}

            <h2 style={{textAlign: 'center'}}>{this.state.curso}</h2>

            <form style={{textAlign:'center'}}>
                <input type="text" name="nombre" value={this.state.nombre} onChange={this.changeForm}/>

                <input type="text" name="apellido" value={this.state.apellido} onChange={this.changeForm}/>

                <select name="curso" value={this.state.curso} onChange={this.changeForm}>
                    <option value="MERN">MERN</option>
                    <option value="JAVA">JAVA</option>
                    <option value="PYTHON">PYTHON</option>
                </select>

                <button type="submit" onClick={e =>this.clickButton(e, 'Variable X')}>Click me!</button>
            </form>
        </>;
    }
}

export default Home;