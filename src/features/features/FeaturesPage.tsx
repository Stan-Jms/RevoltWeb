import React from 'react'
import { motion } from 'framer-motion'
import { 
  Zap, 
  MapPin, 
  Clock, 
  Shield, 
  Users, 
  Star, 
  Smartphone, 
  CreditCard, 
  BarChart3,
  Globe,
  Battery,
  Car
} from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { 
  staggerContainerVariants, 
  staggerItemVariants,
  scrollRevealVariants 
} from '@/components/motion/variants'
import { cn } from '@/lib/cn'

const FeaturesPage = () => {
  const mainFeatures = [
    {
      icon: Zap,
      title: 'Recharge Rapide',
      description: 'Trouvez et réservez des bornes de recharge rapide près de chez vous en quelques clics.',
      color: 'text-primary-500',
      bgColor: 'bg-primary-50',
      details: [
        'Recherche en temps réel',
        'Filtres avancés par type de chargeur',
        'Réservation instantanée',
        'Notifications de disponibilité'
      ]
    },
    {
      icon: MapPin,
      title: 'Géolocalisation Intelligente',
      description: 'Localisation précise des bornes disponibles avec informations en temps réel.',
      color: 'text-accent-500',
      bgColor: 'bg-accent-50',
      details: [
        'Cartes interactives',
        'Navigation GPS intégrée',
        'Statut en temps réel',
        'Historique des trajets'
      ]
    },
    {
      icon: Clock,
      title: 'Réservation Avancée',
      description: 'Réservez votre créneau de recharge à l\'avance pour éviter les attentes.',
      color: 'text-success-500',
      bgColor: 'bg-success-50',
      details: [
        'Planification flexible',
        'Rappels automatiques',
        'Annulation facile',
        'Gestion des créneaux'
      ]
    },
    {
      icon: Shield,
      title: 'Sécurité & Confiance',
      description: 'Paiements sécurisés et système de confiance pour une expérience fiable.',
      color: 'text-warning-500',
      bgColor: 'bg-warning-50',
      details: [
        'Paiements cryptés',
        'Système de notation',
        'Support 24/7',
        'Garantie de service'
      ]
    },
    {
      icon: Users,
      title: 'Communauté Active',
      description: 'Rejoignez une communauté de conducteurs et hôtes engagés.',
      color: 'text-secondary-500',
      bgColor: 'bg-secondary-50',
      details: [
        'Forum communautaire',
        'Partage d\'expériences',
        'Programme de parrainage',
        'Événements locaux'
      ]
    },
    {
      icon: Star,
      title: 'Éco-responsable',
      description: 'Contribuez à la transition énergétique et à un avenir plus durable.',
      color: 'text-danger-500',
      bgColor: 'bg-danger-50',
      details: [
        'Impact carbone réduit',
        'Énergie verte',
        'Statistiques environnementales',
        'Certifications écologiques'
      ]
    },
  ]

  const additionalFeatures = [
    {
      icon: Smartphone,
      title: 'Application Mobile',
      description: 'Interface intuitive et responsive pour tous vos appareils.'
    },
    {
      icon: CreditCard,
      title: 'Paiements Flexibles',
      description: 'Plusieurs méthodes de paiement et facturation simplifiée.'
    },
    {
      icon: BarChart3,
      title: 'Analytics Avancés',
      description: 'Suivez vos consommations et optimisez vos trajets.'
    },
    {
      icon: Globe,
      title: 'Multi-langues',
      description: 'Disponible en français, anglais et autres langues européennes.'
    },
    {
      icon: Battery,
      title: 'Gestion Batterie',
      description: 'Optimisation intelligente de la charge selon votre véhicule.'
    },
    {
      icon: Car,
      title: 'Compatibilité Véhicules',
      description: 'Support de tous les types de véhicules électriques.'
    },
  ]

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary-50 to-primary-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainerVariants}
            initial="initial"
            animate="animate"
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div variants={staggerItemVariants} className="mb-6">
              <Badge variant="secondary" className="mb-4">
                🚀 Fonctionnalités
              </Badge>
            </motion.div>

            <motion.h1 
              variants={staggerItemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance"
            >
              Tout ce dont vous avez besoin pour{' '}
              <span className="text-gradient">recharger</span>
            </motion.h1>

            <motion.p 
              variants={staggerItemVariants}
              className="text-xl text-muted-600 mb-8 max-w-2xl mx-auto leading-relaxed"
            >
              Une plateforme complète qui simplifie la gestion des bornes de recharge 
              et améliore l'expérience des conducteurs de véhicules électriques.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Main Features Section */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainerVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          >
            {mainFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                variants={staggerItemVariants}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex items-start space-x-4">
                      <div className={cn("w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0", feature.bgColor)}>
                        <feature.icon className={cn("w-6 h-6", feature.color)} />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-xl mb-2">{feature.title}</CardTitle>
                        <CardDescription className="text-base mb-4">
                          {feature.description}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {feature.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-center text-sm text-muted-600">
                          <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-3 flex-shrink-0"></div>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Additional Features Section */}
      <section className="section-padding bg-muted-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainerVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.div variants={staggerItemVariants}>
              <Badge variant="outline" className="mb-4">
                Fonctionnalités supplémentaires
              </Badge>
            </motion.div>
            <motion.h2 
              variants={staggerItemVariants}
              className="text-3xl sm:text-4xl font-bold text-foreground mb-4"
            >
              Une expérience{' '}
              <span className="text-gradient">complète</span>
            </motion.h2>
            <motion.p 
              variants={staggerItemVariants}
              className="text-xl text-muted-600 max-w-2xl mx-auto"
            >
              Des outils avancés pour optimiser votre expérience de recharge électrique.
            </motion.p>
          </motion.div>

          <motion.div
            variants={staggerContainerVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {additionalFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                variants={staggerItemVariants}
                whileHover={{ y: -3 }}
                transition={{ duration: 0.2 }}
              >
                <Card className="h-full hover:shadow-md transition-shadow duration-300">
                  <CardHeader className="pb-4">
                    <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center mb-3">
                      <feature.icon className="w-5 h-5 text-primary-600" />
                    </div>
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-sm">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary-500 to-primary-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            variants={staggerContainerVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <motion.h2 
              variants={staggerItemVariants}
              className="text-3xl sm:text-4xl font-bold text-white mb-4"
            >
              Prêt à découvrir toutes ces fonctionnalités ?
            </motion.h2>
            <motion.p 
              variants={staggerItemVariants}
              className="text-xl text-primary-100 mb-8"
            >
              Rejoignez des milliers d'utilisateurs qui font déjà confiance à ReVOLT 
              pour leur mobilité électrique.
            </motion.p>
            <motion.div 
              variants={staggerItemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <motion.a
                href="/pricing"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center px-8 py-3 bg-white text-primary-600 font-semibold rounded-lg hover:bg-primary-50 transition-colors"
              >
                Voir les tarifs
              </motion.a>
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-primary-600 transition-colors"
              >
                Nous contacter
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default FeaturesPage
