import { RiCalendarLine, RiUserLine, RiTimeLine } from 'react-icons/ri'

import styles from './post.module.scss'

export default function Post() {
  return (
    <main className={styles.container}>
      <img
        src={'/images/banner.png'}
        className={styles.banner}
        alt="Post banner"
      />

      <section className={styles.content}>
        <h1>Criando um app CRA do zero</h1>

        <div className={styles.postInfo}>
          <div>
            <RiCalendarLine color="#BBBBBB" size={20} />
            <time>19 de abril de 2021</time>
          </div>
          <div>
            <RiUserLine color="#BBBBBB" size={20} />
            <p>Diego Fernandes</p>
          </div>
          <div>
            <RiTimeLine color="#BBBBBB" size={20} />
            <p>4 min</p>
          </div>
        </div>

        <div className={styles.postContent}>
          <h1>Resumo</h1>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            dolor sapien, vulputate eu diam at, condimentum hendrerit tellus.
            Nam facilisis sodales felis, pharetra pharetra lectus auctor sed. Ut
            venenatis mauris vel libero pretium, et pretium ligula faucibus.
            Morbi nibh felis, elementum a posuere et, vulputate et erat. Nam
            venenatis.
          </p>

          <h1>Por onde começar</h1>

          <p>
            Nulla auctor sit amet quam vitae commodo. Sed risus justo, vulputate
            quis neque eget, dictum sodales sem. In eget felis finibus, mattis
            magna a, efficitur ex. Curabitur vitae justo consequat sapien
            gravida auctor a non risus. Sed malesuada mauris nec orci congue,
            interdum efficitur urna dignissim. Vivamus cursus elit sem, vel
            facilisis nulla pretium consectetur. Nunc congue.
          </p>
          <p>
            Class aptent taciti sociosqu ad litora torquent per conubia nostra,
            per inceptos himenaeos. Aliquam consectetur massa nec metus
            condimentum, sed tincidunt enim tincidunt. Vestibulum fringilla
            risus sit amet massa suscipit eleifend. Duis eget metus cursus,
            suscipit ante ac, iaculis est. Donec accumsan enim sit amet lorem
            placerat, eu dapibus ex porta. Etiam a est in leo pulvinar auctor.
            Praesent sed vestibulum elit, consectetur egestas libero. Ut varius
            quis velit sed cursus.
          </p>
          <p>
            Nunc libero ante, hendrerit eget consectetur vel, viverra quis
            lectus. Sed vulputate id quam nec tristique. Etiam lorem purus,
            imperdiet et porta in, placerat non turpis. Cras pharetra nibh eu
            libero ullamcorper, at convallis orci egestas. Fusce ut est tellus.
            Donec ac consectetur magna, nec facilisis enim. Sed vel tortor
            consectetur, facilisis felis non, accumsan risus. Integer vel nibh
            et turpis. <a>Acessar documentação</a> Nulla auctor sit amet quam
            vitae commodo. Sed risus justo, vulputate quis neque eget, dictum
            sodales sem. In eget felis finibus, mattis magna a, efficitur ex.
            Curabitur vitae justo consequat sapien gravida auctor a non risus.
            Sed malesuada mauris nec orci congue, interdum efficitur urna
            dignissim. Vivamus cursus elit sem, vel facilisis nulla pretium
            consectetur. Nunc congue.
          </p>
          <p>
            Class aptent taciti sociosqu ad litora torquent per conubia nostra,
            per inceptos himenaeos. Aliquam consectetur massa nec metus
            condimentum, sed tincidunt enim tincidunt. Vestibulum fringilla
            risus sit amet massa suscipit eleifend. Duis eget metus cursus,
            suscipit ante ac, iaculis est. Donec accumsan enim sit amet lorem
            placerat, eu dapibus ex porta. Etiam a est in leo pulvinar auctor.
            Praesent sed vestibulum elit, consectetur egestas libero. Ut varius
            quis velit sed cursus.
          </p>
        </div>
      </section>
    </main>
  )
}
