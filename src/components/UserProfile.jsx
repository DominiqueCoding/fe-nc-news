function UserProfile({currentUser,setCurrentUser}) {
  
  return (
    <>
      <div className="profile-container">
        <div className="card bg-base-100 shadow-xl m-2">
          <figure><img className='object-contain h-48 w-96 p-4' src={currentUser.avatar_url} alt="a user profle image" /></figure>
          <div className="card-body bg-sky-500 rounded-b-lg">
            <h2 className="card-title">welcome back {currentUser.name}</h2>
            
            <div className="card-actions justify-end">
              <button className="btn btn-primary"
                onClick = {()=>{
                  if(window.confirm(`sign out?`)){
                      setCurrentUser()
                  }
              }}
              >sign out
              </button>
            </div>
          </div>
        </div>   
      </div>
    </>
  )
}

export default UserProfile