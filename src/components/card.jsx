function Card(props)
{
    return( 
        <div style={{backgroundColor:props.bgColor}} className="px-10 py-5 boorder rounded-md text-center flex-grow">
            <h1 className="font-medium text-2xl" >{props.title}</h1>
            <p>{props.Subtitle}</p>

          </div>



    )


}

export default Card