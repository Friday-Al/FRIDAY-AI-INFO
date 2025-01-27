import * as React from 'react';
import { SVGProps, memo } from 'react';
const Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 22"
    fill="none"
    {...props}
  >
    <path
      fill="#fff"
      d="M12.074.3c6.184 0 11.197 5.013 11.197 11.197 0 4.625-2.804 8.595-6.804 10.302l-2.82-7.333a3.358 3.358 0 0 0-1.573-6.328 3.36 3.36 0 0 0-1.572 6.328L7.682 21.8c-4-1.708-6.805-5.678-6.805-10.303C.877 5.313 5.89.3 12.074.3Z"
    />
  </svg>
);
const KeyIcon = memo(Icon);
export default KeyIcon;
