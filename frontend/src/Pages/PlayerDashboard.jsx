const PlayerDashboard = () => {
    const yourTeam = ["user1","user2","user3"]
    
    return (
        <div className="player-dashboard">
            <div className="team-container">
                <h1>Your Team:</h1>
                <ul>
                    {yourTeam.map((player)=>{
                        return <li>{player}</li>
                    })}
                </ul>
            </div>
        </div>
    );
}
 
export default PlayerDashboard;