import NotifLoginCard from "./notifLoginCard";


const bodyNotification=()=>{
    return(
        <section>
            {/* tanggal penerimaan */}
            <div className="text-[#818181] ms-2 me-2 mt-2">Hari ini</div>
            {/* List notification pada tanggal yang sama */}
            <NotifLoginCard/>
        </section>
    )
}

export default bodyNotification