const URL_usuario = import.meta.env.VITE_API_USUARIO;
const URL_recetas = import.meta.env.VITE_API_RECETA;

export const guardarUsuario = async (usuario)=>{
    try{
        const respuesta = await fetch(URL_usuario,{
            method: "POST",
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify(usuario)
        });
        return respuesta;
    }catch (error){
        console.log(error)
    }
}

export const login = async (usuario)=>{
    try{
        const respuesta = await fetch(URL_usuario);
        const listaUsuarios = await respuesta.json();
        const usuarioBuscado = listaUsuarios.find((itemUsuario)=> itemUsuario.email === usuario.email);
        if(usuarioBuscado){
            if(usuarioBuscado.password === usuario.password){
                return usuarioBuscado
            }else{
                console.log('el password es incorrecto')
                return null
            }
        }else{
            console.log('el mail no existe')
            return null
        }
    }catch(error){
        console.log(error)
    }
}

export const obtenerRecetas = async ()=>{
    try{
        const respuesta = await fetch(URL_recetas);
        const listaRecetas = await respuesta.json();
        return listaRecetas;
    }catch (error){
        console.log(error)
    }
}

export const obtenerUnaReceta = async (id)=>{
    try{
        const respuesta = await fetch(URL_recetas+"/"+id);
        const receta = await respuesta.json();
        return receta;
    }catch (error){
        console.log(error)
    }
}

export const crearReceta = async (receta)=>{
    try{
        const respuesta = await fetch(URL_recetas,{
            method: "POST",
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify(receta)
        });
        return respuesta;
    }catch (error){
        console.log(error)
    }
}

export const eliminarReceta = async (id) =>{
    try{
        const receta = await fetch(URL_recetas+'/'+id,{
            method: "DELETE",
        });
        return receta;
    }catch(error){
        console.log(error)
    }
}

export const editaReceta = async (receta,id)=>{
    try{
        const respuesta = await fetch(URL_recetas+"/"+id,{
            method: "PUT",
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify(receta)
        });
        return respuesta;
    }catch (error){
        console.log(error)
    }
}
