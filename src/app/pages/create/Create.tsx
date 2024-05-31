import { useForm } from "react-hook-form"
import { createProduct } from "../../hooks/apiFunctions";
import { Articulos } from "../../interfaces/articulosinterface/Articulos";
import { useState } from "react";

const Create = () => {

  const {register, handleSubmit, formState: {errors}} = useForm<Articulos>();
  //const [isPending, setisPending] = useState<boolean>(false)
  
  
  async function onSubmit(data:Articulos) {
    const newData = await createProduct(data);
    //setisPending(false);
    console.log(newData)
  }
  
  return (
    <div>

            <form onSubmit={handleSubmit(onSubmit)}>
           {/*    <input type="hidden" {...register("id")}/>     */}  
              <input type="text" placeholder="codigo"  {...register("codigo", { required: true })} />
              {errors.codigo && <span>This field is required</span>}

              <input type="text" placeholder="nombre" {...register("nombre", { required: true })} />
              {errors.nombre && <span>This field is required</span>}

              <input type="text" placeholder="tipo"{...register("tipo", { required: true })} />
              {errors.tipo && <span>This field is required</span>}

              <input type="text" placeholder="marca"{...register("marca", { required: true })} />
              {errors.marca && <span>This field is required</span>}

              <input type="number" placeholder="precio"{...register("precio", { required: true })} />
              {errors.precio && <span>This field is required</span>}
              <button type="submit">Agregar articulo</button>
              {/* { !isPending && <button type="submit">Agregar articulo</button>}
              {  isPending && <button disabled>Agregando articulo...</button>} */}
            </form>

    </div>
  )
}

export default Create