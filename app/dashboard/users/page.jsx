import Search from '@/app/ui/dashboard/search/search'
import styles from '@/app/ui/dashboard/users/users.module.css'
import Link from 'next/link'
import Pagination from '../pagination/pagination'
import { fetchUser } from '@/app/lib/data'

const UsersPage = async ({searchParams}) => {
    const q = searchParams?.q || "";
    const users = await fetchUser(q)

    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <Search placeholder="Search for a user..."/>
                <Link href="/dashboard/users/add">
                    <button className={styles.addButton}>Add New</button>
                </Link>
            </div>
            <table className={styles.table}>
                <thead className={styles.thead}>
                    <tr>
                        <td>Name</td>
                        <td>Email</td>
                        <td>Created at</td>
                        <td>Role</td>
                        <td>Status</td>
                        <td>Action</td>
                    </tr>
                </thead>

                <tbody className={styles.tbody}>
                        {users.map((user) => {
                            return (
                            <tr key={user.id}>
                                <td>
                                    <div className={styles.user}>
                                        <img
                                            className={styles.userImage}
                                            src={user.img || '/noavatar.png'} 
                                            alt=''
                                            width={40} 
                                            height={40} 
                                        />
                                        {user.username}
                                    </div>
                                </td>
                                <td>{user.email}</td>
                                <td>{user.createdAt?.toString().slice(4, 16)}</td>
                                <td>{user.isAdmin ? "Admin" : "Client"}</td>
                                <td>{user.isActive ? "active" : "passive"}</td>
                                <td>
                                    <div className={styles.buttons}>
                                        <Link href={`/dashboard/users/${user.id}`}>
                                            <button className={`${styles.button} ${styles.view}`}>
                                                View
                                            </button>
                                        </Link>
                                        <Link href="/">
                                            <button className={`${styles.button} ${styles.delete}`}>
                                                Delete
                                            </button>
                                        </Link>
                                    </div>
                                </td>
                            </tr>
                            )
                        })}
                </tbody>
            </table>
            <Pagination />
        </div>
    )
}

export default UsersPage