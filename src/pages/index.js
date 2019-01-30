import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div className="header">
      <div className="header__wrapper">
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
            onClick={() => this.scrollTo(document.getElementById('products'))}
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
            onClick={() => this.scrollTo(document.getElementById('contacts'))}
            title="Связь с нами"
          >
            Контакты
          </button>
        </nav>
      </div>
    </div>
  </Layout>
)

export default IndexPage
