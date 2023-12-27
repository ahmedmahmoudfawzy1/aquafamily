import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';

function MyDropzone() {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleDrop = async (acceptedFiles) => {
    const imageFile = acceptedFiles[0];
    setSelectedImage(URL.createObjectURL(imageFile));

    const reader = new FileReader();
    reader.onload = (event) => {
      const imageData = event.target.result;
      // إضافة الصورة إلى الكائن JSON
      const jsonData = {
        image: imageData,
        // يمكنك إضافة المزيد من الخصائص الأخرى هنا
      };
      console.log(jsonData);
    };
    reader.readAsDataURL(imageFile);
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: 'image/*',
    onDrop: handleDrop
  });

  return (
    <div>
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>أسحب وأفلت الصورة هنا</p>
        ) : (
          <p>قم بتحميل الصورة هنا</p>
        )}
      </div>
      {selectedImage && <img src={selectedImage} alt='uploadImage' />}
    </div>
  );
}

export default MyDropzone;

/**
 * function MyDropzone() {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleDrop = (acceptedFiles) => {
    const imageFile = acceptedFiles[0];
    setSelectedImage(URL.createObjectURL(imageFile));
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: 'image/*',
    onDrop: handleDrop
  });

  return (
    <div>
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>أسحب وأفلت الصورة هنا</p>
        ) : (
          <BsPersonCircle className='iconphoto'/>
        )}
      </div>
      {selectedImage && <img src={selectedImage} alt='uploadImage' className='imageperson'/>}
    </div>
  );
}
 */