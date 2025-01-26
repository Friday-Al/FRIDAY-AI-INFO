import * as React from 'react';
import { SVGProps, memo } from 'react';
const Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={21}
    fill="none"
    {...props}
  >
    <path
      fill="#fff"
      fillRule="evenodd"
      d="M20.503.364h-3.341l-5.506 6.294L6.895.364H0l8.238 10.772L.43 20.061h3.344L9.8 13.175l5.267 6.886h6.724L13.203 8.707l7.3-8.343ZM17.84 18.06H15.99L3.902 2.259h1.987L17.84 18.06Z"
      clipRule="evenodd"
    />
  </svg>
);
const TwitterIcon = memo(Icon);
export default TwitterIcon;
