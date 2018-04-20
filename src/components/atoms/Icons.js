import React from 'react'
import './Icons.scss'

export const Logo = props => (
  <svg width="146" height="146" viewBox="0 0 146 146" {...props}>
    <path
      d="M307.015625,177.53125 L317.421875,188.078125 L182.421875,322.515625 L172.4375,312.390625 L307.015625,177.53125 Z M307.015625,217.328125 L317.421875,227.875 L222.21875,322.515625 L212.234375,312.390625 L307.015625,217.328125 Z M267.359375,177.53125 L277.625,188.078125 L182.421875,282.71875 L172.4375,272.59375 L267.359375,177.53125 Z"
      transform="translate(-172 -177)"
    />
  </svg>
)

export const GitHub = props => (
  <svg className="icon" viewBox="0 0 20 20" width="20" height="20" {...props}>
    <path
      d="M13.18,11.309c-0.718,0-1.3,0.807-1.3,1.799c0,0.994,0.582,1.801,1.3,1.801s1.3-0.807,1.3-1.801 C14.479,12.116,13.898,11.309,13.18,11.309z M17.706,6.626c0.149-0.365,0.155-2.439-0.635-4.426c0,0-1.811,0.199-4.551,2.08
    c-0.575-0.16-1.548-0.238-2.519-0.238c-0.973,0-1.945,0.078-2.52,0.238C4.74,2.399,2.929,2.2,2.929,2.2 C2.14,4.187,2.148,6.261,2.295,6.626C1.367,7.634,0.8,8.845,0.8,10.497c0,7.186,5.963,7.301,7.467,7.301 c0.342,0,1.018,0.002,1.734,0.002c0.715,0,1.392-0.002,1.732-0.002c1.506,0,7.467-0.115,7.467-7.301 C19.2,8.845,18.634,7.634,17.706,6.626z M10.028,16.915H9.972c-3.771,0-6.709-0.449-6.709-4.115c0-0.879,0.31-1.693,1.047-2.369 c1.227-1.127,3.305-0.531,5.662-0.531c0.01,0,0.02,0,0.029,0c0.01,0,0.018,0,0.027,0c2.357,0,4.436-0.596,5.664,0.531 c0.735,0.676,1.045,1.49,1.045,2.369C16.737,16.466,13.8,16.915,10.028,16.915z M6.821,11.309c-0.718,0-1.3,0.807-1.3,1.799 c0,0.994,0.582,1.801,1.3,1.801c0.719,0,1.301-0.807,1.301-1.801C8.122,12.116,7.54,11.309,6.821,11.309z"
    />
  </svg>
)

export const Twitter = props => (
  <svg className="icon" viewBox="0 0 20 20" width="20" height="20" {...props}>
    <path
      d="M17.316,6.246c0.008,0.162,0.011,0.326,0.011,0.488c0,4.99-3.797,10.742-10.74,10.742c-2.133,0-4.116-0.625-5.787-1.697
	c0.296,0.035,0.596,0.053,0.9,0.053c1.77,0,3.397-0.604,4.688-1.615c-1.651-0.031-3.046-1.121-3.526-2.621
	c0.23,0.043,0.467,0.066,0.71,0.066c0.345,0,0.679-0.045,0.995-0.131c-1.727-0.348-3.028-1.873-3.028-3.703c0-0.016,0-0.031,0-0.047
	c0.509,0.283,1.092,0.453,1.71,0.473c-1.013-0.678-1.68-1.832-1.68-3.143c0-0.691,0.186-1.34,0.512-1.898
	C3.942,5.498,6.725,7,9.862,7.158C9.798,6.881,9.765,6.594,9.765,6.297c0-2.084,1.689-3.773,3.774-3.773
	c1.086,0,2.067,0.457,2.756,1.191c0.859-0.17,1.667-0.484,2.397-0.916c-0.282,0.881-0.881,1.621-1.66,2.088
	c0.764-0.092,1.49-0.293,2.168-0.594C18.694,5.051,18.054,5.715,17.316,6.246z"
    />
  </svg>
)

