import { useState,useEffect } from 'react'
import { getArticles,patchArticleVotesById } from '../utils/api';
import { useParams } from 'react-router-dom';

function ArticleVoteButton({votes,setVotes,votesLocal}) {

    const {id} = useParams()

    const [pressToggleInc, setPressToggleInc] = useState(false)
    const [pressToggleDec, setPressToggleDec] = useState(false)


    const [voteUpdate, setVoteUpdate] = useState({inc_votes: 0})

    function handleVotesInc(){
        if(!pressToggleInc){
            setVoteUpdate({
                inc_votes : 1
            })

            setVotes(
                votesLocal + 1
            )
        }else if(pressToggleInc){
            setVoteUpdate({
                inc_votes : -1
            })

            setVotes(
                votesLocal
            )
        }

    }

    function handleVotesDec(){
        if(!pressToggleDec){
            setVoteUpdate({
                inc_votes : -1
            })

            setVotes(
                votesLocal - 1
            )
        }else if(pressToggleDec){
            setVoteUpdate({
                inc_votes : +1
            })

            setVotes(
                votesLocal
            )
        }
    }

    useEffect(()=>{
        patchArticleVotesById(id,voteUpdate)
    },[voteUpdate])

   
    return (
        <>
        <p>{votes || votesLocal} votes</p>
        <button onClick = {()=>{
            
            setPressToggleInc(!pressToggleInc)
            handleVotesInc()
        }}>
            UpVote
        </button>

        <button onClick = {()=>{
            setPressToggleDec(!pressToggleDec)
            handleVotesDec()
        }}>
            DownVote
        </button>
        </>
    )
}

export default ArticleVoteButton