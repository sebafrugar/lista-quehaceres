import React, { useState } from 'react';
import "../Components/Tareas.css"


const Lista = () => {

    const [tareas,setTareas]= useState([]);
    const [nuevaTarea,setNuevaTarea]= useState([{
        nombreTarea: "",
    }]);


    const onSubmit = (e) =>{
        e.preventDefault();
        setTareas([...tareas,nuevaTarea])
    }

    const handlerForm = (target) =>{
        setNuevaTarea({...nuevaTarea,[target.name]: target.value});
        
    }
    const cheked = (i) =>{
        const tareaLista = {
            ...tareas[i]
        }
        tareaLista.completed = !tareaLista.completed;
        setTareas([...tareas.slice(0,i),tareaLista].concat(tareas.slice(i+1)));

    }

    const borrar = (i) => {
        setTareas(tareas.filter((_tarea, x) => x !== i))
    }

    return (
        <div>
            <header className="header">
                <form onSubmit={onSubmit} className="form"> 
                    <label>Ingresar Tarea : </label>
                    <input type="text" name="nombreTarea" onChange={(e) => handlerForm(e.target)}/>
                    <input type="submit" value="Anotar" />
                </form>
            </header>
            <div>
                <h3 >Registo de Tareas: </h3>
                <ol>
                {
                tareas.map((tarea,i)=>
                <li key={i}>{tarea.nombreTarea}
                <input
                type="checkbox"
                checked={tarea.completed}
                onClick={() => cheked(i)}
                />
                <button onClick={() => borrar(i)}>Borrar</button></li>)
                }
                </ol>
            </div>
        </div>
    );
}

export default Lista;
