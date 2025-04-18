import { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import RolService from '../Services/PlanificacionService';
interface Planificacion {
    idPlanificacion: number;
    jefeUnidad: string;
    numeroActividades: string;
    objetivoArea
}
export default function ListaPlanificacion() {
    const [planificacion, setPlanificacion] = useState<Rol[]>([]);
    useEffect(() => {
       RolService.findAll().then(Response => {
            setRoles(Response.data);
        }).catch(error => {
            console.log(error);
        })
    }, []);
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
