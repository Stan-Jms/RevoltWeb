import React from 'react'
import { motion } from 'framer-motion'
import { 
  Heart, 
  Target, 
  Users, 
  Award, 
  Calendar,
  MapPin,
  Zap,
  Leaf,
  Globe,
  TrendingUp,
  User,
  Mail,
  Linkedin,
  Twitter
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

const AboutPage = () => {
  const missionValues = [
    {
      icon: Heart,
      title: 'Passion',
      description: 'Nous sommes passionnés par la mobilité durable et l\'innovation technologique.',
      color: 'text-danger-500',
      bgColor: 'bg-danger-50'
    },
    {
      icon: Target,
      title: 'Mission',
      description: 'Faciliter la transition vers la mobilité électrique pour tous.',
      color: 'text-primary-500',
      bgColor: 'bg-primary-50'
    },
    {
      icon: Users,
      title: 'Communauté',
      description: 'Construire une communauté engagée autour de la mobilité verte.',
      color: 'text-success-500',
      bgColor: 'bg-success-50'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Offrir une expérience utilisateur exceptionnelle et des services de qualité.',
      color: 'text-warning-500',
      bgColor: 'bg-warning-50'
    }
  ]

  const timeline = [
    {
      year: '2020',
      title: 'Fondation de ReVOLT',
      description: 'Création de l\'entreprise avec la vision de révolutionner la mobilité électrique.',
      icon: Zap
    },
    {
      year: '2021',
      title: 'Première version de l\'app',
      description: 'Lancement de notre application mobile avec 1,000 bornes de recharge.',
      icon: Globe
    },
    {
      year: '2022',
      title: 'Expansion nationale',
      description: 'Couverture de toute la France avec 5,000 bornes et 10,000 utilisateurs.',
      icon: MapPin
    },
    {
      year: '2023',
      title: 'Innovation technologique',
      description: 'Intégration de l\'IA pour l\'optimisation des trajets et la prédiction de disponibilité.',
      icon: TrendingUp
    },
    {
      year: '2024',
      title: 'Leader du marché',
      description: 'Plus de 50,000 utilisateurs actifs et 10,000 bornes de recharge partenaires.',
      icon: Award
    }
  ]

  const teamMembers = [
    {
      name: 'Marie Dubois',
      role: 'CEO & Co-fondatrice',
      bio: 'Ingénieure en énergie avec 15 ans d\'expérience dans les technologies vertes.',
      image: '/api/placeholder/300/300',
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'marie@revolt.com'
      }
    },
    {
      name: 'Thomas Martin',
      role: 'CTO & Co-fondateur',
      bio: 'Expert en développement mobile et architecture cloud, ancien de Google.',
      image: '/api/placeholder/300/300',
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'thomas@revolt.com'
      }
    },
    {
      name: 'Sophie Chen',
      role: 'Directrice Produit',
      bio: 'Spécialiste UX/UI avec une passion pour l\'innovation dans la mobilité.',
      image: '/api/placeholder/300/300',
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'sophie@revolt.com'
      }
    },
    {
      name: 'Alexandre Rousseau',
      role: 'Directeur Commercial',
      bio: 'Expert en développement B2B et partenariats stratégiques.',
      image: '/api/placeholder/300/300',
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'alexandre@revolt.com'
      }
    }
  ]

  const stats = [
    { number: '50,000+', label: 'Utilisateurs actifs' },
    { number: '10,000+', label: 'Bornes de recharge' },
    { number: '95%', label: 'Satisfaction client' },
    { number: '24/7', label: 'Support disponible' },
    { number: '15', label: 'Pays couverts' },
    { number: '2M+', label: 'Recharges effectuées' }
  ]

  const achievements = [
    {
      title: 'Prix de l\'Innovation 2023',
      description: 'Reconnu par le ministère de la Transition écologique',
      icon: Award
    },
    {
      title: 'Certification ISO 14001',
      description: 'Engagement environnemental certifié',
      icon: Leaf
    },
    {
      title: 'Partenariat avec Renault',
      description: 'Intégration native dans les véhicules électriques',
      icon: Zap
    },
    {
      title: 'Top 10 Startups',
      description: 'Classé dans le top 10 des startups françaises 2024',
      icon: TrendingUp
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
                🚀 À propos
              </Badge>
            </motion.div>

            <motion.h1 
              variants={staggerItemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance"
            >
              Révolutionnons ensemble la{' '}
              <span className="text-gradient">mobilité électrique</span>
            </motion.h1>

            <motion.p 
              variants={staggerItemVariants}
              className="text-xl text-muted-600 mb-8 max-w-2xl mx-auto leading-relaxed"
            >
              Depuis 2020, ReVOLT s'engage à faciliter la transition vers la mobilité électrique 
              en connectant conducteurs et hôtes de bornes de recharge.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Values Section */}
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
                Notre mission
              </Badge>
            </motion.div>
            <motion.h2 
              variants={staggerItemVariants}
              className="text-3xl sm:text-4xl font-bold text-foreground mb-4"
            >
              Des valeurs qui nous{' '}
              <span className="text-gradient">animent</span>
            </motion.h2>
            <motion.p 
              variants={staggerItemVariants}
              className="text-xl text-muted-600 max-w-2xl mx-auto"
            >
              Notre engagement envers la mobilité durable et l'innovation technologique 
              guide chacune de nos décisions.
            </motion.p>
          </motion.div>

          <motion.div
            variants={staggerContainerVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {missionValues.map((value, index) => (
              <motion.div
                key={value.title}
                variants={staggerItemVariants}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <Card className="h-full text-center hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className={cn("w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4", value.bgColor)}>
                      <value.icon className={cn("w-8 h-8", value.color)} />
                    </div>
                    <CardTitle className="text-xl">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      {value.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
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
            className="grid grid-cols-2 lg:grid-cols-6 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                variants={staggerItemVariants}
                className="text-center"
              >
                <div className="text-3xl sm:text-4xl font-bold text-primary-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-600 font-medium text-sm">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
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
                Notre parcours
              </Badge>
            </motion.div>
            <motion.h2 
              variants={staggerItemVariants}
              className="text-3xl sm:text-4xl font-bold text-foreground mb-4"
            >
              Une histoire de{' '}
              <span className="text-gradient">croissance</span>
            </motion.h2>
            <motion.p 
              variants={staggerItemVariants}
              className="text-xl text-muted-600 max-w-2xl mx-auto"
            >
              De la startup à la scale-up, découvrez les étapes clés de notre développement.
            </motion.p>
          </motion.div>

          <motion.div
            variants={staggerContainerVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                variants={staggerItemVariants}
                className="flex items-start space-x-6 mb-8 last:mb-0"
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-primary-600" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-4 mb-2">
                    <Badge variant="secondary">{item.year}</Badge>
                    <h3 className="text-xl font-semibold text-foreground">{item.title}</h3>
                  </div>
                  <p className="text-muted-600">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
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
                Notre équipe
              </Badge>
            </motion.div>
            <motion.h2 
              variants={staggerItemVariants}
              className="text-3xl sm:text-4xl font-bold text-foreground mb-4"
            >
              Rencontrez notre{' '}
              <span className="text-gradient">équipe</span>
            </motion.h2>
            <motion.p 
              variants={staggerItemVariants}
              className="text-xl text-muted-600 max-w-2xl mx-auto"
            >
              Des experts passionnés qui travaillent chaque jour pour améliorer 
              votre expérience de mobilité électrique.
            </motion.p>
          </motion.div>

          <motion.div
            variants={staggerContainerVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                variants={staggerItemVariants}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <Card className="h-full text-center hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="w-24 h-24 bg-muted-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <User className="w-12 h-12 text-muted-500" />
                    </div>
                    <CardTitle className="text-lg">{member.name}</CardTitle>
                    <CardDescription className="font-medium text-primary-600">
                      {member.role}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-600 mb-4">
                      {member.bio}
                    </p>
                    <div className="flex justify-center space-x-2">
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <Linkedin className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <Twitter className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <Mail className="w-4 h-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Achievements Section */}
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
                Nos réalisations
              </Badge>
            </motion.div>
            <motion.h2 
              variants={staggerItemVariants}
              className="text-3xl sm:text-4xl font-bold text-foreground mb-4"
            >
              Des{' '}
              <span className="text-gradient">récompenses</span>{' '}
              qui nous honorent
            </motion.h2>
            <motion.p 
              variants={staggerItemVariants}
              className="text-xl text-muted-600 max-w-2xl mx-auto"
            >
              Notre engagement et notre innovation sont reconnus par l'industrie 
              et les institutions.
            </motion.p>
          </motion.div>

          <motion.div
            variants={staggerContainerVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                variants={staggerItemVariants}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <Card className="h-full text-center hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="w-16 h-16 bg-warning-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <achievement.icon className="w-8 h-8 text-warning-600" />
                    </div>
                    <CardTitle className="text-lg">{achievement.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-sm">
                      {achievement.description}
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
              Rejoignez notre mission
            </motion.h2>
            <motion.p 
              variants={staggerItemVariants}
              className="text-xl text-primary-100 mb-8"
            >
              Ensemble, construisons un avenir plus durable et une mobilité électrique 
              accessible à tous.
            </motion.p>
            <motion.div 
              variants={staggerItemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button size="lg" variant="secondary">
                Rejoindre la communauté
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

export default AboutPage
