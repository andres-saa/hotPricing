const convertir = (texto) => {
    var base64Image = texto
    var img = new Image();
    img.src = "data:image/jpeg;base64," + base64Image;
    return img
}



const editProduct = (editProduct) => {
    product.value = { ...editProduct }; 
    const rawValue={...product._rawValue};


    const noticiaId = 4; // ID de la noticia que deseas editar
    const datosActualizados = {
  // Objeto con los datos actualizados de la noticia
  // Incluye las propiedades que deseas modificar
  id:noticiaId,
  newname:'mi perro',
  title: "Nuevo dddddddddddddddddddd título",
  contenido: "Nuevo ddddddddddddddddddddd contenido",
  image:'https://www.pngmart.com/files/2/Goku-PNG-Transparent-Image.png'
};

    fetch(`http://127.0.0.1:8000/api/new/${noticiaId}/`, {
    method: "PUT", // o "PATCH" si el servidor lo permite
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(datosActualizados)
    })
    .then(response => response.json())
    .then(data => {
        console.log("Noticia actualizada:", data);
        // Realizar cualquier acción adicional después de editar la noticia
    })
    .catch(error => {
        console.error("Error al actualizar la noticia:", error);
        // Manejar cualquier error que pueda ocurrir
  });

};

 export {convertir}