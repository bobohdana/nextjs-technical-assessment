
import Link from 'next/link'

import ContactForm from 'app/components/contactForm'
import List from 'app/common/list'

import styles from './contact.module.css'
import { contacts, networks } from 'app/lib/utils'

export default function Contact() {
  return (
    <section>
      <h2 className={styles.title}>Contact Us</h2>
      <p className={styles.subtitle}>Any question or remarks? Just write us a message!</p>

      <div className={styles.background}>
        <div className={styles.info}>
          <h4 className={styles.infoTitle}>Contact Information</h4>
          <p className={styles.infoSubtitle}>Say something to start a live chat!</p>

          <List list={contacts} />

          <div className='horizontal'>{networks.map(({ src, href }) => (
            <Link href={href} target='_blank' key={src} className={styles.imgContainer}>
              <img src={src} className={styles.img} alt='' />
            </Link>
          ))}</div>
        </div>

        <ContactForm />
      </div>
    </section>
  )
}
