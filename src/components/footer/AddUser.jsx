
const AddUser = ({data,setData}) => {
  return (
    <div>
    <table className="table">
    <thead>
      <tr className="head-tr">
        <th className="th">Name</th>
        <th className="th">Email</th>
        <th className="th">Phone</th>
        <th className="th">Age</th>
      </tr>
    </thead>
    <tbody>
      {data.map((person,index) => {
        return(
      <tr className="body-tr" key={index}>
      <td>{person?.name.first +" "+ person?.name.last}</td>
      <td>{person?.email}</td>
      <td>{person?.phone}</td>
      <td>{person?.dob.age}</td> 
      </tr>

        )
      })}
    </tbody>
  </table>
  </div>
  )
}

export default AddUser