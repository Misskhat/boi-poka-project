import coverImg from "../../assets/coverImg.png"

const Banner = () => {
    return (
        <div className='flex justify-center items-center gap-20 bg-[#1313130d] py-20 px-[120px] mt-12 mb-24 rounded-xl '> 
            <div>
                <h1 className='text-6xl font-bold'>Books to freshen up your bookshelf</h1>
                <button className='btn text-white bg-[#23BE0A] rounded mt-12'>View The List</button>
            </div>
            <div>
                <img className='max-w-[318px]' src={coverImg} alt="" />
            </div>
        </div>
    );
};

export default Banner;