import { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import RolService from '../Services/PlanificacionService';

//define la interfaz articulo para tipar los objetos que representan a los articulos 

interface Planificacion {
    idRol: number;
    nombreRol: string;
    permisos: string;
}


export default function ListaRol() {


    //define el componente funcional lista articulos
    const [roles, setRoles] = useState<Rol[]>([]);
    //Hook useEfect para realizar efectos secundarios en el componenete
    useEffect(() => {
        //llama al servicio articulo para obtener todos los articulos
       RolService.findAll().then(Response => {
            //actuliza el estado de las mascotas con los datos obtenidos
            setRoles(Response.data);
        }).catch(error => {
            //imprime el error que se tuvo
            console.log(error);

        })

    }, []);//El array vacio como segundo argumento indica que este efecto
    //solo debe ejecutarse una vez al montar el componente

    //renderiza el componente Datatable para mostrar la lista de mascotas
    return (
        <div className="card">
            <DataTable value={roles} tableStyle={{ minWidth: '50rem' }}>
                <Column field='idRol' header="ID"></Column>
                <Column field='nombreRol' header="Nombre Rol"></Column>
                <Column field='permisos' header="Permisos"></Column>
            </DataTable>

        </div>
    );
}
