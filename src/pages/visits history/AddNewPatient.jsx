import React,{useState,useEffect} from "react";

function AddNewPatient() {
    const [patientName,setPatientName]=useState('');
    const [detectionType,setDetectionType]=useState('');
    
    const setDetectionTypeValue=()=>{
      var dtype=document.getElementsByName('detectionType');
      
      for(var i=0 ; i<dtype.length ; i++){
        if(dtype[i].checked){
          setDetectionType(dtype[i].value);
          break;
        }
      }
    }

    const addNewPatient=()=>{
      setDetectionTypeValue()
      if(patientName=='' || detectionType==''){
        alert('قيم غير صحيحة')
      }
      // ...sent patientName&detectionType to backend
    }
    
    return (
      // rounded-lg p-3 bg-green-500 text-white
        <React.Fragment>
          {/* <!-- Button trigger vertically centered modal--> */}
          <button
            type="button"
            className="rounded-lg p-3 bg-green-600 text-white"
            data-te-toggle="modal"
            data-te-target="#exampleModalCenter"
            data-te-ripple-init
            data-te-ripple-color="light">
            إضافة كشف
          </button>
          {/* <!--Verically centered modal--> */}
          <div
            data-te-modal-init
            className="fixed left-0 top-0 z-[1055] hidden h-full w-full overflow-y-auto overflow-x-hidden outline-none"
            id="exampleModalCenter"
            tabIndex="-1"
            aria-labelledby="exampleModalCenterTitle"
            aria-modal="true"
            role="dialog">
            <div
              data-te-modal-dialog-ref
              className="pointer-events-none relative flex min-h-[calc(100%-1rem)] w-auto translate-y-[-50px] items-center opacity-0 transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:min-h-[calc(100%-3.5rem)] min-[576px]:max-w-[500px]">
              <div
                className="pointer-events-auto relative flex w-full flex-col rounded-md border-none bg-white bg-clip-padding text-current shadow-lg outline-none">
                <div
                  className="flex flex-shrink-0 items-center justify-between rounded-t-md border-b-2 border-neutral-100 border-opacity-100 p-4">
                  {/* <!--Modal title--> */}
                  <h5
                    className="text-xl font-medium leading-normal text-neutral-800"
                    id="exampleModalScrollableLabel">
                    إضافة كشف
                  </h5>
                  {/* <!--Close button--> */}
                  <button
                    type="button"
                    className="box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
                    data-te-modal-dismiss
                    aria-label="Close">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="h-6 w-6">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                {/* <!--Modal body--> */}
                <div className="relative p-4">
                  <form>
                    <div>
                      <input onChange={(e)=>{setPatientName(e.target.value)}} type="text" placeholder="اسم المريض" className="text-right placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" />
                    </div>
                    <div className="flex flex-col justify-end mt-5">
                      <div className="text-right">
                        <label htmlFor="new">كشف جديد</label>
                        <input type="radio" id="new" name="detectionType" value="كشف جديد"/>
                      </div>
                      <div className="text-right mt-3">
                        <label htmlFor="old">إعادة كشف</label>
                        <input type="radio" id="old" name="detectionType" value="إعادة كشف"/>
                      </div>
                    </div>
                  </form>
                </div>

                {/* <!--Modal footer--> */}
                <div
                  className="flex flex-shrink-0 flex-wrap items-center justify-end rounded-b-md border-t-2 border-neutral-100 border-opacity-100 p-4">
                  <button
                    type="button"
                    className="inline-block rounded bg-primary-100 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200"
                    data-te-modal-dismiss
                    data-te-ripple-init
                    data-te-ripple-color="light">
                    إلغاء
                  </button>
                  <button
                    type="button"
                    className="ml-1 inline-block rounded bg-green-600 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-green-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-green-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-green-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
                    // data-te-modal-dismiss
                    data-te-ripple-init
                    data-te-ripple-color="light"
                    onClick={addNewPatient}>
                    إضافة
                  </button>
                </div>
              </div>
            </div>
          </div>
        </React.Fragment>
     );
}

export default AddNewPatient;
