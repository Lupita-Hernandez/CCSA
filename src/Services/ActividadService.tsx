import axios from "axios";

const URL_BASE = "http://localhost:8080/actividad";

class ActividadService{

    //metodo para obtener todos los ariculos
    findAll(){
        return axios.get(URL_BASE);
    }

    findUsuarioById(idActividad: number){
        return axios.get(URL_BASE + '/' + idActividad);
    }
    //Metodo para crear una nueva mascota
    create(actividad: object){
        return axios.post(URL_BASE, actividad);
    }

    //Metodo para actualizar un alrticulo existente
    update(idActividad: number, actividad: object){
        return axios.put(URL_BASE + '/'+idActividad, actividad)
    }

    //metodo para eliminar un articulo
    delete(idActividad: number){
        return axios.delete(URL_BASE + '/' + idActividad)
    }
}
//se exporta la clase 
export default new ActividadService();
