'use client';
import { useState } from 'react';

import { FeatureCategoryData, PropertyDetailsAreaDtoInterface } from 'src/components/site/PropertyDetails/PropertyDetailsAreaDTO';
import VideoPopup from '@/modals/VideoPopup';
import Image from 'next/image';
import videoImg from '@/assets/images/listing/img_47.jpg';

interface PropertyDetailsPropertyVideoTourInterface {
  property: PropertyDetailsAreaDtoInterface;
}

const PropertyDetailsPropertyVideoTour = ({ property }: PropertyDetailsPropertyVideoTourInterface) => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const videoId = getYoutubeVideoId(property.youtubeVideoLink);
  if (videoId === null) return null;
  
  const thumbnail = getYoutubeThumbnail(videoId);
  return (
    <div className="property-video-tour mb-50">
      <h4 className="mb-40">Video Tour</h4>
      <div className="bg-white shadow4 border-20 p-15">
        <div className="position-relative border-15 image-bg overflow-hidden z-1">
          <img src={thumbnail} alt="" className="lazy-img w-100" />
          <a onClick={() => setIsVideoOpen(true)} style={{ cursor: 'pointer' }} className="video-icon tran3s rounded-circle d-flex align-items-center justify-content-center" data-fancybox>
            <i className="fa-thin fa-play"></i>
          </a>
        </div>
      </div>
      <VideoPopup isVideoOpen={isVideoOpen} setIsVideoOpen={setIsVideoOpen} videoId={videoId} />
    </div>
  );
};

function getYoutubeThumbnail(videoId: string, quality: string = 'hqdefault'): string {
  return `https://img.youtube.com/vi/${videoId}/${quality}.jpg`;
}

function getYoutubeVideoId(url: string | undefined): string | null {
  if (!url) return null;

  const regExp = /^(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
  const match = url.match(regExp);

  if (match && match[1]) {
    const videoId = match[1];
    return videoId;
  }

  return null;
}

export default PropertyDetailsPropertyVideoTour;
