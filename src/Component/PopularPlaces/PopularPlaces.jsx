import React from 'react'
import ImageBox from '../Imagebox/ImageBox'

function PopularPlaces() {
  return (
<>
<h1 className='text-center text-4xl m-2 underline tracking-widest'>POPULAR PLACES</h1>
<div className='flex justify-center'>        
        <ImageBox url={"https://www.fabhotels.com/blog/wp-content/uploads/2019/02/WOW1-1.jpg"}
          dimension={200}
          title=" Worlds of Wonder"
         />

        <ImageBox url={"https://www.fabhotels.com/blog/wp-content/uploads/2019/02/Brahmaputra-Market.jpg"}
          dimension={200}
          title="Brahmaputra Market, Noida"
         />

           <ImageBox url={"https://www.fabhotels.com/blog/wp-content/uploads/2019/02/Okhla-Bird-Sanctuary.jpg"}
          dimension={200}
          title=" Okhla Bird Sanctuary"
         />
        
        <ImageBox url={"https://www.fabhotels.com/blog/wp-content/uploads/2019/02/Snow-World.jpg"}
          dimension={200}
          title="  Snow World, Noida"
         />

        <ImageBox url={"https://www.fabhotels.com/blog/wp-content/uploads/2019/04/ISKCON-Temple-1.jpg"}
          dimension={200}
          title="ISKCON, Noida"
         />
    </div>
</>
  )
}

export default PopularPlaces