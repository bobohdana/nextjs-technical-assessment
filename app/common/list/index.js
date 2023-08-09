import Link from 'next/link'

import styles from './list.module.css'

export default ({ title, list }) => {
  return (
    <ul className={styles.list}>
      <h6 className={styles.title}>{title}</h6>

      {list.map(({ href, name, icon, target = '_blank' }) => (
        <li key={name} className={styles.item}>
          <Link href={href} target={target} className='horizontal'>
            {icon && <img src={icon} className={styles.icon} alt='' />}
            {name}
          </Link>
        </li>
      ))}
    </ul>
  )
}