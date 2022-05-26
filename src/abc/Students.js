import React from 'react'
// import { Table } from 'react-bootstrap'
import "./Sty.css";

const Students=() => {
  return (
      <>
    <div className='stu'>
        <h1>Students Details</h1>
    </div>
    <div className='tab'>
    <table>
    {/* <table striped bordered hover variant="dark"  > */}
  <thead>
    <tr>
      <th>sl/no:</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Username</th>
      <th>Batch</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td>Nov</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
      <td>Nov</td>
    </tr>
    <tr>
      <td>3</td>
      <td>Larry</td>
      <td> the Bird</td>
      <td>@bird</td>
      <td>Dec</td>
    </tr>
    <tr>
      <td>4</td>
      <td>Jack</td>
      <td>neau</td>
      <td>@jacky</td>
      <td>Nov</td>
    </tr>
    <tr>
      <td>5</td>
      <td>Bob</td>
      <td>Ton</td>
      <td>@Bobby</td>
      <td>Jan</td>
    </tr>
    <tr>
      <td>6</td>
      <td>Lucy</td>
      <td>thom</td>
      <td>@lucky</td>
      <td>Dec</td>
    </tr>
    <tr>
      <td>7</td>
      <td>Thor</td>
      <td>Odinson</td>
      <td>@point Breaker</td>
      <td>Dec</td>
    </tr>
  </tbody>
</table>
    </div>
    </>
  )
}
export default Students