import React, { useCallback, useState} from 'react';
import {useDropzone} from 'react-dropzone';
import { FiUpload } from 'react-icons/fi';

import './style.css';

const Dropzone = () => {
  const [selectedFIleUrl, setSelectedFileUrl] = useState('');
  const onDrop = useCallback(acceptedFiles => {
    const file = acceptedFiles[0];
    const fileUrl = URL.createObjectURL(file);
    setSelectedFileUrl(fileUrl);
  }, [])
  const {getRootProps, getInputProps, isDragActive} = useDropzone({
    onDrop,
    accept: 'image/*'
  })

  return (
    <div className="dropzone" {...getRootProps()}>
      <input {...getInputProps()} accept="image/*"/>

      { selectedFIleUrl 
      ? <img src={selectedFIleUrl} alt="Imagem do ponto" style={{borderRadius: 10}}/>
      : (
          isDragActive ?
            <p><FiUpload/>Solte a imagem aqui</p> :
            <p><FiUpload/>Imagem do estabelecimento</p>
        )
      }

    </div>
  )
}

export default Dropzone;