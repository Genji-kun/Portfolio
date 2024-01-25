
import React from 'react';

const SVGMorph = () => {
    return (
        <svg className="w-[30rem] h-[30rem]" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path className="fill-border stroke-primary stroke-1" transform="translate(100 100)" >
                <animate attributeName='d' dur={"10000ms"} repeatCount={"indefinite"}
                    values='M44.8,-67.5C56.8,-62.1,64.3,-47.4,67.3,-33C70.3,-18.6,68.9,-4.5,67.9,10.5C67,25.5,66.5,41.4,59.1,53.1C51.8,64.7,37.6,72.3,22.5,76.9C7.3,81.6,-8.8,83.2,-23.3,79.1C-37.8,74.9,-50.6,65,-61.5,53C-72.4,41,-81.4,27,-80.9,13.2C-80.5,-0.6,-70.6,-14.2,-63.6,-28.8C-56.5,-43.4,-52.2,-59,-42.1,-65.2C-32,-71.4,-16,-68.3,0.2,-68.7C16.4,-69,32.9,-72.9,44.8,-67.5Z;
                                M50.1,-76.2C64.6,-68.7,75.6,-54.1,80.2,-38.3C84.9,-22.4,83.3,-5.3,76.8,8.1C70.3,21.6,58.9,31.4,49.6,43.8C40.2,56.3,32.8,71.4,20.6,79.1C8.4,86.8,-8.6,87,-25.1,83.2C-41.7,79.5,-57.7,71.7,-66.3,59C-74.9,46.3,-76,28.7,-76.8,12C-77.6,-4.6,-78.2,-20.3,-73.4,-34.7C-68.7,-49.1,-58.6,-62.3,-45.5,-70.4C-32.3,-78.5,-16.2,-81.5,0.8,-82.8C17.9,-84.1,35.7,-83.7,50.1,-76.2Z;
                                M36.4,-58.1C49.5,-48.3,64,-42,71.6,-31C79.2,-20,79.9,-4.2,79.3,12.5C78.6,29.3,76.6,47,67.1,58.5C57.6,70,40.6,75.3,24.5,77.2C8.3,79.1,-7,77.7,-22.5,74.2C-37.9,70.8,-53.5,65.3,-66,54.9C-78.5,44.6,-88,29.3,-91.5,12.5C-94.9,-4.4,-92.5,-22.7,-83.2,-35.8C-73.8,-48.9,-57.7,-56.7,-42.7,-65.7C-27.6,-74.7,-13.8,-84.9,-1.1,-83.3C11.7,-81.6,23.3,-68,36.4,-58.1Z;
                                M40.9,-59.5C55.9,-54,73,-47.6,81,-35.4C89,-23.3,87.9,-5.4,85,12C82.2,29.4,77.5,46.3,66.6,56.2C55.7,66.2,38.5,69.3,22.5,71.7C6.6,74.1,-8.1,75.8,-20.7,71.6C-33.3,67.4,-43.7,57.2,-54.1,46.3C-64.5,35.4,-74.8,23.8,-78.8,10C-82.8,-3.8,-80.6,-19.8,-72.2,-30.8C-63.8,-41.8,-49.2,-47.8,-36.1,-54.1C-23,-60.4,-11.5,-67.1,0.7,-68.3C13,-69.4,25.9,-64.9,40.9,-59.5Z;
                                M41.4,-64.3C55.3,-55.4,69.3,-46.7,77.1,-33.9C84.9,-21.1,86.5,-4.2,84.6,12.5C82.8,29.3,77.5,46,66.6,56.5C55.6,67,38.9,71.3,22.8,74.5C6.7,77.8,-8.7,80.1,-24.2,77.7C-39.7,75.3,-55.2,68.3,-62.8,56.2C-70.3,44.2,-70,27.1,-71.2,10.9C-72.5,-5.3,-75.5,-20.5,-72.5,-35.6C-69.4,-50.6,-60.5,-65.4,-47.4,-74.6C-34.3,-83.9,-17.2,-87.7,-1.7,-85C13.7,-82.3,27.5,-73.2,41.4,-64.3Z;
                                M45.9,-66.8C60.3,-62.2,73.4,-50.9,80.2,-36.5C86.9,-22.1,87.3,-4.8,82.8,10.4C78.3,25.6,68.9,38.6,58.4,50.5C47.9,62.5,36.3,73.5,23.2,76C10,78.6,-4.8,72.7,-20.3,68.5C-35.8,64.3,-51.9,61.6,-62.9,52.5C-73.9,43.4,-79.7,27.9,-78.4,13.4C-77.1,-1,-68.6,-14.2,-60.8,-26.2C-52.9,-38.2,-45.7,-49,-35.6,-55.6C-25.6,-62.1,-12.8,-64.5,1.5,-66.8C15.7,-69.1,31.5,-71.3,45.9,-66.8Z;
                                M46.7,-69.1C61.2,-63.4,74.1,-51.5,81.1,-36.8C88.2,-22.1,89.4,-4.6,86.7,12.3C84,29.2,77.5,45.4,67,58.7C56.4,72,41.9,82.5,26.2,85.3C10.5,88.2,-6.3,83.5,-19,75.1C-31.7,66.7,-40.4,54.6,-49.8,43.3C-59.2,32.1,-69.5,21.8,-71,10.3C-72.6,-1.2,-65.5,-14,-60,-28C-54.5,-42.1,-50.7,-57.5,-41,-65.4C-31.3,-73.3,-15.6,-73.7,0.2,-74.1C16.1,-74.5,32.2,-74.8,46.7,-69.1Z;
                                M44.8,-67.5C56.8,-62.1,64.3,-47.4,67.3,-33C70.3,-18.6,68.9,-4.5,67.9,10.5C67,25.5,66.5,41.4,59.1,53.1C51.8,64.7,37.6,72.3,22.5,76.9C7.3,81.6,-8.8,83.2,-23.3,79.1C-37.8,74.9,-50.6,65,-61.5,53C-72.4,41,-81.4,27,-80.9,13.2C-80.5,-0.6,-70.6,-14.2,-63.6,-28.8C-56.5,-43.4,-52.2,-59,-42.1,-65.2C-32,-71.4,-16,-68.3,0.2,-68.7C16.4,-69,32.9,-72.9,44.8,-67.5Z'>
                </animate>
            </path>
        </svg>);
};

export default SVGMorph;