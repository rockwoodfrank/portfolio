<template>
  <main>
    <section id="background"></section>
    <!-- <DotMap /> -->
    <div id="hero-anchor"></div>
    <div id="intro-anchor"></div>
    <div class="card-container">
      <section id="hero" :style="{ opacity: opacityVal }">
        <!-- <vue-typed-js
					:strings="['Rockwood Frank']"
					:cursorChar="'_'"
					@onComplete="clearCursor(0)"
				> -->
        <h1 class="typing">Rockwood Frank</h1>
        <!-- </vue-typed-js> -->
        <!-- <vue-typed-js
					:strings="['Web Designer', 'Web Developer', 'Web Designer']"
					:startDelay="1500"
					:cursorChar="'_'"
				> -->
        <h2 class="typing">Computer Engineering Undergraduate</h2>
        <!-- </vue-typed-js> -->
        <div id="info">
          <div id="info__contact">
            <IconLink v-bind="links[0]" />
            <IconLink v-bind="links[1]" />
          </div>
          <div id="info__social">
            <IconLink v-bind="links[2]" />
            <IconLink v-bind="links[3]" />
            <IconLink v-bind="links[4]" />
            <IconLink v-bind="links[5]" />
          </div>
        </div>
        <a class="down-button" href="#intro-anchor" v-smooth-scroll="{ duration: 1000 }"
          ><img src="./img/arrow-down.svg" alt="Go Down" />
        </a>
      </section>
      <section id="intro">
        <div id="languages-graph">
          <h1 data-aos="fade" :style="{ opacity: opacityVals[2] }">My Skills</h1>
          <SkillGraph
            v-for="(skill, index) in skills"
            v-bind="skill"
            :key="index"
            data-aos="fade"
            :style="{ opacity: opacityVals[index + 3] }"
          />
        </div>
      </section>
    </div>
    <section
      id="portfolio"
      v-scroll="scrollEnlarge"
      :style="{ margin: '10vh ' + portMargin + 'vw', padding: '10vh ' + portPadding + 'vw' }"
    >
      <h1>My Work</h1>
      <carousel
        :per-page="1"
        data-aos="fade-up"
        :navigation-enabled="true"
        :pagination-enabled="false"
        :autoplay="true"
      >
        <slide v-for="(testimonial, index) in testimonials" :key="index">
          <PortfolioTile v-bind="testimonial" />
        </slide>
      </carousel>
    </section>
  </main>
</template>

<script>
import AOS from 'aos'

import DotMap from './components/DotMap.vue'
import SkillGraph from './components/SkillGraph.vue'
import PortfolioTile from './components/PortfolioTile.vue'
import IconLink from './components/IconLink.vue'

import mail from './img/mail.svg'
import phone from './img/phone.svg'
import behance from './img/behance.svg'
import github from './img/github.svg'
import linkedin from './img/linkedin.svg'
import twitter from './img/twitter.svg'

import webDesign from './img/web-design.svg'
import vueLogo from './img/vue-logo.svg'
import html5 from './img/html5.svg'
import javascript from './img/javascript.svg'
import css3 from './img/css3.svg'
import php from './img/php.svg'
import nodejs from './img/nodejs.svg'
import java from './img/java.svg'

import screenshot1 from './img/screenshot-1.png'
import screenshot2 from './img/screenshot-2.png'

