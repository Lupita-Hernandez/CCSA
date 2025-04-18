import axios from "axios";
const URL_BASE = "http://localhost:8080/planificacion";
class PlanificacionService{

    findAll(){
        return axios.get(URL_BASE);
    }
    findUsuarioById(idPlanificacion: number){
        return axios.get(URL_BASE + '/' + idPlanificacion);
    }
    create(planificacion: object){
        return axios.post(URL_BASE, planificacion);
    }
    update(idPlanificacion: number, planificacion: object){
        return axios.put(URL_BASE + '/'+idPlanificacion, planificacion);
    }
    delete(idPlanificacion: number){
        return axios.delete(URL_BASE + '/' + idPlanificacion);
    }
}
export default new PlanificacionService();
