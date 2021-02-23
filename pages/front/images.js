import Head from 'next/head'

export default function Images() {
    return (
        <>
            <Head>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device, initial-scale=1.0" />
                <title>Images</title>
                <link type="text/css" rel="stylesheet" href="css/style.css" />
                <script src="script.js" defer></script>
            </Head>

            <form class="search">
                <input type="text" placeholder="Search"/>
                <button type="submit">Submit</button>
            </form>

                <div class="images">
                </div>

            <form id="addImage">
                <label for="imageNom">Nom de l'image</label>
                <br></br>
                <input type="text" id="imagenom" />
                <br></br>
                <label for="imageUrl">Url de l'image</label>
                <br></br>
                <input type="text" id="imageurl" />
                <br></br>
                <button type="submit">Ajouter</button>
            </form>
        </>
    )
}