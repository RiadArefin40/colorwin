import React from "react";
import ImageSlider from "react-image-comparison-slider";
import BeforeAfterSlider from 'react-before-after-slider';


const Services = () => {
  
  return (
    <div>
      <div className=" flex gap-5 justify-center py-5">
        <div class="card card-compact  bg-base-100 shadow-xl">
          <figure>

     
          <BeforeAfterSlider
            
            before="https://i.ibb.co/3ShZtkk/1.jpg"
            after="https://i.ibb.co/FHmPD1J/2.jpg"
            width={250}
            height={180}
            />
       
         
          </figure>
          <div class="card-body">
            <h2 class="text-xl font-bold text-center">Clipping-Path</h2>
          </div>
        </div>

        <div class="card card-compact  bg-base-100 shadow-xl">
          <figure>
          <BeforeAfterSlider
            
            before="https://i.ibb.co/Z8rws77/1.jpg"
            after="https://i.ibb.co/Z8rws77/1.jpg"
            width={250}
            height={180}
            />
       
          </figure>
          <div class="card-body">
          <h2 class="text-xl font-bold text-center">Ghost Mannequin</h2>
          </div>
        </div>

        <div class="card card-compact bg-base-100 shadow-xl">
          <figure>
          <BeforeAfterSlider
            
            before="https://i.ibb.co/DgMXgXK/1.jpg"
            after="https://i.ibb.co/qxXdP3x/2.jpg"
            width={250}
            height={180}
            />
       
          </figure>
          <div class="card-body">
          <h2 class="text-xl font-bold text-center">Color-correction</h2>
          </div>
        </div>

      
      </div>
      <div>
      <div className=" flex gap-5 py-24 justify-center">
        <div class="card card-compact m-  bg-base-100 shadow-xl">
          <figure>
          <BeforeAfterSlider
            
            before="https://i.ibb.co/F8mFqkw/1.jpg"
            after="https://i.ibb.co/JRhk3k1/2.jpg"
            width={250}
            height={180}
            />
       
          </figure>
          <div class="card-body">
          <h2 class="text-xl font-bold text-center">Masking</h2>
          </div>
        </div>

        <div class="card card-compact  bg-base-100 shadow-xl">
          <figure>
          <BeforeAfterSlider
            
            before="https://i.ibb.co/PTMngn4/1.jpg"
            after="https://i.ibb.co/nkTMTmc/2.jpg"
            width={250}
            height={180}
            />
       
          </figure>
          <div class="card-body">
          <h2 class="text-xl font-bold text-center">Retouch</h2>
          </div>
        </div>

        <div class="card card-compact bg-base-100 shadow-xl">
          <figure>
          <BeforeAfterSlider
            
            before="https://i.ibb.co/3dJ81kt/1.jpg"
            after="https://i.ibb.co/vhPBCC9/2.jpg"
            width={250}
            height={180}
            />
       
          </figure>
          <div class="card-body">
          <h2 class="text-xl font-bold text-center">Shadow</h2>
          </div>
        </div>

      
      </div>
      </div>
    </div>
  );
};

export default Services;
