function Users({user,handleUserSelect}) {
  
  return (
    <>
      <div className="card bg-base-100 shadow-xl m-2">
        <figure><img className="object-contain h-48 w-96 p-4 " src={user.avatar_url} alt="a user profle image" /></figure>
        <div className="card-body rounded-b-lg bg-slate-400">
          <h2 className="card-title"><h3>{user.username}</h3></h2>
          <div className="card-actions ">
            <button className="btn btn-primary"
              onClick = {()=>{
                handleUserSelect({
                  username: user.username,
                  name: user.name,
                  avatar_url: user.avatar_url
                })
              }}
            >
              {`log in as ${user.username}`}
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Users