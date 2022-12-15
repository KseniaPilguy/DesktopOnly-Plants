import React from "react"
import { IconI } from "./IconInterface"

const Heart: React.FC<IconI> = ({className = ''}) => {
  return ( 
    <svg className={className} width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5.34375 2.8125C3.01669 2.8125 1.125 4.72613 1.125 7.03125C1.125 7.83563 1.4895 8.532 1.82812 9.03544C2.02761 9.33359 2.2574 9.61031 2.51381 9.86119L8.595 15.9609L8.99944 16.3654L9.40388 15.9609L15.4856 9.86119C15.4856 9.86119 16.875 8.63719 16.875 7.03125C16.875 4.72613 14.9833 2.8125 12.6562 2.8125C10.7246 2.8125 9.48094 3.97463 9 4.46513C8.51906 3.97463 7.27537 2.8125 5.34375 2.8125ZM5.34375 3.9375C7.0245 3.9375 8.57812 5.57212 8.57812 5.57212L9 6.04688L9.42188 5.57212C9.42188 5.57212 10.9755 3.9375 12.6562 3.9375C14.3679 3.9375 15.75 5.3415 15.75 7.03125C15.75 7.89919 14.6953 9.07031 14.6953 9.07031L9 14.7656L3.30469 9.07031C3.30469 9.07031 3.03244 8.80875 2.75963 8.40206C2.48738 7.9965 2.25 7.46663 2.25 7.03125C2.25 5.3415 3.63206 3.9375 5.34375 3.9375Z" fill="#131814"/>
    </svg>
  )
}

export default Heart
