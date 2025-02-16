import * as React from 'react';
import { SVGProps, memo } from 'react';

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={7}
    height={5}
    fill="none"
    {...props}
  >
    <path
      fill="#fff"
      d="M4.084 4.592a.537.537 0 0 1-.396.156.537.537 0 0 1-.396-.156L.604 1.904a.537.537 0 0 1-.156-.396c0-.16.052-.292.156-.396A.561.561 0 0 1 1 .968c.152 0 .28.052.384.156l1.908 1.908c.128.128.26.192.396.192s.264-.06.384-.18L6.016 1.1a.508.508 0 0 1 .372-.156c.152 0 .28.056.384.168.112.12.168.256.168.408a.508.508 0 0 1-.156.372l-2.7 2.7Z"
      opacity={0.4}
    />
  </svg>
);
const ArrowDownIcon = memo(SvgComponent);
export default ArrowDownIcon;
