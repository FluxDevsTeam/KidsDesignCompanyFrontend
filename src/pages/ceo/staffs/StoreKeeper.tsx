const StoreKeeper = () => {
  return (
    <div>
        <div className="flex justify-between items-center w-[90%] mb-6">
            <h3 className="font-bold text-[20px] mr-auto">Activities</h3>
            <span className="text-[14px] text-[#777] font-semibold">Name</span>
            <button className="text-red-500 text-[16px] bg-gray-800 px-8 py-2 rounded-2xl ml-6">Remove</button>
        </div>
        <button className="text-yellow-600 mb-8">+ Add Project</button>
        <div className="flex justify-between items-center mb-28">
            <div>
                <h4 className="text-[#0178A3] font-bold text-[22px]">Total Project</h4>
                <span className="font-extrabold text-[28px] block mb-3">55</span>
                <span className="text-[10px]">70% progress on project completion</span>
            </div>
            <div>
                <h4 className="text-[#0178A3] font-bold text-[22px]">Active Project</h4>
                <span className="font-extrabold text-[28px] block mb-3">40</span>
                <span className="text-[10px]">70% progress on project completion</span>
            </div>
            <div>
                <h4 className="text-[#0178A3] font-bold text-[22px]">Rejected</h4>
                <span className="font-extrabold text-[28px] block mb-3">7</span>
                <span className="text-[10px]">70% progress on project completion</span>
            </div>
        </div>
        <div>
            <p className="font-bold mb-3">Delete Store keeper account</p>
            <form>
                <label className="block mb-2 text-[#0178A3]">Name</label>
                <input type="text" className="bg-gray-800 p-2 rounded-xl block mb-5" />
                <div className="flex gap-4">
                    <button className="text-red-500 text-[14px] bg-gray-800 px-4 py-2 rounded-lg border border-red-500">Cancel</button>
                    <button className="text-white text-[14px] bg-red-500 px-4 py-2 rounded-lg">Delete</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default StoreKeeper
