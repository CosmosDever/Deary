
// 'use client'

// import "./page.css";


// export default function Page() {

// return (
//     <main className="flex flex-col w-screen h-auto text-[18px] bg-[url('/image/gridbg.png')] font-mitr ">
//     <div className="relative flex min-h-screen flex-col items-center p-10 gap-10">
//         <div className="flex flex-col w-[1000px] h-auto bg-[#FFFFFF] bg-opacity-[20%] backdrop-blur-sm p-10 px-12 rounded-[50px] shadow-[0_3px_10px_rgb(0,0,0,0.2)]  ">
            
//             <div className="flex flex-row justify-between">
//                 <h1 className="flex justify-start text-[#363636] text-[25px] font-semibold ">Friday, 19 April 2024, 12:30 PM</h1>
//                 <img className="flex justify-end w-[25px] h-[25px] " src="image/x.png" />
//             </div>
            
//             {/* feeling */}
//             <div className="container flex flex-col justify-center items-center">  
//                 <div className="orb mt-[40px] drop-shadow-lg animate-gradient">
//                     <div className="reflection" ></div>
//                     <div className="inner-glow"></div>
//                 </div>
//                 <h2 className="text mt-[10px]">Sad</h2>
//             </div>

            

//             {/* text */}
//             <div className="flex justify-center items-center w-[900px] h-auto mt-[40px]">
//                 <div className="relative w-full min-w-[500px]">
//                     <textarea rows = {9}  className="peer h-auto w-full text-center  resize-none rounded-[7px] border border-gray-700 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-[18px] font-normal text-[#363636] outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-gray-500  focus:border-2 focus:border-gray-700 focus:border-t-transparent focus:outline-0 disabled:resize-none disabled:border-0 disabled:bg-gray-50"
//                     placeholder=" ">
//                     </textarea>
//                     <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[18px] font-normal leading-tight text-gray-700 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-gray-700 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-gray-700 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-gray-700 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-gray-500">
//                     Tell me something...
//                     </label>
//                 </div>
//             </div>
            
            
//             <div className="flex flex-row justify-between mt-10">
//                 <div>
//                     <img className="flex justify-start w-[40px]" src="image/pic.png" />
//                 </div>    
//                 <div className="flex justify-end ">
//                 <button className='bg-[#6C2BB8] w-[110px] rounded-[10px] p-2 text-white border-black border-2  shadow-[7px_6px_black] 
//                     transition ease-in-out delay-130 hover:-translate-y-1 hover:scale-105 hover:bg-[#6429AA] duration-100  ' 
//                     type="button">Done</button>
//                 </div>
//             </div>
//         </div>        
        

//             {/* button */}
//         <div className="flex flex-row justify-center gap-5">
//             <a href="/select-feel">
//             <button className='signin-button bg-[#6C2BB8] w-[110px] rounded-[10px] p-2 text-white border-black border-2 mb-2 shadow-[7px_6px_black] 
//                                 transition ease-in-out delay-130 hover:-translate-y-1 hover:scale-105 hover:bg-[#6429AA] duration-100  ' 
//             type="button">Back</button>
//             </a>
//             <a href="/month-total">
//             <button className='signin-button bg-[#6C2BB8] w-[110px] rounded-[10px] p-2 text-white border-black border-2 mb-2 shadow-[7px_6px_black] 
//                                 transition ease-in-out delay-130 hover:-translate-y-1 hover:scale-105 hover:bg-[#6429AA] duration-100' 
//             type="button">Next</button> 
//             </a>
//         </div>

//         <button className='fixed bottom-2 right-5 flex flex-row justify-center items-center gap-2 bg-[#6C2BB8] w-[60px] h-[60px] rounded-[100px] p-2 text-white border-black border-2 mb-2 shadow-[7px_6px_black] transition ease-in-out delay-130 hover:-translate-y-1 hover:scale-105 hover:bg-[#6429AA] duration-100 ' 
//             type="button"><img className="w-[15px] h-auto" src="image/plus.png"/></button>
//     </div>
//     </main>
// );
// }

'use client';

import React, { useState } from 'react';
import "./page.css";

