const Shteignproject = () => {
    return (<div className='english_font' style={{marginLeft:'30px'}}><h2 style={{textAlign:'center'}}>The shteigen project</h2>
    <p>The Shteigen project is a web application that is a studying aid.</p>
    <p>It allows students to present the fruits of their studying as a logical graph of nodes and arches and create dynamic leveled flow charts</p>
    <p>Its technological stack is React/typescript for the client and Ruby on Rails for the server, with Postgres as the databse</p>
    <h1 style={{textDecoration: 'underline'}}>Description</h1>
    <p>The groups of graphs are divided into modules</p>
    <p>You can choose a module and watch all its graphs and you can create a module:</p>
    <h3>The splash screen</h3><br />
    <div className='image-align' style={{backgroundImage:'url(sshteigensplash.png)'}}></div><br />
    <p>Adding a new module is done by writing the name in the input box and pressing enter</p>
    <p>Pressing the module name will lead you to the module page and watching all its graphs</p><br />
    <div className='image-align' style={{backgroundImage:'url(modulepage.png)'}}></div>
    <p>In the module page you can: </p>
    <ul>
        <li>Add a new concept (node) in the &#39;הוסף מושג&#39; box and press enter. the concept will be added to the page as a node</li>
        <li>You can move a node by dragging it and even bring it down a level.</li>
        <li>Clicking on a node opens a modal that conatains a text box to write text about the concept, an input box that contains the name of the concept and a list of nodes that may or may not be related to the concept. pressing on one of them will create an arch between the two nodes</li>
        <li>You can chart a logical course between two concepts. choose the higher one in the &#39;מושג 1&#39; and the lower one in the &#39;מושג 2&#39; and the path, if exists will be charted</li>
        <li>edit an arch between two concepts</li>
    </ul>
    <div className='image-align' style={{width:'700px',height:'500px',backgroundImage:'url(node_modal.png)',backgroundSize:'100%'}}></div>
    <p>If you press on an arch a modal opens that allows you to update the arch or delete it</p>
    <p>This project is added to my portfolio. The client side is called &#39;shteigen&#39; and the server side is called &#39;shteigen_back&#39;. The commands needed to make it work is:</p>
    <div className='image-align' style={{width:'500px',height:'500px',backgroundImage:'url(archmodal.png)',backgroundSize:'200%'}}></div>
    <ul>
        <li> The project is activated via dockers. there are two dockerfiles, one for the client and one for the server. in addition, in order to config the server side, the client side and the database we added a docker-compose.yml file</li>
        <li>The server side (&#39;shteigen_back&#39; directory) runs on port 3002. The client side runs on port 3000</li>
        <li>in order to run the project you need to have Docker and Docker Compose installed (a good docker runner like &quot;docker-desktop&quot;), print `docker-compose build` to build and `docker-compose up -d`. in order to bring it down print `docker-compose down`</li>
        <li>instructions about the app can be found in https://drive.google.com/file/d/18BygcE7jz4jiwmLQ16sQpPJzONgoDV28/view?usp=sharing</li>
    </ul>
    </div>);
}
export default Shteignproject;