import React from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import ProductCard from '../components/ProductCard/ProductCard'
import InstagramCard from '../components/InstagramCard/InstagramCard'
import ArrowButton from '../components/ArrowButton/ArrowButton'
import ContactForm from '../components/ContactForm/ContactForm'
import { meat, chicken, eggs } from '../data/products.js'

import './index.css'

class IndexPage extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0)
    AOS.init()
  }
  scrollTo = element => {
    window.scroll({
      behavior: 'smooth',
      left: 0,
      top: element.offsetTop - 100,
    })
  }

  render() {
    const instagram = [
      {
        url: 'https://www.instagram.com/angel_bar_grill/?hl=ru',
        img: this.props.data.farm_instagram.childImageSharp.fluid.src,
      },
      {
        url: 'https://www.instagram.com/p/Br-JhtlHC59/',
        img: this.props.data.chicken_instagram.childImageSharp.fluid.src,
      },
      {
        url: 'https://www.instagram.com/p/BsPx-oonHGk/',
        img: this.props.data.view_instagram.childImageSharp.fluid.src,
      },
      {
        url: 'https://www.instagram.com/p/BsNY__mntMs/',
        img: this.props.data.pig_instagram.childImageSharp.fluid.src,
      },
    ]
    return (
      <Layout>
        <SEO title="Ферма" keywords={[`ферма`, `свинина`, `курица`]} />
        <div className="header">
          <div
            className="header__wrapper"
            data-aos="fade"
            data-aos-delay="250"
            data-aos-duration="1200"
            data-aos-once="true"
          >
            <div className="header__logo">
              <button
                className="header__button"
                onClick={() => this.scrollTo(document.getElementById('intro'))}
                title="На главную"
              >
                Позняки
              </button>
            </div>
            <nav className="header__links">
              <button
                className="header__button"
                onClick={() => this.scrollTo(document.getElementById('about'))}
                title="Подробнее"
              >
                О нас
              </button>
              <button
                className="header__button"
                onClick={() =>
                  this.scrollTo(document.getElementById('products'))
                }
                title="Наша продукция"
              >
                Продукты
              </button>
              <button
                className="header__button"
                onClick={() => this.scrollTo(document.getElementById('media'))}
                title="Соцсети"
              >
                Инстаграм
              </button>
              <button
                className="header__button"
                onClick={() =>
                  this.scrollTo(document.getElementById('contacts'))
                }
                title="Связь с нами"
              >
                Контакты
              </button>
            </nav>
          </div>
        </div>
        <div className="main">
          <section
            className="intro"
            id="intro"
            ref={section => {
              this.intro = section
            }}
          >
            <div
              className="intro__bg"
              data-aos="fade"
              data-aos-delay="100"
              data-aos-duration="1200"
              data-aos-once="true"
            />
            <div
              className="intro__image"
              data-aos="fade"
              data-aos-delay="300"
              data-aos-duration="1200"
              data-aos-once="true"
              style={{
                backgroundImage: `url(${
                  this.props.data.farm.childImageSharp.fluid.src
                })`,
              }}
            />
            <div
              className="intro__text"
              data-aos="fade"
              data-aos-delay="500"
              data-aos-duration="1200"
              data-aos-once="true"
            >
              <h1 className="intro__title">Позняки</h1>
              <span className="intro__subtitle">
                Ферма в Ставропольском крае
              </span>
            </div>
            <ArrowButton scrollTo="about" name="arrow__intro" />
          </section>

          <div className="page__wrapper">
            <section
              className="about"
              id="about"
              ref={section => {
                this.about = section
              }}
              data-aos="fade"
              data-aos-delay="100"
              data-aos-duration="1200"
              data-aos-once="true"
            >
              <h2 className="about__title">О нас</h2>
              <div className="about__wrapper">
                <div className="about__text">
                  <p>
                    "Позняки" &ndash; небольшая ферма, предлагающая
                    высококачественную, экологически чистую и ответсвенно
                    выращенную продукцию из свинины, курицы и яиц.
                  </p>
                  <p>
                    Наши животные обитают в условиях, максимально приближенных к
                    природным. Мы не используем антибиотики и гормоны роста, что
                    делает наши продукты гипоаллергенными и безопасными.
                  </p>
                  <p>
                    Хотя наша ферма и находится в самом сердце Ставропольского
                    края, мы осуществляем доставку продуктов в столичный регион
                    каждые две недели.
                  </p>
                </div>
                <ArrowButton scrollTo="products" name="arrow" />
              </div>
            </section>

            <section
              id="products"
              className="products"
              data-aos="fade"
              data-aos-delay="100"
              data-aos-duration="1200"
              data-aos-once="true"
            >
              <h2 className="products__title">Наша продукция</h2>
              <div className="product__cards">
                <ProductCard productTitle="Свинина" description={meat} />
                <ProductCard productTitle="Курица" description={chicken} />

                <ProductCard productTitle="Яйца" description={eggs} />
              </div>
              <ArrowButton scrollTo="media" name="arrow" />
            </section>

            <section
              id="media"
              className="media"
              data-aos="fade"
              data-aos-delay="100"
              data-aos-duration="1200"
              data-aos-once="true"
              ref={section => {
                this.media = section
              }}
            >
              <h2 className="media__title">Instagram</h2>
              <span className="media__main-link">
                <a
                  href="https://www.instagram.com/from_the_farm_with_love/?hl=ru"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="@from_the_farm_with_love"
                >
                  @from_the_farm_with_love
                </a>
              </span>
              <div className="media__links">
                {instagram.map(card => (
                  <InstagramCard
                    hreference={card.url}
                    imageUrl={card.img}
                    key={card.url}
                  />
                ))}
              </div>
            </section>
            <ArrowButton scrollTo="contacts" name="arrow" />

            <section
              id="contacts"
              className="contacts"
              data-aos="fade"
              data-aos-delay="100"
              data-aos-duration="1200"
              data-aos-once="true"
              ref={section => {
                this.contacts = section
              }}
            >
              <h2 className="contacts__title">Контакты</h2>
              <div className="contacts__wrapper">
                <div className="contacts__info">
                  Заказывайте доставку продуктов <br />
                  через Whatsapp или Telegram <br />
                  +7 (985) 741-19-91
                </div>
                <ContactForm />
              </div>
            </section>
          </div>
        </div>
      </Layout>
    )
  }
}

export const fluidImage = graphql`
  fragment fluidImage on File {
    childImageSharp {
      fluid(maxWidth: 1200) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`

export const pageQuery = graphql`
  query {
    farm: file(relativePath: { eq: "farm3.jpg" }) {
      ...fluidImage
    }
    farm_instagram: file(relativePath: { eq: "farm_instagram.jpg" }) {
      ...fluidImage
    }
    chicken_instagram: file(relativePath: { eq: "chicken_instagram.jpg" }) {
      ...fluidImage
    }
    view_instagram: file(relativePath: { eq: "view_instagram.jpg" }) {
      ...fluidImage
    }
    pig_instagram: file(relativePath: { eq: "pig2_instagram.jpg" }) {
      ...fluidImage
    }
  }
`

export default IndexPage
