const MapMarket = () => {
    return (<><div className='english_font' style={{marginLeft:'30px'}}><h1 style={{textAlign:'center'}}>MapMySupermarket</h1>
    <p>MapMySupermarket is a project of mapping supermarkets that is written in:</p>
    <ul className='lists'>
        <li>Nodejs for the server side</li>
        <li>React/typescript for the client side</li>
        <li>MongoDB as the database</li>
    </ul>
    <p>users are identified by a token and are protected by JWT.</p>
    <p>The project can be serviced through https and is responsive so that clients can use it via their phones.</p>
    <p>The purpose of the app is so that the customers will be able to know where the products that they need are in the store. It can save time and make the shopping experience more efficient and smooth. In future iterations it will also be able to provide information about inventory.
The owner of the shop can draw or load a map of the shop.</p>
<h1>installation and running instructions</h1>
<h2 style={{textAlign:'center'}}>running the project</h2>
<p>first you need to download the supermarketproject project.</p>
<p>in order to run the project you should be connected to the internet, have a docker/docker-compose running ( docker runner like docker-desktop, which is the docker runner I used to test this project), run the docker with these commands on git bash:</p>
<ul className='lists'>
    <li>1. docker-compose build.</li>
    <li>2. docker-compose up -d.</li>
    <li>3. you can turn the server off by printing: docker-compose down.</li>
</ul>
<p>and the project will run locally in the background. you can access it via https://localhost.</p><br />
<h3 className='imphasize'>general information:</h3>
<p>The server runs on npm and node.</p>
<p>The project server and client are being run separately by the docker.</p>
<p>The server runs on port 3001.</p><br />
<h1 style={{textAlign:'center'}}>how it works</h1>
<p>
    <span className='imphasize'>The login page.</span> The first page has 2 input boxes where the user writes username and password. if the server recognizes a valid token the user is redirected to the user page. If the login failed you get an error notice. If the login page succeeded you get a token that is saved on your localStorage.<br />

</p>
<div style={{backgroundImage:'url(login_page_super.png)',width:'750px',height:'500px'}} className='set-photos'></div>
<p><span className='imphasize'>The signup page.</span> You can sign up and create a new user. If the signup process succeeds you are transferred to the user page and a token is created for you.<br />
</p>
<div style={{backgroundImage:'url(signup_super.png)',width:'750px',height:'500px'}} className='set-photos'></div>
<p>There are 3 kinds of users:</p>
<p>Owner and Employee who can create a new supermarket and have access to it and a customer.</p>
<p><span className='imphasize'>The user page</span> where the owner\employee can create his own stores and watch them, and the customer can watch all of the stores and choose which one to watch.
the user can filter the list of stores by text.
</p>
<div style={{backgroundImage:'url(userpage.png)',width:'500px'}} className='set-photos'></div>
<p><span className='imphasize'>The painting page,</span> where the owner can import or create the map of the store and create a list of products from the store and their locations inside the store.
like this map has a non-map background and map that include 5 aisles in the store:
</p>
<div style={{backgroundImage:'url(market_page.png)',width:'500px'}} className='set-photos'></div>
<p>The aisles are painted green on an image planted on the page using <span className='imphasize'>“plant an image”</span> button.
</p>
<p>products are added by pressing the <span className='imphasize'>“add new products”</span> button. after pressing it the button’s text turns into “stop adding products”. then you press on the canvas and the product will be listed on the place where you pressed and added to the product list on the right.When you’re done adding and mapping products press “stop adding products”. You can’t paint while creating products</p>
 <p>When your mouse goes over a product it appears on its proper place on the canvas.
You can use the filter input to filter the results of the list.
<span className='imphasize'>“save the map”</span> loads the data url of the entire canvas to the database</p>
   <p>The painting page layout appears to a customer without the buttons or the ability to add products:
</p>
<div style={{backgroundImage:'url(supermap.png)',width:'718px',height:'500px'}} className='set-photos'></div>
<br /><p>In this example the numbers indicate aisles in a store.</p>
<p>The site is <span className='imphasize'>responsive</span>. The signup, login and user pages are the same as in the desktop view. The painting page appears without the buttons. in order to watch the product on the map you need to touch it on the list.
</p><br />
<div style={{backgroundImage:'url(market_phone.png)',width:'440px',height:'500px'}} className='set-photos'></div>
<br /><p>
    The database is in mongo db and has several collections. a users collection for users, supermarkets that each of them has many products.
</p>
<p>demonstration of the app:</p>
<p style={{marginBottom:'100px'}}><a href='https://youtu.be/RA_Bi9O1dKI'></a>https://youtu.be/RA_Bi9O1dKI</p>

</div>
    </>);
}
export default MapMarket;