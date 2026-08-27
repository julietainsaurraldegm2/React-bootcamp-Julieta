import { useState } from "react"

function Post(){
    const [liked, setLiked] = useState(false);
    return(
        <div>
            <img src ="https://preview.redd.it/low-res-image-of-cat-drooling-v0-dj8e3ngjr3lg1.jpeg?width=736&format=pjpg&auto=webp&s=af7aa984dc96f895e9bd53dc318ecb47848326a6"></img>
            <button onClick={()=> setLiked(!liked)}>
                like{liked&&"❤️"}
            </button>
        </div>
    )
}
export default Post