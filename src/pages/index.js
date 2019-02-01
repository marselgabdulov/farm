import React from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Layout from '../components/layout'
import { graphql } from 'gatsby'
import SEO from '../components/seo'

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
      top: element.offsetTop - 70,
    })
  }

  render() {
    return (
      <Layout>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
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
                Медиа
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
              data-aos-delay="250"
              data-aos-duration="1200"
              data-aos-once="true"
            />
            <div
              className="intro__image"
              style={{
                backgroundImage: `url(${
                  this.props.data.farm.childImageSharp.fluid.src
                })`,
              }}
            />
            <div
              className="intro__text"
              data-aos="fade"
              data-aos-delay="250"
              data-aos-duration="1200"
              data-aos-once="true"
            >
              <h1 className="intro__title">Позняки</h1>
              <span className="intro__subtitle">
                Ферма в Ставропольском крае
              </span>
            </div>

            <svg
              className="arrow"
              onClick={() => this.scrollTo(document.getElementById('about'))}
            >
              <path className="a1" d="M0 0 L15 16 L30 0" />
              <path className="a2" d="M0 10 L15 26 L30 10" />
              <path className="a3" d="M0 20 L15 36 L30 20" />
            </svg>
          </section>

          {/* <div className="page__wrapper">
            <section
              className="about"
              id="about"
              ref={section => {
                this.about = section
              }}
            >
              <h2 className="about__title">О нас</h2>
              <div className="about__wrapper">
                <h3 className="about__quote">
                  <i>&laquo;Позняки&raquo; &ndash; просто очень вкусно.</i>
                </h3>
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
              </div>
            </section>

            <section id="products" className="products">
              <h2 className="products__title">Наша продукция</h2>
              <div className="product">
                <div
                  className="product__image"
                  style={{
                    backgroundImage: `url(${
                      this.props.data.pigs.childImageSharp.fluid.src
                    })`,
                  }}
                />
                <div className="product__description">
                  <h3 className="product__title">Свинина.</h3>
                  <span>
                    Мякоть - <b>425</b> рублей за 0.5кг.
                  </span>
                  <span>
                    Мякоть на косточке - <b>375</b> рублей за 0.5кг.
                  </span>
                  <span>
                    Рулька - <b>200</b> рублей за 1кг.
                  </span>
                  <span>
                    Грудинка - <b>200</b> рублей за 0.5кг.
                  </span>
                  <span>
                    Ребрышки - <b>399</b> рублей за 1кг.
                  </span>
                  <span>
                    Рагу - <b>118</b> рублей за 1кг.
                  </span>
                  <span>
                    Ножки - <b>24</b> рубля за 0.8кг.
                  </span>
                  <span>
                    Фарш домашний - <b>365</b> рублей за 0.5кг.
                  </span>
                </div>
              </div>

              <div className="product">
                <div className="product__description--left">
                  <h3 className="product__title">Курица.</h3>
                  <span>
                    Цыпленок корнишон - <b>230</b> рублей за штуку.
                  </span>
                  <span>
                    Подрощенный цыпленок - <b>330</b> рублей за штуку.
                  </span>
                  <span>
                    Курица для жарки - <b>300</b> рублей за штуку.
                  </span>
                  <span>
                    Суповая курица - <b>400</b> рублей за штуку.
                  </span>
                  <span>
                    Петух - <b>420</b> рублей за штуку.
                  </span>
                </div>

                <div
                  className="product__image"
                  style={{
                    backgroundImage: `url(${
                      this.props.data.chicken.childImageSharp.fluid.src
                    })`,
                  }}
                />
              </div>
              <div className="product">
                <div
                  className="product__image"
                  style={{
                    backgroundImage: `url(${
                      this.props.data.eggs.childImageSharp.fluid.src
                    })`,
                  }}
                />
                <div className="product__description">
                  <h3 className="product__title">Яйца.</h3>
                  <span>
                    Куриные яйца - <b>150</b> рублей за десяток.
                  </span>
                  <span>Могут быть грязными. Перед продажей не моем.</span>
                </div>
              </div>
            </section>

            <section
              id="media"
              className="media"
              ref={section => {
                this.media = section
              }}
            >
              <h2 className="media__title">Мы в соцсетях</h2>
              <div className="media__wrapper">
                <div className="media__block">
                  <a
                    href="https://www.youtube.com/watch?v=q81w201PNUM"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="youtube"
                    className="media__block--image-link"
                    style={{
                      backgroundImage: `url(${
                        this.props.data.pigs_youtube.childImageSharp.fluid.src
                      })`,
                    }}
                  >
                    <h3 className="media__block--title">Youtube</h3>
                  </a>
                </div>
                <div className="media__block">
                  <a
                    href="https://www.instagram.com/gorkiferma/"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="instagram"
                    className="media__block--image-link"
                    style={{
                      backgroundImage: `url(${
                        this.props.data.chicken_instagram.childImageSharp.fluid
                          .src
                      })`,
                    }}
                  >
                    <h3 className="media__block--title">Instagram</h3>
                  </a>
                </div>
              </div>
            </section>

            <section
              id="contacts"
              className="contacts"
              ref={section => {
                this.contacts = section
              }}
            >
              <h2 className="contacts__title">Контаткы</h2>
              <div className="contacts__wrapper">
                <div className="contacts__info">
                  Заказывайте доставку продуктов <br />
                  через Whatsapp или Telegram <br />
                  +7 (985) 741-19-91
                </div>
                <form
                  action="https://formspree.io/marsel.gabdulov@gmail.com"
                  method="POST"
                  className="request-form"
                >
                  <input
                    className="input-name"
                    type="text"
                    name="name"
                    placeholder="Ваше имя"
                    required
                    autoFocus
                  />
                  <input
                    className="input-email"
                    type="email"
                    name="email"
                    placeholder="Ваш email"
                    required
                  />
                  <textarea
                    className="input-comment"
                    type="text"
                    name="comment"
                    placeholder="Ваш комментарий"
                  />
                  <input
                    type="submit"
                    value="Отправить"
                    className="form-button"
                  />
                </form>
              </div>
            </section>
          </div> */}
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
    pigs: file(relativePath: { eq: "pigs.jpg" }) {
      ...fluidImage
    }
    chicken: file(relativePath: { eq: "chicken.jpg" }) {
      ...fluidImage
    }
    eggs: file(relativePath: { eq: "eggs.jpg" }) {
      ...fluidImage
    }
    pigs_youtube: file(relativePath: { eq: "pigs_youtube.jpg" }) {
      ...fluidImage
    }
    chicken_instagram: file(relativePath: { eq: "chicken_instagram.jpg" }) {
      ...fluidImage
    }
  }
`

export default IndexPage
