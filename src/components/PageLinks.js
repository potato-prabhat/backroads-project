import { pageLink } from '../data'
const PageLinks = ({ parentClass, itemClass }) => {
  return (
    <ul className={parentClass} id="nav-links">
      {pageLink.map(({ id, href, text }) => {
        return (
          <li key={id}>
            <a href={href} className={itemClass}>
              {text}
            </a>
          </li>
        )
      })}
    </ul>
  )
}
export default PageLinks
