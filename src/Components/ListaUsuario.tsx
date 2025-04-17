import { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import UsuarioService from '../Services/UsuarioService';

//define la interfaz articulo para tipar los objetos que representan a los articulos 

interface Usuario {
    idUsuario: number;
    contraseña: string;
    correo: string;
    nombre: string;
}


export default function ListaUsuario() {


    //define el componente funcional lista articulos
    const [usuarios, setUsuarios] = useState<Usuario[]>([]);
    //Hook useEfect para realizar efectos secundarios en el componenete
    useEffect(() => {
        //llama al servicio articulo para obtener todos los articulos
       UsuarioService.findAll().then(Response => {
            //actuliza el estado de las mascotas con los datos obtenidos
            setUsuarios(Response.data);
        }).catch(error => {
            //imprime el error que se tuvo
            console.log(error);

        })

    }, []);//El array vacio como segundo argumento indica que este efecto
    //solo debe ejecutarse una vez al montar el componente

    //renderiza el componente Datatable para mostrar la lista de mascotas
    return (
        <div className="card">
            <DataTable value={usuarios} tableStyle={{ minWidth: '50rem' }}>
                <Column field='idUsuario' header="ID"></Column>
                <Column field='nombre' header="Nombre"></Column>
                <Column field='correo' header="Correo"></Column>
                <Column field='contraseña' header="Contraseña"></Column>
            </DataTable>

        </div>
    );
}
