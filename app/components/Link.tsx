import NextLink from 'next/link'
import {Link as RedizLink} from '@radix-ui/themes'

interface Props {
    href:string,
    children:string
}

const Link = ({href,children}:Props) => {
  return (
    <NextLink href={href} passHref legacyBehavior>
        <RedizLink>{children}</RedizLink>
    </NextLink>
  )
}

export default Link
