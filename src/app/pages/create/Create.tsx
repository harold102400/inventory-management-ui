import { useForm } from "react-hook-form"
import { createProduct } from "../../services/apiFunctions";
import { Products } from "../../interfaces/productsinterface/Products";
import './Form.css'


const Create = ({handleNewProduct} : {handleNewProduct: (product: Products) => void}) => {


  const {register, handleSubmit, formState: {errors}, reset} = useForm<Products>();
  
  async function onSubmit(data:Products) {
    const product = await createProduct(data);
    handleNewProduct(product);
    reset()
    return product;
  }
  
  return (
    <div>

            <form onSubmit={handleSubmit(onSubmit)} className="form_create">
              <div className="form_control">
                <label>Code</label>
                <input type="text" placeholder="Enter the product code"  {...register("code", { required: true })} />
                {errors.code && <span>This field is required</span>}
              </div>
              <div className="form_control">
              <label>Name</label>
              <input type="text" placeholder="Enter the product name" {...register("name", { required: true })} />
              {errors.name && <span>This field is required</span>}
              </div>

              <div className="form_control">
              <label>Type</label>
              <input type="text" placeholder="Enter the product type"{...register("type", { required: true })} />
              {errors.type && <span>This field is required</span>}
              </div>

              <div className="form_control">
              <label>Brand</label>
              <input type="text" placeholder="Enter the product brand"{...register("brand", { required: true })} />
              {errors.brand && <span>This field is required</span>}
              </div>

              <div className="form_control">
              <label>Price</label>
              <input type="number" placeholder="Enter the product price"{...register("price", { required: true })} />
              {errors.price && <span>This field is required</span>}
              </div>
              <button type="submit" className="btn btn-success">Add the product</button>
            </form>

    </div>
  )
}

export default Create