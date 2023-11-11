import { useState } from "react";
import CreatePuzzle from "./Modals/CreatePuzzle";

const TeacherDashBoard = () => {
    const [modalOpen, setModalOpen] = useState(false)
    const closeModal = () => {
        setModalOpen(false)
    }
    const puzzles = [
        {
            "id":"1",
            "words":["alma","körte","banán"],
            "shuffled":"szilva"
        },
        {
            "id":"2",
            "words":["lego","nerf","playdoh"],
            "shuffled":"duplo"
        }
    ]
    const teams = [
        {
            "name":"ASd",
            "members":["1","2","e"],
            "desc":"asdasdsadasdasdas"
        },
        {
            "name":"ASd2",
            "members":["1a","2g","e"],
            "desc":"asdasasdbbndsadasdasdas"
        }
    ]
    return ( 
        <div className="content">
            {modalOpen && <CreatePuzzle closeModal={closeModal()}/>}
            <div className="data-container">
                <table className="puzzle-table">
                    <th>
                        <button>Create</button>
                    </th>
                    <tr>
                        <td>Puzzle ID</td>
                        <td colSpan={3}>Words</td>
                        <td>Shuffled Word</td>
                        <td>Delete</td>
                    </tr>
                    {puzzles.map((puzzle)=>{
                        return (<tr>
                            <td>{puzzle.id}</td>
                            {
                                puzzle.words.map((word)=>{
                                    return <td><input type="text" defaultValue={word}/></td>
                                })
                            }
                            <td><input type="text" defaultValue={puzzle.shuffled}/></td>
                            <td><button>Delete</button></td>
                        </tr>)
                    })}
                </table>

                <table className="team-table">
                    <tr>
                        <td>Team name</td>
                        <td colSpan={3}>Members</td>
                        <td>Team description</td>
                    </tr>
                    {teams.map((team)=>{
                        return (<tr>
                            <td>{team.name}</td>
                            {
                                team.members.map((member)=>{
                                   return <td>{member}</td>
                                })
                            }
                            <td>{team.desc}</td>
                        </tr>)
                    })}
                </table>
            </div>
        </div>
    );
}
 
export default TeacherDashBoard;