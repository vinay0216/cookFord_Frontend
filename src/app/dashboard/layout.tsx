import Link from "next/link"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section>
      <div className="grid grid-cols-6 gap-2">
      <div className=" bg-gray-50 col-span-1 border-current ">
        <ul >
          <li className="p-4 border hover:border-1">
            <Link href="/dashboard">
              Dashboard
            </Link>
          </li>
          <li className="p-4 border">
            <Link href="/dashboard/profile">
           Profile 
            </Link>
          </li>
          <li className="p-4 border">
            <Link href="/dashboard/settings">
               Settings 
            </Link>
          </li>
          <li className="p-4 border">
            <Link href="/logout">
              Logout
            </Link>
          </li>
        </ul>
      </div>
      <div className="col-span-5">
        {children}
      </div>
      </div>
    </section>
  )
}