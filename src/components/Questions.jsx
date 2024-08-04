'use client'
import React from 'react'
import Modal from './Modal'
import { useState } from 'react'
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardFooter,
  } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import Question_cards from './Question_cards'
import './extra_styling.css'

const Questions = () => {

    const [buttonpopup, setbuttonpopup] = useState(false);
    const [value, setValue] = useState("");
    const [questiontype, setQuestionType] = useState("");
    const [questionpopup, setQuestionPopup] = useState(false);
    const [showInitialMessage, setShowInitialMessage] = useState(true);
    const [isSubmitted, setIsSubmitted] = useState(false); 
    const [new_questionpopup, new_setQuestionPopup] = useState(false);
    // tried using the usestate property to set the background blur when the popus appears but it requires a lot of prop handling which can be solved otherwise with a different approach

    const handleSubmitAdd = (event) => {
        setbuttonpopup(true);
        setIsSubmitted(true); //does not work right now
        //className={` ${isSubmitted ? 'bg-black bg-opacity-20' : 'bg-black opacity-100'}`}
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setbuttonpopup(false);
        setQuestionPopup(true);
        setShowInitialMessage(false);
    }

    const handleQuestionSubmit = (event) =>{
        new_setQuestionPopup(true);
    }

    const handleSubmitDelete = (event) =>{
        setQuestionPopup(false);
        setShowInitialMessage(true);
    }
    

  return (
    <div>
    {showInitialMessage && (
    <div className='flex-col justify-between absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/4'>
        <div className='mb-3'>
            <div className='flex justify-center '>
            <svg width="57" height="57" viewBox="0 0 57 57" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="4.5" y="4.5" width="48" height="48" rx="24" fill="#ECF7F6"/>
<rect x="4.5" y="4.5" width="48" height="48" rx="24" stroke="#D4EBE5" stroke-width="7.87412"/>
<path d="M24.5872 25.2357L27.1852 20.0037C27.2609 19.8523 27.3772 19.725 27.5211 19.6359C27.6651 19.5469 27.831 19.4998 28.0002 19.4998C28.1695 19.4998 28.3354 19.5469 28.4793 19.6359C28.6233 19.725 28.7396 19.8523 28.8152 20.0037L31.4132 25.2357L37.2212 26.0797C37.3888 26.103 37.5464 26.1728 37.6761 26.2813C37.8058 26.3899 37.9024 26.5327 37.9549 26.6935C38.0073 26.8542 38.0135 27.0265 37.9727 27.1907C37.932 27.3548 37.8458 27.5042 37.7242 27.6217L33.5222 31.6917L34.5142 37.4417C34.6412 38.1797 33.8612 38.7417 33.1942 38.3937L28.0002 35.6777L22.8052 38.3937C22.1392 38.7427 21.3592 38.1797 21.4862 37.4407L22.4782 31.6907L18.2762 27.6207C18.1552 27.5031 18.0696 27.3539 18.0292 27.19C17.9888 27.0262 17.9951 26.8543 18.0475 26.6939C18.0999 26.5335 18.1963 26.3909 18.3256 26.2826C18.455 26.1742 18.6121 26.1042 18.7792 26.0807L24.5872 25.2357Z" stroke="#00695C" stroke-width="1.64086" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
            </div>
        </div>
        <div className='mb-3'>
            <div  className='flex justify-center'>
                <p className="text-2xl cursor-default font-semibold text-[#101828]">Let’s add some questions to your applications</p>
            </div>
        </div>
        <div className='mb-3'>
            <div  className='flex justify-center'>
                <p className="text-base cursor-default text-[#475467] py-1">Click the button below to get your survey up and running.</p>
            </div>
        </div>
        <div className='mb-3'>
            <div className='flex justify-center'>
                <Button onClick={handleSubmitAdd} className="bg-[#002924] text-sm text-white hover:bg-[#383838] hover:text-white" variant="outline">Add a question</Button>
            </div>
        </div>
        </div>
    )}
        <Modal trigger={buttonpopup}>
            <div className='fixed h-full w-screen'>
                <div id='question_modal' className="relative  left-72 top-20">
                    <Card id='question_modal' className="order-1 bg-[#F9FAFB]">
                        <CardContent>
                            <form>
                                <div className="grid items-center gap-4">
                                    <div className="flex flex-col space-y-1.5">
                                        <Label className="text-sm font-medium text-[#344054]" htmlFor="ques">Question</Label>
                                        <Input  onChange={(e) => setValue(e.target.value)} id="ques" placeholder="What is your Question?" />
                                    </div>
                                    <div className="flex flex-col space-y-1.5">
                                        <Label required className="text-[#344054] text-sm font-medium" htmlFor="ques_type">Question Type</Label>
                                        <Select onValueChange={(value) => setQuestionType(value)}>
                                            <SelectTrigger id="ques_type">
                                                <SelectValue placeholder="Select" />
                                            </SelectTrigger>
                                            <SelectContent position="popper">
                                                <SelectItem value="Text Based Question">Text Based</SelectItem>
                                                <SelectItem value="Photo Based Question">Photo Based</SelectItem>
                                                <SelectItem value="Video Based Question">Video Based</SelectItem>
                                                <SelectItem value="Audio Based Question">Audio Based</SelectItem>
                                                <SelectItem value="Document Based Question">Document Based</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                    <div className='flex flex-row gap-4'>
                                        <div className="flex flex-col space-y-1.5 mr-4">
                                            <Label className="text-[#344054] text-sm font-medium" htmlFor="words">Limit</Label>
                                            <Input className="w-[200px]" id="words" placeholder="120 Words" />
                                        </div>
                                        <div className="flex flex-col space-y-1.5 ml-4">
                                            <Label className="text-[#344054] text-sm font-medium" htmlFor="ques_skip">Can this question be skipped?</Label>
                                            <Select>
                                                <SelectTrigger id="ques_skip">
                                                    <SelectValue placeholder="Select" />
                                                </SelectTrigger>
                                                <SelectContent position="popper">
                                                    <SelectItem value="Yes">Yes</SelectItem>
                                                    <SelectItem value="No">No</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </CardContent>
                        <CardFooter className="flex justify-end border-t-2 border-[#E4E7EC]">
                            <Button onClick={() => setbuttonpopup(false)} className="mr-2" variant="outline">Cancel</Button>
                            <Button onClick={handleSubmit} className="bg-[#002924] text-sm text-white hover:bg-[#383838] hover:text-white" variant="outline">Save changes</Button>
                        </CardFooter>
                    </Card>
                </div>
            </div>
        </Modal>
<div className='flex flex-col gap-2 h-max'>
        {questionpopup && (
            <Question_cards trigger={questionpopup}>
                <div className="flex flex-row w-max mt-4 gap-3 z-0 rounded p-4 bg-[#F9FAFB]">
                    <span>1.</span>
                    
                    <div className='flex flex-col'>
                    <p id='question_card_p' className='text-base relative w-72 mr-6'>{value}</p>
                    <p className='text-sm text-[#475467] relative w-72 mt-2 mr-6'>{questiontype}</p>
                    </div>

                    <Button onClick = {handleSubmitAdd} variant="outline">Edit</Button>
                    <Button onClick = {handleSubmitDelete} variant="outline" className="bg-[#F4EDED]">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#8F0D0D" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                    </svg>
                    </Button>
                    <Button variant="ghost">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
                    </svg>
                    </Button>
                </div>
                {/* <Button onClick={handleQuestionSubmit} className="bg-[#002924] text-sm text-white hover:bg-[#383838] hover:text-white w-12 mt-3" variant="outline">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
                </Button> */}
                
            </Question_cards>
            
        )}

        {new_questionpopup && (
            <Question_cards className="flex flex-col" trigger={new_questionpopup}>
                <div className="flex flex-row w-max mt-4 gap-3 rounded p-4 bg-[#F9FAFB]">
                    <span>2.</span>
                    <div className='flex flex-col'>
                    <p id='question_card_p' className='text-base relative w-72 mr-6'>{value}</p>
                    <p className='text-sm text-[#475467] relative w-72 mt-2 mr-6'>{questiontype}</p>
                    </div>

                    <Button variant="outline">Edit</Button>
                    <Button variant="outline" className="bg-[#F4EDED]">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#8F0D0D" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                    </svg>
                    </Button>
                    <Button variant="ghost">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
                    </svg>
                    </Button>
                </div>
                <Button className="bg-[#002924] text-sm text-white hover:bg-[#383838] hover:text-white w-12 mt-3" variant="outline">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
                </Button>
            </Question_cards>
            
        )}
        
        </div>
    </div>
  )}

export default Questions
