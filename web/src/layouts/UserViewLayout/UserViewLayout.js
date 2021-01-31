const UserViewLayout = ({ children }) => {
  return (
    <>
      <header>
      <nav class="bg-yellow-200 py-4 px-4">
        <div class="mb-2 sm:mb-0">
          <p class="text-2xl no-underline text-grey-darkest hover:text-blue-dark">🚀 Rokkit</p>
        </div>
      </nav>
      </header>
      <main>{children}</main>
    </>
  )
}

export default UserViewLayout
