import { useState } from "react";
import PlatformSelector from "./PlatformSelector";
import CharacterCounter from "./CharacterCounter";
import ValidationMessage from "./ValidationMessage";
import MediaUpload from "./MediaUpload";

function PostComposer() {
  const [post, setPost] = useState("");
  const [selectedPlatforms, setSelectedPlatforms] = useState([]);
  const [image, setImage] = useState(null);

  const platforms = [
    "Twitter",
    "Facebook",
    "Instagram",
    "LinkedIn",
  ];

  const limits = {
    Twitter: 280,
    Facebook: 63206,
    Instagram: 2200,
    LinkedIn: 3000,
  };

  const handlePlatformChange = (platform) => {
    if (selectedPlatforms.includes(platform)) {
      setSelectedPlatforms(
        selectedPlatforms.filter((p) => p !== platform)
      );
    } else {
      setSelectedPlatforms([...selectedPlatforms, platform]);
    }
  };

  const handlePublish = () => {
    if (selectedPlatforms.length === 0) {
      alert("Please select at least one platform.");
      return;
    }

    if (post.trim() === "") {
      alert("Please write a post before publishing.");
      return;
    }

    const exceededPlatform = selectedPlatforms.find(
      (platform) => post.length > limits[platform]
    );

    if (exceededPlatform) {
      alert(
        `${exceededPlatform} character limit exceeded!`
      );
      return;
    }

    alert("Post Published Successfully!");

    // Reset Form
    setPost("");
    setSelectedPlatforms([]);
    setImage(null);
  };

  return (
    <div>
      <h1>Create Post</h1>

      <PlatformSelector
        platforms={platforms}
        selectedPlatforms={selectedPlatforms}
        handlePlatformChange={handlePlatformChange}
      />

      <br />

      <h3>Write Your Post</h3>

      <textarea
        rows="8"
        cols="60"
        placeholder="Write your post here..."
        value={post}
        onChange={(e) => setPost(e.target.value)}
      />

      <CharacterCounter count={post.length} />

      <ValidationMessage
        selectedPlatforms={selectedPlatforms}
        limits={limits}
        post={post}
      />

      <br />

      <MediaUpload
        image={image}
        setImage={setImage}
      />

      <br />
      <br />

      <button
        onClick={handlePublish}
        style={{
          padding: "10px 20px",
          backgroundColor: "#1877f2",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          fontSize: "16px",
        }}
      >
        Publish
      </button>
    </div>
  );
}

export default PostComposer;