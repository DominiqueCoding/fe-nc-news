import { Link } from "react-router-dom";

function TopicArticles(props) {

  return (
    <>
      <Link to = {"/article/" + props.article.article_id}>
        <div className ='card bg-base-100 shadow-xl m-2'>
          <figure><img className='h-48 w-96' src={props.article.article_img_url} alt="" /></figure>
          <div className="card-body rounded-b-lg bg-slate-400 p-3">
            
            <h2 className="card-title text-sm absolute top-3 left-3 right-3 text-gray-800 bg-white bg-opacity-75 p-4 rounded-lg">{props.article.title}</h2>

            <div className="flex flex-col xs:flex-row">
              <p>by {props.article.author} </p>

              <p>{new Date(props.article.created_at).toLocaleString()}</p>
            </div>

            <div className="flex flex-col xs:flex-row">
              <p>{props.article.comment_count} comments</p>

              <p>{props.article.topic}</p>

              <p>{props.article.votes} votes</p>
            </div>

            
          </div>
      </div>  
    </Link>
        
    </>
  )
}

export default TopicArticles