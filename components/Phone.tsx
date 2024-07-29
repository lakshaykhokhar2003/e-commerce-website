import {cn} from "@/lib/utils";
import React from "react";
import Image from "next/image";

interface PhoneProps extends React.HTMLAttributes<HTMLDivElement> {
    imgSrc: string;
    dark?: boolean;
}

const Phone = ({imgSrc, className, dark = false, ...props}: PhoneProps) => {
    return (
        <div className={cn("relative pointer-events-none z-50 overflow-hidden", className)} {...props}>
            <Image src={dark ? '/phone-template-dark-edges.png' : '/phone-template-white-edges.png'} width={1000}
                   height={1000} alt="phone image" className="pointer-events-none z-50 select-none"/>

            <div className="absolute -z-10 inset-0">
                <Image src={imgSrc} width={1000} height={1000} alt="overlaying phone image" className="object-cover"/>
            </div>
        </div>
    )
}

export default Phone;