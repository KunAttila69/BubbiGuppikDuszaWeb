const JudgeDashboard = () => {
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
    return ( 
        <div className="content">
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
            </div>
            </div>
        );
    }
 
export default JudgeDashboard;