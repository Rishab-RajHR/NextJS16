import Link from "next/link";


const Employees = () => {
  return (
     <>
       <h2>Employees</h2>
       <ul>
          <li>
              <Link href='/employees/alex'>Alex</Link>
          </li>
          <li>
              <Link href='/employees/basil'>Basil</Link>
          </li>
          <li>
              <Link href='/employees/mohan'>Mohanlal</Link>
          </li>
       </ul>
     </>
  )
}

export default Employees;