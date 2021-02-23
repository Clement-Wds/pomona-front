export default function Home() {
    return (
        <>
            <Head>
                <meta charset="utf-8" />
                <title>PassionFroid</title>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous"/>
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.bundle.min.js" integrity="sha384-b5kHyXgcpbZJO/tY9Ul7kGkf1S0CWuKcCD38l8YkeH8z8QjE0GmW1gYU5S9FOnJ0" crossorigin="anonymous"></script>
                <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
                <link rel = "stylesheet" href = "css/home.css"/>  
            </Head>

            <div class="bar"></div>
            <div class="input-group" id="nav" style="display: none;">
                <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search"
                aria-describedby="search-addon" />
                <button type="button" class="btn btn-outline-primary">search</button>
            </div>
            <div class="logo">
                <a href="./index.html">
                    <img class="logo" src="css/PassionFroid.png"/>
                </a>
            </div>
            <form method="POST">
                <div class = "container-fluid white" id="connect">
                    <div class="row">
                        <div class="col-md-1"></div>
                            <div class="mb-3">  
                                <label for="exampleInputEmail1" class="form-label">Email address</label>
                                <input type="email" class="form-control" name="email" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                                <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputPassword1" class="form-label">Password</label>
                                <input type="password" class="form-control" name="password" id="exampleInputPassword1"/>
                            </div>
                            <button type="button" name="identifiant" class="btn btn-primary" onclick="myFunction()">Submit</button>
                        </div>
                        <div class="col-md-1"></div>
                </div>

                <div class = "container-fluid" id = "page" style="display:none;">
                    <div class="row" id="grid">
                        <div class="col-md-1"></div>
                        
                        <div class="col-md-5" id="amb">
                            <p class ="text">Image d'ambiance</p>
                            <a href="./photo.html">
                                <img class="ambianceimage" src="css/photosambiance/AdobeStock_30838671.jpeg" id="imagebutton"/>
                            </a>
                        </div>
                        <div class="col-md-5" id="prod">
                            <p class ="text">Image de produit</p>
                            <a href="./photo.html">
                                <img class="produitimage" src="css/photosproduits/39847-RC.jpg" id="imagebutton"/>
                            </a>
                        </div>
                        <div class="col-md-1"></div>
                        <div class="col-md-6 btn-block" id="butto2">
                            <div class="mb-3">
                                <label for="formFileMultiple" class="form-label" id="uptext">Upload files</label>
                                <input class="form-control" type="file" id="formFileMultiple" multiple/>
                            </div>
                        </div>
                    </div>
                </div>

            </form>
        </>
        
    )
}