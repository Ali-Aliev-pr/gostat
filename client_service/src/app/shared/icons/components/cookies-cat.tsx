import React from "react";
import { SVGProps } from "react";

export const CookiesCat = ({
  width = 240,
  height = 130,
  ...props
}: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 240 130" fill="none" {...props} >
    <path fillRule="evenodd" clipRule="evenodd" d="M170 10H160V20H150V30H140H130H120V20H110V10H100H90V20V30V40H80V50V60V70V80H90V90H100V100V110V120V130H110H120H130H140H150H160H170H180H190H200H210H220V120H230V110H240V100V90V80H230V70H220H210V80V90V100H200H190V90V80V70V60V50V40H180V30V20V10H170Z" fill="var(--color11)"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M110 100H120H130H140H150H160V110H150V120H140V130H130V120H120V130H110V120V110V100Z" fill="var(--color12)"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M230 80H220V90V100H210V110H200H190V100H180V90H170H160V100H170V110H160V120H170H180H190H200H210H220V110H230V100V90V80Z" fill="var(--color12)"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M110 20H100V30V40H90V50V60V70V80H100V90H110H120H130H140H150H160V80H170H180V70V60V50V40H170V30V20H160V30H150V40H140H130H120V30H110V20ZM100 70V60H110V70H100ZM140 70H150V60H140V70Z" fill="var(--color12)"/>
    <rect y="120" width="10" height="10" fill="var(--orange-text)"/>
    <rect x="20" y="120" width="10" height="10" fill="var(--orange-text)"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M70 0H60H50V10H40H30V20H20V30H10V40V50H0V60V70V80H10V90V100H20V110H30V120H40H50V130H60H70H80V120H90H100V110H110V100H120V90V80H110H100V70H90H80V60H70V50V40H80V30H90V20V10H80V0H70Z" fill="var(--orange-text)"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M50 10H60H70H80V20V30H70V20H60V30H70V40H60V50V60H70V70H80V80H90H100V90H110V100H100V110H90H80V120H70H60H50V110H40H30V100H20V90V80H10V70V60V50H20V40V30H30V20H40H50V10ZM90 100V90H80V100H90ZM30 50V60H40V50H30Z" fill="var(--orange-icon)"/>
    <rect x="60" y="30" width="10" height="10" fill="var(--orange-bg)"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M30 30H20V40V50H30V40V30Z" fill="var(--orange-bg)"/>
    <rect x="80" y="100" width="10" height="10" fill="var(--orange-bg)"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M20 50H10V60V70V80H20V90V100H30V110H40H50V120H60H70H80V110H70H60V100H50V90H40H30V80V70H20V60V50Z" fill="var(--orange-bg)"/>
    <rect x="30" y="60" width="10" height="10" fill="var(--orange-bg)"/>
  </svg>
);