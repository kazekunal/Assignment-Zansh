'use client'
import React, {useState} from 'react'


const Edit_application = () => {

    const [backgroundColor, setBackgroundColor] = useState('white');

  const changeBackgroundColor = () => {
    setBackgroundColor(backgroundColor === 'white' ? '#EDF4F2' : 'white');
  };

  const changeBackgroundColor_2 = () => {
    setBackgroundColor(backgroundColor === 'white' ? '#EDF4F2' : 'white');
  };

    return(
        <div className="flex-row justify-start">
            <p className="text-3xl cursor-default font-semibold text-[#101828]">Edit your application</p>
            <p className="text-base cursor-default text-[#475467] py-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.</p>

            <div className="flex mt-8">
                <p  style={{backgroundColor}} onClick={changeBackgroundColor}className="cursor-pointer bg-[#EDF4F2]  ml-2 text-[#344054] text-base px-2 py-1 rounded-md">General Details</p>
                <p className="ml-2 text-[#344054]text-base bg-[#EDF4F2] px-2 py-1 cursor-pointer rounded-md focus:">Edit Application Questions</p>
            </div>
        </div>
    )
}

export default Edit_application;
