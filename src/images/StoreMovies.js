import React from "react";

const StoreMovies = () => {

    const movieArray = [
        {
            number: 1,
            title: 'The Unbearable Weight of Massive Talent',
            image: './images/massivetalent.jpg',
        },
        {
            number: 2,
            title: 'The Northman',
            image: './images/northman.jpg',
        },
        {
            number: 3,
            title: 'Dr. Strange in the Multiverse of Madness',
            image: './images/drstrange.jpg',
        },
        {
            number: 4,
            title: 'Crazy Rich Asians',
            image: './images/crasians.jpg',
          },
          {
            number: 5,
            title: 'Blade Runner 2049',
            image: './images/bladerunner.jpg',
          },
          {
            number: 6,
            title: 'In Time',
            image: './images/intime.jpg',
          },
          {
            number: 7,
            title: 'Matrix',
            image: './images/matrix.jpg',
          },
          {
            number: 8,
            title: 'Ready Player One',
            image: './images/rplayer1.jpg',
          }  
      ]


	return (
		<>
			{movieArray}
		</>
	);
};

export default StoreMovies;