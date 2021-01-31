const UserViewLayout = ({ children }) => {
  return (
    <>
      <header>
      <nav className="bg-yellow-200 py-4 px-4">
        <div className="mb-2 sm:mb-0">
          <p className="text-2xl no-underline text-grey-darkest hover:text-blue-dark">🚀 Rokkit</p>
        </div>
      </nav>
      </header>
      <main>{children}</main>
    </>
  )
}

export default UserViewLayout
