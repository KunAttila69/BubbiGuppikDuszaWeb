const JudgeDashboard = () => {
    const competetions = [
        {
            "id":"a",
            "name":"asdsasd",
            "desc":"asdgfmnkmh",
            "start":"12.23",
            "end":"13.00"
        }
    ]
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
        <div id="judge-dashboard-content">
            <table id="comp-table">
                <td>ID</td>
                <td>Name</td>
                <td>Descripiton</td>
                <td>Start Date</td>
                <td>End Date</td>
                <td>Puzzle</td>
                <td><button>Create</button></td>
                {competetions.map((comp)=>{
                    return (<tr>
                        <td>{comp.id}</td>
                        <td><input type="text" defaultValue={comp.name}/></td>
                        <td><input type="text" defaultValue={comp.desc}/></td>
                        <td><input type="date" defaultValue={comp.start}/></td>
                        <td><input type="date" defaultValue={comp.end}/></td>
                        <td>
                            <select>
                                {puzzles.map((puzzle)=>{
                                    return <option value={puzzle.id}>{puzzle.id}</option>
                                })}
                            </select>
                        </td>
                        <td><button>Delete</button></td>
                    </tr>)
                })}
           </table>
           <table id="puzzle-table">
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
        );
    }
 
export default JudgeDashboard;