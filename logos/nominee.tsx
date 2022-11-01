interface NomineeTypes {
  className?: string
}

function Nominee({ className }: NomineeTypes) {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="115" viewBox="0 0 1100 830">
      <path d="M378.3,550.8l22.2,31v-31h14.8V604h-14.4l-22.2-31.3V604h-14.8v-53.3H378.3z M484.3,578c0,7.7-2.8,14.7-8,19.9	c-5.4,5.3-11.8,7.7-20.8,7.7c-9,0-15.8-2.4-21.2-7.4c-5.5-5.2-8.6-12.5-8.6-20.4c0-7.9,3.1-15.8,8.3-20.8c5.1-5,12.4-7.7,20.7-7.7	C472,549.3,484.3,561.2,484.3,578z M441.2,577.2c0,9.5,5.6,15.8,14,15.8c8.3,0,13.9-6.2,13.9-15.3c0-9.2-5.8-15.5-14.2-15.5	C446.9,562.2,441.2,568.4,441.2,577.2z M500,550.8h15l10.1,31.8l9.7-31.8h15.1l8,53.3h-14l-5-28.5l-8.4,28.5h-11.4l-9.1-28.4	l-4.6,28.4h-14.1L500,550.8z M567.9,550.8h14.8V604h-14.8V550.8z M609.3,550.8l22.2,31v-31h14.8V604H632l-22.2-31.3V604h-14.8v-53.3	H609.3z M658.8,550.8h31v12h-16.6v8.3h15.4v12h-15.4v8.7h16.6V604h-31V550.8z M701.5,550.8h31v12h-16.6v8.3h15.4v12h-15.4v8.7h16.6	V604h-31V550.8z M462.1,681c4.2-4.6,4-4.5,8.9-10.2c2.2-2.6,1-1.3,3.5-4.1c2.1-2.3,3.8-4.2,3.8-4.2c7.7-9.1,5.5-6.6,6.6-7.9	c4.3-5.3,5.5-7.6,5.5-10.4c0-3.7-2.2-5.9-5.8-5.9c-4.6,0-6.5,2.3-7.3,9.3H464c0.3-5.9,1.4-9.5,3.9-12.8c3.6-4.9,9.5-7.5,16.6-7.5	c11.4,0,19.4,6.7,19.4,16.5c0,5-1.4,8.2-5.7,13.8c-3,3.9-5.4,6.4-10.6,11.6h15.9V681H462.1z M548.8,634.8c3.3,4.6,4.6,10.3,4.6,19	c0,18.6-7,28.6-20.2,28.6c-7.4,0-12.6-2.8-16.2-8.7c-2.9-4.9-4.1-10.6-4.1-19.1c0-17.2,7.4-27.3,20.2-27.3	C539.8,627.2,545.4,630,548.8,634.8z M527.9,643.4c-0.8,2.7-1.1,6.2-1.1,11c0,5.3,0.4,9.9,1.2,12.8c0.8,2.8,2.7,4.4,5.3,4.4	c2.6,0,4.4-1.6,5.2-4.6c0.7-3.1,1.3-8.2,1.3-12.6c0-11.8-1.7-16.3-6.2-16.3C531,638,528.8,640.2,527.9,643.4z M560.1,681	c4.2-4.6,4-4.5,8.9-10.2c2.2-2.6,1-1.3,3.5-4.1c2.1-2.3,3.8-4.2,3.8-4.2c7.7-9.1,5.5-6.6,6.6-7.9c4.3-5.3,5.5-7.6,5.5-10.4	c0-3.7-2.2-5.9-5.8-5.9c-4.6,0-6.5,2.3-7.3,9.3H562c0.3-5.9,1.4-9.5,3.9-12.8c3.6-4.9,9.5-7.5,16.6-7.5c11.4,0,19.4,6.7,19.4,16.5	c0,5-1.4,8.2-5.7,13.8c-3,3.9-5.4,6.4-10.6,11.6h15.9V681H560.1z M631.1,681h-13.5v-40.9h-8.1v-12h21.6V681z M196.5,256.9	c0,23.1-8.4,44.4-24.1,60c-16.2,15.9-35.7,23.1-62.7,23.1c-27.2,0-47.7-7.2-63.9-22.4C29.2,302,20,280.1,20,256.2	c0-23.9,9.4-47.5,25.1-62.7c15.4-14.9,37.4-23.1,62.5-23.1C159.6,170.3,196.5,206.3,196.5,256.9z M66.8,254.3	c0,28.7,16.9,47.7,42.2,47.7c25.1,0,42-18.6,42-46.1c0-27.7-17.6-46.8-42.9-46.8C83.9,209.2,66.8,227.7,66.8,254.3z M248.6,174.7	l67,93.6v-93.6h44.6v160.6h-43.4l-67-94.3v94.3h-44.6V174.7H248.6z M371.3,174.7h93.6v36.2h-50.2v25.1H461v36.2h-46.3v26.3h50.2	v36.9h-93.6V174.7z M516.2,174.7l33.3,96.2l32.8-96.2h47.5l-62,160.6h-36.2l-63.9-160.6H516.2z M792.1,256.9	c0,23.1-8.4,44.4-24.1,60c-16.2,15.9-35.7,23.1-62.7,23.1c-27.2,0-47.7-7.2-63.9-22.4c-16.6-15.7-25.8-37.6-25.8-61.5	c0-23.9,9.4-47.5,25.1-62.7c15.4-14.9,37.4-23.1,62.5-23.1C755.2,170.3,792.1,206.3,792.1,256.9z M662.4,254.3	c0,28.7,16.9,47.7,42.2,47.7c25.1,0,42-18.6,42-46.1c0-27.7-17.6-46.8-42.9-46.8C679.5,209.2,662.4,227.7,662.4,254.3z M800.8,174.7	h44.6v160.6h-44.6V174.7z M978.2,328c-16.9,8.7-26,11.1-41,11.1c-49.4,0-83.4-34.2-83.4-83.4c0-24.6,8-44.6,24.4-61	c15.7-15.7,34.5-23.4,57.6-23.4c15.7,0,25.3,2.7,42.4,11.3v47.3c-9.4-8.2-12.1-10.4-16.6-13.3c-6-3.9-13.3-5.8-21-5.8	c-24.4,0-41.2,18.3-41.2,44.8s17.1,44.8,41.5,44.8c14,0,21.9-3.9,37.4-18.8V328z M986.4,174.7h93.6v36.2h-50.2v25.1h46.3v36.2h-46.3	v26.3h50.2v36.9h-93.6V174.7z M80.1,359.5h55l56.9,160.6h-47.5l-8.4-28H78.8l-8.4,28H23.6L80.1,359.5z M126.1,459.9l-18.6-61.5	L89,459.9H126.1z M245.5,359.5l21.7,96.4l26-96.4h46.3l23.1,95.7l22.2-95.7h49.4l-52.1,160.6h-42.2l-24.8-99.3l-25.8,99.3h-42	l-50.6-160.6H245.5z M494.7,359.5h55l56.9,160.6h-47.5l-8.4-28h-57.1l-8.4,28h-46.8L494.7,359.5z M540.8,459.9l-18.6-61.5	l-18.6,61.5H540.8z M631.4,359.5h66.3c14.2,0,27.2,3.6,35.4,10.1c12.1,9.2,18.8,24.4,18.8,41.5c0,23.1-14,41.7-34.2,44.8l46.8,64.1	h-54l-36.2-55.2v55.2h-42.9V359.5z M688.3,432.6c11.1,0,18.6-7.5,18.6-18.3c0-11.6-7-18.6-18.6-18.6h-13.5v36.9H688.3z M789.4,359.5	h65.8c46.5,0,77.9,31.8,77.9,79.3c0,49.9-30.4,81.3-79.1,81.3h-64.6V359.5z M850.9,484c23.1,0,36.2-15.4,36.2-42.4	c0-18.1-3.4-28.5-12.1-36.4c-6.3-5.8-14.2-8.7-24.1-8.7h-16.4V484H850.9z M973.9,466.4c13.3,15.7,23.6,22.2,35.2,22.2	c13.3,0,21.7-6.3,21.7-15.9c0-3.6-0.7-6.3-2.2-8.2c-2.7-3.1-10.4-7-20-9.6c-22.9-6.3-31.3-11.1-38.8-21c-5.8-7.5-8.2-15.7-8.2-27	c0-30.6,23.9-51.4,58.8-51.4c15.2,0,27.5,3.9,47.5,15.2l-15.7,33c-9.6-8.9-20.5-14-30.4-14c-9.4,0-16.4,5.5-16.4,13	c0,3.6,1.4,7.2,4.6,9.6c1.4,1.4,4.1,2.7,6.3,3.4l21.7,6.5c11.3,3.4,22.4,10.6,28.2,18.3c5.3,7,7.7,16.2,7.7,28.5	c0,15.4-5.5,28.5-16.2,38.6c-12.3,11.6-27,16.6-48.5,16.6c-13.7,0-28-4.1-38.8-11.1c-4.3-2.7-8-5.5-18.3-14.5L973.9,466.4z" />
      <path d="M550,714.7l8.8,23.9l26.2,0.5l-20.5,18.1l7.1,24.1L550,766.9l-21.6,14.4l7.1-24.1L515,739.2l26.2-0.5L550,714.7z M536.8,53.2l-56.1,1.1L524.6,93l-15.3,51.6l46.4-30.8l46.4,30.8L586.7,93l43.9-38.7l-56.1-1.1L555.7,2L536.8,53.2z M636.4,694.7	l-26.2,0.5l20.5,18.1l-7.1,24.1l21.6-14.4l21.6,14.4l-7.1-24.1l20.5-18.1l-26.2-0.5l-8.8-23.9L636.4,694.7z M731.5,642.2l-26.2,0.5	l20.5,18.1l-7.1,24.1l21.6-14.4l21.6,14.4l-7.1-24.1l20.5-18.1l-26.2-0.5l-8.8-23.9L731.5,642.2z M350.8,642.2l-26.2,0.5l20.5,18.1	l-7.1,24.1l21.6-14.4l21.6,14.4l-7.1-24.1l20.5-18.1l-26.2-0.5l-8.8-23.9L350.8,642.2z M446,694.7l-26.2,0.5l20.5,18.1l-7.1,24.1	l21.6-14.4l21.6,14.4l-7.1-24.1l20.5-18.1l-26.2-0.5l-8.8-23.9L446,694.7z" />
      <path
        d="M241.1,92.4c0,0-2-27.2,12.8-46.3c17.1-22.1,43.3-24.4,43.3-24.4s2.3,26.9-14.6,47	C265.7,88.7,241.1,92.4,241.1,92.4z M842.9,93.1c0,0,2-27.2-12.8-46.3c-17.1-22.1-43.3-24.4-43.3-24.4s-2.3,26.9,14.6,47	C818.3,89.4,842.9,93.1,842.9,93.1z M948.5,458.8c0,0,0.5-42.8-25.9-80.1c-26.3-37.4-67.9-45.8-67.9-45.8s-3.1,44.7,26.4,83.5	C906.5,449.8,948.5,458.8,948.5,458.8z M1026.2,585.7c49.2-20.4,69.5-65.9,69.5-65.9s-50.1-15.4-101.6,8.2	c-24.3,11.1-41.7,29.9-52.4,44.6c7.5-17.7,13.8-36,18.8-54.8c10.9-3.7,52-19.4,82.2-56.3c35.2-42.9,32.1-93.2,32.1-93.2	s-52.9,12-88.7,58.9c-5.7,7.5-10.2,15.3-13.9,23c1-11.7,1.6-23.6,1.6-35.5c0-11.4-0.5-22.7-1.4-33.9c13.4-5.3,36-16.9,53.1-38.9	c25.8-33.4,21.1-74.7,21.1-74.7s-41.3,7.3-67.4,44.1c-5.9,8.3-10,17.4-12.8,26.1c-3-15.6-6.9-30.8-11.7-45.7	c3.3-3.7,25.7-30,28.7-67c3.2-40-21.9-70.2-21.9-70.2s-28.9,27.3-30.7,70c-0.1,3.1-0.1,6.1,0.2,9.1c-9.8-19.6-21.1-38.2-33.9-55.9	c6.5-8.5,19.7-28.7,21.9-55C922,87.5,900.3,61,900.3,61s-25.3,24-26.9,61.5c-0.5,11.2,1.8,21.8,4.9,30.8	C849,118.4,814,88.3,774.6,64.2c4.5-1.4,7.1-2.5,7.1-2.5S764.2,31.5,734,21.5c-35-11.5-65.5,4.3-65.5,4.3s17,30.1,50.2,39.6	c21.4,6.1,41.4,2.8,52.9-0.4c20.2,12.7,39.1,27.1,56.7,43c-6.7-4.6-14.5-8.8-23.4-11.9c-33.3-11.5-64.3,3-64.3,3s17,30.4,53,41.3	c29.8,9,60-3.8,62.4-4.9c23.7,26,44,55.1,60.1,86.5c-8.5-12-22.3-27.8-42.1-39.4c-36-21.1-73-13-73-13s15.1,37.9,54.2,59	c29.2,15.8,61.2,12,69.3,10.7c11.4,25.2,20.2,51.8,26.1,79.4c-7.4-12.7-20.7-31.4-41.4-45.4c-34.6-23.5-72-17.7-72-17.7	s12.6,38.8,50.2,62.5c25.9,16.2,55.2,16.2,66,15.5c3.8,21.7,5.7,44,5.7,66.8c0,59.1-13.2,115.2-36.8,165.6c3-15.3,5.9-42.8-3-71.7	c-13.6-43.6-50.5-64.5-50.5-64.5s-16.7,41.6-0.6,87.5c11.8,33.7,40.5,54.3,48.7,59.7c-17.9,35.3-41,67.7-68.4,96.1	c9-16.8,20.9-45.3,20.8-79.1c-0.1-54.6-36.3-92.1-36.3-92.1s-35,40.9-32.7,99c1.7,41.5,26.6,74.8,35.3,85.2	c-73.8,70.2-174.7,113.5-286,113.5c-111.3,0-212.2-43.3-286-113.5c8.1-9.5,34.1-43.5,35.8-85.9c2.3-58.1-32.7-99-32.7-99	s-36.2,37.6-36.3,92.1c-0.1,35.8,13.3,65.7,22.4,82c-28.9-29.6-53.1-63.5-71.6-100.6c10.4-7.2,35.5-27.1,46.4-58.2	c16.1-45.9-0.6-87.5-0.6-87.5s-37,20.8-50.5,64.5c-7.1,23-6.7,45.1-4.8,60.9c-13.4-31.2-22.8-64.3-27.8-98.9	c13.6-4.5,40.5-15.9,58.8-40c29.5-38.7,26.4-83.5,26.4-83.5s-41.6,8.5-67.9,45.8c-10.6,15.1-16.9,31-20.6,44.7	c-0.4-7.4-0.6-14.8-0.6-22.2c0-22.9,2-45.4,5.8-67.3c12.8,0.4,39.1-0.9,62.5-15.6c37.6-23.6,50.2-62.5,50.2-62.5s-37.5-5.7-72,17.7	c-16.2,11-27.9,24.9-35.8,36.5c5.8-24.3,14-47.8,24.2-70.2c10.2,1.4,40.2,3.9,67.7-11c39.1-21.1,54.2-59,54.2-59s-37-8.2-73,13	c-15.6,9.2-27.6,21-36.1,31.5c15.4-28.2,34.1-54.3,55.6-78c6.9,2.8,34.1,12.3,60.9,4.2c35.9-10.9,53-41.3,53-41.3s-31.1-14.5-64.3-3	c-5.8,2-11,4.5-15.9,7.2c14.9-13,30.8-24.9,47.6-35.7c11.2,1.7,25.5,2,40.5-2.3c33.2-9.5,50.2-39.6,50.2-39.6S384.9,9.3,350,20.8	C319.8,30.8,302.2,61,302.2,61s7.5,3.3,19.1,5.4c-37.7,23.5-71.3,52.7-99.6,86.3c3.2-9,5.5-19.6,5-30.9	c-1.7-37.5-26.9-61.5-26.9-61.5s-21.7,26.5-18.8,61.6c2.2,26.3,15.4,46.4,21.9,54.9c-12.7,17.5-24,36.1-33.8,55.5	c0.2-2.8,0.2-5.7,0.1-8.6c-1.8-42.7-30.7-70-30.7-70S113.4,184,116.6,224c2.9,36.2,24.4,62.2,28.4,66.8	c-5.6,17.4-10.1,35.3-13.3,53.7c-2.7-11.1-7.2-23-14.9-33.9c-26.1-36.7-67.4-44.1-67.4-44.1s-4.8,41.3,21.1,74.7	c18.6,24,43.8,35.6,56.5,40.2c-0.9,11-1.4,22.1-1.4,33.3c0,11.2,0.5,22.3,1.4,33.3c-3.5-7.3-7.8-14.5-13.1-21.5	c-35.8-46.9-88.7-58.9-88.7-58.9s-3.1,50.3,32.1,93.2c29.6,36,69.4,51.8,81.4,56c4.7,18,10.6,35.5,17.6,52.5	c-10.8-14.3-27.5-31.5-50.5-42c-51.6-23.6-101.6-8.2-101.6-8.2s20.3,45.6,69.5,65.9c41.1,17,81.6,11.6,93.9,9.3	c6.4,13,13.6,25.6,21.3,37.8c-4.1-2.3-8.5-4.4-13-6.3c-57.8-23.5-111.7-2.7-111.7-2.7S89,673.8,144,693.7	c41.1,14.9,80.8,9.4,98.2,5.6C319.5,778.6,428.7,828,549.7,828c121,0,230.2-49.4,307.4-128.6c15.7,3.7,57.4,10.8,100.8-5	c55-20,79.8-70.6,79.8-70.6s-53.9-20.8-111.7,2.7c-6.3,2.6-12.3,5.7-17.8,9.1c8.5-13.1,16.3-26.7,23.3-40.8	C942.8,597,984.2,603.1,1026.2,585.7z"
        opacity="0.2"
      />
    </svg>
  )
}

export { Nominee }