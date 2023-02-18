import { Link } from 'react-router-dom'

import { StyledLogo } from './styled'

const Logo = () => {
  return (
    <StyledLogo>
      <Link to="/">
        <span>Turbo Admin</span>
      </Link>
    </StyledLogo>
  )
}

export default Logo
