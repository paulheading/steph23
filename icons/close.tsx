interface CloseTypes {
  className?: string
}

function Close({ className }: CloseTypes) {
  return (
    <svg className={className} width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8.92857 18.0392V9.98599H0V8.05322H8.92857V0H11.0714V8.05322H20V9.98599H11.0714V18.0392H8.92857Z" />
    </svg>
  )
}

export { Close }
