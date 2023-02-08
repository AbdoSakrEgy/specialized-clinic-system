import React,{useState,useEffect} from "react";
import { Outlet, Link } from "react-router-dom";
import { Popover } from 'react-tiny-popover'
import AvatarEditor from 'react-avatar-editor'
import 'tw-elements';

export default function Avatar () {
    // Popover
    const [isPopoverOpen,setIsPopoverOpen]=useState(null);
    // Avatar
    var editor = "";
    const [picture, setPicture] = useState({
      cropperOpen: false,
      img: null,
      zoom: 2,
      croppedImg:
        "https://upload.wikimedia.org/wikipedia/commons/0/09/Man_Silhouette.png"
    });
  
    const handleSlider = (event, value) => {
      setPicture({
        ...picture,
        zoom: value
      });
    };
  
    const handleCancel = () => {
      setPicture({
        ...picture,
        cropperOpen: false
      });
    };
  
    const setEditorRef = (ed) => {
      editor = ed;
    };
  
    const handleSave = (e) => {
      if (setEditorRef) {
        const canvasScaled = editor.getImageScaledToCanvas();
        const croppedImg = canvasScaled.toDataURL();
  
        setPicture({
          ...picture,
          img: null,
          cropperOpen: false,
          croppedImg: croppedImg
        });
      }
    };
  
    const handleFileChange = (e) => {
      let url = URL.createObjectURL(e.target.files[0]);
      console.log(url);
      setPicture({
        ...picture,
        img: url,
        cropperOpen: true
      });
    };

    return(
        <React.Fragment>
            <Popover
                isOpen={isPopoverOpen}
                positions={['bottom','right']} // preferred positions by priority
                padding={15}
                onClickOutside={() => setIsPopoverOpen(false)}
                content={
                    <div className="overflow-hidden min-w-fit rounded-lg text-right mr-7 drop-shadow-2xl">
                        {/* popover section 1 */}
                        <div className="flex justify-end items-center py-3 px-5 text-white bg-[#016EDF]">
                            <div className="mr-4">عبدالرحيم السيد صقر</div>
                            {/* Avatar */}
                            <div className="rounded-full h-16 w-16 cursor-pointer relative">
                                <img src={picture.croppedImg} className="rounded-full h-16 w-16 cursor-pointer"/>
                                <input type="file" accept="image/*" onChange={handleFileChange} className="cursor-pointer rounded-full h-16 w-16 absolute bottom-0 left-0 opacity-0"/>
                            </div>        
                            {/* Avatar */}
                        </div>
                        {picture.cropperOpen && (
                        <div display="block" className="bg-blue-2">
                            <AvatarEditor
                                ref={setEditorRef}
                                image={picture.img}
                                width={200}
                                height={200}
                                border={50}
                                color={[255, 255, 255, 0.6]} // RGBA
                                rotate={0}
                                scale={picture.zoom}
                                className="mx-10 py-3"
                            />
                            {/* <Slider
                            aria-label="raceSlider"
                            value={picture.zoom}
                            min={1}
                            max={10}
                            step={0.1}
                            onChange={handleSlider}
                            ></Slider> */}
                            <div className="flex justify-between items-center">
                                <div variant="contained" onClick={handleCancel} className="m-2 text-md text-center min-w-[5vw] py-2 px-4 rounded shadow-md bg-blue-1 text-white cursor-pointer">
                                    إلغاء
                                </div>
                                <div onClick={handleSave} className="m-2 text-md text-center min-w-[5vw] py-2 px-4 rounded shadow-md bg-blue-1 text-white cursor-pointer">
                                    حفظ
                                </div>
                            </div>
                        </div>
                        )}
                        <hr className="border-gray-1"/>
                        {/* popover section 2 */}
                        <div className="cursor-pointer py-3 px-5 text-white bg-[#016EDF] hover:bg-blue-1 hover:text-white">
                            <Link to="/VisitsHistory" className="pl-10">سجل الكشوفات </Link>
                        </div>
                        {/* popover section 3 */}
                        <div className="cursor-pointer py-3 px-5 text-white bg-[#016EDF] hover:bg-blue-1 hover:text-white">
                            <Link to="/profile">إدارة الملف الشخصي</Link>
                        </div>
                        <hr className="border-gray-1"/>
                        {/* popover section 4 */}
                        <div className="cursor-pointer py-3 px-5 text-white bg-[#016EDF] hover:bg-blue-1 hover:text-white">
                            <Link to="/">تسجيل الخروج</Link>
                        </div>
                    </div>
                }
            >
                <div onClick={() => setIsPopoverOpen(!isPopoverOpen)}>
                    <img
                        src={picture.croppedImg}
                        className="rounded-full h-16 w-16 shadow-lg cursor-pointer"
                        alt="Avatar"
                    />
                </div>
            </Popover>
        </React.Fragment>
    );
}