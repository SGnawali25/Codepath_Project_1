import React ,{useState,useEffect} from "react";
import { Link } from "react-router-dom";
import { supabase } from "../Client";

const Card = (props) => {
    console.log(props)
    console.log(props.Like)
    const [like, setLike] = useState(props.Like);
    const [dislike, setDislike] = useState(props.Dislike);
    
    useEffect(() =>{
        setLike(props.Like)
    },[props])

    useEffect(() =>{
        setDislike(props.Dislike)
    },[props])
    

    const updateLike = () => {
        setLike(like + 1);
        LikeUpdate();
    }

    const updateDislike = () => {
        setDislike(dislike + 1);
        DislikeUpdate();
    }

    const LikeUpdate = async() => {
        const { error } = await supabase
            .from('FinalProject')
            .update({Like:like+1})
            .eq('id',props.id)

            if (error){
                console.log(error);
            }

    }

    const DislikeUpdate = async() => {
        const { error } = await supabase
            .from('FinalProject')
            .update({Dislike:dislike+1})
            .eq('id',props.id)

            if (error){
                console.log(error);
            }

    }
    return(
        <div className="card">
            <Link to = {'edit/' + props.id}><button>Edit</button></Link>
            <h3 className="name">Name of the Place : {props.name}</h3>
            <h3 className="location">Location : {props.location}</h3>
            <h3 className="Description">Description : {props.description}</h3>
            <h2 onClick={updateLike} className="like">👍:{like}</h2>
            <h2 onClick={updateDislike} className="dislike">👎: {dislike}</h2>
        </div>
    )
}

export default Card;