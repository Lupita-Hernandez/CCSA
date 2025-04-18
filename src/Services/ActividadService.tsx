import axios from "axios";
const URL_BASE = "http://localhost:8080/actividad";
class ActividadService{

    findAll(){
        return axios.get(URL_BASE);
    }
    findUsuarioById(idActividad: number){
        return axios.get(URL_BASE + '/' + idActividad);
    }
    create(actividad: object){
        return axios.post(URL_BASE, actividad);
    }
    update(idActividad: number, actividad: object){
        return axios.put(URL_BASE + '/'+idActividad, actividad)
    }
    delete(idActividad: number){
        return axios.delete(URL_BASE + '/' + idActividad)
    }
}
export default new ActividadService();
