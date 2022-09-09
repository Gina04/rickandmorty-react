const Table = ({ name, id, phone, mail, city, company }) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>
                        Name
                    </th>
                    <th>
                        Id
                    </th>
                    <th>
                        Phone
                    </th>
                    <th>
                        Email
                    </th>

                    <th>
                        City
                    </th>
                    <th>
                        Company
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{name}</td>
                    <td>{id}</td>
                    <td>{phone}</td>
                    <td>{mail}</td>
                    <td>{city}</td>
                    <td>{company}</td>
                </tr>
            </tbody>
        </table>
    )
}

export default Table;