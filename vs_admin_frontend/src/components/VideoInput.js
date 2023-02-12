import React from "react";
import './styles.css'

export default function VideoInput(props) {
  const { width, height } = props;

  const inputRef = React.useRef();

  const [source, setSource] = React.useState();

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const url = URL.createObjectURL(file);
    setSource(url);
  };

  const handleChoose = (event) => {
    inputRef.current.click();
  };

  return (
    <div className="VideoInput">
      

      <div className="previewMovie">
 
      {source && (
        <video
          className="VideoInput_video"
          width="560px"
          height="360px"
          controls
          src={source}
        />
      )}

      </div>
      <p>Add video:</p>
      <input
        ref={inputRef}
        className="VideoInput_input"
        type="file"
        onChange={handleFileChange}
      />
    </div>
  );
}
