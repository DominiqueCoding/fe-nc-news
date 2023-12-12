import { useState,useEffect } from 'react'
import { getArticles,patchArticleVotesById } from '../utils/api';
import { useParams } from 'react-router-dom';

function ArticleVoteButton({votes,setVotes,votesLocal}) {

    const {id} = useParams()

    const [pressToggle, setPressToggle] = useState(false)
    const [voteUpdate, setVoteUpdate] = useState({inc_votes: 0})

    function handleVotes(){

        if(!pressToggle){
            setVoteUpdate({
                inc_votes : 1
            })

            setVotes(
                votesLocal + 1
            )
        }else if(pressToggle){
            setVoteUpdate({
                inc_votes : -1
            })

            setVotes(
                votesLocal
            )
        }
    }

    useEffect(()=>{
        patchArticleVotesById(id,voteUpdate)
    },[pressToggle])

   
    return (
        <>
        <p>{votes || votesLocal} votes</p>
        <button onClick = {()=>{
            setPressToggle(!pressToggle)
            handleVotes()
        }}>
            add vote
        </button>
        </>
    )
}

export default ArticleVoteButton