export const Dribbble = props => (
  <svg className="icon" viewBox="0 0 24 24" width="24" height="24" {...props}>
    <path d="M13.626 9.504C14.139 10.469 14.58 11.467 14.96 12.491 16.501 12.19 18.08 12.032 19.692 12.032 20.74 12.032 22.328 12.162 23.484 12.303 23.566 9.437 22.606 6.801 20.895 4.714 18.714 6.748 16.263 8.368 13.626 9.504zM19.692 13.032C18.196 13.032 16.729 13.177 15.296 13.447 16.082 15.86 16.5 18.404 16.5 21 16.5 21.36 16.474 22.007 16.442 22.609 20.205 21.032 22.946 17.511 23.421 13.303 22.287 13.162 20.689 13.032 19.692 13.032zM.641 10.292C1.815 10.423 3.143 10.5 4 10.5 6.821 10.5 9.584 9.983 12.19 9.004 10.636 6.384 8.555 4.066 6.06 2.165 3.196 3.9 1.155 6.843.641 10.292zM15.42 22.983C15.46 22.298 15.5 21.421 15.5 21 15.5 18.475 15.085 16.002 14.311 13.657 10.31 14.598 6.613 16.611 3.386 19.602 5.493 21.987 8.566 23.5 12 23.5 13.191 23.5 14.34 23.319 15.42 22.983z" />
    <path d="M13.977 12.707C13.611 11.739 13.183 10.795 12.693 9.883 9.931 10.94 6.998 11.5 4 11.5 3.095 11.5 1.749 11.419.536 11.283.521 11.522.5 11.758.5 12 .5 14.557 1.345 16.911 2.756 18.821 6.072 15.761 9.868 13.691 13.977 12.707zM7.024 1.645C9.506 3.607 11.574 5.974 13.128 8.631 15.704 7.535 18.098 5.958 20.225 3.971 18.137 1.832 15.226.5 12 .5 10.215.5 8.532.919 7.024 1.645z" />
  </svg>
)

export const Chain = props => (
  <svg className="icon" viewBox="0 0 18 8" width="18" height="8" {...props}>
    <path d="M1.9,4 C1.9,2.84 2.84,1.9 4,1.9 L8,1.9 L8,0 L4,0 C1.79,0 0,1.79 0,4 C0,6.21 1.79,8 4,8 L8,8 L8,6.1 L4,6.1 C2.84,6.1 1.9,5.16 1.9,4 Z M14,0 L10,0 L10,1.9 L14,1.9 C15.16,1.9 16.1,2.84 16.1,4 C16.1,5.16 15.16,6.1 14,6.1 L10,6.1 L10,8 L14,8 C16.21,8 18,6.21 18,4 C18,1.79 16.21,0 14,0 Z M6,5 L12,5 L12,3 L6,3 L6,5 Z" />
  </svg>
)

export const Blog = props => (
  <svg className="icon" viewBox="0 0 22 22" width="22" height="22" {...props}>
    <g>
      <path d="M0.394,21.61 C0.542,21.757 0.765,21.795 0.945,21.714 L5.533,19.747 L2.254,16.47 L0.287,21.059 C0.207,21.246 0.249,21.464 0.394,21.61 Z" />
      <polygon points="6.368 19.169 15.662 9.877 12.136 6.352 2.833 15.635" />
      <path d="M21.607,3.224 L18.778,0.395 C18.583,0.201 18.266,0.201 18.071,0.395 L17.682,0.785 C17.276,0.515 16.801,0.37 16.303,0.37 C15.635,0.37 15.007,0.63 14.535,1.103 L8.879,6.761 C8.684,6.956 8.684,7.272 8.879,7.467 C9.075,7.662 9.392,7.661 9.586,7.467 L15.243,1.811 C15.686,1.367 16.385,1.275 16.941,1.527 L12.833,5.634 L16.368,9.17 L21.606,3.931 C21.803,3.736 21.802,3.419 21.607,3.224 Z" />
    </g>
  </svg>
)

