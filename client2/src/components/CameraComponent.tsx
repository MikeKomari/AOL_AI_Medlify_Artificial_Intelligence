import axios from "axios";
import React, { useState, useRef, useEffect } from "react";

type personData = {
  hasStroke: boolean;
  probability: number;
};

const CameraComponent: React.FC = () => {
  const [cameraPermission, setCameraPermission] = useState<boolean | null>(
    null
  );
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [apiResponse, setApiResponse] = useState<personData | null>({
    hasStroke: false,
    probability: 0,
  });
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [imageDataUrl, setImageDataUrl] = useState<string | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((stream) => {
        setCameraPermission(true);
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      })
      .catch((error) => {
        setCameraPermission(false);
        setErrorMessage(
          "Camera access was denied. Please give permission to continue."
        );
      });
  }, []);

  const takePicture = () => {
    if (videoRef.current && canvasRef.current) {
      const canvas = canvasRef.current;
      const context = canvas.getContext("2d");
      if (context) {
        canvas.width = videoRef.current.videoWidth;
        canvas.height = videoRef.current.videoHeight;
        context.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);

        const dataUrl = canvas.toDataURL("image/png");
        setImageDataUrl(dataUrl);
      }
    }
  };

  const handleSubmit = async () => {
    if (!imageDataUrl) {
      setErrorMessage("No image captured. Please take a picture first.");
      return;
    }

    try {
      setIsSubmitting(true);
      setErrorMessage("");
      setApiResponse(null);

      // Remove "data:image/png;base64," part before sending
      const base64Image = imageDataUrl.split(",")[1];

      const response = await axios.post("", {
        file: base64Image,
      });

      // Handle the response
      setApiResponse(response.data.prediction || "No prediction returned");
    } catch (error: any) {
      // Handle the error
      setErrorMessage(
        error.response?.data?.message ||
          error.message ||
          "An error occurred during submission"
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <h1>Take a Picture</h1>
      {cameraPermission === null && <p>Requesting camera access...</p>}
      {cameraPermission === false && <p>{errorMessage}</p>}

      {cameraPermission && (
        <>
          <video
            ref={videoRef}
            autoPlay
            style={{ width: "100%", height: "auto" }}
          />
          <button onClick={takePicture}>Take Picture</button>
          <canvas ref={canvasRef} style={{ display: "none" }}></canvas>

          {/* Display the captured image */}
          {imageDataUrl && (
            <div>
              <h2>Captured Image</h2>
              <img
                src={imageDataUrl}
                alt="Captured"
                style={{ maxWidth: "100%" }}
              />
              {/* Optionally, you can download the image */}
              <a href={imageDataUrl} download="captured_image.png">
                Download Image
              </a>
            </div>
          )}
        </>
      )}

      <button onClick={handleSubmit} disabled={isSubmitting}>
        {isSubmitting ? "Submitting..." : "Submit to API"}
      </button>

      {apiResponse && (
        <div>
          <h2>API Response</h2>
          <p>
            {apiResponse.probability > 0.75 ? (
              <p>has stroke </p>
            ) : (
              <p>ur save bro</p>
            )}
          </p>
        </div>
      )}
    </div>
  );
};

export default CameraComponent;
