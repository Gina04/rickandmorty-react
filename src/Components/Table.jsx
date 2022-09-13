const Table = ({ name, id, phone, mail, city, company }) => {
    return (
                <tr>
                    <td>{name}</td>
                    <td>{id}</td>
                    <td>{phone}</td>
                    <td>{mail}</td>
                    <td>{city}</td>
                    <td>{company}</td>
                </tr>
           
    )
}

export default Table;