export const Email = props => (
  <svg className="icon" viewBox="0 0 22 15" width="22" height="15" {...props}>
    <g>
      <path d="M11.002,8.36 L21.097,0.33 C20.782,0.123 20.406,0 20.001,0 L2.001,0 C1.614,0 1.255,0.115 0.948,0.307 L11.002,8.36 Z" />
      <path d="M21.764,1.076 L11.296,9.391 C11.118,9.525 10.88,9.525 10.702,9.39 L0.26,1.036 C0.1,1.323 0.001,1.648 0,2 L0,13 C0.001,14.103 0.898,15 2.001,15 L19.999,15 C21.102,15 21.999,14.103 22,13 L22,2 C22,1.665 21.91,1.353 21.764,1.076 Z" />
    </g>
  </svg>
)

export const Index = props => (
  <svg className="icon" viewBox="0 0 20 20" width="20" height="20" {...props}>
    <rect width="9" height="5" />
    <rect width="9" height="5" y="7" />
    <rect width="9" height="5" y="14" />
    <rect width="9" height="5" x="11" />
    <rect width="9" height="5" x="11" y="7" />
    <rect width="9" height="5" x="11" y="14" />
  </svg>
)

export const Info = props => (
  <svg className="icon" viewBox="0 0 20 20" width="20" height="20" {...props}>
    <path d="M10,19 C5.02943725,19 1,14.9705627 1,10 C1,5.02943725 5.02943725,1 10,1 C14.9705627,1 19,5.02943725 19,10 C19,14.9705627 14.9705627,19 10,19 Z M11.2903086,6.10848407 C11.2903086,5.93461182 11.2559923,5.77218098 11.1873585,5.62118666 C11.1187247,5.47019234 11.0272144,5.33979011 10.9128247,5.22997606 C10.7984351,5.12016201 10.6611696,5.03322719 10.5010241,4.969169 C10.3408786,4.9051108 10.1738722,4.87308219 10,4.87308219 C9.81697658,4.87308219 9.64768246,4.90739856 9.49211256,4.97603234 C9.33654266,5.04466612 9.19927715,5.1338887 9.08031193,5.24370275 C8.96134671,5.3535168 8.86983638,5.48391903 8.80577818,5.63491335 C8.74171998,5.78590766 8.70969137,5.94376299 8.70969137,6.10848407 C8.70969137,6.44707739 8.83323032,6.7376227 9.08031193,6.98012873 C9.32739354,7.22263476 9.63395317,7.34388595 10,7.34388595 C10.1738722,7.34388595 10.3408786,7.31185733 10.5010241,7.24779914 C10.6611696,7.18374094 10.7984351,7.09680612 10.9128247,6.98699207 C11.0272144,6.87717802 11.1187247,6.7467758 11.1873585,6.59578148 C11.2559923,6.44478716 11.2903086,6.28235631 11.2903086,6.10848407 Z M8.87441162,15.1269178 L11.1255884,15.1269178 L11.1255884,8.2910274 L8.87441162,8.2910274 L8.87441162,15.1269178 Z" />
  </svg>
)

export const Download = props => (
  <svg className="icon" viewBox="0 0 20 20" width="20" height="20" {...props}>
    <path d="M10,19 C14.9707692,19 19,14.9707692 19,10 C19,5.03061538 14.9707692,1 10,1 C5.02923077,1 1,5.03061538 1,10 C1,14.9707692 5.02923077,19 10,19 Z M6.53846154,10.6923077 C6.80846154,10.4223077 7.24738462,10.4223077 7.51738462,10.6923077 L9.30769231,12.4826154 L9.30769231,5.84615385 C9.30769231,5.464 9.61784615,5.15384615 10,5.15384615 C10.3821538,5.15384615 10.6923077,5.464 10.6923077,5.84615385 L10.6923077,12.4826154 L12.4826154,10.6923077 C12.7526154,10.4223077 13.1915385,10.4223077 13.4615385,10.6923077 C13.7315385,10.9623077 13.7315385,11.4012308 13.4615385,11.6712308 L10.4901538,14.644 C10.2201538,14.9126154 9.78123077,14.9126154 9.51123077,14.644 L6.53846154,11.6712308 C6.26846154,11.4012308 6.26846154,10.9623077 6.53846154,10.6923077 Z" />
  </svg>
)
