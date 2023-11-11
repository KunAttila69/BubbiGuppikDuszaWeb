const CreatePuzzle = () => {
    return ( 
        <div className="modal-bg">
            <div className="modal-container">
                <form action="">
                    <label htmlFor="">Words</label>
                    <input type="text" />
                    <input type="text" />
                    <input type="text" />
                    <label htmlFor="">Shuffled Word</label>
                    <input type="text" />
                    <button>Create</button>
                </form>
            </div>
        </div>
    );
}

export default CreatePuzzle;