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
  console.log(fetchWines);

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
        <div className='details-component'>
           
            {editing && <EditWine fetchWines={fetchWines}stopEditing={setEditing} wine={theWine} />}

            <center>
            {!editing && <div className='details'>
            <p><button onClick={edit}>edit</button></p>
            <h1>{theWine.name}</h1>

            <h4>Type:</h4>
            <p>{theWine.type}</p>

            <h4>Year:</h4>
            <p>{theWine.year}</p>

            <h4>Region:</h4>
            <p>{theWine.region}</p>

            <h4>Description:</h4>
            <p>{theWine.description}</p>
            </div>}
            </center>
            
        </div>
    )
}