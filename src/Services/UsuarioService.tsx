import axios from "axios";

const URL_BASE = "http://localhost:8080/usuario";

class UsuarioService{

    //metodo para obtener todos los ariculos
    findAll(){
        return axios.get(URL_BASE);
    }

    findById(idUsuario: number){
        return axios.get(URL_BASE + '/' + idUsuario)
    }


    //Metodo para crear una nueva mascota
    create(rol: object){
        return axios.post(URL_BASE, rol);
    }

    //Metodo para actualizar un alrticulo existente
    update(idRol: number, rol: object){
        return axios.put(URL_BASE + '/'+idRol, rol)
    }

    //metodo para eliminar un articulo
    delete(idRol: number){
        return axios.delete(URL_BASE + '/' + idRol)
    }
}
//se exporta la clase 
export default new UsuarioService();