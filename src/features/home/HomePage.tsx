import { motion } from 'framer-motion'
import { useMemo, useState } from 'react'
import { ArrowRight, Zap, MapPin, Clock, Shield, Users, Star } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card'
import { Input } from '@/components/ui/Input'
import { Badge } from '@/components/ui/Badge'
import { AnimatedNumber } from '@/components/ui/AnimatedNumber'
import { staggerContainerVariants, staggerItemVariants } from '@/components/motion/variants'
import { cn } from '@/lib/cn'

const HomePage = () => {
  const features = [
    {
      icon: Zap,
      title: 'Recharge Rapide',
      description: 'Trouvez et réservez des bornes de recharge rapide près de chez vous en quelques clics.',
      color: 'text-primary-500',
      bgColor: 'bg-primary-50',
    },
    {
      icon: MapPin,
      title: 'Géolocalisation',
      description: 'Localisation précise des bornes disponibles avec informations en temps réel.',
      color: 'text-accent-500',
      bgColor: 'bg-accent-50',
    },
    {
      icon: Clock,
      title: 'Réservation',
      description: 'Réservez votre créneau de recharge à l\'avance pour éviter les attentes.',
      color: 'text-success-500',
      bgColor: 'bg-success-50',
    },
    {
      icon: Shield,
      title: 'Sécurisé',
      description: 'Paiements sécurisés et système de confiance pour une expérience fiable.',
      color: 'text-warning-500',
      bgColor: 'bg-warning-50',
    },
    {
      icon: Users,
      title: 'Communauté',
      description: 'Rejoignez une communauté de conducteurs et hôtes engagés.',
      color: 'text-secondary-500',
      bgColor: 'bg-secondary-50',
    },
    {
      icon: Star,
      title: 'Éco-responsable',
      description: 'Contribuez à la transition énergétique et à un avenir plus durable.',
      color: 'text-danger-500',
      bgColor: 'bg-danger-50',
    },
  ]

  const stats = [
    { number: '10,000+', label: 'Bornes disponibles' },
    { number: '50,000+', label: 'Utilisateurs actifs' },
    { number: '95%', label: 'Satisfaction client' },
    { number: '24/7', label: 'Support disponible' },
  ]

  // Revenue simulator state
  const [stations, setStations] = useState<number>(1)
  const [sessionsPerDay, setSessionsPerDay] = useState<number>(3)
  const [stationType, setStationType] = useState<'normal' | 'supercharger'>('normal')
  const [hoursPerSession, setHoursPerSession] = useState<number>(2)
  const [daysPerMonth, setDaysPerMonth] = useState<number>(30)
  
  const { grossMonthly, netMonthly, netYearly, perSessionFinalPrice, perSessionServiceFee } = useMemo(() => {
    const hourlyRate = stationType === 'normal' ? 2.1 : 6.6
    const finalPricePerSession = ((hoursPerSession * hourlyRate) + 1) * 1.3
    const sessionsPerMonth = stations * sessionsPerDay * daysPerMonth
    const gross = sessionsPerMonth * finalPricePerSession
    // ReVOLT service fee: 1€ + 12% per charging
    const serviceFeePerSession = 1 + 0.12 * finalPricePerSession
    const totalServiceFees = sessionsPerMonth * serviceFeePerSession
    const net = Math.max(gross - totalServiceFees, 0)
    return {
      grossMonthly: gross,
      netMonthly: net,
      netYearly: net * 12,
      perSessionFinalPrice: finalPricePerSession,
      perSessionServiceFee: serviceFeePerSession,
    }
  }, [stations, sessionsPerDay, hoursPerSession, daysPerMonth, stationType])

  const fmt = (n: number) =>
    new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(n)
  const fmt2 = (n: number) =>
    new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR', maximumFractionDigits: 2 }).format(n)

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-400 via-primary-500 to-primary-600">
          <div className="absolute inset-0 bg-pattern opacity-20"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/20"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 items-center gap-10 max-w-6xl mx-auto">
            <motion.div
              variants={staggerContainerVariants}
              initial="initial"
              animate="animate"
              className="text-center lg:text-left"
            >
              <motion.div variants={staggerItemVariants} className="mb-6">
                <Badge variant="secondary" className="mb-4">
                  🚗 Nouvelle mobilité électrique
                </Badge>
              </motion.div>

              <motion.h1 
                variants={staggerItemVariants}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 text-balance"
              >
                Bienvenue, ensemble construisons la{' '}
                <span className="text-primary-100">mobilité électrique</span>{' '}
                de demain
              </motion.h1>

              <motion.p 
                variants={staggerItemVariants}
                className="text-xl text-primary-100 mb-8 max-w-2xl lg:max-w-none mx-auto lg:mx-0 leading-relaxed"
              >
                ReVOLT connecte les conducteurs et les hôtes de bornes de recharge 
                pour une expérience fluide, rapide et éco-responsable.
              </motion.p>

              <motion.div 
                variants={staggerItemVariants}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center"
              >
                <Button size="lg" className="bg-white text-primary-600 hover:bg-primary-50">
                  Commencer maintenant
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <div className="flex items-center gap-3">
                  <a
                    href="https://apps.apple.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Download on the App Store"
                    className="inline-block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80 rounded"
                  >
                    <img
                      src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83"
                      alt="Download on the App Store"
                      className="h-12 w-auto"
                      loading="lazy"
                    />
                  </a>
                  <a
                    href="https://play.google.com/store/apps"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Get it on Google Play"
                    className="inline-block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80 rounded"
                  >
                    <img
                      src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                      alt="Get it on Google Play"
                      className="h-[63px] w-auto"
                      loading="lazy"
                    />
                  </a>
                </div>
              </motion.div>

              {/* Mobile image */}
              <motion.div variants={staggerItemVariants} className="mt-10 lg:hidden">
                <img
                  src="/charging-station.png"
                  alt="Borne de recharge ReVOLT"
                  className="w-full max-w-sm mx-auto rounded-2xl shadow-xl"
                  loading="eager"
                />
              </motion.div>
            </motion.div>

            {/* Desktop image */}
            <motion.div
              variants={staggerItemVariants}
              initial="initial"
              animate="animate"
              className="hidden lg:flex justify-center"
            >
              <img
                src="/charging-station.png"
                alt="Borne de recharge ReVOLT"
                className="w-full max-w-md rounded-2xl shadow-2xl"
                loading="eager"
              />
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-white/60 rounded-full mt-2"
            />
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
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
                Fonctionnalités
              </Badge>
            </motion.div>
            <motion.h2 
              variants={staggerItemVariants}
              className="text-3xl sm:text-4xl font-bold text-foreground mb-4"
            >
              Tout ce dont vous avez besoin pour{' '}
              <span className="text-gradient">recharger</span>
            </motion.h2>
            <motion.p 
              variants={staggerItemVariants}
              className="text-xl text-muted-600 max-w-2xl mx-auto"
            >
              Une plateforme complète qui simplifie la gestion des bornes de recharge 
              et améliore l'expérience des conducteurs.
            </motion.p>
          </motion.div>

          <motion.div
            variants={staggerContainerVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                variants={staggerItemVariants}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className={cn("w-12 h-12 rounded-lg flex items-center justify-center mb-4", feature.bgColor)}>
                      <feature.icon className={cn("w-6 h-6", feature.color)} />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Revenue Simulator */}
      <section className="section-padding bg-muted-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainerVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="max-w-5xl mx-auto"
          >
            <motion.div variants={staggerItemVariants} className="text-center mb-10">
              <Badge variant="outline" className="mb-4">Simulation</Badge>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">Estimez vos revenus</h2>
              <p className="text-muted-600">Choisissez le nombre de bornes et vos hypothèses pour voir un revenu mensuel et annuel estimé.</p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <motion.div variants={staggerItemVariants} className="lg:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Paramètres</CardTitle>
                    <CardDescription>Modifiez les valeurs pour affiner l'estimation *</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-5">
  {/* grille 2 colonnes : 200px pour les libellés, reste pour les champs */}
  <div className="grid gap-4 md:grid-cols-[200px_1fr] items-center">
    {/* Type de borne */}
    <label className="text-sm font-medium">Type de borne</label>
    <div className="flex flex-wrap gap-2">
      <Button
        type="button"
        variant={stationType === 'normal' ? 'default' : 'outline'}
        className="h-10"
        onClick={() => setStationType('normal')}
      >
        Standard (~2,10€ / h)
      </Button>
      <Button
        type="button"
        variant={stationType === 'supercharger' ? 'default' : 'outline'}
        className="h-10"
        onClick={() => setStationType('supercharger')}
      >
        Superchargeur (~6,60€ / h)
      </Button>
    </div>
                      <div>
                        <label className="block text-sm font-medium mb-1">Nombre de bornes</label>
                        <div className="flex items-center gap-3">
                          <input
                            type="range"
                            min={1}
                            max={50}
                            step={1}
                            value={stations}
                            onChange={(e) => setStations(Number(e.target.value))}
                            className="w-full accent-primary-600"
                            aria-label="Nombre de bornes"
                          />
                          <Input
                            type="number"
                            min={1}
                            max={50}
                            value={stations}
                            onChange={(e) => setStations(Math.min(50, Math.max(1, Number(e.target.value || 0))))}
                            className="w-20"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-1">Sessions par jour / borne</label>
                        <div className="flex items-center gap-3">
                          <input
                            type="range"
                            min={1}
                            max={20}
                            step={1}
                            value={sessionsPerDay}
                            onChange={(e) => setSessionsPerDay(Number(e.target.value))}
                            className="w-full accent-primary-600"
                            aria-label="Sessions par jour par borne"
                          />
                          <Input
                            type="number"
                            min={1}
                            max={20}
                            value={sessionsPerDay}
                            onChange={(e) => setSessionsPerDay(Math.min(20, Math.max(1, Number(e.target.value || 0))))}
                            className="w-20"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-1">Durée moyenne d'une session (heures)</label>
                        <div className="flex items-center gap-3">
                          <input
                            type="range"
                            min={0.25}
                            max={6}
                            step={0.25}
                            value={hoursPerSession}
                            onChange={(e) => setHoursPerSession(Number(e.target.value))}
                            className="w-full accent-primary-600"
                            aria-label="Durée moyenne par session en heures"
                          />
                          <Input
                            type="number"
                            min={0.25}
                            max={6}
                            step={0.25}
                            value={hoursPerSession}
                            onChange={(e) => setHoursPerSession(Math.min(6, Math.max(0.25, Number(e.target.value || 0))))}
                            className="w-24"
                          />
                        </div>
                      </div>

                      

                      <div className="sm:col-span-2">
                        <p className="text-sm text-muted-600">
                          <br /><i>
                          * ReVOLT prélève <span className="font-medium">1€ + 12%</span> par recharge en frais de service.</i>
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={staggerItemVariants}>
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle>Résultats</CardTitle>
                    <CardDescription>Mise à jour en temps réel selon vos paramètres.</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-muted-600">Prix final estimé / session</span>
                      <span className="font-medium">{fmt2(perSessionFinalPrice)}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-600">Frais service ReVOLT / session</span>
                      <span className="font-medium">{fmt2(perSessionServiceFee)}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-600">Revenu mensuel brut</span>
                      <span className="text-lg font-semibold">{fmt(grossMonthly)}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-600">Revenu mensuel net</span>
                      <span className="text-2xl font-bold text-primary-600">{fmt(netMonthly)}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-600">Revenu annuel net</span>
                      <span className="text-lg font-semibold">{fmt(netYearly)}</span>
                    </div>

                    <Button className="w-full mt-2" size="lg">
                      Obtenir une projection détaillée
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-primary-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainerVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                variants={staggerItemVariants}
                className="text-center"
              >
                <div className="text-3xl sm:text-4xl font-bold text-primary-600 mb-2">
                  {stat.label === 'Bornes disponibles' && (
                    <AnimatedNumber to={10000} suffix="+" />
                  )}
                  {stat.label === 'Utilisateurs actifs' && (
                    <AnimatedNumber to={50000} suffix="+" />
                  )}
                  {stat.label === 'Satisfaction client' && (
                    <AnimatedNumber to={95} suffix="%" />
                  )}
                  {stat.label === 'Support disponible' && (
                    <AnimatedNumber to={24} suffix="/7" />
                  )}
                </div>
                <div className="text-muted-600 font-medium">
                  {stat.label}
                </div>
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
              Prêt à rejoindre la révolution électrique ?
            </motion.h2>
            <motion.p 
              variants={staggerItemVariants}
              className="text-xl text-primary-100 mb-8"
            >
              Inscrivez-vous dès aujourd'hui et découvrez comment ReVOLT peut 
              transformer votre expérience de la mobilité électrique.
            </motion.p>
            <motion.div 
              variants={staggerItemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button size="lg" variant="secondary">
                S'inscrire gratuitement
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="secondary">
                Voir les tarifs
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default HomePage
