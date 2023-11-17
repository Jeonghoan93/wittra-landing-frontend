import { BiVideoPlus } from "react-icons/bi";
import LineContainer from "src/components/LineContainer";

const AddVideo = () => {
  return (
    <LineContainer>
      <section className="flex flex-col items-center gap-3">
        <span className="bg-gray-200 rounded-[100%] p-2">
          <BiVideoPlus size={26} />
        </span>

        <div className="flex flex-col gap-1 text-center">
          <span className="text-[12pt] font-bold">Come to life with video</span>

          <span
            style={{ maxWidth: "260px" }}
            className="text-[11pt] text-gray-800"
          >
            Adding a video to your profile shows your personality in action.
          </span>
        </div>

        <span
          onClick={() => alert("Coming soon!")}
          className="cursor-pointer border-[1pt] text-[10pt] font-semibold text-gray-800 rounded-xl py-2 px-4 border-gray-800"
        >
          Add a Video Prompt
        </span>
      </section>
    </LineContainer>
  );
};

export default AddVideo;
