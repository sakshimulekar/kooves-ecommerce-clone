// import React from 'react';
// import { StarIcon } from '@chakra-ui/icons';
// import { Flex, Icon } from '@chakra-ui/react';

// const RatingStars = ({ rating }) => {
//   const fullStars = Math.floor(rating);
//   const hasHalfStar = rating - fullStars >= 0.25; // Changed to 0.25 to handle edge case

//   const renderStars = (count) => {
//     const stars = [];
//     for (let i = 0; i < count; i++) {
//       stars.push(
//         <Icon key={i} as={StarIcon} color="yellow.500" boxSize={6} />
//       );
//     }
//     return stars;
//   };

//   return (
//     <Flex alignItems="center">
//       {renderStars(fullStars)}
//       {hasHalfStar && (
//         <Icon as={StarIcon} color="yellow.500" boxSize={6} viewBox="0 0 200 200" clipPath="url(#starClip)" />
//       )}
//       {Array.from({ length: 5 - fullStars - (hasHalfStar ? 1 : 0) }).map((_, index) => (
//         <Icon key={`empty-${index}`} as={StarIcon} color="gray.300" boxSize={6} />
//       ))}
//     </Flex>
//   );
// };

// export default RatingStars;

import React from 'react';
import { StarIcon } from '@chakra-ui/icons';
import { Flex, Icon } from '@chakra-ui/react';

const RatingStars = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const decimalPart = rating - fullStars;
  const hasHalfStar = decimalPart >= 0.25 && decimalPart <= 0.75; // Handle half-filled star between 0.25 and 0.75

  const renderStars = (count) => {
    const stars = [];
    for (let i = 0; i < count; i++) {
      stars.push(
        <Icon key={i} as={StarIcon} color="yellow.400" boxSize={6} />
      );
    }
    return stars;
  };

  return (
    <Flex alignItems="center">
      {renderStars(fullStars)}
      {hasHalfStar && (
        <Icon as={StarIcon} color="yellow.400" boxSize={6} viewBox="0 0 200 200" clipPath="url(#starClip)" />
      )}
      {Array.from({ length: 5 - fullStars - (hasHalfStar ? 1 : 0) }).map((_, index) => (
        <Icon key={`empty-${index}`} as={StarIcon} color="gray.300" boxSize={6} />
      ))}
    </Flex>
  );
};

export default RatingStars;
