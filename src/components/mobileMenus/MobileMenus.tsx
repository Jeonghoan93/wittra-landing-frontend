import { useCallback, useRef, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import useOnClickOutside from "src/hooks/userOnClickOutside";

import { IoMdClose } from "react-icons/io";
import { FaAngleRight, FaArrowLeft } from "react-icons/fa";
import TextItem from "./Components/TextItem";

const MobileMenus: React.FC = () => {
  const [isMainMenuOpen, setIsMainMenuOpen] = useState(false);

  const [isUsesOpen, setIsUsesOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isTehcnologyOpen, setIsTehcnologyOpen] = useState(false);

  const menuRef = useRef(null);
  useOnClickOutside([menuRef], () => setIsMainMenuOpen(false));

  const toggleOpen = useCallback(() => {
    setIsMainMenuOpen((value) => !value);
  }, []);

  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-2">
        <div
          onClick={toggleOpen}
          className="
          p-4
          md:py-1
          md:px-2
          flex 
          flex-row 
          items-center 
          gap-3 
          rounded-full 
          cursor-pointer 
          hover:shadow-md 
          transition
          "
        >
          <AiOutlineMenu color={"white"} size={22} />
        </div>
      </div>

      {isMainMenuOpen && (
        <div
          ref={menuRef}
          className="
            absolute 
            rounded-xl 
            shadow
            w-[100vw]
            h-[100vh]
            md:w-[30vw]
            lg:w-[20vw] 
            bg-white 
            overflow-hidden 
            right-0 
            top-0
            text-sm
          "
        >
          <div className="flex flex-col p-10 gap-4">
            <div className="border-b-[1px] pb-5 flex flex-row justify-between">
              <span className="font-bold text-[16pt]">For companies</span>

              <span
                onClick={() => setIsMainMenuOpen(false)}
                className="cursor-pointer"
              >
                <IoMdClose size={25} />
              </span>
            </div>

            <div
              onClick={() => setIsUsesOpen(true)}
              className="cursor-pointer flex flex-row justify-between"
            >
              <span>Uses</span>
              <span>
                <FaAngleRight size={18} />
              </span>
            </div>

            <hr />

            <div
              onClick={() => setIsProductsOpen(true)}
              className="cursor-pointer flex flex-row justify-between"
            >
              <span>Products</span>
              <span>
                <FaAngleRight size={18} />
              </span>
            </div>

            <hr />

            <div
              onClick={() => setIsTehcnologyOpen(true)}
              className="cursor-pointer flex flex-row justify-between"
            >
              <span>Technology</span>
              <span>
                <FaAngleRight size={18} />
              </span>
            </div>

            <hr />
          </div>
        </div>
      )}

      {isUsesOpen && (
        <div
          ref={menuRef}
          className="
            absolute 
            rounded-xl 
            shadow-lg
            w-[100vw]
            h-[100vh]
            md:w-[30vw]
            lg:w-[20vw] 
            bg-white 
            overflow-hidden 
            right-0 
            top-0
            text-sm
          "
        >
          <div className="flex flex-col p-10 gap-4">
            <div className="border-b-[1px] pb-5 flex flex-row justify-between">
              <div
                onClick={() => setIsUsesOpen(false)}
                className="cursor-pointer flex flex-row gap-3 items-center"
              >
                <span>
                  <FaArrowLeft />
                </span>
                <span className="font-semibold text-[12pt] underline">
                  Main menu
                </span>
              </div>

              <span
                onClick={() => setIsUsesOpen(false)}
                className="cursor-pointer"
              >
                <IoMdClose size={25} />
              </span>
            </div>

            <div className="py-3">
              <span className="font-bold text-[14pt]">Uses</span>
            </div>

            <TextItem>Commercial Prop Tech</TextItem>

            <hr />

            <TextItem>Airports</TextItem>

            <hr />

            <TextItem>Construction</TextItem>

            <hr />

            <TextItem>Asset Tracking</TextItem>

            <hr />

            <TextItem>Marine</TextItem>

            <hr />

            <TextItem>Prop-Tech</TextItem>

            <hr />

            <TextItem>Metallurgy</TextItem>

            <hr />

            <TextItem>Inventory Tracking</TextItem>

            <hr />

            <TextItem>Smart City</TextItem>

            <hr />

            <TextItem>Wheelchair Tracking</TextItem>

            <hr />
          </div>
        </div>
      )}

      {isProductsOpen && (
        <div
          ref={menuRef}
          className="
            absolute 
            rounded-xl 
            shadow-lg
            w-[100vw]
            h-[100vh]
            md:w-[30vw]
            lg:w-[20vw] 
            bg-white 
            overflow-hidden 
            right-0 
            top-0
            text-sm
          "
        >
          <div className="flex flex-col p-10 gap-4">
            <div className="border-b-[1px] pb-5 flex flex-row justify-between">
              <div
                onClick={() => setIsProductsOpen(false)}
                className="cursor-pointer flex flex-row gap-3 items-center"
              >
                <span>
                  <FaArrowLeft />
                </span>
                <span className="font-semibold text-[12pt] underline">
                  Main menu
                </span>
              </div>

              <span
                onClick={() => setIsProductsOpen(false)}
                className="cursor-pointer"
              >
                <IoMdClose size={25} />
              </span>
            </div>

            <div className="py-3">
              <span className="font-bold text-[14pt]">Products</span>
            </div>

            <TextItem>IoT Out Of The Box</TextItem>

            <hr />

            <TextItem>Unified IoT Out Of The Box</TextItem>

            <hr />

            <TextItem>WiTTRA Cameleon</TextItem>

            <hr />

            <TextItem>WiTTRA TrakSense360</TextItem>

            <hr />

            <TextItem>WiTTRA Mesh Router</TextItem>

            <hr />

            <TextItem>WiTTRA Gateway</TextItem>

            <hr />

            <TextItem>Unified Gateway</TextItem>

            <hr />

            <TextItem>Inventory Tracking</TextItem>

            <hr />

            <TextItem>WiTTRA click-on sensors</TextItem>

            <hr />

            <TextItem>WiTTRA Current Meter</TextItem>

            <hr />

            <TextItem>WiTTRA Accessories</TextItem>

            <hr />
          </div>
        </div>
      )}

      {isTehcnologyOpen && (
        <div
          ref={menuRef}
          className="
            absolute 
            rounded-xl 
            shadow-lg
            w-[100vw]
            h-[100vh]
            md:w-[30vw]
            lg:w-[20vw] 
            bg-white 
            overflow-hidden 
            right-0 
            top-0
            text-sm
          "
        >
          <div className="flex flex-col p-10 gap-4">
            <div className="border-b-[1px] pb-5 flex flex-row justify-between">
              <div
                onClick={() => setIsTehcnologyOpen(false)}
                className="cursor-pointer flex flex-row gap-3 items-center"
              >
                <span>
                  <FaArrowLeft />
                </span>
                <span className="font-semibold text-[12pt] underline">
                  Main menu
                </span>
              </div>

              <span
                onClick={() => setIsTehcnologyOpen(false)}
                className="cursor-pointer"
              >
                <IoMdClose size={25} />
              </span>
            </div>

            <div className="py-3">
              <span className="font-bold text-[14pt]">Technology</span>
            </div>

            <TextItem>IoT Out Of The Box</TextItem>

            <hr />

            <TextItem>Unified IoT Out Of The Box</TextItem>

            <hr />

            <TextItem>WiTTRA Cameleon</TextItem>

            <hr />

            <TextItem>WiTTRA TrakSense360</TextItem>

            <hr />

            <TextItem>WiTTRA Mesh Router</TextItem>

            <hr />

            <TextItem>WiTTRA Gateway</TextItem>

            <hr />

            <TextItem>Unified Gateway</TextItem>

            <hr />

            <TextItem>Inventory Tracking</TextItem>

            <hr />

            <TextItem>WiTTRA click-on sensors</TextItem>

            <hr />

            <TextItem>WiTTRA Current Meter</TextItem>

            <hr />

            <TextItem>WiTTRA Accessories</TextItem>

            <hr />
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileMenus;