// Section
function Section({ index, data, onTextChange, onSaveText, onEditText, onDeleteText, onImageUpload, onDeleteImage, onDeleteSection }) {
    const { text, savedText, image, showDeleteButton, currentDateTime } = data;

    const confirmDeleteSection = () => {
        if (window.confirm('Are you sure you want to delete this section?')) {
            onDeleteSection(index);
        }
    };

    const confirmDeleteText = () => {
        if (window.confirm('Are you sure you want to delete this text?')) {
            onDeleteText(index);
        }
    };

    return (
        <div className="flex flex-col w-full lg:w-[1000px] h-auto bg-[#FFFFFF] bg-opacity-[20%] backdrop-blur-sm p-6 sm:p-8 lg:p-10 rounded-[20px] lg:rounded-[50px] shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
            <div className="flex flex-row justify-between">
                <h1 className="text-[#363636] text-[20px] sm:text-[22px] lg:text-[25px] font-semibold">{currentDateTime}</h1>
                {showDeleteButton && (
                    <img className="w-[20px] h-[20px] sm:w-[22px] sm:h-[22px] lg:w-[25px] lg:h-[25px] cursor-pointer" src="image/x.png" alt="Close" onClick={confirmDeleteSection} />
                )}
            </div>

            {/* feeling */}
            <div className="container flex flex-col justify-center items-center">
                <div className="orb mt-[20px] sm:mt-[30px] lg:mt-[40px] drop-shadow-lg animate-gradient">
                    <div className="reflection"></div>
                    <div className="inner-glow"></div>
                </div>
                <h2 className="text-[18px] sm:text-[20px] mt-[5px] sm:mt-[7px] lg:mt-[10px]">Sad</h2>
            </div>

            {/* text */}
            {!savedText ? (
                <div className="flex justify-center items-center w-full lg:w-[900px] h-auto mt-[20px] sm:mt-[30px] lg:mt-[40px] lg:mx-3">
                    <div className="relative w-full min-w-[300px] sm:min-w-[400px] lg:min-w-[500px]">
                        <textarea
                            rows={9}
                            className="peer h-auto w-full text-center resize-none rounded-[7px] border border-gray-700 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-[16px] sm:text-[17px] lg:text-[18px] font-normal text-[#363636] outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-gray-500 focus:border-2 focus:border-gray-700 focus:border-t-transparent focus:outline-0 disabled:resize-none disabled:border-0 disabled:bg-gray-50"
                            placeholder=" "
                            value={text}
                            onChange={(e) => onTextChange(e, index)}
                        />
                        <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[16px] sm:text-[17px] lg:text-[18px] font-normal leading-tight text-gray-700 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-gray-700 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-gray-700 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-gray-700 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-gray-500">
                            Tell me something...
                        </label>
                    </div>
                </div>
            ) : (
                <div className="flex justify-center items-center w-full lg:w-[900px] h-auto mt-[20px] sm:mt-[30px] lg:mt-[40px]">
                    <p className="text-[#363636] text-[16px] sm:text-[17px] lg:text-[18px]">{savedText}</p>
                </div>
            )}

            {image && (
                <div className="relative flex justify-center items-center w-auto h-auto mt-[10px] sm:mt-[15px] lg:mt-[20px]">
                    <img src={image} alt="Uploaded" className="max-w-full max-h-[200px] sm:max-h-[250px] lg:max-h-[300px] object-contain rounded-2xl" />
                        {showDeleteButton && (
                            <img className="absolute top-2 right-2 w-[25px] h-[25px] sm:w-[30px] sm:h-[30px] lg:w-[35px] lg:h-[35px]" 
                            src="image/delete.png" 
                            onClick={() => onDeleteImage(index)}/>
                        )}
                </div>
            )}



            
                {!savedText ? (
                    <>
                    <div className="flex flex-row justify-between items-center mt-6 sm:mt-8 lg:mt-10">
                        <label htmlFor={`file-input-${index}`} className="cursor-pointer w-[30px] h-[30px] sm:w-[35px] sm:h-[35px] lg:w-[40px] lg:h-[40px]">
                            <img src="image/pic.png" alt="Image" />
                            <input
                                id={`file-input-${index}`}
                                type="file"
                                accept="image/*"
                                className="hidden"
                                onChange={(e) => onImageUpload(e, index)}
                            />
                        </label>
                        <button
                            className="bg-[#6C2BB8] w-[90px] sm:w-[100px] lg:w-[110px] rounded-[8px] sm:rounded-[9px] lg:rounded-[10px] p-1.5 sm:p-2 text-white border-black border-2 shadow-[7px_6px_black] transition ease-in-out delay-130 hover:-translate-y-1 hover:scale-105 hover:bg-[#6429AA] duration-100"
                            type="button"
                            onClick={() => onSaveText(index)}
                        >
                            Done
                        </button>
                        </div>
                    </>
                ) : (
                    <div className="flex flex-row justify-end items-center gap-2 sm:gap-2.5 lg:gap-3 mt-10">
                        <img className="w-[30px] h-[30px] sm:w-[35px] sm:h-[35px] lg:w-[40px] lg:h-[40px] cursor-pointer ml-auto" src="image/edit.png" alt="Edit" onClick={() => onEditText(index)} />
                        <img className="w-[30px] h-[30px] sm:w-[35px] sm:h-[35px] lg:w-[40px] lg:h-[40px] cursor-pointer" src="image/bin.png" alt="Delete" onClick={confirmDeleteSection}/>
                    </div>
                )}
                
            </div>
        
    );
}

