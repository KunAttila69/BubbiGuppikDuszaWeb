import "../Styles/index.css"

const Game = (gameId) => {
    const words = ["alma","körte","banán"]
    const answer = "szilva"
    let shuffled = answer.split("").sort((a, b) => 0.5 - Math.random())
    while (shuffled.join("") === answer) {
        shuffled = answer.split("").sort((a, b) => 0.5 - Math.random())
    }

    const checkWin = ((val)=>{
        if(val === answer){
            alert("nyertél")
        }
    })

    return ( 
        <div id="game-container">
            <table className="game-table">
                {words.map((word)=>{
                    return <tr>{word.split("").map((char)=>{return <td>{char}</td>})}</tr>
                })}
                <tr>
                    {shuffled.map((char)=>{
                        return <td>{char}</td>
                    })}
                </tr>
            </table>
            <input type="text" onChange={e=>checkWin(e.target.value)}/>
        </div>
    );
}
 
export default Game;