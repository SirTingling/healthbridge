import { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

// ---------------------------------------- FAQ Item Component ----------------------------------------

const FaqItem = ({ item }) => {
    // State to manage the open/close state of the accordion
    const [isOpen, setIsOpen] = useState(false);

    // Function to toggle the accordion open/close state
    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="p-3 lg:p-5 rounded-[12px] border border-solid border-[#D9DCE2] mb-5 cursor-pointer">
            {/* --------------------------- FAQ Question Section --------------------------- */}
            <div className="flex items-center justify-between gap-5" onClick={toggleAccordion}>
                <h4 className="text-[16px] leading-7 lg:text-[22px] lg:leading-8 text-headingColor">
                    {item.question}
                </h4>

                {/* --------------------------- Accordion Toggle Icon --------------------------- */}
                <div className={
                    `${isOpen && "bg-primaryColor text-white border-none"
                    } w-7 h-7 lg:w-8 lg:h-8 border border-solid border-[#141F21] rounded flex
                    items-center justify-center`
                }>
                    {isOpen ? <AiOutlineMinus /> : <AiOutlinePlus />}
                </div>
            </div>

            {/* --------------------------- FAQ Answer Section --------------------------- */}
            {isOpen && (
                <div className="mt-4">
                    <p className="text-[14px] leading-6 lg:text-[16px] lg:leading-7 font-[400] text-textColor">
                        {item.content}
                    </p>
                </div>
            )}
        </div>
    );
};

// ----------------------------------------- Export -----------------------------------------
/* ------------------------------------------------------------------------------------------------ */
export default FaqItem;
/* ------------------------------------------------------------------------------------------------ */
/* ------------------------------------------------------------------------------------------------ */