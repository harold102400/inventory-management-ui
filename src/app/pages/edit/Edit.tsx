import { useForm } from "react-hook-form";
import { useLocation, useNavigate, Link } from "react-router-dom"
import { Products } from "../../interfaces/productsinterface/Products";
import { editProduct } from "../../services/apiFunctions";
import "../create/Form.css";

const Edit = () => {

  const location = useLocation();
  const productData = location.state.product;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Products>();
  const navigate = useNavigate();
  function onSubmit(data: Products) {
    editProduct(data, productData.id);
    navigate(`/productdetail/${productData.id}`);
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="form_create">
        <div className="form_control">
        <label>Code</label>
        <input
          type="text"
          placeholder="code"
          {...register("code", { required: true })}
          defaultValue={productData.code}
        />
        {errors.code && <span>This field is required</span>}
        </div>

        <div className="form_control">
        <label>Name</label>
        <input
          type="text"
          placeholder="name"
          {...register("name", { required: true })}
          defaultValue={productData.name}
        />
        {errors.name && <span>This field is required</span>}
        </div>

        <div className="form_control">
        <label>Type</label>
        <input
          type="text"
          placeholder="type"
          {...register("type", { required: true })}
          defaultValue={productData.type}
        />
        {errors.type && <span>This field is required</span>}
        </div>

        <div className="form_control">
        <label>Brand</label>
        <input
          type="text"
          placeholder="brand"
          {...register("brand", { required: true })}
          defaultValue={productData.brand}
        />
        {errors.brand && <span>This field is required</span>}
        </div>

        <div className="form_control">
        <label>Price</label>
        <input
          type="number"
          placeholder="price"
          {...register("price", { required: true })}
          defaultValue={productData.price.toString()}
        />
        {errors.price && <span>This field is required</span>}
        </div>

        <button type="submit" className="btn btn-success">Edit product</button>
        <Link to={`/productdetail/${productData.id}`} className="btn btn-danger">Cancel</Link>
      </form>
    </div>
  )
}

export default Edit