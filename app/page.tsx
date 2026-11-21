'use client'

import Image from 'next/image'
import { ArrowDown, ArrowRight, ArrowUpRight, MapPin, MessageCircle, Utensils } from 'lucide-react'
import { FormEvent } from 'react'

const mapsUrl = 'https://maps.app.goo.gl/aJaWPmwUBdDtAgVaA'
const mapEmbedUrl =
  'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3159.070159045028!2d80.1747659!3d28.9611008!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39a1ad3000eb8673%3A0x2e165f66ae17ba17!2sOlive%20Cafe!5e1!3m2!1sen!2snp!4v1795242568488!5m2!1sen!2snp'

// आफ्नो WhatsApp नम्बर देशको कोड सहित राख्नुहोस्, जस्तै: 'https://wa.me/97798XXXXXXXX'
const whatsappUrl = 'https://wa.me/+9779800660701'

function openWhatsApp(message: string) {
  window.open(`${whatsappUrl}?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer')
}

export default function Page() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const name = String(data.get('name') || '').trim()
    const phone = String(data.get('phone') || '').trim()
    const type = String(data.get('type') || 'General enquiry')
    const message = String(data.get('message') || '').trim()
    openWhatsApp(
      `Hello Laxmi Cafe!\n\nName: ${name}\nPhone: ${phone}\nEnquiry: ${type}\nMessage: ${message || 'I would like to know more.'}`
    )
  }

  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Laxmi Group home">
          <span className="wordmark-mark">L</span>
          <span>
            LAXMI <i>Cafe</i>
          </span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#about">Our story</a>
          <a href="#location">Find us</a>
          <a className="nav-cta" href="#inquiry">
            Get in touch <ArrowUpRight size={15} />
          </a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">
            <span /> GOOD FOOD. GOOD COMPANY.
          </p>
          <h1>
            A place to
            <br />
            <em>come together.</em>
          </h1>
          <p className="hero-intro">
            At Laxmi Group, every gathering deserves a little something special. Come for the flavours, stay for the feeling.
          </p>
          <a className="button button-dark" href="#inquiry">
            Plan your visit <ArrowDown size={16} />
          </a>
          <div className="hero-note">
            <span className="note-line" /> A warm welcome, always.
          </div>
        </div>
        <div className="hero-image-wrap">
          <Image
            src="/laxmi-dining.png"
            alt="Warm, inviting restaurant dining room set for guests"
            fill
            priority
            sizes="(max-width: 800px) 100vw, 55vw"
            className="hero-image"
          />
          <div className="image-label">
            <span className="label-icon">
              <Utensils size={16} />
            </span>
            <span>
              <strong>Gather around</strong>
              <small>There’s always room for one more</small>
            </span>
          </div>
          <span className="image-index">01 — 03</span>
        </div>
        <div className="hero-vertical">A LITTLE MORE THAN A MEAL&nbsp; · &nbsp;MADE FOR MOMENTS</div>
      </section>

      <section className="about section-pad" id="about">
        <div className="section-kicker">
          <span>01</span>
          <span className="kicker-rule" /> A LITTLE ABOUT US
        </div>
        <div className="about-content">
          <h2>
            Hospitality, with
            <br />
            <em>heart at its centre.</em>
          </h2>
          <div className="about-text">
            <p className="lead">We believe the best moments happen around a table.</p>
            <p>
              Laxmi Group brings people together with thoughtful hospitality, inviting spaces and a genuine love for making every visit feel like yours. From a relaxed meal to a celebration worth remembering, we’re here to make it special.
            </p>
            <a className="text-link" href="#inquiry">
              Tell us what you’re planning <ArrowRight size={16} />
            </a>
          </div>
        </div>
        <div className="values-row">
          <div>
            <span className="value-no">01</span>
            <strong>Made for sharing</strong>
            <span>Good food tastes better together.</span>
          </div>
          <div>
            <span className="value-no">02</span>
            <strong>Warm by nature</strong>
            <span>Easy welcomes, thoughtful details.</span>
          </div>
          <div>
            <span className="value-no">03</span>
            <strong>Here for your moments</strong>
            <span>Everyday visits to once-in-a-lifetime.</span>
          </div>
        </div>
      </section>

      <section className="location section-pad" id="location">
        <div className="section-kicker light-kicker">
          <span>02</span>
          <span className="kicker-rule" /> COME FIND US
        </div>
        <div className="location-heading">
          <div>
            <h2>
              Your table
              <br />
              <em>is waiting.</em>
            </h2>
            <p>We’d love to welcome you. Find your way over, then let us take care of the rest.</p>
          </div>
          <a className="button button-light" href={mapsUrl} target="_blank" rel="noreferrer">
            Open in Google Maps <ArrowUpRight size={16} />
          </a>
        </div>
        <div className="map-frame">
          <iframe
            title="Olive Cafe — Laxmi Group location on Google Maps"
            src={mapEmbedUrl}
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
          <a className="map-pin" href={mapsUrl} target="_blank" rel="noreferrer">
            <MapPin size={17} /> View location <ArrowUpRight size={14} />
          </a>
        </div>
      </section>

      <section className="inquiry section-pad" id="inquiry">
        <div className="section-kicker">
          <span>03</span>
          <span className="kicker-rule" /> LET’S MAKE A PLAN
        </div>
        <div className="inquiry-layout">
          <div className="inquiry-copy">
            <h2>
              What can we
              <br />
              <em>make special?</em>
            </h2>
            <p>Tell us a little about what you have in mind and we’ll be in touch on WhatsApp.</p>
            <button
              className="chat-link"
              type="button"
              onClick={() => openWhatsApp('Hello Laxmi Group! I’d love to get in touch.')}
            >
              <span className="chat-icon">
                <MessageCircle size={19} />
              </span>
              <span>
                <strong>Rather just say hello?</strong>
                <small>Chat with us on WhatsApp</small>
              </span>
              <ArrowUpRight className="chat-arrow" size={18} />
            </button>
          </div>
          <form className="inquiry-form" onSubmit={handleSubmit}>
            <div className="form-heading">
              <span>YOUR ENQUIRY</span>
              <span>WE’RE ALL EARS</span>
            </div>
            <label>
              Your name
              <input name="name" type="text" autoComplete="name" placeholder="How should we call you?" required />
            </label>
            <div className="form-row">
              <label>
                Phone number
                <input name="phone" type="tel" autoComplete="tel" placeholder="Your best contact number" required />
              </label>
              <label>
                What’s it about?
                <select name="type" defaultValue="Table booking">
                  <option>Table booking</option>
                  <option>General enquiry</option>
                  <option>Event / order</option>
                </select>
              </label>
            </div>
            <label>
              A little more (optional)
              <textarea name="message" rows={3} placeholder="Date, guests, or anything else we should know…" />
            </label>
            <button className="button button-dark submit-button" type="submit">
              Send enquiry on WhatsApp <ArrowUpRight size={16} />
            </button>
            <p className="form-footnote">Your message opens in WhatsApp, ready for you to send.</p>
          </form>
        </div>
      </section>

      <footer className="footer">
        <a className="wordmark footer-wordmark" href="#top">
          <span className="wordmark-mark">L</span>
          <span>
            LAXMI <i>GROUP</i>
          </span>
        </a>
        <span className="copyright">© {new Date().getFullYear()} Laxmi Group. Made for good moments.</span>
        <div className="footer-links">
          <a href="#location">
            Map <ArrowUpRight size={13} />
          </a>
          <a href="#inquiry">
            Enquiry <ArrowUpRight size={13} />
          </a>
        </div>
      </footer>
    </main>
  )
}