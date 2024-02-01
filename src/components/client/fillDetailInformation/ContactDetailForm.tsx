import React from "react";

export interface ContactDetailInput {
    genderType: string,
    fullName: string,
    phoneNumber: string,
    email: string
}

interface ContactDetailProps {
    contactDetail: ContactDetailInput,
    setContactDetail: React.Dispatch<React.SetStateAction<ContactDetailInput>>
}

const ContactDetailForm = ({contactDetail, setContactDetail}: ContactDetailProps) => {
    const handleOnChange: React.ChangeEventHandler<HTMLInputElement>  = (event) => {
        const {name, value} = event.target;
        setContactDetail({...contactDetail, [name]: value})
    }

    return(
        <div className={'my-4 w-full'}>
            <p className={'text-sm font-bold text-black'}>Contact Details</p>
            <p className={'text-xs text-[#757575] my-1'}>Contact details will be used to send the e-ticket and for refund or reschedule purposes.</p>
            <div className={'flex w-full justify-between rounded-lg bg-white w-full p-3 mt-1 text-black drop-shadow-md'}>
                <div className={'w-full'}>
                    <div className={'flex gap-3 mt-2 items-center'}>
                        <input type="radio" name="genderType" value={"MAN"}
                               onChange={handleOnChange} checked={contactDetail.genderType === "MAN"}
                               className="radio radio-info w-4 h-4" />
                        <span className="mr-4 text-black text-xs">Mr.</span>
                        <input type="radio" name="genderType" value={"WOMAN"}
                               onChange={handleOnChange} checked={contactDetail.genderType === "WOMAN"}
                               className="radio radio-info w-4 h-4" />
                        <span className="text-black text-xs">Mrs.</span>
                    </div>
                    <div className={'mt-3 mb-2 items-center w-full'}>
                        <input type="text" placeholder="Full Name" name={"fullName"} value={contactDetail.fullName} onChange={handleOnChange} className="input input-bordered input-sm w-full sm-max-full input-info" />
                        <div className={'flex gap-2'}>
                            <input type="text" placeholder="" value={'+62'} readOnly className="input my-3 w-1/5 input-bordered input-sm input-info" />
                            <input type="text" placeholder="Phone Number" name={"phoneNumber"} value={contactDetail.phoneNumber} onChange={handleOnChange} className="input my-3 input-bordered input-sm w-full sm-max-full input-info" />
                        </div>
                        <input type="email" placeholder="Email Address" value={contactDetail.email} onChange={handleOnChange} name={"email"} className="input input-bordered input-sm w-full sm-max-full input-info" />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ContactDetailForm;
