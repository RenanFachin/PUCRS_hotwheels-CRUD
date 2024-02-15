import { Link, LinkProps, useLocation } from 'react-router-dom'

type NavLinkProps = LinkProps

export function NavLink(props: NavLinkProps) {
  const { pathname } = useLocation()

  return (
    <Link
      data-active={pathname === props.to}
      className="text-primary-500 hover:text-primary-700 data-[active=true]:text-primary-900 flex items-center gap-1.5 text-sm font-medium"
      {...props}
    />
  )
}