export default function Page() {
    const [sections, setSections] = useState([
        {
            text: "",
            savedText: null,
            image: null,
            showDeleteButton: true,
            currentDateTime: new Date().toLocaleString('en-US', {
                weekday: 'long',
                day: 'numeric',
                month: 'long',
                year: 'numeric',
                hour: 'numeric',
                minute: 'numeric',
                second: 'numeric',
                hour12: true
            }),
        }
    ]);

    const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>, index: number) => {
        const newSections = sections.slice();
        newSections[index].text = e.target.value;
        setSections(newSections);
    };

    const handleSaveText = (index: number) => {
        const newSections = sections.slice();
        newSections[index].savedText = newSections[index].text;
        newSections[index].text = ""; 
        newSections[index].showDeleteButton = false; 
        setSections(newSections);
    };

    const handleEditText = (index: number) => {
        const newSections = sections.slice();
        newSections[index].text = newSections[index].savedText || "";
        newSections[index].savedText = null;
        newSections[index].showDeleteButton = true; 
        setSections(newSections);
    };

    const handleDeleteText = (index: number) => {
        const newSections = sections.slice();
        newSections[index].savedText = null;
        newSections[index].showDeleteButton = true; 
        setSections(newSections);
    };

    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
        if (e.target.files && e.target.files[0]) {
            const reader = new FileReader();
            reader.onload = (e) => {
                const newSections = sections.slice();
                newSections[index].image = e.target?.result as string;
                setSections(newSections);
            };
            reader.readAsDataURL(e.target.files[0]);
        }
    };

    const handleDeleteImage = (index: number) => {
        const newSections = sections.slice();
        newSections[index].image = null;
        setSections(newSections);
    };

    const handleAddSection = () => {
        const newSection = {
            text: "",
            savedText: null,
            image: null,
            showDeleteButton: true,
            currentDateTime: new Date().toLocaleString('en-US', {
                weekday: 'long',
                day: 'numeric',
                month: 'long',
                year: 'numeric',
                hour: 'numeric',
                minute: 'numeric',
                second: 'numeric',
                hour12: true
            }),
        };
        setSections([...sections, newSection]);
    };

    const handleDeleteSection = (index: number) => {
        if (index === 0) {
            const newSections = sections.slice();
            newSections[index] = {
                text: "",
                savedText: null,
                image: null,
                showDeleteButton: true,
                currentDateTime: new Date().toLocaleString('en-US', {
                    weekday: 'long',
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric',
                    hour: 'numeric',
                    minute: 'numeric',
                    second: 'numeric',
                    hour12: true
                }),
            };
            setSections(newSections);
        } else {
            const newSections = sections.filter((_, i) => i !== index);
            setSections(newSections);
        }
    };

    return (
        <main className="flex flex-col w-screen h-auto text-[14px] sm:text-[16px] lg:text-[18px] bg-[url('/image/gridbg.png')] font-mitr">
            <div className="flex min-h-screen flex-col items-center p-5 sm:p-8 lg:p-10 gap-5 sm:gap-8 lg:gap-10">
                {sections.map((section, index) => (
                    <Section
                        key={index}
                        index={index}
                        data={section}
                        onTextChange={handleTextChange}
                        onSaveText={handleSaveText}
                        onEditText={handleEditText}
                        onDeleteText={handleDeleteText}
                        onImageUpload={handleImageUpload}
                        onDeleteImage={handleDeleteImage}
                        onDeleteSection={handleDeleteSection}
                    />
                ))}

                <div className="flex flex-row justify-center gap-3 sm:gap-4 lg:gap-5">
                    <a href="/select-feel">
                        <button className='signin-button bg-[#6C2BB8] w-[90px] sm:w-[100px] lg:w-[110px] rounded-[8px] sm:rounded-[9px] lg:rounded-[10px] p-1.5 sm:p-2 text-white border-black border-2 mb-2 shadow-[7px_6px_black] 
                                            transition ease-in-out delay-130 hover:-translate-y-1 hover:scale-105 hover:bg-[#6429AA] duration-100' 
                        type="button">Back</button>
                    </a>
                    <a href="/month-total">
                        <button className='signin-button bg-[#6C2BB8] w-[90px] sm:w-[100px] lg:w-[110px] rounded-[8px] sm:rounded-[9px] lg:rounded-[10px] p-1.5 sm:p-2 text-white border-black border-2 mb-2 shadow-[7px_6px_black] 
                                            transition ease-in-out delay-130 hover:-translate-y-1 hover:scale-105 hover:bg-[#6429AA] duration-100' 
                        type="button">Next</button> 
                    </a>
                </div>

                <button
                    className="fixed bottom-2 right-5 flex flex-row justify-center items-center gap-2 bg-[#6C2BB8] w-[50px] sm:w-[55px] lg:w-[60px] h-[50px] sm:h-[55px] lg:h-[60px] rounded-[25px] sm:rounded-[30px] lg:rounded-[35px] p-1.5 sm:p-2 text-white border-black border-2 mb-2 shadow-[7px_6px_black] transition ease-in-out delay-130 hover:-translate-y-1 hover:scale-105 hover:bg-[#6429AA] duration-100"
                    type="button"
                    onClick={handleAddSection}
                >
                    <img className="w-[12px] sm:w-[14px] lg:w-[15px] h-auto" src="image/plus.png" alt="Add" />
                </button>
            </div>
        </main>
    );
}
