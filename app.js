console.info("Developed by Arhis Onlight");
const app = {
    title: 'Indecision app',
    subtitle: 'Put your life in the hands of a computer',
    options: [], 
};
const nums = [66, 23, 54];
const onFormSubmit = (e) => {
    e.preventDefault(); // Prevents default submitting and run the following code
    
    const option = e.target.elements.option.value;
    const isMatch = (option.trim()).match(/^.{1,30}$/g);
    if(option && isMatch) {
        app.options.push(option);
        e.target.elements.option.value = '';
        render();    
    }
};

const onRemoveAll = () => {
    app.options.length = 0;
    render();
};

const onMakeDecision = () => {
    const randomNumber = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNumber];
    alert(option);
};

const appRoot = document.getElementById('app');
const render = () => {
    const template = (
        <div id="indecision">
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>} 
            <p>{app.options.length > 0 ? 'Here is your options:' : 'no options'}</p> 
            <button className="btn btn-primary" disabled={app.options.length === 0} onClick = {onMakeDecision}>What should I do?</button>&nbsp;            
            <button type="button" className="btn btn-outline-danger" data-toggle="modal" data-target="#exampleModalCenter">
                Remove all option
            </button>

            {/*Modal*/}
            <div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalCenterTitle">Remove All Options</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                    <p>Are you sure? Changes won't be <span><strong>undone</strong></span>.</p>
                    <p><strong>Remove all options?</strong></p>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-success" data-dismiss="modal">Close</button>
                    <button type="button" data-dismiss="modal" onClick={onRemoveAll} className="btn btn-danger">Remove all</button>
                </div>
                </div>
            </div>
            </div>

            <ol>
                {
                    
                    app.options.map((option)=>{ 
                        !app.id ? (app.id = 0, app.id++) : undefined; 
                        app.id++;                      
                        return <li key={app.id}>{option}</li>;
                    })
                }
                {delete app.id} 
            </ol> 
            
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option" placeholder="Option" />&nbsp;
                <button className = "btn btn-sm btn-outline-success">Add option</button>
            </form>       
        </div>
    );   

    ReactDOM.render(template, appRoot);
};

render();