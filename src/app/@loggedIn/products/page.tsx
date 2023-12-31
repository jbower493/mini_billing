import { prisma } from "@/prisma/db";
import classes from "./products.module.css";
import ButtonLink from "@/src/app/components/Button/Link";

export default async function Products() {
    const products = await prisma.product.findMany();

    return (
        <div className={classes.products}>
            <div className={classes.addButtonContainer}>
                <ButtonLink className={classes.addButton} href="/products/add">
                    Add New
                </ButtonLink>
            </div>
            <h2 className={classes.title}>Products</h2>
            <ul className={classes.productList}>
                {products.map(({ name, id }) => (
                    <li className={classes.product}>
                        <p>{name}</p>
                        <ButtonLink
                            className={classes.editButton}
                            href={`/products/${id}`}
                        >
                            Edit
                        </ButtonLink>
                    </li>
                ))}
            </ul>
        </div>
    );
}
