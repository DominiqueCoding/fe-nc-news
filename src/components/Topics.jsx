import { Link } from 'react-router-dom'

function Topics(props) {

  
    return (
        <>
            <Link to = {"/Topic/" + props.topic.slug}>
                <div className='card bg-base-100 shadow-xl m-2'>
                    <figure>
                        {props.topic.slug === "football" && <img className='h-48 w-96' src="https://images.pexels.com/photos/3448250/pexels-photo-3448250.jpeg?w=700&h=700" alt="" />}
                        {props.topic.slug === "coding" && <img className='h-48 w-96' src="https://images.pexels.com/photos/10845119/pexels-photo-10845119.jpeg?w=700&h=700" alt="" />}
                        {props.topic.slug === "cooking" && <img className='h-48 w-96' src="https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?w=700&h=700" alt="" />}
                    </figure>

                    <div className='card-body rounded-b-lg bg-slate-400'>
                        <h2 className="card-title text-sm absolute top-3 left-3 right-3 text-gray-800 bg-white bg-opacity-75 p-4 rounded-lg">{props.topic.slug}</h2>
                        <p>{props.topic.description}</p>
                    </div>
                </div>  
            </Link>
            
        </>
    )
}

export default Topics