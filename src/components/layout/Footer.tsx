import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Zap, Mail, Phone, MapPin } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerSections = [
    {
      title: 'Produit',
      links: [
        { name: 'Fonctionnalités', href: '/features' },
        { name: 'Devenir hôte', href: '/become-charger' },
      ],
    },
    {
      title: 'Entreprise',
      links: [
        { name: 'À propos', href: '/about' },
      ],
    },
    {
      title: 'Support',
      links: [
        { name: 'Contact', href: '/contact' },
      ],
    },
  ]

  const contactInfo = [
    { icon: Mail, text: 'contact@revolt.com' },
    { icon: Phone, text: '+33 1 23 45 67 89' },
    { icon: MapPin, text: 'Paris, France' },
  ]

  return (
    <footer className="bg-secondary-50 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Brand Section */}
            <div className="md:col-span-2 lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <Link to="/" className="flex items-center space-x-2 mb-4">
                  <div className="w-8 h-8 bg-primary-500 rounded-lg flex items-center justify-center">
                    <Zap className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-xl font-bold text-foreground">ReVOLT</span>
                </Link>
                <p className="text-base sm:text-lg text-foreground mb-4">Revolt : La révoltion commence ici</p>

                <div className="flex items-center gap-3 mb-6">
                  <a
                    href="https://apps.apple.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Download on the App Store"
                    className="inline-block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 rounded"
                  >
                    <img
                      src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83"
                      alt="Download on the App Store"
                      className="h-10 w-auto"
                      loading="lazy"
                    />
                  </a>
                  <a
                    href="https://play.google.com/store/apps"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Get it on Google Play"
                    className="inline-block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 rounded"
                  >
                    <img
                      src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                      alt="Get it on Google Play"
                      className="h-[52px] w-auto"
                      loading="lazy"
                    />
                  </a>
                </div>
                
                
                {/* Contact Info */}
                <div className="space-y-2">
                  {contactInfo.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                      className="flex items-center space-x-2 text-sm text-muted-600"
                    >
                      <item.icon className="w-4 h-4" />
                      <span>{item.text}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Footer Links */}
            {footerSections.map((section, sectionIndex) => (
              <div key={section.title}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 + sectionIndex * 0.1 }}
                >
                  <h3 className="text-sm font-semibold text-foreground mb-4">
                    {section.title}
                  </h3>
                  <ul className="space-y-3">
                    {section.links.map((link, linkIndex) => (
                      <motion.li
                        key={link.name}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ 
                          duration: 0.3, 
                          delay: 0.2 + sectionIndex * 0.1 + linkIndex * 0.05 
                        }}
                      >
                        <Link
                          to={link.href}
                          className="text-sm text-muted-600 hover:text-primary-500 transition-colors"
                        >
                          {link.name}
                        </Link>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-6 border-t border-border">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-sm text-muted-600"
            >
              © {currentYear} ReVOLT. Tous droits réservés.
            </motion.p>

            {/* Social links removed until accounts are available */}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