export default {
  name: 'Index',
  components: {
    DotMap,
    SkillGraph,
    PortfolioTile,
    IconLink,
  },
  created() {
    window.addEventListener('scroll', this.handleScroll)
  },
  unmounted() {},
  data() {
    return {
      opacityVal: 1,
      opacityVals: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      helloEval: false,
      portfolioOffset: 100,
      portMargin: 10,
      portPadding: 10,
      links: [
        {
          linkText: 'rnfrank@calpoly.edu',
          href: 'mailto:rnfrank@calpoly.edu',
          iconSrc: mail,
          inverse: false,
        },
        {
          linkText: '805 316 0282',
          href: 'tel:805-316-0282',
          iconSrc: phone,
          inverse: false,
        },
        {
          linkText: 'Behance',
          href: 'https://behance.net/rfrankweb',
          iconSrc: behance,
          inverse: true,
        },
        {
          linkText: 'Github',
          href: 'https://github.com/rfrankweb',
          iconSrc: github,
          inverse: true,
        },
        {
          linkText: 'LinkedIn',
          href: 'https://linkedin.com/in/rockwood-frank-194054193/',
          iconSrc: linkedin,
          inverse: true,
        },
        {
          linkText: 'Twitter',
          href: 'https://twitter.com/RockwoodFrank',
          iconSrc: twitter,
          inverse: true,
        },
      ],
      testimonials: [
        {
          cliName: 'The Law Office of Julie A. Brown Attorney at Law',
          cliQuote:
            'Amazing Job. This is your designer. Lorem Ipsum dolor sit amet meta html super duper etcetera etcetera lorem ipsum dolor sit amet.',
          cliYear: '2019',
          img: screenshot1,
        },
        {
          cliName: 'Fast and Healthy Nutrition',
          cliQuote: 'Amazing Job, once again.',
          cliYear: '2019',
          img: screenshot2,
        },
      ],
      skills: [
        {
          logo: webDesign,
          langName: 'UI/UX Design',
          percent: 90,
        },
        {
          logo: vueLogo,
          langName: 'Vue.js',
          percent: 100,
        },
        {
          logo: html5,
          langName: 'HTML 5',
          percent: 70,
        },
        {
          logo: javascript,
          langName: 'Javascript',
          percent: 60,
        },
        {
          logo: css3,
          langName: 'CSS 3',
          percent: 80,
        },
        {
          logo: php,
          langName: 'PHP',
          percent: 40,
        },
        {
          logo: nodejs,
          langName: 'Node.js',
          percent: 50,
        },
        {
          logo: java,
          langName: 'Java',
          percent: 100,
        },
      ],
    }
  },
  methods: {
    clearCursor(cursorNum) {
      // Removes the cursor for seleted vue-typed-js elements
      let cursorEl = document.querySelectorAll('.typed-cursor')
      cursorEl[cursorNum].style.display = 'none'
    },
    handleScroll() {
      // Called on Scroll, slowly removes the opacity of the Hero Section as the user scrolls
      console.log('scrolled!')
      this.opacityVal = 1 - window.scrollY / 200
      // Finally, calling the function that allows each element of the intro to appear at the right time
      this.setOffsets(this.opacityVals)

      // For the portfolio
      // The distance between the top of the page and the portfolio
      let topVal = 550
      // Initiates spacing and background changes
      this.positionEval(topVal)
    },
    setOffsets(elements) {
      // Iterates through the skill bars and other objects in the intro so that they can fade in after the hero
      for (let i = 0; i < elements.length; i++) {
        // Each of these numbers positions the value correctly based on scroll
        // As i increments, the y position at which each element is revealed increses
        let offsetVal = (window.scrollY - 50) / 200 - i / 10
        // When the point is hit, the opacity is set to 1
        if (offsetVal > 1) elements[i] = 1
        // Before that, set to zero
        else elements[i] = 0
      }
    },
    handleScrollVal(evt, el) {
      // This makes sure that the intro is visible when the user reaches that point
      if (window.scrollY > 200) el.style.display = 'flex'
      // Otherwise, it removes the element from the DOM so that it will not interfere with other elements
      else el.style.display = 'none'
      // Finally, calling the function that allows each element of the intro to appear at the right time
      this.setOffsets(this.opacityVals)
    },
    setSpacing(scrollPos) {
      // Sets the margin and padding based on where the user is, based off of 10 as this is the original value
      this.portMargin = 10 - scrollPos
      this.portPadding = 10 + scrollPos
      // This is here to prevent the padding from getting too big so that the element does not grow off of the screen
      if (this.portMargin < 0) {
        this.portMargin = 0
        this.portPadding = 20
      }
    },
    preScroll() {
      // sets default spacing
      this.portMargin = 10
      this.portPadding = 10
    },
    positionEval(topOffset) {
      if (window.scrollY > topOffset) {
        // A variable that is based on the user's position and the given offset
        let scrollVal = (window.scrollY - topOffset) / 20
        // Variable is then used to determine margin and padding (background size) of portfolio
        this.setSpacing(scrollVal)
      } else {
        // before this, makes sure that spacing is default
        this.preScroll()
      }
    },
    scrollEnlarge(evt, el) {
      // The distance between the top of the page and the portfolio
      let topVal = 550
      // Initiates spacing and background changes
      this.positionEval(topVal)
    },
  },
  mounted() {
    AOS.init()
  },
  metaInfo: {
    title: 'Rockwood Frank - Web Designer | Freelance Web Designer and Developer',
  },
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  font-family: 'Big John PRO', sans-serif;
}

