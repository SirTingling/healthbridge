//------------------------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------------
// Upload an image to Cloudinary
const uploadImageToCloudinary = async (file) => {
  // ---------------------------------------------------------------------------------------------------------------------
  const uploadData = new FormData();
  
  // Append file to the FormData object
  uploadData.append("file", file);
  
  // Append upload preset to the FormData object
  uploadData.append("upload_preset", import.meta.env.VITE_UPLOAD_PRESET);
  
  // Append Cloudinary cloud name to the FormData object
  uploadData.append("cloud_name", import.meta.env.VITE_CLOUD_NAME);

  try {
    // Make POST request to the Cloudinary API to upload the image
    const res = await fetch(
      `https://api.cloudinary.com/v1_1/${import.meta.env.VITE_CLOUD_NAME}/image/upload`,
      {
        method: "POST",
        body: uploadData,
      }
    );
    // ---------------------------------------------------------------------------------------------------------------------

    // If response is not OK, and throwing an error if the upload failed
    if (!res.ok) {
      throw new Error('Failed to upload image');
    }

    // ---------------------------------------------------------------------------------------------------------------------
    // ---------------------------------------------------------------------------------------------------------------------
    const data = await res.json();
    // ---------------------------------------------------------------------------------------------------------------------
    // Return upload data
    return data;
  } catch (error) {
    // ---------------------------------------------------------------------------------------------------------------------
    // Logging and rethrowing the error if the upload fails
    console.error('Error uploading image:', error);
    throw error;
    // ---------------------------------------------------------------------------------------------------------------------
  }
};

//------------------------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------------
export default uploadImageToCloudinary; // ---------------------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------------
