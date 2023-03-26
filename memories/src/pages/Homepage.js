import Card from "../components/Card";
import { useState } from "react";
const Homepage = ()=>{
    const [creator,setCreator] = useState('')
    const [title,setTitle] = useState('')
    const [message,setMessage] = useState('')
    const [tags,setTags] = useState('')

    return (
        <div className = 'h-screen w-screen bg-[#17B3F8] flex flex-col items-center'>
            <div className = 'bg-white h-[10vh] w-[70vw] mt-[2vh] rounded-lg text-[#17B3F8] text-center flex flex-col items-center justify-center text-6xl'>
                Memories
            </div>
            <div className = 'w-[70vw] mx-[15vw] flex gap-x-[8vw]'>
                <div >
                    <div className = 'flex gap-x-6 '>
                        <Card 
                            title = 'Skydiving'
                            description = 'We really enjoyed skydiving in spain, It gave us really good thrills etc'
                        />
                        <Card 
                            title = 'Skydiving'
                            description = 'We really enjoyed skydiving in spain, It gave us really good thrills etc'
                        />
                    </div>
                    <div className = 'flex gap-x-6 '>
                        <Card 
                            title = 'Skydiving'
                            description = 'We really enjoyed skydiving in spain, It gave us really good thrills etc'
                        />
                        <Card 
                            title = 'Skydiving'
                            description = 'We really enjoyed skydiving in spain, It gave us really good thrills etc'
                        />
                    </div>
                    
                </div>
                <div className = 'w-[20vw] h-[50vh] bg-white mt-[2vh] rounded-lg  text-black flex flex-col items-center '>
                    <p className = 'font-semibold text-xl'> Create Memory </p>
                    <input
                        value={creator}
                        onChange={(e) => setCreator(e.target.value)}
                        type="text"
                        className=" w-[15vw] h-[4vh] pl-2 rounded-md text-black mt-[2vh] border border-gray-700 focus:border-gray-700"
                        placeholder="Creator"
                      />
                      <input
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        type="text"
                        className=" w-[15vw] h-[4vh] pl-2 rounded-md text-black mt-[2vh] border border-gray-700 focus:border-gray-700"
                        placeholder="Title"
                      />
                      <textarea
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        type="text"
                        className=" w-[15vw] h-[12vh] pl-2 rounded-md text-black mt-[2vh] border border-gray-700 focus:border-gray-700"
                        placeholder="Message"
                      />
                      <input
                        value={tags}
                        onChange={(e) => setTags(e.target.value)}
                        type="text"
                        className=" w-[15vw] h-[4vh] pl-2 rounded-md text-black mt-[2vh] border border-gray-700 focus:border-gray-700"
                        placeholder="Tags (comma seprated)"
                      />
                      <div onClick={()=>{

                      }}
                      className = 'w-[15vw] h-[4vh] bg-[#3248A8] pl-2 rounded-md text-white text-center mt-[2vh] font-semibold'>
                        Submit
                      </div>
                      <div onClick={()=>{
                            setCreator('');
                            setMessage('');
                            setTitle('');
                            setTags('')
;                        }}
                    className = 'w-[15vw] h-[4vh] bg-[#FF044F] pl-2 rounded-md text-white text-center mt-[1vh] font-semibold'>
                      Clear
                    </div>
                </div>
            </div>
            
            
            
        
        </div>
    );

}

export default Homepage;