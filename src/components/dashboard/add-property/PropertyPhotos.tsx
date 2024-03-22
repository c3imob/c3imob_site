import Link from 'next/link';
import { ChangeEvent, use, useEffect, useState } from 'react';
import { useAddPropertyContext } from 'src/context/AddPropertyProvider/AddPropertyProvider';

const PropertyPhotos = () => {
  const { formFunctions } = useAddPropertyContext();
  const {
    getValues,
    setValue,
    formState: { errors },
  } = formFunctions;
  const [listImagesBase64, setListImagesBase64] = useState<string[]>([]);
  const [listImages, setListImages] = useState<{ id: number; link: string }[]>([]);

  useEffect(() => {
    const { oldPhotos } = getValues();
    if (oldPhotos) {
      setListImages(oldPhotos);
    }
  }, [getValues('oldPhotos')]);

  const removeNewPhoto = (index: number) => {
    const newListImagesBase64 = [...listImagesBase64];
    newListImagesBase64.splice(index, 1);
    setListImagesBase64([...newListImagesBase64]);
    setValue('newPhotos', [...newListImagesBase64]);
  };

  const removeOldPhoto = (index: number) => {
    const newListImages = [...listImages];
    const photoRemoved = newListImages.splice(index, 1);
    setListImages([...newListImages]);
    setValue('oldPhotos', [...newListImages]);

    const removePhotosId = getValues('removePhotosId') || [];
    setValue('removePhotosId', [...removePhotosId, photoRemoved[0].id]);
  };

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onload = (loadEvent) => {
        const base64String = `${loadEvent?.target?.result}`;
        setListImagesBase64([...listImagesBase64, base64String]);
        setValue('newPhotos', [...listImagesBase64, base64String]);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="bg-white card-box border-20 mt-40  mb-30">
      <h4 className="dash-title-three">Fotos dos imoveis</h4>
      <div className="dash-input-wrapper mb-20">
        <div className="row listing-card-one">
          {listImages.map((img, index) => {
            return (
              <>
                <div className="col-lg-3 mb-25 d-flex flex-column gap-2">
                  <div className="float-end button-group d-flex flex-row-reverse">
                    <Link onClick={() => removeOldPhoto(index)} href="#" className="dash-btn-one fa-pull-right">
                      Apagar
                    </Link>
                  </div>
                  <img width="100%" height="300px" src={img.link} alt="" className="lazy-img border-25" />
                </div>
              </>
            );
          })}
          {listImagesBase64.map((img, index) => {
            return (
              <>
                <div className="col-lg-3 mb-25 d-flex flex-column gap-2">
                  <div className="float-end button-group d-flex flex-row-reverse">
                    <button onClick={() => removeNewPhoto(index)} className="dash-btn-one fa-pull-right">
                      Apagar
                    </button>
                  </div>
                  <img width="100%" height="300px" src={img} alt="" className="lazy-img border-25" />
                </div>
              </>
            );
          })}
        </div>
      </div>
      <div className="dash-btn-one d-inline-block position-relative me-3">
        <i className="bi bi-plus"></i>
        Upload File
        <input type="file" onChange={handleImageChange} accept="image/*" id="uploadImg" name="uploadImg" placeholder="" />
      </div>
      <small>Upload file .jpg, .png, .mp4</small>
    </div>
  );
};

export default PropertyPhotos;
