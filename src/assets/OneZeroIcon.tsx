import * as React from 'react';
import { SVGProps, memo } from 'react';
const Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={20}
    fill="none"
    {...props}
  >
    <path
      fill="#fff"
      d="m3.875.217.84.82c.1.11.15.26.15.38v4.26c0 .12-.05.27-.15.38l-.84.82c-.1.11-.23.17-.39.17h-1.76a.5.5 0 0 1-.38-.17l-.84-.82a.556.556 0 0 1-.16-.38v-4.26c0-.12.05-.27.16-.38l.84-.82a.5.5 0 0 1 .38-.17h1.76c.16 0 .29.06.39.17Zm-.52 5.66.35-.36c.03-.04.06-.12.06-.17v-3.6c0-.05-.03-.13-.06-.17l-.35-.36a.287.287 0 0 0-.18-.07h-1.13c-.06 0-.14.03-.18.07l-.35.36c-.04.04-.07.12-.07.17v3.6c0 .05.03.13.07.17l.35.36c.04.04.12.07.18.07h1.13c.06 0 .14-.03.18-.07Zm5.087-.25v-3.59c0-.05-.02-.08-.04-.08s-.03.01-.06.04l-.25.26c-.1.1-.24.15-.38.15a.52.52 0 0 1-.53-.53c0-.15.05-.28.16-.39l1.26-1.28a.55.55 0 0 1 .4-.16c.31 0 .54.24.54.54v5.04c0 .18.16.34.34.34h.41c.3 0 .53.24.53.54 0 .3-.23.54-.53.54h-2.58a.53.53 0 0 1-.53-.54c0-.3.23-.54.53-.54h.4c.19 0 .33-.16.33-.34Zm8.226-5.41.84.82c.1.11.15.26.15.38v4.26c0 .12-.05.27-.15.38l-.84.82c-.1.11-.23.17-.39.17h-1.76a.5.5 0 0 1-.38-.17l-.84-.82a.556.556 0 0 1-.16-.38v-4.26c0-.12.05-.27.16-.38l.84-.82a.5.5 0 0 1 .38-.17h1.76c.16 0 .29.06.39.17Zm-.52 5.66.35-.36c.03-.04.06-.12.06-.17v-3.6c0-.05-.03-.13-.06-.17l-.35-.36a.287.287 0 0 0-.18-.07h-1.13c-.06 0-.14.03-.18.07l-.35.36c-.04.04-.07.12-.07.17v3.6c0 .05.03.13.07.17l.35.36c.04.04.12.07.18.07h1.13c.06 0 .14-.03.18-.07Zm-14.103 5.75v-3.59c0-.05-.02-.08-.04-.08s-.03.01-.06.04l-.25.26c-.1.1-.24.15-.38.15a.52.52 0 0 1-.53-.53c0-.15.05-.28.16-.39l1.26-1.28a.55.55 0 0 1 .4-.16c.31 0 .54.24.54.54v5.04c0 .18.16.34.34.34h.41c.3 0 .53.24.53.54 0 .3-.23.54-.53.54h-2.58a.53.53 0 0 1-.53-.54c0-.3.23-.54.53-.54h.4c.19 0 .33-.16.33-.34Zm8.227-5.41.84.82c.1.11.15.26.15.38v4.26c0 .12-.05.27-.15.38l-.84.82c-.1.11-.23.17-.39.17h-1.76a.5.5 0 0 1-.38-.17l-.84-.82a.556.556 0 0 1-.16-.38v-4.26c0-.12.05-.27.16-.38l.84-.82a.5.5 0 0 1 .38-.17h1.76c.16 0 .29.06.39.17Zm-.52 5.66.35-.36c.03-.04.06-.12.06-.17v-3.6c0-.05-.03-.13-.06-.17l-.35-.36a.287.287 0 0 0-.18-.07h-1.13c-.06 0-.14.03-.18.07l-.35.36c-.04.04-.07.12-.07.17v3.6c0 .05.03.13.07.17l.35.36c.04.04.12.07.18.07h1.13c.06 0 .14-.03.18-.07Zm5.086-.25v-3.59c0-.05-.02-.08-.04-.08s-.03.01-.06.04l-.25.26c-.1.1-.24.15-.38.15a.52.52 0 0 1-.53-.53c0-.15.05-.28.16-.39l1.26-1.28a.55.55 0 0 1 .4-.16c.31 0 .54.24.54.54v5.04c0 .18.16.34.34.34h.41c.3 0 .53.24.53.54 0 .3-.23.54-.53.54h-2.58a.53.53 0 0 1-.53-.54c0-.3.23-.54.53-.54h.4c.19 0 .33-.16.33-.34Zm-12.793 6v-3.59c0-.05-.02-.08-.04-.08s-.03.01-.06.04l-.25.26c-.1.1-.24.15-.38.15a.52.52 0 0 1-.53-.53c0-.15.05-.28.16-.39l1.26-1.28a.55.55 0 0 1 .4-.16c.31 0 .54.24.54.54v5.04c0 .18.16.34.34.34h.41c.3 0 .53.24.53.54 0 .3-.23.54-.53.54h-2.58a.53.53 0 0 1-.53-.54c0-.3.23-.54.53-.54h.4c.19 0 .33-.16.33-.34Zm6.397 0v-3.59c0-.05-.02-.08-.04-.08s-.03.01-.06.04l-.25.26c-.1.1-.24.15-.38.15a.52.52 0 0 1-.53-.53c0-.15.05-.28.16-.39l1.26-1.28a.55.55 0 0 1 .4-.16c.31 0 .54.24.54.54v5.04c0 .18.16.34.34.34h.41c.3 0 .53.24.53.54 0 .3-.23.54-.53.54h-2.58a.53.53 0 0 1-.53-.54c0-.3.23-.54.53-.54h.4c.19 0 .33-.16.33-.34Zm8.226-5.41.84.82c.1.11.15.26.15.38v4.26c0 .12-.05.27-.15.38l-.84.82c-.1.11-.23.17-.39.17h-1.76a.5.5 0 0 1-.38-.17l-.84-.82a.556.556 0 0 1-.16-.38v-4.26c0-.12.05-.27.16-.38l.84-.82a.5.5 0 0 1 .38-.17h1.76c.16 0 .29.06.39.17Zm-.52 5.66.35-.36c.03-.04.06-.12.06-.17v-3.6c0-.05-.03-.13-.06-.17l-.35-.36a.287.287 0 0 0-.18-.07h-1.13c-.06 0-.14.03-.18.07l-.35.36c-.04.04-.07.12-.07.17v3.6c0 .05.03.13.07.17l.35.36c.04.04.12.07.18.07h1.13c.06 0 .14-.03.18-.07Z"
    />
  </svg>
);
const OneZeroIcon = memo(Icon);
export default OneZeroIcon;
