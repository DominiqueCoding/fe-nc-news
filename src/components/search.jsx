import { useState } from 'react'

function Search() {
  
  return (
    <>
     <section>
        <form>
            <label htmlFor=""></label>
            <input 
                type="text" 
                name="searchbar" 
                id="search" 
                placeholder="search" 
                onChange = {(event)=>{
                    console.log(event.target.value)
                }}
                >
                
                
            </input>

        </form>
        
     </section> 
    </>
  )
}

export default Search