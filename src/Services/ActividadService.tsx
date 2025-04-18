import axios from "axios";

const URL_BASE = "http://localhost:8080/Planificacion";

class ActividadService{

    //metodo para obtener todos los ariculos
    findAll(){
        return axios.get(URL_BASE);
    }

    findUsuarioById(idPlanificacion: number){
        return axios.get(URL_BASE + '/' + idPlanificacion);
    }
    //Metodo para crear una nueva mascota
    create(planificacion: object){
        return axios.post(URL_BASE, planificacion);
    }

    //Metodo para actualizar un alrticulo existente
    update(idPlanificacion: number, planificacion: object){
        return axios.put(URL_BASE + '/'+idPlanificacion, planificacion)
    }

    //metodo para eliminar un articulo
    delete(idPlanificacion: number){
        return axios.delete(URL_BASE + '/' + idPlanificacion)
    }
}
//se exporta la clase 
export default new PlanificacionService();
