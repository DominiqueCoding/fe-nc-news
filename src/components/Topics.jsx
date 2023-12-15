import { Link } from 'react-router-dom'

function Topics(props) {

  
    return (
        <>
            
            <div className='topic-item'>
                <Link to = {"/Topic/" + props.topic.slug}>
                    <p>{props.topic.slug}</p>
                    <p>{props.topic.description}</p>
                    
                    {props.topic.slug === "football" && <img className='article-img' src="https://images.pexels.com/photos/3448250/pexels-photo-3448250.jpeg?w=700&h=700" alt="" />}
                    {props.topic.slug === "coding" && <img className='article-img' src="https://images.pexels.com/photos/10845119/pexels-photo-10845119.jpeg?w=700&h=700" alt="" />}
                    {props.topic.slug === "cooking" && <img className='article-img' src="https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?w=700&h=700" alt="" />}
                </Link>
            </div>
           
        </>
    )
}

export default Topics