main {
  max-width: 100vw;
  overflow-x: hidden;
}

section {
  min-height: 50vh;
}

#background {
  width: 100vw;
  height: 300vh;
  padding: 0;
  background: linear-gradient(45deg, #0c3263, #000f23);
}
#hero-anchor {
  position: absolute;
  top: 0;
  left: 0;
}
#intro-anchor {
  position: absolute;
  top: 60vh;
  left: 0;
}
.card-container {
  width: 60vw;
  position: fixed;
  top: 0;
  left: 0;
  margin: 10vh 10vw;
  z-index: 0;
  background-color: white;
  height: 60vh;
  padding: 10vh 10vw;
}

#hero {
  display: flex;
  height: 60vh;
  flex-direction: column;
  justify-content: space-between;
}
#hero h1 {
  font-family: 'Courier Prime', monospace;
  font-size: 5rem;
}
#hero h2 {
  font-size: 3rem;
  font-family: 'Courier Prime', monospace;
}
#hero .typed-cursor {
  font-weight: bold;
  font-size: 1.5rem;
}
#info__contact a {
  text-decoration: none;
  color: #24a05a;
}
.img-button {
  width: 4rem;
  padding-top: 0.5rem;
}
.down-button {
  align-self: center;
}
#info__contact {
  font-size: 2rem;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  color: #19884a;
}
#info__social {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
@media (max-width: 730px) {
  #hero h1 {
    font-size: 3rem;
  }
  #hero {
    padding: 5vh;
  }
  #hero h2 {
    font-size: 1.5rem;
  }
  #info__contact {
    font-size: 1rem;
  }
  .img-button {
    width: 2rem;
  }
}

#intro {
  width: 70vw;
  padding: 5vh 5vw;
  display: flex;
  min-height: 60vh;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  position: fixed;
  top: 10vh;
  left: 10vw;
}
#intro .typed-cursor {
  color: #24a05a;
  font-size: 1rem;
  font-weight: bold;
}
#montana-map {
  width: 5rem;
  height: auto;
  align-self: flex-end;
  transition: opacity 0.2s;
}
#helloworld {
  font-family: 'Courier Prime', monospace;
  font-size: 1.5rem;
  font-weight: bold;
  color: #19884a;
  padding: 1rem 0;
}
#hockey-stick {
  height: 3rem;
  width: auto;
  align-self: flex-end;
}

#portfolio {
  background-color: white;
  width: 60vw;
  padding: 10vh 10vw;
  margin: 10vh 10vw;
  position: absolute;
  top: 150vh;
  left: 0;
}

#contact {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}
#contact__header {
  font-size: xx-large;
}
#contact__container {
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  width: 100%;
}
#contact__info,
form {
  padding: 1rem;
}
#contact__info {
  text-align: right;
}
.contact-method {
  text-decoration: none;
  color: black;
  font-size: large;
  transition: color 0.2s ease;
}
.contact-method:hover {
  color: #24a05a;
}
form {
  font-size: large;
  display: grid;
}
input,
textarea {
  padding: 1rem;
  width: 15rem;
}
#submit {
  padding: 1rem;
  margin-top: 1rem;
  background-color: #24a05a;
  color: white;
  border: 3px solid #24a05a;
  font-size: large;
  font-weight: bold;
  transition: all 0.3s ease;
}
#submit:hover {
  background: none;
  color: #24a05a;
}
</style>
