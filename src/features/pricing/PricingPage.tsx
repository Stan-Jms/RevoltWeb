import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Check, 
  X, 
  Zap, 
  Star, 
  Crown,
  ArrowRight,
  Shield,
  Users,
  Clock,
  MapPin
} from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { 
  staggerContainerVariants, 
  staggerItemVariants,
  scrollRevealVariants 
} from '@/components/motion/variants'
import { cn } from '@/lib/cn'

const PricingPage = () => {
  const [isAnnual, setIsAnnual] = useState(false)

  const pricingPlans = [
    {
      name: 'Starter',
      description: 'Parfait pour débuter avec la mobilité électrique',
      monthlyPrice: 9,
      annualPrice: 90,
      icon: Zap,
      color: 'text-muted-600',
      bgColor: 'bg-muted-50',
      borderColor: 'border-muted-200',
      popular: false,
      features: [
        'Jusqu\'à 5 recharges par mois',
        'Recherche de bornes de base',
        'Support par email',
        'Application mobile',
        'Historique des recharges'
      ],
      limitations: [
        'Pas de réservation avancée',
        'Pas de support prioritaire',
        'Pas d\'analytics détaillés'
      ]
    },
    {
      name: 'Pro',
      description: 'Pour les conducteurs réguliers qui veulent plus de flexibilité',
      monthlyPrice: 29,
      annualPrice: 290,
      icon: Star,
      color: 'text-primary-600',
      bgColor: 'bg-primary-50',
      borderColor: 'border-primary-200',
      popular: true,
      features: [
        'Recharges illimitées',
        'Réservation avancée',
        'Support prioritaire 24/7',
        'Analytics détaillés',
        'Notifications personnalisées',
        'Intégration calendrier',
        'Statistiques de consommation',
        'Programme de fidélité'
      ],
      limitations: []
    },
    {
      name: 'Enterprise',
      description: 'Solution complète pour les flottes et entreprises',
      monthlyPrice: 99,
      annualPrice: 990,
      icon: Crown,
      color: 'text-warning-600',
      bgColor: 'bg-warning-50',
      borderColor: 'border-warning-200',
      popular: false,
      features: [
        'Tout de Pro inclus',
        'Gestion de flotte',
        'API personnalisée',
        'Support dédié',
        'Tableau de bord avancé',
        'Rapports personnalisés',
        'Intégrations tierces',
        'Formation équipe',
        'SLA garanti',
        'Facturation centralisée'
      ],
      limitations: []
    }
  ]

  const faqItems = [
    {
      question: 'Puis-je changer de plan à tout moment ?',
      answer: 'Oui, vous pouvez upgrader ou downgrader votre plan à tout moment. Les changements prennent effet immédiatement et nous ajustons la facturation en conséquence.'
    },
    {
      question: 'Que se passe-t-il si je dépasse ma limite de recharges ?',
      answer: 'Pour le plan Starter, vous recevrez une notification quand vous approchez de votre limite. Vous pouvez upgrader vers Pro pour des recharges illimitées.'
    },
    {
      question: 'Les prix incluent-ils les frais de recharge ?',
      answer: 'Non, nos abonnements couvrent uniquement l\'accès à la plateforme et ses fonctionnalités. Les frais de recharge sont facturés séparément par les opérateurs de bornes.'
    },
    {
      question: 'Y a-t-il un engagement minimum ?',
      answer: 'Non, tous nos plans sont sans engagement. Vous pouvez annuler à tout moment sans frais supplémentaires.'
    },
    {
      question: 'Proposez-vous des remises pour les étudiants ?',
      answer: 'Oui, nous offrons 50% de réduction sur le plan Pro pour les étudiants avec une carte d\'étudiant valide.'
    },
    {
      question: 'Comment fonctionne la facturation annuelle ?',
      answer: 'Avec la facturation annuelle, vous économisez 2 mois par rapport au paiement mensuel. Le paiement est effectué une fois par an.'
    }
  ]

  const benefits = [
    {
      icon: Shield,
      title: 'Sécurisé',
      description: 'Paiements sécurisés et données protégées'
    },
    {
      icon: Users,
      title: 'Communauté',
      description: 'Rejoignez 50,000+ utilisateurs satisfaits'
    },
    {
      icon: Clock,
      title: 'Support 24/7',
      description: 'Assistance disponible à tout moment'
    },
    {
      icon: MapPin,
      title: 'Couverture',
      description: '10,000+ bornes dans toute la France'
    }
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
                💰 Tarifs
              </Badge>
            </motion.div>

            <motion.h1 
              variants={staggerItemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance"
            >
              Choisissez le plan qui vous{' '}
              <span className="text-gradient">convient</span>
            </motion.h1>

            <motion.p 
              variants={staggerItemVariants}
              className="text-xl text-muted-600 mb-8 max-w-2xl mx-auto leading-relaxed"
            >
              Des tarifs transparents et flexibles pour tous vos besoins de mobilité électrique. 
              Changez de plan à tout moment, sans engagement.
            </motion.p>

            {/* Billing Toggle */}
            <motion.div 
              variants={staggerItemVariants}
              className="flex items-center justify-center space-x-4 mb-8"
            >
              <span className={cn("text-sm font-medium", !isAnnual ? "text-foreground" : "text-muted-500")}>
                Mensuel
              </span>
              <button
                onClick={() => setIsAnnual(!isAnnual)}
                className={cn(
                  "relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2",
                  isAnnual ? "bg-primary-600" : "bg-muted-200"
                )}
              >
                <span
                  className={cn(
                    "inline-block h-4 w-4 transform rounded-full bg-white transition-transform",
                    isAnnual ? "translate-x-6" : "translate-x-1"
                  )}
                />
              </button>
              <span className={cn("text-sm font-medium", isAnnual ? "text-foreground" : "text-muted-500")}>
                Annuel
              </span>
              {isAnnual && (
                <Badge variant="success" className="ml-2">
                  Économisez 2 mois
                </Badge>
              )}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainerVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto"
          >
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                variants={staggerItemVariants}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
                className="relative"
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                    <Badge variant="default" className="px-4 py-1">
                      <Star className="w-3 h-3 mr-1" />
                      Le plus populaire
                    </Badge>
                  </div>
                )}
                
                <Card className={cn(
                  "h-full relative overflow-hidden",
                  plan.popular 
                    ? "border-2 border-primary-500 shadow-xl scale-105" 
                    : "border border-border hover:shadow-lg",
                  "transition-all duration-300"
                )}>
                  <CardHeader className={cn("text-center pb-4", plan.bgColor)}>
                    <div className={cn("w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4", plan.bgColor)}>
                      <plan.icon className={cn("w-6 h-6", plan.color)} />
                    </div>
                    <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                    <CardDescription className="text-base">
                      {plan.description}
                    </CardDescription>
                    <div className="mt-4">
                      <div className="flex items-baseline justify-center">
                        <span className="text-4xl font-bold text-foreground">
                          {isAnnual ? plan.annualPrice : plan.monthlyPrice}€
                        </span>
                        <span className="text-muted-600 ml-1">
                          /{isAnnual ? 'an' : 'mois'}
                        </span>
                      </div>
                      {isAnnual && (
                        <p className="text-sm text-muted-500 mt-1">
                          Soit {Math.round(plan.annualPrice / 12)}€/mois
                        </p>
                      )}
                    </div>
                  </CardHeader>
                  
                  <CardContent className="pt-6">
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-foreground mb-3">Inclus :</h4>
                        <ul className="space-y-2">
                          {plan.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-start text-sm">
                              <Check className="w-4 h-4 text-success-500 mr-3 mt-0.5 flex-shrink-0" />
                              <span className="text-muted-700">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      {plan.limitations.length > 0 && (
                        <div>
                          <h4 className="font-semibold text-foreground mb-3">Non inclus :</h4>
                          <ul className="space-y-2">
                            {plan.limitations.map((limitation, limitationIndex) => (
                              <li key={limitationIndex} className="flex items-start text-sm">
                                <X className="w-4 h-4 text-muted-400 mr-3 mt-0.5 flex-shrink-0" />
                                <span className="text-muted-500">{limitation}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                    
                    <Button 
                      className={cn(
                        "w-full mt-6",
                        plan.popular 
                          ? "bg-primary-600 hover:bg-primary-700" 
                          : "bg-muted-900 hover:bg-muted-800"
                      )}
                      size="lg"
                    >
                      {plan.name === 'Enterprise' ? 'Nous contacter' : 'Commencer'}
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
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
                Pourquoi choisir ReVOLT ?
              </Badge>
            </motion.div>
            <motion.h2 
              variants={staggerItemVariants}
              className="text-3xl sm:text-4xl font-bold text-foreground mb-4"
            >
              Des avantages{' '}
              <span className="text-gradient">exclusifs</span>
            </motion.h2>
          </motion.div>

          <motion.div
            variants={staggerContainerVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                variants={staggerItemVariants}
                className="text-center"
              >
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {benefit.title}
                </h3>
                <p className="text-muted-600 text-sm">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-background">
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
                Questions fréquentes
              </Badge>
            </motion.div>
            <motion.h2 
              variants={staggerItemVariants}
              className="text-3xl sm:text-4xl font-bold text-foreground mb-4"
            >
              Tout ce que vous devez{' '}
              <span className="text-gradient">savoir</span>
            </motion.h2>
            <motion.p 
              variants={staggerItemVariants}
              className="text-xl text-muted-600 max-w-2xl mx-auto"
            >
              Réponses aux questions les plus courantes sur nos tarifs et services.
            </motion.p>
          </motion.div>

          <motion.div
            variants={staggerContainerVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            {faqItems.map((item, index) => (
              <motion.div
                key={index}
                variants={staggerItemVariants}
                className="mb-6"
              >
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">{item.question}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-600">{item.answer}</p>
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
              Prêt à commencer votre aventure électrique ?
            </motion.h2>
            <motion.p 
              variants={staggerItemVariants}
              className="text-xl text-primary-100 mb-8"
            >
              Rejoignez des milliers d'utilisateurs qui font confiance à ReVOLT 
              pour leur mobilité électrique. Essai gratuit de 14 jours.
            </motion.p>
            <motion.div 
              variants={staggerItemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button size="lg" variant="secondary">
                Commencer l'essai gratuit
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary-600">
                Nous contacter
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default PricingPage
