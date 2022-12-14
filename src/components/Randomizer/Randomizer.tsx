import React, { useState, useEffect } from "react";
import ImageSlideShow from "./ImageSlideShow";
import Ingredients from "./Ingredients";
import GoesWellWith from "./GoesWellWith";
import client from "../../helpers/client";
import spoon from "../../assets/spoon.png";
import { Mayonnaise } from "../../helpers/types";
import "./Randomizer.css";

interface props {
  uuid: string;
  cache: {
    put: Function;
  };
}

const Randomizer: React.FC<props> = ({ uuid, cache }) => {
  const getRandomMayoId = (): number => {
    const maxMayoId = 100;
    const minMayoId = 1;
    const randomMayoId: number = Math.floor(
      Math.random() * (maxMayoId - minMayoId) + minMayoId
    );

    return randomMayoId;
  };

  const [mayoId] = useState<number>(getRandomMayoId());
  const [showMayonnaise, setShowMayonnaise] = useState<boolean>(false);
  const [mayonnaise, setMayonnaise] = useState<Mayonnaise>();

  useEffect(() => {
    cache.put(`uuid ${uuid}`, uuid, 86400000);

    setTimeout(() => setShowMayonnaise(true), 3200);
    setTimeout(() => {
      client.get(`/mayonnaise/${mayoId}`).then((res) => {
        setMayonnaise(res.data.data);
      });
    }, 4000);
  }, []);

  return (
    <div className='randomizer_container place-items_center'>
      {mayonnaise && showMayonnaise ? (
        <div className='mayonnaise-img_container place-items_center'>
          <img
            src={require(`../../assets/mayo-image/image_mayonnaise${mayoId}.png`)}
            alt={`${mayonnaise.name}`}
            className='mayonnaise_img'
          />
        </div>
      ) : (
        <ImageSlideShow />
      )}

      {mayonnaise ? (
        <div className='mayonnaise-text_container four-grid-columns_custom place-items_center'>
          <h2 className='justify-items_end'>{mayonnaise.name.toUpperCase()}</h2>
          <div className='spoon_container justify-items_end'>
            <img src={spoon} alt='spoon icon' id='spoon_img' />
          </div>
          <Ingredients mayonnaise={mayonnaise} />
          <GoesWellWith mayonnaise={mayonnaise} />
        </div>
      ) : (
        <div className='spacing_container'></div>
      )}
    </div>
  );
};

export default Randomizer;
