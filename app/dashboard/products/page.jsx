import styles from '@/app/ui/dashboard/products/products.module.css'

import Search from "@/app/ui/dashboard/search/search"
import Image from "next/image"
import Link from "next/link"
import Pagination from "../pagination/pagination"

const ProductsPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <Search placeholder="Search for a product..."/>
                <Link href="/dashboard/products/add">
                    <button className={styles.addButton}>Add New</button>
                </Link>
            </div>
            <table className={styles.table}>
                <thead className={styles.thead}>
                    <tr>
                        <td>Title</td>
                        <td>Description</td>
                        <td>Price</td>
                        <td>Created at</td>
                        <td>Stock</td>
                        <td>Action</td>
                    </tr>
                </thead>

                <tbody className={styles.tbody}>
                    <tr>
                        <td>
                            <div className={styles.product}>
                                <Image
                                    className={styles.productImage}
                                    src="/noproduct.jpg" 
                                    alt='' 
                                    width={40} 
                                    height={40} 
                                />
                                Iphone
                            </div>
                        </td>
                        <td>Description</td>
                        <td>$999</td>
                        <td>2022-01-01</td>
                        <td>100</td>
                        <td>
                            <div className={styles.buttons}>
                                <Link href="/dashboard/products/view">
                                    <button className={`${styles.button} ${styles.view}`}>
                                        View
                                    </button>
                                </Link>
                                <Link href="/" >
                                    <button className={`${styles.button} ${styles.delete}`}>
                                        Delete
                                    </button>
                                </Link>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
            <Pagination />
        </div>
    )
}

export default ProductsPage