


const NotifLoginCard = () => {
    
    return(
        <section className="flex items-center text-black p-2 border-b-2 border-grey-500">
            <div className="flex-none w-50 p-1">
                <img src="/images/notification/loginNotif.svg" alt="notif-login" />
            </div>

            <div className="p-3 text-xs ">
                {/* message notification */}
                <div className="text-black">
                    <p>Login baru dari mobile-android. Rabu, 10 Jan 2024 17:16. Bukan Anda? Mohon segera ubah password</p>
                </div>
                {/* Waktu notication */}
                <div className="text-[#818181]">
                    <p>2 Jan 18:35</p>
                </div>
            </div>
        </section>
    )
}

export default NotifLoginCard;