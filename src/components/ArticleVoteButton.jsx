function ArticleVoteButton({handleVoteChange}) {

    return (
        <>
        <button onClick = {()=>{
            handleVoteChange({inc_votes: 1})  
        }}>
            UpVote
        </button>

        <button onClick = {()=>{
           handleVoteChange({inc_votes: -1}) 
        }}>
            DownVote
        </button>
        </>
    )
}

export default ArticleVoteButton