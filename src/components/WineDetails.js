import axios from 'axios';
import { useParams } from 'react-router-dom';
import {useState, useEffect} from 'react';
import EditWine from './EditWine';

export default function WineDetails({fetchWines,theUser}){
  const {id} = useParams();

  const [editing, setEditing] = useState(false);

  const edit = () => {
        setEditing(true);
    }
  const stopEditing = () => {
        setEditing(false);
    }

  const [theWine, setTheWine] = useState({});

  console.log(theWine);

  const fetchWineDetails = ()=>{
        axios.get("http://localhost:4200/wines/"+id)
        .then((response)=>{
            console.log(response);
            setTheWine(response.data);
        })
        .catch((err)=>{
            console.log(err);
        })
    }

    useEffect(()=>{
        fetchWineDetails();
    },[id])

   return(
        <div className='wine-details-component'>
           
            {editing && <EditWine fetchWines={fetchWines}stopEditing={setEditing} wine={theWine} />}
            {!editing && <div>
            <p><button onClick={edit}>edit</button></p>
            <h3>{theWine.name}</h3>
            <p>{theWine.type}</p>
            <p>{theWine.year}</p>
            <p>{theWine.region}</p>
            <p>{theWine.description}</p>
            </div>}
            
        </div>
    )
}