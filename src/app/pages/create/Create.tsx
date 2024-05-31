import { useForm } from "react-hook-form"
import { createProduct } from "../../services/apiFunctions";
import { Articulos } from "../../interfaces/articulosinterface/Articulos";
import './Create.css'


const Create = () => {


  const {register, handleSubmit, formState: {errors}} = useForm<Articulos>();
  //const [isPending, setisPending] = useState<boolean>(false)
  
  async function onSubmit(data:Articulos) {
    await createProduct(data);
    //setisPending(false);
  }
  
  return (
    <div>

            <form onSubmit={handleSubmit(onSubmit)} className="form_create">
              <div className="form_control">
                <label>Codigo</label>
                <input type="text" placeholder="Ingrese el codigo del producto"  {...register("codigo", { required: true })} />
                {errors.codigo && <span>This field is required</span>}
              </div>
              <div className="form_control">
              <label>Nombre</label>
              <input type="text" placeholder="Ingrese el nombre del producto" {...register("nombre", { required: true })} />
              {errors.nombre && <span>This field is required</span>}
              </div>

              <div className="form_control">
              <label>Tipo</label>
              <input type="text" placeholder="Ingrese el tipo del producto"{...register("tipo", { required: true })} />
              {errors.tipo && <span>This field is required</span>}
              </div>

              <div className="form_control">
              <label>Marca</label>
              <input type="text" placeholder="Ingrese el marca del producto"{...register("marca", { required: true })} />
              {errors.marca && <span>This field is required</span>}
              </div>

              <div className="form_control">
              <label>Precio</label>
              <input type="number" placeholder="Ingrese el precio del producto"{...register("precio", { required: true })} />
              {errors.precio && <span>This field is required</span>}
              </div>
              <button type="submit" className="btn btn-success">Agregar articulo</button>
              {/* { !isPending && <button type="submit">Agregar articulo</button>}
              {  isPending && <button disabled>Agregando articulo...</button>} */}
            </form>

    </div>
  )
}

export default Create