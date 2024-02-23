import {react,useCallback,useEffect,useContext,useState} from 'react'
import Title from '../Layout/Title.jsx'
import axios from 'axios'

export default function Home(){

    const [health,sethealth] = useState(null)

    useEffect(() => {
        axios.get("http://localhost:8000/api/v1/healthcheck")
        .then((response) =>{ 
         // console.log(response.json.data)
        sethealth(response.data.data)})
        .catch((err) => {
            console.log("data not found",err)
        })
    })
    

return (
    <>
    <Title/>
    <p>Videos:{health}</p>
    </>
)

}
