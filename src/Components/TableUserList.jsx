import Table from "./Table"
const TableUserList = ({ users }) => {
    console.log("Users Table", users);
    return (
        <div>
            {users.map((user, index) => {
                return (
                    <Table
                        key={index}
                        name={user.name}
                        id={user.id}
                        phone={user.phone}
                        email={user.mail}
                        city={user.address.city}
                        company={user.company.name}
                    />
                );
            })};
        </div>
    );

};

export default TableUserList;