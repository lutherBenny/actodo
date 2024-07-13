import Header from "../components/Header";
import Card from "../components/card";
import TodoContainer from "../components/TodoContainer";
import { useLocation } from "react-router-dom"

function Landing()
{

    const data = useLocation()
    console.log(data.state.user)
    return(
        <div className="bg-black p-16">

        <div className="bg-[#EFEFEF] p-10  border rounded-md">

          {/*Header */}
          <Header username={data.state.user} />

        {/*Card */}

        <div className="flex justify-between gap-7 my-5 flex-wrap">
          <Card bgColor={"#8272DA"} title={"23"} Subtitle={"Chennai"}/>
          <Card bgColor={"#FD6663"} title={"July"} Subtitle={"3.00 AM"}/>
          <Card bgColor={"#FCA201"} title={"Built Using"} Subtitle={"React"}/>
          
          </div>
          {/* Todo Container */}

         <TodoContainer/>
        </div>

      
       </div>
   
    )

}

export default Landing