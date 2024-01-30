import { FiFilter } from "react-icons/fi";
import { MdOutlineSort } from "react-icons/md";
import BodyLayout from "../../components/client/bodyLayout";
import Rajawali from "../../assets/rajawali.png";
// import LogoKoper from "../../assets/logokoper.png";
// import LogoMakan from "../../assets/logomakan.png";
// import Refund from "../../assets/refund.png";
// import Rescedule from "../../assets/rescedule.png";
import Mandiri from "../../assets/mandiri.png";
import Bni from "../../assets/bni.png";
import Bca from "../../assets/bca.png";
import { FaArrowLeft, FaLongArrowAltRight, FaMoneyBill, FaRegCalendarCheck } from "react-icons/fa";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const ChooseTiket = () => {
    return (
        <section className="w-full min-h-screen bg-[#f7f7f7] relative">
            <div className="fixed w-full h-[3.75rem] bg-[#1E90FF] z-10 shadow-md">
                <div className="py-0 px-2 w-full h-full sm:w-[360px] mx-auto flex items-center">
                    <div className="flex justify-between items-center">
                        <div className="flex items-center">
                            <button
                                onClick={() => {
                                    window.location.href = "/";
                                }}
                            >
                                <FaArrowLeft className="text-xl text-white" />
                            </button>
                        </div>
                        <div className="font-bold ml-[20px]">
                            <div>Continue Payment</div>
                            <div>Order ID: 123456</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Body */}
            {/* <div className="w-full sm:w-[360px] mx-auto min-h-screen bg-[#E3EEFF] pt-[3.75rem] pb-20"></div> */}
            <BodyLayout paddingBottomSize="5rem">
                <div className="flex justify-center items-center gap-2 mt-[20px]">
                    <div className="flex items-center gap-2">
                        <div className="w-6 bg-blue-500 rounded-full text-center">
                            1
                        </div>
                        <div className="select_method text-[#1c1b1f] font-['Roboto'] text-sm font-medium leading-5">Select Method</div>
                    </div>
                    <svg width={8} height={2} viewBox="0 0 8 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1H7" stroke="#1C1B1F" strokeLinecap="round" />
                    </svg>
                    <div className="flex items-center gap-2">
                        <div className="w-7 text-black border-2 border-slate-500 bg-white rounded-full text-center">
                            2
                        </div>
                        <div className="pay text-[#1c1b1f] font-['Roboto'] text-sm font-medium leading-5">Pay</div>
                    </div>
                    <svg width={8} height={2} viewBox="0 0 8 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1H7" stroke="#1C1B1F" strokeLinecap="round" />
                    </svg>
                    <div className="flex items-center gap-2">
                        <div className="w-7 text-black border-2 border-slate-500 bg-white rounded-full text-center">
                            3
                        </div>
                        <div className="complete text-[#1c1b1f] font-['Roboto'] text-sm font-medium leading-5">Complete</div>
                    </div>
                </div>
                <div className="bg-white m-[20px] rounded-lg shadow-md">
                    <div className="p-[10px] flex items-center justify-between">
                        <div className="">
                            <div className="flex items-center gap-2">
                                <img src={Rajawali} className="h-[16px]" />
                                <div className="bpn text-black font-['Roboto'] text-xs font-semibold leading-[1.375rem]">BPN</div>
                                <svg width={17} height={8} viewBox="0 0 17 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16.3536 4.35355C16.5488 4.15829 16.5488 3.84171 16.3536 3.64645L13.1716 0.464466C12.9763 0.269204 12.6597 0.269204 12.4645 0.464466C12.2692 0.659728 12.2692 0.976311 12.4645 1.17157L15.2929 4L12.4645 6.82843C12.2692 7.02369 12.2692 7.34027 12.4645 7.53553C12.6597 7.7308 12.9763 7.7308 13.1716 7.53553L16.3536 4.35355ZM0 4.5H16V3.5H0V4.5Z" fill="black" />
                                </svg>
                                <div className="yia text-black font-['Roboto'] text-xs font-semibold leading-[1.375rem]">YIA</div>
                            </div>
                            <div className="text-[#757575] font-['Roboto'] text-[10px] leading-[14px] py-[8px]">25 Jan 2024, 08:15 - 09:05</div>
                            <div className="text-[#757575] font-['Roboto'] text-[10px] leading-[14px]">Economy | Direct Flight</div>
                        </div>
                        <div className="text-black">
                            <MdOutlineKeyboardArrowRight />
                        </div>
                    </div>
                    <div className="flex justify-center items-center w-full h-8 rounded-bl-lg rounded-br-lg bg-[#d2f1ff]">
                        <div className="inline-flex items-start gap-4">
                            <div className="flex items-center gap-1">
                                <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8.00016 13.3334C9.41465 13.3334 10.7712 12.7715 11.7714 11.7713C12.7716 10.7711 13.3335 9.41453 13.3335 8.00004C13.3335 6.58555 12.7716 5.229 11.7714 4.2288C10.7712 3.22861 9.41465 2.66671 8.00016 2.66671C6.58567 2.66671 5.22912 3.22861 4.22893 4.2288C3.22873 5.229 2.66683 6.58555 2.66683 8.00004C2.66683 9.41453 3.22873 10.7711 4.22893 11.7713C5.22912 12.7715 6.58567 13.3334 8.00016 13.3334ZM8.00016 1.33337C8.87564 1.33337 9.74255 1.50581 10.5514 1.84084C11.3602 2.17588 12.0952 2.66694 12.7142 3.286C13.3333 3.90505 13.8243 4.63998 14.1594 5.44882C14.4944 6.25766 14.6668 7.12456 14.6668 8.00004C14.6668 9.76815 13.9645 11.4638 12.7142 12.7141C11.464 13.9643 9.76827 14.6667 8.00016 14.6667C4.3135 14.6667 1.3335 11.6667 1.3335 8.00004C1.3335 6.23193 2.03588 4.53624 3.28612 3.286C4.53636 2.03575 6.23205 1.33337 8.00016 1.33337ZM8.3335 4.66671V8.16671L11.3335 9.94671L10.8335 10.7667L7.3335 8.66671V4.66671H8.3335Z" fill="#1E90FF" />
                                </svg>
                                <div className="complete_payment_in text-[#1e90ff] font-['Roboto'] text-xs font-semibold leading-[1.375rem]">Complete payment in</div>
                            </div>
                            <div className="flex justify-center items-center gap-1">
                                <div className="flex justify-center items-center pl-[0.1875rem] pr-[0.1875rem] p-0 rounded bg-[#1e90ff] 02 text-white text-center font-['Roboto'] text-xs font-semibold leading-[1.375rem]">
                                    02
                                </div>
                                <div className="text text-[#1e90ff] text-center font-['Roboto'] text-xs font-semibold leading-[1.375rem]">:</div>
                                <div className="flex justify-center items-center pl-[0.1875rem] pr-[0.1875rem] p-0 rounded bg-[#1e90ff] 59 text-white text-center font-['Roboto'] text-xs font-semibold leading-[1.375rem]">
                                    59
                                </div>
                                <div className="text-1 text-[#1e90ff] text-center font-['Roboto'] text-xs font-semibold leading-[1.375rem]">:</div>
                                <div className="flex justify-center items-center pl-[0.1875rem] pr-[0.1875rem] p-0 rounded bg-[#1e90ff] 59-1 text-white text-center font-['Roboto'] text-xs font-semibold leading-[1.375rem]">
                                    59
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="m-[20px] p-[10px] flex flex-col items-start rounded-lg bg-white">
                    <div className="text-black font-['Roboto'] text-sm font-semibold leading-5">Payment Method</div>
                    <div className="flex flex-col justify-center items-center gap-2">
                        <div className="flex justify-between items-center w-[19rem]">
                            <div className="frame_1000000944 flex justify-center items-center gap-2">
                                <img src={Bca} className="h-[20px]" />
                                <div className="bca_transfer text-black font-['Roboto'] text-xs font-semibold leading-[1.375rem]">BCA Transfer</div>
                            </div>
                            <div className="flex-shrink-0 w-4 h-4 rounded-full border-[0.8px] border-[#1e90ff] mr-2">
                            </div>
                        </div>
                        <div className="w-full h-[1px] bg-slate-200"></div>
                        <div className="flex justify-between items-center w-[19rem]">
                            <div className="frame_1000000944-1 flex justify-center items-center gap-2">
                                <img src={Mandiri} className="h-[20px]" />
                                <div className="mandiri_virtual_acccount text-black font-['Roboto'] text-xs font-semibold leading-[1.375rem]">Mandiri Virtual Acccount</div>
                            </div>
                            <div className="flex flex-shrink-0 justify-center items-center pt-[0.1875rem] pr-[0.1875rem] pb-[0.1875rem] pl-[0.1875rem] w-4 h-4 rounded-full border-[0.8px] border-[#1e90ff] mr-2">
                                <div className="flex-shrink-0 w-[0.5625rem] h-[0.5625rem] rounded-full bg-[#1e90ff]">
                                </div>
                            </div>
                        </div>
                        <div className="w-full h-[1px] bg-slate-200"></div>
                        <div className="flex justify-between items-center w-[19rem]">
                            <div className="frame_1000000944-2 flex justify-center items-center gap-2">
                                <img src={Bni} className="h-[20px]" />
                                <div className="bni_transfer text-black font-['Roboto'] text-xs font-semibold leading-[1.375rem]">BNI Transfer</div>
                            </div>
                            <div className="flex-shrink-0 w-4 h-4 rounded-full border-[0.8px] border-[#1e90ff] mr-2">
                            </div>
                        </div>
                        <div className="w-full h-[1px] bg-slate-200"></div>
                        <div className="flex justify-center items-center gap-1">
                            <div className="more_method text-[#1e90ff] font-['Roboto'] text-xs font-semibold leading-[1.375rem]">More Method</div>
                            <div className="flex justify-center items-center w-5 h-5 ">
                                <svg width={21} height={20} viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M11.0893 13.0991C10.933 13.2553 10.7211 13.343 10.5001 13.343C10.2792 13.343 10.0672 13.2553 9.91096 13.0991L5.19679 8.38489C5.1172 8.30802 5.05371 8.21606 5.01004 8.11439C4.96636 8.01272 4.94338 7.90337 4.94241 7.79272C4.94145 7.68207 4.96254 7.57234 5.00444 7.46993C5.04634 7.36751 5.10822 7.27447 5.18646 7.19623C5.2647 7.11798 5.35775 7.0561 5.46016 7.0142C5.56257 6.9723 5.67231 6.95122 5.78296 6.95218C5.89361 6.95314 6.00296 6.97613 6.10463 7.0198C6.2063 7.06348 6.29825 7.12696 6.37512 7.20656L10.5001 11.3316L14.6251 7.20656C14.7823 7.05476 14.9928 6.97076 15.2113 6.97266C15.4298 6.97456 15.6388 7.0622 15.7933 7.21671C15.9478 7.37121 16.0355 7.58022 16.0374 7.79872C16.0393 8.01722 15.9553 8.22772 15.8035 8.38489L11.0893 13.0991Z" fill="#1E90FF" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="m-[20px] p-[10px] rounded-lg bg-white">
                    <div className="text-slate-500 font-bold text-[12px]">
                        Promo Code
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M14.0142 17.0099L14.0082 19.0129C14.0072 19.4829 14.0062 19.7179 13.8592 19.8639C13.7122 20.0099 13.4772 20.0099 13.0052 20.0099H9.99523C6.21523 20.0099 4.32523 20.0099 3.15023 18.8379C2.34023 18.0319 2.08923 16.8869 2.01023 15.0209C1.99523 14.6509 1.98723 14.4649 2.05623 14.3419C2.12623 14.2189 2.40123 14.0649 2.95323 13.7559C3.26416 13.5825 3.52317 13.3293 3.70347 13.0224C3.88378 12.7154 3.97884 12.3659 3.97884 12.0099C3.97884 11.6539 3.88378 11.3044 3.70347 10.9974C3.52317 10.6905 3.26416 10.4372 2.95323 10.2639C2.40123 9.95589 2.12523 9.80089 2.05623 9.67789C1.98723 9.55489 1.99523 9.36989 2.01123 8.99889C2.08923 7.13289 2.34123 5.98889 3.15023 5.18189C4.32423 4.00989 6.21423 4.00989 9.99523 4.00989H13.5052C13.5709 4.00976 13.6359 4.02256 13.6966 4.04757C13.7574 4.07257 13.8126 4.10929 13.8591 4.15563C13.9056 4.20196 13.9425 4.25701 13.9678 4.31762C13.993 4.37824 14.0061 4.44323 14.0062 4.50889L14.0142 7.00989C14.0142 7.56189 14.4632 8.00989 15.0162 8.00989V10.0099C14.4632 10.0099 14.0142 10.4579 14.0142 11.0099V13.0099C14.0142 13.5619 14.4632 14.0099 15.0162 14.0099V16.0099C14.4632 16.0099 14.0142 16.4579 14.0142 17.0099Z" fill="#1E90FF" />
                                <path d="M15.0171 16.0098C15.5701 16.0098 16.0191 16.4578 16.0191 17.0098V18.9858C16.0191 19.4678 16.0191 19.7088 16.1741 19.8558C16.3281 20.0038 16.5641 19.9938 17.0371 19.9738C18.9001 19.8948 20.0441 19.6428 20.8511 18.8378C21.6601 18.0318 21.9111 16.8858 21.9901 15.0198C22.0051 14.6498 22.0131 14.4648 21.9441 14.3418C21.8751 14.2178 21.5991 14.0638 21.0471 13.7558C20.7362 13.5825 20.4772 13.3293 20.2968 13.0223C20.1165 12.7154 20.0215 12.3658 20.0215 12.0098C20.0215 11.6538 20.1165 11.3043 20.2968 10.9974C20.4772 10.6904 20.7362 10.4372 21.0471 10.2638C21.5991 9.95483 21.8751 9.80083 21.9441 9.67783C22.0141 9.55383 22.0051 9.36883 21.9901 8.99883C21.9111 7.13283 21.6601 5.98783 20.8501 5.18083C19.9731 4.30583 18.6961 4.08483 16.5281 4.02883C16.4618 4.02723 16.3959 4.0389 16.3342 4.06316C16.2725 4.08742 16.2163 4.12378 16.1689 4.17009C16.1214 4.2164 16.0838 4.27173 16.058 4.33282C16.0323 4.39392 16.0191 4.45954 16.0191 4.52583V7.00983C16.0191 7.56183 15.5701 8.00983 15.0171 8.00983V10.0098C15.1486 10.0096 15.2788 10.0352 15.4004 10.0854C15.5219 10.1355 15.6324 10.2091 15.7255 10.302C15.8186 10.3949 15.8924 10.5052 15.9428 10.6267C15.9932 10.7481 16.0191 10.8783 16.0191 11.0098V13.0098C16.0191 13.5618 15.5701 14.0098 15.0171 14.0098V16.0098Z" fill="#D2F1FF" />
                            </svg>
                            <div className="text-slate-500 font-bold text-[12px]">Have a Promo Code?</div>
                        </div>
                        <div><MdOutlineKeyboardArrowRight className="text-black" /></div>
                    </div>
                </div>


            </BodyLayout >


            {/* Bottom Navbar */}
            <div className="fixed left-0 right-0 bottom-0 mx-auto w-full sm:w-[360px] h-[3.8rem] bg-[#1E90FF] rounded-t-xl flex justify-center items-center gap-x-12" >
                {/* Filter */}
                < button className="flex flex-col items-center gap-y-1 text-white hover:text-[#CCCCCC]" >
                    <FiFilter className="w-4 h-4 " />
                    <p className="text-sm ">Filter</p>
                </ button>
                {/* Sort */}
                < button className="flex flex-col items-center gap-y-1 text-white hover:text-[#CCCCCC]" >
                    <MdOutlineSort className="w-4 h-4" />
                    <p className="text-sm">Sort</p>
                </ button>
            </div >
        </section >
    );
};

export default ChooseTiket;

