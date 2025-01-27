import * as React from 'react';
import { SVGProps, memo } from 'react';
const Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 23 26"
    fill="none"
    {...props}
  >
    <path
      fill="#fff"
      fillRule="evenodd"
      d="m15.757 3.152-4.551 2.603L6.653 8.36V3.152L11.206.547l4.55 2.605Zm6.373 3.644.002 5.194-9.092-5.2 4.538-2.597 4.552 2.603Zm-4.553 15.11.001-5.205v-5.233l4.556 2.607.003 5.227-4.56 2.605ZM6.65 22.946l4.556 2.602 4.55-2.6v-5.205L6.65 22.945Zm.003-7.293v-5.21l4.553-2.603 4.55 2.604v5.215l-4.55 2.598-4.553-2.604Zm-6.38 3.65.003-5.215L9.387 19.3 4.83 21.904.273 19.302ZM.281 6.798l4.55-2.605v10.418L.279 12.005.28 6.798Z"
      clipRule="evenodd"
    />
  </svg>
);
const GroupIcon = memo(Icon);
export default GroupIcon;
