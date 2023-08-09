import List from 'app/common/list'
import Subscribe from 'app/components/subscribe'

import styles from './footer.module.css'

import { inter } from 'app/lib/fonts'
import { LOGO, contacts, company, legal, links } from 'app/lib/utils'

export default () => {
  return (
    <footer className={styles.footer}>
      <section>
        <h1 className={`${inter.className} ${styles.logo}`}>{LOGO}</h1>
        <hr />

        <div className={styles.info}>
          <List title={'Reach us'} list={contacts} />
          <List title={'Company'} list={company} />
          <List title={'Legal'} list={legal} />
          <List title={'Quick Links'} list={links} />
          
          <Subscribe />
        </div>
      </section>
    </footer>
  )
}