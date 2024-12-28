import axios from "axios";
import React, { useState, useRef, useEffect } from "react";
import { Input } from "./ui/input";

type PersonData = {
  hasStroke: boolean;
  probability: number;
};

const CameraComponent: React.FC = () => {
  const [cameraPermission, setCameraPermission] = useState<boolean | null>(
    null
  );
  const [imageDataUrl, setImageDataUrl] = useState<string | null>(null);

  const videoRef = useRef<HTMLVideoElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [apiResponse, setApiResponse] = useState<PersonData | null>(null);

  const [errorMessage, setErrorMessage] = useState<string>("");

  const targetRef = useRef<HTMLDivElement | null>(null);

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
          "Camera access was denied. Please give permission to continue or upload an image instead  ."
        );
      });
  }, []);

  const takePicture = () => {
    setApiResponse(null);
    if (videoRef.current && canvasRef.current) {
      const canvas = canvasRef.current;
      const context = canvas.getContext("2d");
      if (context) {
        canvas.width = videoRef.current.videoWidth;
        canvas.height = videoRef.current.videoHeight;
        context.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);

        const dataUrl = canvas.toDataURL("image/jpeg"); // Use JPEG format for smaller size
        setImageDataUrl(dataUrl);
      }
    }
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    setApiResponse(null);
    const file = event.target.files?.[0];
    if (file && file.type === "image/jpeg") {
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.result) {
          setImageDataUrl(reader.result as string);
        }
      };
      reader.readAsDataURL(file);
    } else {
      setErrorMessage("Please upload in JPEG Format.");
    }
  };

  const handleSubmit = async () => {
    if (!imageDataUrl) {
      setErrorMessage(
        "No image captured. Please take a picture or upload an Image"
      );
      return;
    }

    try {
      setIsSubmitting(true);
      setErrorMessage("");
      setApiResponse(null);

      // Convert the base64 image to a Blob
      const base64Image = imageDataUrl.split(",")[1]; // Remove the "data:image/jpeg;base64," part
      const byteCharacters = atob(base64Image);
      const byteNumbers = Array.from(byteCharacters, (char) =>
        char.charCodeAt(0)
      );
      const byteArray = new Uint8Array(byteNumbers);
      const imageBlob = new Blob([byteArray], { type: "image/jpeg" });

      // Create FormData and append the image
      const formData = new FormData();
      formData.append("file", imageBlob, "captured_image.jpg");

      // Send the request
      const response = await axios.post(
        "http://127.0.0.1:5000/predict",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      // Handle the response
      setApiResponse(response.data);
      console.log(response.data);
    } catch (error: any) {
      setErrorMessage(
        error.response?.data?.error ||
          error.message ||
          "An error occurred during submission. Please Refresh Your Page and Try Again!"
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container mt-20 p-4">
      <h1 className=" text-[48px] text-center text-custom-purple  ">
        Checkup Section
      </h1>
      <p className="text-center text-lg my-5">Take A Picture of Yourself!</p>

      {cameraPermission === null && <p>Requesting camera access...</p>}
      {cameraPermission === false && (
        <p className="text-red text-center font-bold">{errorMessage}</p>
      )}

      {cameraPermission !== null && (
        <div>
          {cameraPermission === true && (
            <div className="flex flex-col items-center">
              <video
                ref={videoRef}
                autoPlay
                style={{ width: "100%", height: "auto" }}
              />
              <p>
                You Can Always Recapture Your Beautiful Face by Clicking the
                Take Picture Button
              </p>
              <button
                onClick={takePicture}
                className="my-5 rounded-full border-2 text-custom-white px-8 py-2 bg-custom-purple"
              >
                Take Picture
              </button>
            </div>
          )}

          <div className="flex justify-center items-center my-5">
            <div className="container w-full h-[1px] bg-slate-200"></div>
            <p className="px-2">Or</p>
            <div className="container w-full h-[1px] bg-slate-200"></div>
          </div>

          <div className="my-5 flex flex-col items-center">
            <label className="block mb-2 text-center text-lg">
              Upload an Image
            </label>
            <Input
              type="file"
              onChange={handleFileUpload}
              className="cursor-pointer my-5 max-w-[300px] mx-auto"
            />
          </div>

          {imageDataUrl && (
            <div>
              <h2>Uploaded Image</h2>
              <img
                src={imageDataUrl}
                alt="Uploaded"
                style={{ maxWidth: "100%" }}
              />

              {!isSubmitting && (
                <button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="my-5 rounded-full border-2 text-custom-white px-8 py-2 bg-custom-purple"
                >
                  {isSubmitting ? "Submitting..." : "Submit to API"}
                </button>
              )}
            </div>
          )}
        </div>
      )}

      {apiResponse && (
        <div>
          {apiResponse.probability > 0.5 ? (
            <p className="text-red-800 text-center font-bold text-xl">
              You most likely Have a Stroke. Please Consider Consulting with A
              Doctor
            </p>
          ) : (
            <p className="text-green-400 text-center font-bold text-xl">
              You are Safe. Take Care! 💖
            </p>
          )}
          <p>Probability: {apiResponse?.probability}</p>
        </div>
      )}

      {errorMessage && (
        <p className="text-red text-center font-bold" style={{ color: "red" }}>
          {errorMessage}.
        </p>
      )}
    </div>
  );
};

export default CameraComponent;
