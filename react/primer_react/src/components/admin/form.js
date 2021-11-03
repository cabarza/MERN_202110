const CarForm = ({inputs, setInputs, initialState, autos, setAutos}) => {
    

    const actualizarFormulario = (e) => {
        const {name, value} = e.target;
        setInputs({
            ...inputs,
            [name]: value
        });
    }


    const agregarElemento = (e) => {
        e.preventDefault();
        setAutos([
            ...autos,
            inputs
        ]);
        setInputs(initialState);
    }

    
    
    return <div>
        <form onSubmit={agregarElemento}>
            <label htmlFor="marca">Marca</label>
            <select id="marca" name="marca" value={inputs.marca} onChange={actualizarFormulario} required>
                <option value="">Seleccione</option>
                <option value="Toyota">Toyota</option>
                <option value="Mercedez">Mercedez</option>
                <option value="BMW">BMW</option>
                <option value="KIA">KIA</option>
                <option value="FIAT">FIAT</option>
            </select>

            <label htmlFor="modelo">Modelo</label>
            <input type="text" id="modelo" name="modelo" required minLength="2"  maxLength="30" value={inputs.modelo} onChange={actualizarFormulario}/>

            <label htmlFor="color">Color</label>
            <input type="color" id="color" name="color" required value={inputs.color} onChange={actualizarFormulario}/>

            <button type="submit">Agregar</button>
        </form>
    </div>
}

export default CarForm;