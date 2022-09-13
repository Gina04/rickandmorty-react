import Table from "./Table"
import styles from "../Styles/app.module.css"
const TableUserList = ({ users }) => {
    console.log("Users Table", users);
    return (
        <table className={styles.tableUserContainer}>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Id</th>
                    <th>Phone</th>
                    <th>Email</th>
                    <th>City</th>
                    <th>Company</th>
                </tr>
            </thead>
            <tbody>
                {users.map((user, index) => {
                    return (
                        <Table
                            key={index}
                            name={user.name}
                            id={user.id}
                            phone={user.phone}
                            email={user.email}
                            city={user.address.city}
                            company={user.company.name}
                        />
                    )

                })};
            </tbody>
        </table>
    );

};

export default TableUserList;