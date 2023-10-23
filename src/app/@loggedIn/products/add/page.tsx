import classes from "./addProduct.module.css";
import AddProductForm from "./addProductForm";
import handleAddProduct from "./handleAddProduct";

export default function AddProduct() {
    return (
        <div className={classes.add}>
            <h2 className={classes.title}>Add Product</h2>
            <form action={handleAddProduct}>
                <AddProductForm />
            </form>
        </div>
    );
}
