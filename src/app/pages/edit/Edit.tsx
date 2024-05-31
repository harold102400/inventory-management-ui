import { useForm } from "react-hook-form";
import { useLocation, useNavigate, Link } from "react-router-dom"
import { Articulos } from "../../interfaces/articulosinterface/Articulos";
import { editProduct } from "../../services/apiFunctions";

const Edit = () => {

  const location = useLocation();
  const productData = location.state.product;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Articulos>();
  const navigate = useNavigate();
  function onSubmit(data: Articulos) {
    editProduct(data, productData.id);
    navigate(`/productdetail/${productData.id}`);
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="codigo"
          {...register("codigo", { required: true })}
          defaultValue={productData.codigo}
        />
        {errors.codigo && <span>This field is required</span>}

        <input
          type="text"
          placeholder="nombre"
          {...register("nombre", { required: true })}
          defaultValue={productData.nombre}
        />
        {errors.nombre && <span>This field is required</span>}

        <input
          type="text"
          placeholder="tipo"
          {...register("tipo", { required: true })}
          defaultValue={productData.tipo}
        />
        {errors.tipo && <span>This field is required</span>}

        <input
          type="text"
          placeholder="marca"
          {...register("marca", { required: true })}
          defaultValue={productData.marca}
        />
        {errors.marca && <span>This field is required</span>}

        <input
          type="number"
          placeholder="precio"
          {...register("precio", { required: true })}
          defaultValue={productData.precio.toString()}
        />
        {errors.precio && <span>This field is required</span>}
        <button type="submit" className="btn btn-success">Editar curso</button>
        <Link to={`/productdetail/${productData.id}`} className="btn btn-danger">Cancelar</Link>
      </form>
    </div>
  )
}

export default Edit