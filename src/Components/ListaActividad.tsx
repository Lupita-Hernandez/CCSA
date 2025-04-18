import { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import PlanificacionService from '../Services/PlanificacionService';
interface Planificacion {
    idPlanificacion: number;
    jefeUnidad: string;
    numeroActividades: string;
    objetivoArea: string;
}
export default function ListaPlanificacion() {
    const [planificacion, setPlanificacion] = useState<Planificacion[]>([]);
    useEffect(() => {
       PlanificacionService.findAll().then(Response => {
            setPlanificacion(Response.data);
        }).catch(error => {
            console.log(error);
        })
    }, []);
    return (
        <div className="card">
            <DataTable value={planificacion} tableStyle={{ minWidth: '50rem' }}>
                <Column field='idPlanificacion' header="ID"></Column>
                <Column field='jefeUnidad' header="Jefe Unida"></Column>
                <Column field='numeroActividades' header="Numero Actividades"></Column>
                <Column field='objetivoArea' header="Objetivo Area"></Column>
            </DataTable>
        </div>
    );
}
