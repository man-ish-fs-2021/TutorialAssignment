import { videos } from "../../data";
import { VideoGridItems } from "../../component";

const SubjectPage = () => {
  return (
    <>
      <h1 className="font-bold text-xl">Articles</h1>
      <hr className="my-2" />
      <div className="grid gap-4 grid-cols-[repeat(auto-fill,minmax(300px,1fr))]">
        {videos.map((eachVideo) => (
          <VideoGridItems key={eachVideo.id} {...eachVideo} isArticle />
        ))}
      </div>
      <h1 className="font-bold text-xl">Videos</h1>
      <hr className="my-2" />
      <div className="grid gap-4 grid-cols-[repeat(auto-fill,minmax(300px,1fr))]">
        {videos.map((eachVideo) => (
          <VideoGridItems key={eachVideo.id} {...eachVideo} />
        ))}
      </div>
    </>
  );
};

export default SubjectPage;
