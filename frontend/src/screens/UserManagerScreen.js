import React ,{useState, useEffect} from "react"
import axios from "axios";


export default function UserManagerScreen(props){

        const [data, setData] = useState([])
        const [detalhes, setDetalhes] = useState([]);
      
          useEffect(() => {axios.get("http://localhost:5000/api/usuarios").then((res) => {
              setData(res.data);
              console.log(data);
          });
        },[]);

        const detalhesHandler = (id)=>{
            axios.get("http://localhost:5000/api/usuarios/detalhes/:id").then((res) => {
                setDetalhes(res.data);
                console.log(data);
            })
        }

    return(
          
        <div>
            <h1>Tela de gerenciamento de usuários</h1>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nome</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((user) =>{
                                return(
                                <tr key={user.id}>
                                    <td> {user.id}</td>
                                    <td>{user.name}</td>
                                    <button onClick={detalhesHandler}>Detalhes</button>
                                    <button>Inativar</button>
                                </tr>
                            )})
                        }
                            
                    </tbody>
                </table>
            </div>
        </div>
    )
}