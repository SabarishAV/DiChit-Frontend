import DownloadIcon from '@mui/icons-material/Download';

const ChitDetail = () => {
  return <><div className="w-full flex  justify-center items-center pt-2">
    <div className="w-4/5">

      <div className="w-full flex">
        <div className="w-3/5 pl-1">
          <p className="text-2xl color font-black">Mixed Fruit Chit Scheme</p>
          <p className="text-md text-gray-500">Hide n Seek limited</p>
        </div>
        <div className="w-2/5 pt-7">
          chit id: <span>TCXDJJG123</span>
        </div>
      </div>

      <div className="w-full flex justify-center items-center">
      <div className="w-full flex justify-center items-center bg-gray-200 rounded-md shadow-xl" style={{ margin:"0.5rem",paddingBlock:"1.5rem",paddingBlock:"1.5rem"}}>
      <div className="w-2/6 flex justify-center items-center border-r-2 border-gray-400 flex-col" style={{paddingBlock:"1.5rem"}}>
      <p className="text-xl">Amount:</p>
      <p className="text-3xl font-bold">₹ <span>10000</span></p>
      </div>
      <div className="w-2/6 flex items-center justify-center border-r-2 border-gray-400 flex-col" style={{paddingBlock:"1.5rem"}}>
      <p className="text-xl">max Payment p.m:</p>
      <p className="text-3xl font-bold">₹ <span>100</span></p>
      </div>
      <div className="w-2/6 flex items-center justify-center flex-col">
      <p className="text-xl">No of slots:</p>
      <p className="text-3xl font-bold">₹ <span>100</span></p>
      </div>
      </div>
      </div>

      <div className="w-full">
        <p className="p-9">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui nesciunt libero in accusamus totam, placeat ipsam aliquid, reiciendis nostrum iusto eligendi repellendus distinctio impedit ullam, dolores illum? Cumque soluta animi, iure aut recusandae deleniti ratione impedit quaerat repudiandae corporis nisi, nam provident doloribus quidem? Nisi quis quae harum magni perspiciatis!
        </p>
      </div>

      

        <div className="w-full flex items-center justify-start pl-20">
        <button className="bg-lightBlue p-3 rounded-2xl text-md font-medium"><DownloadIcon/>  Download brochure</button>
        </div>


        <div className="w-full flex pt-5">
        <div className="w-4/6">
        <div className="w-full flex justify-center items-start flex-col pl-10">
            <div className="p-1 flex">
                <p>Tentative date of starting : </p>
                <p>17/3/2025</p>
            </div>
            <div className="p-1 flex">
                <p>Duration: </p>
                <p>5 Years</p>
            </div>
            <div className="p-1 flex">
                <p>Type of Installment : </p>
                <p>Monthly</p>
            </div>
            <div className="p-1 flex">
                <p>No of installments : </p>
                <p>128</p>
            </div>
            <div className="p-1 flex">
                <p>Type of lot:  : </p>
                <p>Auction</p>
            </div>
            <div className="p-1 flex">
                <p>Foreman commission :   </p>
                <p>4%</p>
            </div>
            <div className="p-1 flex">
                <p>Fine for delay : </p>
                <p>read terms*</p>
            </div>
        </div>
        </div>
        <div className="w-2/6 flex justify-end items-center flex-col">
        <button className='border-2 p-2 rounded-md border-lightBlue font-medium'>Terms and condition</button>
        <button className='border-2 p-2 rounded-md border-lightBlue font-medium bg-lightBlue px-14 mt-5'>Apply</button>
        </div>
      </div>


    </div>
  </div>;
  </>
};

export default ChitDetail;
