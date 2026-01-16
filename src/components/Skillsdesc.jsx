import React from 'react'




const Skillsdesc = ({ skill }) => {
    return (

        <div className='p-[10px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-20 mx-50 m-10 place-items-center '>
            {skill.map((value) => (

                <div className='w-[11rem]   h-[2.2rem]  border-1 bg-gray-200 rounded-2xl overflow-hidden' >

                    <div
                        style={{ width: `${value.experience}%`, backgroundColor: value.color }}
                        className={` h-full bg-green-900 px-3 pt-1 shadow-black shadow-lg text-white`} >{value.Title}</div>

                </div>

            ))}

        </div>


    )
}

export default Skillsdesc
